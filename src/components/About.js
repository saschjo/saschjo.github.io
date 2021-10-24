import React, { useState } from "react";
import me from './assets/me.jpg';
import Hello from './Hello.js';
 
function About(props) {

  const [funFactoid, setFunFactoid] = useState("")

  function funFact() {

    function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const factArray = ["I LOVE to sing karaoke", "I've been a scout since I was 8 :')", "I drew a LOT of manga when I was little", "I've spent approximately 100h on Dark Souls lore videos", "I change my hair all the time", "I love playing Dungeons & Dragons", "My favorite TV show is Flight of the Concords or Arrested Development", "I prefer to read nonfiction", "My planner is my 7th horocrux", "I'm 1/8 Russian but I can only drink two beers", "I'm vegetarian, but my favorite food is bouf tartar", "I've been to Japan and Korea and I want to go back NOW", "I was an exchange student in Silicon Valley when I was 16!", "I paint and draw a lot in my spare time", "I have a main coon named Junior", "I was a minor celebrity on Habbo Hotel", "I'm allergic to chocolate"];

    const lastIndex = factArray.length - 1

    const randomNumber = randomIntFromInterval(0, lastIndex);

    console.log(factArray[randomNumber]);
    setFunFactoid(factArray[randomNumber]);
  }

  return (
    <div className="page-con">
        <Hello 
        headlineContent="About me"
        />
        <div className="PageWrapper">

          <div className="about">

            <div className="row-about">
              <div className="column-1">
                <p><strong>Hi! I'm Anna-Maria. I'm a 26 year old designer and developer soon to receive my Bachelor of Science in Media Technology at the ICT, Media and design program at Södertörn University. I’ve been freelancing as a digital designer since late 2019, and worked in development roles for clients in fields ranging from environmental research to digital AGMs and parenting courses.</strong></p>
                <p>I'm interested in opportunities where I can combine my skills as a designer and developer to create great, sustainable design solutions and make a difference. I bring a user centred focus with a holistic perspective to the table, while still remaining attuned to the business oriented goals of the client. What matters most to me is creating something great that makes a positive change in people's lives, and makes the world a better place.</p> 
                <p>In my spare time, I enjoy playing videogames, TTRPGs, drawing and programming – like this website, for instance, which is made with React.js and SASS.</p>
                <br></br>
                <p class="see-more">If you want to see more of me, check out these links:</p>
                <p> <a href={'http://instagram.com/amhjo.design'}>Instagram</a> <a href={'https://www.linkedin.com/in/anna-maria-hjorth-48bb327a/'}>LinkedIn</a> <a href={'https://github.com/amhjo/'}>GitHub</a> </p>
              </div>

              <div className="column-2">
                <img src={me} alt="me" />
                <div className="column-2-factcon">
                  <button onClick={funFact}>Click here for a fun fact!</button>
                  <p className="factoid">{ funFactoid }</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
 
export default About;