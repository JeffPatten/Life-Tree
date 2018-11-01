import React, { Component } from "react";
import CategoryDropdown from './CategoryDropdown';
import SubcategoryDropdown from './SubcategoryDropdown';
import Nav from '../Nav/Nav';
import axios from 'axios';


export default class AddSubcategory extends Component {
    constructor() {
        super();
        this.state = {
            category: [
                { title: 'Emotional', id: 0, selected: false, key: 'category', categoryId: 1 },
                { title: 'Intellectual', id: 1, selected: false, key: 'category', categoryId: 2 },
                { title: 'Physical', id: 2, selected: false, key: 'category', categoryId: 3 },
                { title: 'Spiritual', id: 3, selected: false, key: 'category', categoryId: 4 },
                { title: 'Financial', id: 4, selected: false, key: 'category', categoryId: 5 }
            ],
            subcategory: [],
            addSubcat: '',
            goal: ''
        }
    }

    componentDidUpdate(x ,prevState) {
        if (prevState.category !== this.state.category) {
            this.getSubcategories()
        }
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        });
    }

    getSubcategories = () => {
        let category = (this.state.category.find(
            cat => {
                return cat.selected
            }
        ).title)
        axios.get(`/goals/subcategory/${category}`)
            .then(res => {
                console.log(res.data)
                this.setState({subcategory: res.data})
            })

    };


    //Create a drop down meanu that will set the value of category to the category ID. Another to list the already created subcategories and allow custom. on clicking custom it will open an input 
    // <select onChange=>
    //     <option value='1'>Emotional</option>
    // </select>

    render() {
        return (
            <div>
                <Nav />
                <div>
                    <CategoryDropdown title='Select Category' list={this.state.category} resetThenSet={this.resetThenSet} getSubcategories={this.getSubcategories} componentUpdate={this.componentDidUpdate}/>
                    <SubcategoryDropdown title='Select Subcategory' list={this.state.subcategory} resetThenSet={this.resetThenSet} />
                    <textarea placeholder='Add goal - Limit 200 characters' value={this.state.goal} ref='goalInput' className='goalInput'
                        onChange={(e) => this.setState({ goal: e.target.value })} cols={60} rows={15} />
                    <div>add 'Submit' button</div>
                </div>
            </div >
        );
    }
}