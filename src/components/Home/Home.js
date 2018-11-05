import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Nav from '../Nav/Nav';


export default function Home() {
    return (
        <div className='home'>
            <div>
                <Nav />
                <setion className='landing-info'>
                    <h1>Life Tree Balance</h1>
                    <p>Life tree balance mission is to help individuals create a balanced, healthy, lifestyle by providing a tool to create and track SMART goals. Through these smart goals, you can plan a life that is fulfilling and growth driven.</p><br />
                    <p>At Life Tree Balance, we believe that the healthiest and happiest lifestyles are those which include every aspect of the human experience. We have provided the basic categories in which to create these goals.</p>
                </setion>
            </div>
        </div>
    )
}