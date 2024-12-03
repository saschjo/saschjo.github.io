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
          <img src={me} alt="me"/>
            <h1>About me</h1>
            <p><strong>I'm a human-centered designer specializing in crafting design systems and future-proof solutions, seamlessly bridging the gap between design and code.</strong></p>
            <p>Employing a holistic, user-centered approach, I leverage teamwork, design thinking, and agile workflows to achieve client goals. I excel in creative environments and pride myself on being a natural problem solver and team collaborator.</p>
            <p>I'm highly proficient in Figma, but am no stranger to other prototyping software or the Adobe Creative Suite. My toolkit includes HTML, CSS, JS, React.js, SASS, Node.js, p5.js, jQuery, PHP, MySQL, C#, Git, Dart, Flutter, Wordpress, and Webflow.</p> 
            <p>Outside of work, I enjoy getting creative any way I can, gaming, playing Dungeons and Dragons with my friends, and making things – like this website, crafted with React.js and SASS.</p>
          </div>
             {/*    <p className="factoid">{ funFactoid }</p>
                <button className="fact-button" onClick={funFact}>Click here for a fun fact! 🎉</button> */}
        </div>
      </div>
  )
}
 
export default About;