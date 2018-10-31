import React, { Component } from 'react';

export default class GoalsDisplay extends Component {
    constructor() {
        super();
        this.state = {
            goal: '',
        }
    }

    //put handleEdit in here

    render() {
        const { goal } = this.props;
        return (
            <div className='favorites'>
                <h4>{goal}</h4>
            </div>
        )
    }
}