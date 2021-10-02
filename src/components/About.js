import React, { useState } from "react";
import me from './assets/me.jpg';
import Hello from './Hello.js';
 
function About(props) {

  const [funFactoid, setFunFactoid] = useState("")

  function funFact() {

    function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const factArray = ["I became a vegetarian in the spring of 2021", "My favorite AW activity is karaoke", "I've been a scout since 2004", "I drew a lot of manga when I was little", "My favorite programming language is JS, but I think C# is easier", "I've dyed my hair every color in the rainbow", "I love playing Dungeons & Dragons and I DM a lot of campaigns", "My favorite TV show is Arrested Development or Flight of the Concords", "I prefer nonfictional over fictional literature", "My entire apartment is littred with plants", "I would probably die without my planner", "I'm 1/8 Russian but I can only drink two beers", "My favorite food before I became a vegetarian was bouf tartar", "I've been to Japan and Korea", "I took one year of high school in Silicon Valley when I was 16"];

    const lastIndex = factArray.length - 1

    const randomNumber = randomIntFromInterval(0, lastIndex);

    console.log(factArray[randomNumber]);
    setFunFactoid(factArray[randomNumber]);
  }

  return (
<div>
    <Hello 
    headlineContent="About me"
    />
    <div className="PageWrapper">

      <div className="about">

        <div className="row-about">
          <div className="column-1">
            <p><strong>I'm a 26 year old UI/UX designer and developer soon to receive my Bachelor of Science in Media Technology at the ICT, Media and design programme at Södertörn University. I’ve been freelancing since my second semester and worked with clients in fields ranging from environmental research to digital AGMs and parenting courses.</strong></p>
            <p>I'm interested in opportunities where I can combine my skills as a UI/UX designer and developer to create great design solutions, grow my knowledge and contribute to a better world. I’m a problem solver and analytical by nature, and I love learning new things. As a designer, I always bring a user centred focus with a holistic perspective to the table, while still remaining attuned to the business oriented goals of the client. I’ve been a scout since 2004 and scout leader since 2015, and flourish in team work environments.</p>
            <p>In my spare time, I enjoy painting, singing, playing video games, and cozying up with my partner Jason and our cat Junior.</p>

            {/*<button onClick={funFact}>Click me for a fun fact!</button>
            <p>{ funFactoid }</p>*/}

          </div>

          <div className="column-2">
            <img src={me} alt="me" />
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
 
export default About;