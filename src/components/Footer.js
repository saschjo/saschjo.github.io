import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <span className="footer-con">
                <div className="contact-details">
                    <h4>Find me in other places 👀</h4>
                    <a href={'https://www.linkedin.com/in/sascha-hjorth-48bb327a/'}>LinkedIn</a>
                    <a href={'https://www.instagram.com/hjo.design/'}>Instagram</a>
                    <a href={'https://github.com/saschjo'}>GitHub</a>
                </div>
                <div className="contact-details">
                    <h4>Contact me directly!👋</h4>
                    <a href={'mailto:saschjo@proton.me'}>Send me an e-mail!</a>
                </div>
            </span>
        </div>
    )
}

export default Footer;