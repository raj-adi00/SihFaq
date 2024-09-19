import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        <header className='fixed w-full z-10 top-0'>
            <div className="container flex items-center justify-evenly">
                <h1 className="logo">JUSTICE LEAGUE</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
