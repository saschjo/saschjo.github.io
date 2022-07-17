import React from "react"
import BlueOrb from "./blueorb.js";
import CaseHome from "./CaseHome.js";
import BackToTop from "./BackToTop.js";
 
function Home(props) {

  return (
    <div>
        <BlueOrb />
        <div id="upper-home">

            <div className="welcome-window">
                <div className="frontpage">
                    <h1 id="me">Tjena! I'm Anna-Maria. I'm a...</h1>
                    <h1 id="designer">UX/UI Developer</h1>
                    <h1 id="developer">who loves to code</h1>
                    <h1 id="personality">and eat pasta carbonara</h1>
                    <h1 id="welcome">Welcome to my portfolio!{/*  <span id="blinkis">|</span> */}</h1>
                </div>
            </div>

            <div className="frontpage-links">
                <h1>Find me in other places</h1>
                <a href={'http://instagram.com/amhjo.design'}>Instagram <i class="fas fa-chevron-right"></i></a> <a href={'https://www.linkedin.com/in/anna-maria-hjorth-48bb327a/'}>LinkedIn <i class="fas fa-chevron-right"></i></a> <a href={'https://github.com/amhjo/'}>GitHub <i class="fas fa-chevron-right"></i></a>
            </div>
        </div>

        <div id="arrow">↓</div>
       
       <div className="page-con">
            <CaseHome />
        </div>

        <BackToTop />

    </div>
  )

}
 
export default Home;