import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Nav from '../Nav/Nav';


export default function Home() {
    return (
        <div className='home'>
            <div>
                <Nav />
                {/* <Link to='goals/Emotional'><div className='button dark-color'>Emotional</div></Link>
                <Link to='goals/Intellectual'><div className='button dark-color'>Intellectual</div></Link>
                <Link to='goals/Physical'><div className='button dark-color'>Physical</div></Link>
                <Link to='goals/Spiritual'><div className='button dark-color'>Spritual</div></Link>
                <Link to='goals/Financial'><div className='button dark-color'>Financial</div></Link> */}
            </div>
        </div>
    )
}