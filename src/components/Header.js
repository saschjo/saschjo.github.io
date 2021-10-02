import { red } from '@jest/types/node_modules/chalk';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Header() {

    //State för att visa mobilmenyn
    const[show, setShow] = useState(false);

    return (
    
    <div>

        <div className="navigation">
            <Link to="/" id="website-title" onClick={()=>setShow(false)} > <span id="blinkstar">✧</span> Anna-Maria Hjorth <span id="blinkstar">✧</span> </Link><br></br>

            <div className="navigation-sub">
                                            
            <Link to="/projects" className="item">Case / Projects</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>

            <i class="fas fa-bars" style={{ color: show? 'rgb(250, 219, 81)' : 'rgb(250, 250, 250)' }} onClick={()=>setShow(!show)} ></i> {/* Gör tvärtemot vad än show har för värde */}

            </div>

        </div>

        { //Mobile menue

            show ?

            <div className="mobileMenue">
                <Link to="/projects" className="item" onClick={()=>setShow(false)} >Case / Projects</Link>
                <Link to="/about" className="item" onClick={()=>setShow(false)} >About</Link>
                <Link to="/contact" className="item" onClick={()=>setShow(false)} >Contact</Link>
            </div>

            :null
        }


    </div>
    )
}

export default Header;