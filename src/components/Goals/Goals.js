import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import GoalsDisplay from '../GoalsDisplay/GoalsDisplay';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import AddGoal from '../AddGoal/AddGoal';
import axios from 'axios';

export default class Goals extends Component {
    constructor() {
        super();
        this.state = {
            goals: []
        }
    }

    componentDidMount() {
        this.getGoals()
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getGoals()
        }
    }

    getGoals = () => {
        axios.get(`/goals/${this.props.match.params.category}`)
            .then((res) => {
                console.log(res.data[0].goals)
                this.setState({ goals: res.data[0].goals });
            })
    }

    renderGoals = () => {
        let subCat = [];
        this.state.goals.map((goals) => {
            // console.log('here', goals)
            if (subCat.indexOf(goals.subcategory_name) === -1) {
                subCat.push(goals.subcategory_name)
            }
        })
        // console.log(subCat)
        let subCatGoal = subCat.map((subcategory) => {
            return (
                <div>
                    <h2>{subcategory}</h2>
                    {
                        this.state.goals.filter(goals => {
                            return goals.subcategory_name === subcategory
                        }).map(goal => {
                            return (
                                <GoalsDisplay goal={goal.goal} />
                            )
                        })
                    }
                </div>
            )
        })
        return subCatGoal;
    }

    render() {
        console.log(this.props.match.params.category);
        return (
            <div>
                <Nav />
                <h1>{this.props.match.params.category} Goals</h1>
                <section className='subcategory'>
                    {
                        this.renderGoals()
                    }
                </section>
                <Link to='/newgoal'><div className='button new-goal'>+</div></Link>
            </div>
        )
    }
}
