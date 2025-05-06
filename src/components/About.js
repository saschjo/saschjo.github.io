import React, { useState } from "react";
import me from './assets/DSC06868.jpg';
import Hello from './Hello.js';
 
function About(props) {

  const [funFactoid, setFunFactoid] = useState("")

  function funFact() {

    function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const factArray = ["I love karaoke", "I've been a scout since I was 8", "I drew a LOT of manga when I was little", "I wind down by reading Elden Ring lore", "I change my hair all the time", "I GM TTRPGs like Dungeons & Dragons", "I was an exchange student in Silicon Valley when I was 16", "I paint and draw a lot in my spare time", "I have a cat named Junior", "I first learned how to code on Stallet.se", "I'm allergic to chocolate"];

    const lastIndex = factArray.length - 1

    const randomNumber = randomIntFromInterval(0, lastIndex);

    console.log(factArray[randomNumber]);
    setFunFactoid(factArray[randomNumber]);
  }

  //Ser till att man hamnar högst upp på sidan även via framsidan
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-con">
        <div className="PageWrapper">
          <div className="about">
            <div className="about-left">
              <img src={me} alt="me"/>
              <p className="factoid">{ funFactoid }</p>
              <button className="fact-button" onClick={funFact}>Click here for a fun fact! 🎉</button>
            </div>
            <div className="about-right">
              <h1>About me</h1>
              <p><strong>I'm a passionate human-centered designer specializing in design systems and sustainable, future-proof solutions. With half a decade of experience as a UX/UI Engineer and a lifetime of creativity, I seamlessly bridge the gap between business goals, user and end-product.</strong></p>
              <h3>My approach</h3>
              <p>With a holistic, user-centered approach as my core, I employ UX strategy, design thinking, and an iterative workflow to achieve user needs and business goals. It's important for me to help create warm, safe environments where innovation excels through connection and trust. I excel in creative, fast-paced environments and pride myself on having a beginner's mindset and being a natural problem solver.</p>
              <h3>Design tools</h3>
              <p>I'm highly proficient in Figma, which is my tool of choice for building components and prototypes. I enjoy lo-fi prototyping by hand and illustrating storyboards and visuals to get stakeholders onboard. I'm passionate about team collaboration, often through leading workshops and design sprints.</p>
              <h3>Development experience</h3>
              <p>My toolkit includes HTML, CSS, JS, as well as experience with React.js, SASS, Node.js, p5.js, jQuery, PHP, MySQL, C#, Git, Dart, Flutter, Wordpress, and Webflow. I love creating with code – like this website, for example, which is built from scratch in React.js and SASS (no AI! ;))</p> 
              <h3>Outside of work</h3>
              <p>I enjoy getting creative any way I can! I love painting, working with clay, gaming, playing Dungeons and Dragons and spending time with friends. </p>
            </div>
          </div>
        </div>
      </div>
  )
}
 
export default About;