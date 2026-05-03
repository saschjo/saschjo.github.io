import React from "react";
import { NavLink } from 'react-router-dom'; 
import BackToTop from "./BackToTop.js";
import Orb from './assets/favicon.png';
 
function Home(props) {

  return (
    <div>
        <div id="upper-home">
            <div className="frontpage">
              <h1 id="me">schjo</h1>

              {/* 
              <h1 id="designer">I'm a <NavLink to="/about">Product Lead</NavLink>, <NavLink to="/projects">UX Engineer</NavLink></h1>
              <h1 id="welcome">and Design System specialist{/*  <span id="blinkis">|</span> 

               <span id="caption">(and yes, I designed and developed this website with ❤️ in React)</span>
              
              */}
             
            </div> 
        </div>
      

    </div>
  )

}
 
export default Home;