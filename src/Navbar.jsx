import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        <header className='fixed w-full z-10 top-0'>
            <div className="container flex items-center justify-evenly">
                <h1 className="logo">JUSTICE LEAGUE</h1>
                <nav>
                    <ul className='flex gap-4 flex-wrap'>
                        <Link to="/">Home</Link>
                        <Link to="/contacts">Contact Us</Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
