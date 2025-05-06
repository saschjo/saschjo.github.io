import React from "react";
import { NavLink } from 'react-router-dom'; 
import BackToTop from "./BackToTop.js";
 
function Home(props) {

  return (
    <div>
        <div id="upper-home">
            <div className="frontpage">
              <h1 id="me">Hello! I'm Sascha</h1>
              <h1 id="designer">a <NavLink to="/about">UI/UX Designer</NavLink> that <NavLink to="/projects">Codes</NavLink></h1>
              <h1 id="welcome">and specializes in Design Systems{/*  <span id="blinkis">|</span> */}</h1>
              <span id="caption">(and yes, I designed and developed this website with ❤️ in React)</span>
            </div> 
        </div>
      

    </div>
  )

}
 
export default Home;