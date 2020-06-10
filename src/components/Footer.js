import React from 'react';
import './Footer.css';


const Footer = () => 
{
    // Simple footer that can easily be expanded on
        return(
            <footer id="footer">
                 <div id = "links">
                    <a href="https://christroupe.github.io/streaming-demo/"> Home</a> |
                    <a href="/terms/"> Terms and Conditions</a> |
                    <a href="/privacy/"> Privacy Policy</a> |
                    <a href="/collection/"> Collection Statement</a> |
                    <a href="/help/"> Help</a> |
                    <a href="/manage/"> Manage Account</a>
                </div>

            </footer>
        );
}

export default Footer;