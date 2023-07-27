import React from 'react'
import './nav.css';
import Macbeaselogo from "../assets/Macbeaselogo.png";

export default function Nav() {
    return (
        <div  >
            <div className='nav'>
                <img className='nav-logo' src={Macbeaselogo} alt='logo' />
                <span className='nav-title '>Macbease</span>
                <button className='nav-btn , btn1' type='button'>Home</button>
                <button className='nav-btn , btn2' type='button'>Pages</button>
                <button className='nav-btn , btn3' type='button'>About us</button>
                <button className='nav-btn , btn4' type='button'>Contact us</button>
                <button className='nav-btn-signin' type='button'>Sign in</button>
            </div>
        </div>
    )
}
