import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css'
import Logo from "../public/logo2.svg";

const Navbar = () => {
    return (
        <header className='fixed w-full z-10 top-0 sm:h-16 h-14 flex items-center'>
            <div className="container flex items-center justify-around px-2">
                <h1 className="logo min-[520px]:text-2xl text-lg">
                    <img src= {Logo} height={28} width={28}/>&nbsp;JUSTICE LEAGUE
                </h1>
                <nav>
                    <ul className='flex justify-between min-[520px]:gap-11 lg:gap-20 gap-4 text-base min-[520px]:text-xl'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contacts">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
