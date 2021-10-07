import React, { useState } from "react";
import me from './assets/me.jpg';
import Hello from './Hello.js';
 
function About(props) {

  const [funFactoid, setFunFactoid] = useState("")

  function funFact() {

    function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const factArray = ["I LOVE to sing karaoke", "I've been a scout since I was 8 :')", "I drew a LOT of manga when I was little", "I've spent approximately 100h on Dark Souls lore videos", "I've dyed my hair every color in the rainbow", "I love playing Dungeons & Dragons", "My favorite TV show is Flight of the Concords", "I prefer to read nonfiction", "My planner is my 7th horocrux", "I'm 1/8 Russian but I can only drink two beers", "My favorite food before I became a vegetarian was bouf tartar", "I've been to Japan and Korea and I want to go back NOW", "I was an exchange student in Silicon Valley when I was 16!", "I draw a lot in my spare time"];

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
                <p><strong>I'm a 26 year old designer and developer soon to receive my Bachelor of Science in Media Technology at the ICT, Media and design programme at Södertörn University. I’ve been freelancing in web and UX/UI development since late 2019, and worked with clients in fields ranging from environmental research to digital AGMs and parenting courses.</strong></p>
                <p>I'm interested in opportunities where I can combine my skills as a designer and developer to create great design solutions and make a differene, but I'm no stranger to pure design work either. I always bring a user centred focus with a holistic perspective to the table, while still remaining attuned to the business oriented goals of the client. What matters most to me is creating something that makes a positive change in people's lives. In my spare time, I enjoy playing videogames, drawing and coding exciting things – like this website, for instance!</p>
                <p><strong>If you want to see more of me, check out these links:</strong></p>
                <p> <a href={'http://instagram.com/amhjo.design'}>Instagram</a> <a href={'https://www.linkedin.com/in/anna-maria-hjorth-48bb327a/'}>LinkedIn</a> <a href={'https://github.com/amhjo/'}>GitHub</a> </p>
              </div>

              <div className="column-2">
                <img src={me} alt="me" />
               {/* <button onClick={funFact}>Click here for a ~ fun fact ~!</button>
                <p className="factoid">{ funFactoid }</p>*/}
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
 
export default About;