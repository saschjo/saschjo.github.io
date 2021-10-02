import React from "react";
import FullImage from "./CaseCmpnts.js";
import rav from './assets/swedishanimals/rav.gif';
import sketches from './assets/swedishanimals/sketches.png';
import music_and_art from './assets/swedishanimals/music_and_art.png';
import first_fox from './assets/swedishanimals/first_fox.png';
import ui_ux from './assets/swedishanimals/ui_ux.gif';
import ui_ux_sketch from './assets/swedishanimals/kp-sketch.png';
import kp_moodboard from './assets/swedishanimals/moodboard-kp.png';
import bjorn from './assets/swedishanimals/bjorn.gif';
import BackToTop from "./BackToTop.js";


 
function SwAnimalsContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <FullImage 
      image={rav}
      caption=""
      />
      
      <div className="visit-case-subject">
        <a href={'http://mi.sh.se/~19anhj/DIK/Slutprojekt%20Kreativ%20Programmering%202/'}>Experience Codimals here</a>
      </div>
      

      <div className="case-text">
        <h3>Introduction</h3>
        <p>Codimals was conceived during the course Creative Programming (7,5hp). We worked in pairs to program different solutions over a one month period, where we were given two weeks to complete our final project.</p>
        <p>I worked with my friend Simon Karlsson on this project. We decided early on that we wanted to create an interactive experience with dynamic sound, graphics and text, to challenge ourselves into learning new skills in JavaScript.</p>
        
        <h3>Project goals</h3>
        <p>In this project, we were free to create whatever we wanted on the condition that it had to be on the theme of sustainability and the environment, and implement the visually creative JavaScript library p5.js. We had to deliver the interactive experience within two weeks, as well as a workbook detailing our creative process and motivations.</p>
      
      </div>

      <FullImage 
      image={kp_moodboard}
      caption="Our moodboard for Codimals, drawing inspiration from geometry, textured illustrations and primary colors."
      />

      <div className="case-text">
        <h3>Design methodology and ideation</h3>
        <h4>Design thinking</h4>
        <p>We decided to work through with design thinking to build connection and empathy with the users. As this was during lockdown, we were unable to connect with children for research and testing, however as we’d both worked a lot with children previously, we were able to channel our experiences into the project for later user testing.</p>
        <h4>Footstorming, sketching and brainstorms</h4>
        <p>We began the project by footstorming. We explored shops in a nearby mall, especially the toy- and bookstore. Exploring in this way helped us open our creative space, and gain access to new impressions and ideas. </p>
        <p>We purchased a notebook to mark down ideas, sketches and thoughts. Throughout the ideation stage, we conducted brainstorm sessions where we mixed verbal discussions with rough sketches, drawings and improvised music to get a feel for the project’s ideal direction. This resulted in several lo-fi sketches as well as a moodboard.</p>
        <h4>Ideation iteration</h4>
        <p>We were inspired by sticker albums in the toy store to create something with storybook animals. One early idea was kit bashing an interactive experience through visualising an anthropomorphised plush toy we’d found in a toy store on screen and allow the user to interact with it. However, we had a hard time fitting showcasing this remotely, and decided to forego it for other ideas.</p>
        <h4>Final direction</h4>
        <p>We decided to create an evocative experience to teach kids about the Swedish ecosystem through animals of different sizes, and due to the time limitations limit the scope of the project to three animals. Our vision was for Codimals to be displayed on an interactive screen at a museum such as The Swedish Museum of Natural History. We were inspired by children’s books, geometry and primary colours.</p>
      </div>

      <FullImage 
      image={sketches}
      caption="Lofi sketches and code ideas (left), as well as our first placeholder prototype (right)."
      />

      <FullImage 
      image={first_fox}
      caption="An early development version of Codimals, trying out the sizes of the animals."
      />

      <div className="case-text">
        <h3>Designing an experience</h3>
        <h4>Vision and constraints</h4>
        <p>We decided to create an experience where the user would switch between different animals in a loop paired with nostalgic music in order to learn more about them. To test this, we drew lo-fi wireframe sketches and created digital lo-fi prototypes straight in p5.js to see if our plan was viable within the scope of our programming knowledge and the library’s capabilities. We discovered we had to add some functionality, and added jQuery and p5.play to our program.</p>
        <h4>Work methodology</h4>
        <p>To deliver our experience, we decided to work in a way inspired by Agile methodology and Scrum-like sprints, where we broke down our project into individual pieces to be completed within a set timeframe. This way, we could modularise the project and fit the pieces together without having to work on the entire concept all at once.</p>
        <h4>Problem prevention</h4>
        <p>We produced the illustrations, animations and music before producing much of the program’s code because we knew these assets would take a long time, and that the potential of code issues appearing at inconvenient times could prove arduous for us. We wanted to make sure we’d have enough time to focus on those without sacrificing the quality of our visuals and music.</p>
        <h4>Problem handling</h4>
        <p>We ran into a few problems while coding; most notably, we spent two days trying to solve and issue of passing values from local and global variables through different documents. When we eventually solved it, the rest of the project was done in a flash. Although it was frustrating having  to search for solutions and not move forward for so long, it paid off to have created the assets beforehand, as we could spend more time on fixing issues in our code as a result.</p>
      </div>

      <FullImage 
      image={music_and_art}
      caption="Simon and me working on the music and illustrations"
      />


      <div className="case-text">
        <h3>Music and illustration</h3>
        <p>We were very inspired by TV programs from our childhood. We wanted to invoke a feeling of nostalgia, and designed music to fit this, composed and performed by Simon in Logic X Pro. For the same reason, we designed illustrations of the animals to be more akin to those found in children’s books rather than the geometrical shapes we’d first envisioned. These were then illustrated by me in Procreate for the iPad, and edited in Adobe Photoshop. The actual animations are done live frame-by-frame through the p5.play library.</p>
      </div>

      <FullImage 
      image={ui_ux_sketch}
      caption="A digital prototype made in Photoshop to explore ideas for the user interface"
      />

      <FullImage 
      image={ui_ux}
      caption="The finished project, showcasing the fully interactable UI"
      />

      <div className="case-text">
        <h3>UX and UI</h3>
        <h4>UI metaphors and UX ease</h4>
        <p>I came up with the UI direction we decided to work with. The idea was to mimic bookmarks folding out onto a page of a picture book, utilising bright colors and paper textures. The monotype font was chosen to offset the softness of the illustrations, and create a pleasing contrast, as well as being legible on top of the paper textures.</p>
        <p>When entering the site, the user is instructed to press A and D to switch between different animals, however in a display context the user would be able to press arrows on the left and right instead, or swipe. The Info button presents different information for each animal with a hint of magic realism added to spur children’s fantasies. The monotype font was chosen to offset the softness of the illustrations, and create a pleasing contrast, as well as being legible on top of the paper textures. </p>
        <h4>Future improvements</h4>
        <p>It would have been nice to have the background music playing right when the user enters the site – however, the reason this wasn’t done is because of browser limitations. Most browsers automatically block sound from autoplaying on websites. Due to time constraints, we also didn’t have time to make the experience responsive, and focused on perfecting it for 13” screens. However, it works well on some screens below and slightly above this measurement.</p>
        </div>

      <FullImage 
      image={bjorn}
      caption=""
      />

      <div className="case-text">
        <h3>Result</h3>
        <p>The finished project received praise from both teachers and classmates alike, focusing on the music and animated illustrations showcased in the project. We’d successfully created a project on the theme of sustainability of ecosystems, combining p5.js with p5.play and jQuery to materialise the concept we wanted.</p>
        <h4>The future of Codimals</h4>
        <p>As we’d taken the direction of making children care for animals by introducing them in this interactive storybook, our hope is that it would make children more aware of nature and ecosystems. However, given more time, we would’ve loved to further develop the concept with lengthier informational text, more animals, and incitement on how to care for the animals shown by making changes in the users’ day to day lives. Most importantly, we would love to perform user tests with children to improve and iterate on Codimals, to ensure it does what we set out to do.</p>
        <h3>What I learned</h3>
        <p>Through working on Codimals, I learnt that even small scale projects can take a lot of time when you’re working with new code libraries. It also taught me to draw on previous experience with a target audience when user research isn’t available. Working with Simon was great for me, as I tended to lean more practical and forgo the artistic parts of creative projects. He helped me understand that you can combine both practicality and efficiency with artistic choices to create meaningful user experiences.</p>
      </div>

      <BackToTop />

    </div>

  )
}
 
export default SwAnimalsContent;