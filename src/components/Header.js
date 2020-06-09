import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='header'> 
            <nav className="zone sticky">
                <ul className="main-nav">
                    <li className = "push"> DEMO Streaming </li>
                    <li ><a href="www.google.com">Contact</a></li>
                    <li > <a href="www.google.com"> Start your free trial </a> </li>
                </ul>

                <ul className="current-nav">
                    <div className ="screen"> Popular titles </div>
                </ul>
            </nav>
        </div> 
    );
}

export default Header; 