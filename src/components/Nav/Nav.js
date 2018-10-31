import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className='Navbar'>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/goals/Emotional'><button>Emotional</button></Link>
                <Link to='/goals/Intellectual'><button>Intellectual</button></Link>
                <Link to='/goals/Physical'><button>Physical</button></Link>
                <Link to='/goals/Spiritual'><button>Spiritual</button></Link>
                <Link to='/goals/Financial'><button>Financial</button></Link>
                {/* <Link to='/calendar'><button>Calendar</button></Link> */}
                <Link to='/smart'><button>Smart Goals</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}