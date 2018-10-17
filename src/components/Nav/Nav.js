import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav>
            <Link to='./home'><a>Home</a></Link>
            <Link to='./emotional'><a>Emotional</a></Link>
            <Link to='./intellectual'><a>Intellectual</a></Link>
            <Link to='./physical'><a>Physical</a></Link>
            <Link to='./spiritual'><a>Spiritual</a></Link>
            <Link to='./financial'><a>Financial</a></Link>
            <Link to='./calendar'><a>Calendar</a></Link>
            <Link to='./'><a>Logout</a></Link>
        </nav>
    )
}