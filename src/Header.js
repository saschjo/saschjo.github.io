import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Header() {
    return (
    <div>
        <div className="top-border"></div>

        <div className="navigation">
        <Link to="/" id="website-title">anna-maria hjorth</Link><br></br>

        <div className="navigation-sub">
                                        
        <Link to="/" className="item">Projects</Link>
        <Link to="/about" className="item">About</Link>

        </div>
        </div>
    </div>
    )
}

export default Header;