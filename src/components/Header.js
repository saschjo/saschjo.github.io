import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from './assets/favicon.png';

function Header() {

    //State för att visa mobilmenyn
    const[show, setShow] = useState(false);

    return (
    
    <div>

        <div className="navigation">
            <NavLink to="/" id="website-title" onClick={()=>setShow(false)} > Sascha Hjorth <span id="blinkstar">  </span> </NavLink><br></br>

            <div className="navigation-sub">
                                            
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/projects" className="nav-item">Case Work</NavLink>
                <NavLink to="/about" className="nav-item">About</NavLink>
                { /* <NavLink to="/contact" className="nav-item">Contact</NavLink> */ }

            </div>

            <i class="fas fa-bars" style={{ color: show? '#001bb6' : '#fff' }} onClick={()=>setShow(!show)} ></i> {/* Gör tvärtemot vad än show har för värde */}

        </div>

        { //Mobile menue

            show ?

            <div className="mobileMenue">
                <NavLink to="/" className="item" onClick={()=>setShow(false)} >Home</NavLink>
                <NavLink to="/projects" className="item" onClick={()=>setShow(false)} >Portfolio</NavLink>
                <NavLink to="/about" className="item" onClick={()=>setShow(false)} >About me </NavLink>
            </div>

            :null
            
        }


    </div>
    )
}

export default Header;