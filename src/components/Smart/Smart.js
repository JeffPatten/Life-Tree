import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class Smart extends Component {
    render(){
    return (
        <div className='smart-goals'>
            <Nav/>
            <h1>S.M.A.R.T Goals</h1>
            <div className='why-smart'>
                <h3>Why Smart Goals</h3>
                <p></p>
            </div>
            <div>
                <h3>Specific</h3>
                <p>A specific goal is a goal that has a bit of depth to it. It isn’t saying “I want to go to culinary school”, it’s saying “I want to graduate from The Culinary Institute of America in their baking program”. Specificity is important so that you know exactly what needs to be done in order for the goal to be deemed a success.</p>
            </div>
            <div>
                <h3>Measurable</h3>
                <p>A measurable goal is one that is based on some sort of metric. Instead of saying “I want to have good knife skills”, a measurable goal would be: “I want to be able to finely and evenly dice 5 onions per minute.”</p>
            </div>
            <div>
                <h3>Attainable</h3>
                <p>A goal that is attainable is a goal that you can accomplish. People have a tendency to get over-zealous with their goals when they are excited and passionate. However, setting goals that you will not be able to accomplish doesn’t make sense for anyone. It’s more important to be realistic than too aspirational here. Break down larger goals into pieces if you need to, in order to accomplish them. For example: if your big goal is to open a restaurant, but you aren’t very good at cooking yet, a smaller and more attainable goal would be to learn to cook well, or even learn to cook a few things well. As you attain certain goals and get better at something, new goals may become attainable.</p>
            </div><div>
                <h3>Relevant</h3>
                <p>Relevant goals are goals that help you progress to your dream. If you are trying to reach culinary stardom at any cost, it doesn’t make sense to waste your precious time learning to be an awesome mechanic. Sure, it might be super useful to you personally, but in this case, it doesn’t help you reach your dream or goals.</p>
            </div><div>
                <h3>Time-bound</h3>
                <p>The best goals are also time bound. Adding this constraint is important so that you are able to keep yourself accountable. Setting goals is sort of like creating a to-do list. You have on your list what you want to do today, what you want to do tomorrow, etc. With goals you may have daily goals, monthly goals, yearly goals, etc. Be very specific with the dates you choose, and make sure that you would also be able to complete the goal without unreasonable stress.</p>
            </div>
        </div>
    )
}}