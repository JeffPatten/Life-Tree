import React, { Component } from 'react';

export default class GoalsDisplay extends Component {
    constructor() {
        super();
        this.state = {
            category: '',
            subcategory: '',
            goal: '',
            id: 0
        }
    }


    //put handleEdit in here

    render() {
        const { goal, goalId, handleDelete } = this.props;
        return (
            <div className='favorites'>
                <h4>{goal}</h4>
                
                    <button>Edit</button>
                    <button onClick={() => handleDelete(goalId)}>Delete</button>
                
                {console.log('Rendered goal:', goal)}
            </div>
        )
    }
}