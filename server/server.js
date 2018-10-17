const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const axios = require('axios');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    SECRET
} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('Database connected');
    app.set('db', db);
});

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.get('/auth/callback', async (req, res) => {
    //get code from req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    // post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
    let { email, picture, sub, name } = userRes.data;
    //check if that user already exists in our db
    const db = app.get('db');
    let foundCustomer = await db.find_customer([sub]);
    //   console.log('test')
    //this is checking if the statement is truthy or falsey
    if (foundCustomer[0]) {
        // found user existing in the db, put returned user on session
        req.session.user = foundCustomer[0];
    } else {
        // no user was found by that google id. create new user in db
        let createdCust = await db.create_customer([name, sub, picture, email])
        req.session.user = createdCust[0];
    }
    res.redirect('/#/home') 
})



app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))