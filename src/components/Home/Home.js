import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <img src='' alt='Vitruvian Man by Davinci' />
            <div>
                <section className='top-left'>
                    <Link to='./emotional'><h1>Emotional</h1></Link>
                </section>
                <section className='top-right'>
                    <Link to='./intellectual'><h1>Intellectual</h1></Link>
                </section>
                <section className='left'>
                    <Link to='./physical'><h1>Physical</h1></Link>
                </section>
                <section className='right'>
                    <Link to='./spiritual'><h1>Spritual</h1></Link>
                </section>
                <section className='bottom'>
                    <Link to='./financial'><h1>Financial</h1></Link>
                </section>
            </div>
        </div>
    )
}