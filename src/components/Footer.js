import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
    return (
        <div className="footer">
            <span className="footer-con">
                <p>© Anna-Maria Hjorth 2021</p>
                <p>tjenixen@amhjo.com</p>
                <p><a href={'https://www.instagram.com/amhjo.design/'}>Instagram</a> – <a href={'https://www.instagram.com/amhjo.design/'}>GitHub</a> – <a href={'https://www.instagram.com/amhjo.design/'}>LinkedIn</a></p>
            </span>
        </div>
    )
}

export default Footer;