import React from "react";
import { NavLink } from 'react-router-dom'; 
import CaseHome from "./CaseHome.js";
import BackToTop from "./BackToTop.js";
 
function Home(props) {

  return (
    <div>
        <div id="upper-home">
            <div className="frontpage">
              <h1 id="me">Hello! I'm Sascha</h1>
              <h1 id="designer">a <NavLink to="/about">UX/UI Designer</NavLink> that <NavLink to="/projects">Codes</NavLink>,</h1>
              <h1 id="welcome">Welcome to my portfolio!{/*  <span id="blinkis">|</span> */}</h1>
            </div> 
        </div>
       
       <div className="page-con">
            <CaseHome />
        </div>

    </div>
  )

}
 
export default Home;