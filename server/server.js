const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const axios = require('axios');
const session = require('express-session');
const controller = require('./controller');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    SECRET,
    REDIRECT_URL,
    AUTH_PROTOCOL,
    // EMAIL_USER,
    // EMAIL_PASSWORD
} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('Database connected');
    app.set('db', db);
});

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}));

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: EMAIL_USER,
//         pass: EMAIL_PASSWORD
//     }
// });

// const mailOptions = {
//     from: 'treelifebalance@gmail.com',
//     to: ,
//     subject: ,
//     text:
// }



// This allows you to bypass the login each time while in development
let authBypass = async (req, res, next) => {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV) {
        const db = req.app.get('db');
        let user = await db.session_user(1);
        console.log(user)
        req.session.user = user[0];
        next();
    } else {
        next()
    }
}
app.use(authBypass);

app.get('/goals/:category', controller.getGoals);
app.get('/goals/subcategory/:category', controller.getSubcategory);
app.post('/goals', controller.postGoal);
// axios.post('/goals/new/:category', controller.postGoal);


app.get('/auth/callback', async (req, res) => {
    //auth0 sending code in req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${AUTH_PROTOCOL}://${req.headers.host}/auth/callback`
    }
    //exchange code for token. token is on resWithToken.data.access_token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

    // exchange token for user data
    let resWithData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    console.log(resWithData);
    let { email, sub, name, phone } = resWithData.data;
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
        let createdCust = await db.create_customer([name, sub, email, phone])
        req.session.user = createdCust[0];
    }
    res.redirect('/#/home') 
})

app.get('/api/user-data', authBypass, (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('Please log in');
    }
})

app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect(`${REDIRECT_URL}`)
})

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))