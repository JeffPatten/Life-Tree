import React, { Component } from 'react';


export default class Login extends Component {

    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

        //window.location.origin -> fancy way of saying http://localhost:3000. this redirects back to the front end and then bumps it to the server through the proxy
        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

        //window.location is where your browser is looking. this is redirecting the browser to auth0
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }

    render() {
        return (
            <div className='App'>
                <img src='' alt='Tree of Life' />
                <div className='login'>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}