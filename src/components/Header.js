import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 

function Header() {

    //State för att visa mobilmenyn
    const[show, setShow] = useState(false);

    return (
    
    <div>

        <div className="navigation">
            <NavLink to="/" id="website-title" onClick={()=>setShow(false)} > Anna-Maria Hjorth <span id="blinkstar">✧</span> </NavLink><br></br>

            <div className="navigation-sub">
                                            
            <NavLink to="/projects" className="item">Portfolio</NavLink>
            <NavLink to="/about" className="item">About me</NavLink>
            <NavLink to="/contact" className="item">Contact</NavLink>

            <i class="fas fa-bars" style={{ color: show? 'rgb(250, 219, 81)' : 'rgb(250, 250, 250)' }} onClick={()=>setShow(!show)} ></i> {/* Gör tvärtemot vad än show har för värde */}

            </div>

        </div>

        <div className="spacing"></div>

        { //Mobile menue

            show ?

            <div className="mobileMenue">
                <NavLink to="/projects" className="item" onClick={()=>setShow(false)} >Portfolio</NavLink>
                <NavLink to="/about" className="item" onClick={()=>setShow(false)} >About me </NavLink>
                <NavLink to="/contact" className="item" onClick={()=>setShow(false)} >Contact</NavLink>
            </div>

            :null
            
        }


    </div>
    )
}

export default Header;