import React, { useState } from "react";
import me from './assets/me.jpg';
import Hello from './Hello.js';
 
function About(props) {

  const [funFactoid, setFunFactoid] = useState("")

  function funFact() {

    function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const factArray = ["I love karaoke", "I've been a scout since I was 8", "I drew a LOT of manga when I was little", "I've spent over 100h on video game lore videos", "I change my hair all the time", "I love playing RPGs like Dungeons & Dragons and Witcher", "My favorite TV show is Flight of the Concords", "I prefer to read nonfiction.", "My planner is my 7th horocrux", "I'm 1/8 Russian but I can only drink two beers", "I was an exchange student in Silicon Valley when I was 16", "I paint and draw a lot in my spare time", "I have a cat named Junior", "I first learned how to code on Stallet.se", "I'm allergic to chocolate"];

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
                <p><strong>Hello there! I'm Anna-Maria. I'm a 26 year old passionate UX/UI designer and developer. I've been freelancing since 2019 and hold a Bachelor of Science in Media Technology/HCI (2022). Combining my skills in UX/UI design and web development, I'm able to move freely between planning with the team, creating a design and implementing it through code.</strong></p>
                <p>I have experience developing using HTML, CSS, JS, React.js, SASS, Node.js, p5.js, jQuery, PHP, MySQL, C#, Git, Dart and Flutter, as well as Wordpress and Webflow. I comfortable use and navigate Figma, Adobe XD, and InVision Studio, as well as the Adobe Creative Suite. I work with a holistic and user centered mindset to achieve the client's goals through team work, design thinking and agile workflows. I enjoy team work, creative work environments and am a natural problem solver.</p>
                <p>In my spare time, I enjoy spending time with friends, playing video games, Dungeons and Dragons, painting and programming – like this website, for instance, which is made with React.js and SASS.</p>
                <br></br>
                <p class="see-more">If you want to see more of me, check out these links:</p>
                <p> <a href={'https://www.linkedin.com/in/anna-maria-hjorth-48bb327a/'}>LinkedIn</a> <a href={'http://instagram.com/amhjo.design'}>Design Instagram</a> <a href={'https://github.com/amhjo/'}>GitHub</a> </p>
              </div>

              <div className="column-2">
                <img src={me} alt="me" />
                <div className="column-2-factcon">
                  <button onClick={funFact}>Click here for a fun fact! 🎉</button>
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