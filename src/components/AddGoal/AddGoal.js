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
                { category: 'Emotional', index: 0, selected: false, key: 'category', categoryId: 1 },
                { category: 'Intellectual', index: 1, selected: false, key: 'category', categoryId: 2 },
                { category: 'Physical', index: 2, selected: false, key: 'category', categoryId: 3 },
                { category: 'Spiritual', index: 3, selected: false, key: 'category', categoryId: 4 },
                { category: 'Financial', index: 4, selected: false, key: 'category', categoryId: 5 }
            ],
            subcategory: [],
            addSubcat: '',
            goal: '',
            category_id: 0,
            subcategory_id: 0
        }
    }

    componentDidUpdate(x, prevState) {
        if (prevState.category !== this.state.category) {
            this.getSubcategories()
        }
    }

    resetThenSet = (item) => {
        let { index, key, id, category_id } = item;
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => item.selected = false);
        temp[index].selected = true;
        this.setState({
            [key]: temp,
            category_id: category_id || 0,
            subcategory_id: id || 0
        });
    }


    getSubcategories = () => {
        let category = (this.state.category.find(
            cat => {
                return cat.selected
            }
        ).category)
        axios.get(`/goals/subcategory/${category}`)
            .then(res => {
                console.log('HERE:', res.data)
                let newSubCat = res.data.map(
                    (object, index) => {
                        object.key = 'subcategory';
                        object.selected = false;
                        object.index = index;
                        return object
                    }
                )
                this.setState({ subcategory: newSubCat });
            })
    };

    render() {

        return (
            <div>
                <Nav />
                <div>
                    <CategoryDropdown category='Select Category' list={this.state.category} resetThenSet={this.resetThenSet} getSubcategories={this.getSubcategories} />
                    <SubcategoryDropdown category='Select Subcategory' list={this.state.subcategory} resetThenSet={this.resetThenSet} />
                    <textarea placeholder='Add goal - Limit 200 characters' value={this.state.goal} ref='goalInput' className='goalInput'
                        onChange={(e) => this.setState({ goal: e.target.value })} cols={55} rows={10} maxLength={200}/>
                    <button>Submit</button>
                </div>
            </div >
        );
    }
}