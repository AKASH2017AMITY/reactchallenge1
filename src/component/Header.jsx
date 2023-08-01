import React from 'react'
import logo from './images/logo.png';
import "./header.css";

function Header() {
    return (
        <div className='header'>
            <div className="left">
                <img id="image"src={logo} alt="logo" />
            </div>
            <div className="middle">
                <ul className="mid">
                    <li>menu</li>
                    <li>location</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="right">
                <button className='btn'>Login</button>
            </div>

        </div>
    )
}

export default Header