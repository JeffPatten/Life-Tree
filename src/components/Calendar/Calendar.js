import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            subcatergory: '',
            goal: '',
            complete: false
        }
    }


    render() {
        return(
            <div>
                <Nav />
            </div>
        )
    }
}