import React, { Component } from 'react';

export default class GoalsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            subcategory: '',
            goal: this.props.goal,
            id: 0,
            edit: false
        }
    }

    render() {
        const { goal, goalId, handleDelete, handleEdit } = this.props;     

    return (
            <div className = 'favorites' >
            <h4>{goal}</h4>
                {this.state.edit&&
                <div id="editGoalInput">
                    <input size='30' maxlength={200} value={this.state.goal} onChange={e => this.setState({ goal: e.target.value })}></input>
                    <button onClick={() => {handleEdit(goalId, this.state.goal); this.setState({edit: false})}}>Submit</button>
                </div>}
                
            <button onClick={() => this.setState({edit: true})} >Edit</button>
            <button onClick={() => handleDelete(goalId)}>Delete</button>

                { console.log('Rendered goal:', goal)}
            </div >
        )
    }
}
