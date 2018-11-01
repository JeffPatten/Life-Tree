import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        this.pullQuote()
    }

    pullQuote() {
        axios.get('https://favqs.com/api/qotd')
            .then((res) => {
                const { body, author } = res.data.quote;
                this.setState({ quote: body, author: author })
            })
    }

    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }

    render() {
        return (
            <div className='landing-page'>
                <div className='header'></div>
                <div className='login'>
                    <button onClick={this.login}>Login</button>
                </div>
                <div className='displayed-quote'>
                    <h2>"{this.state.quote}" - {this.state.author}</h2>
                </div>
            </div>
        )
    }
}