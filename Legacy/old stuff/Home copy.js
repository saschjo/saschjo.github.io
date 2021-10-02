import React from "react"
import Thumbnail from './Thumbnail.js.js.js'; // Import the Thumbnail component
import amhjo from './assets/amhjo.png';
import Hello from './Hello.js.js.js';
import Subheader from './Subheader.js';
 
function Home(props) {

  return (
        // Render a Thumbnail component
        <div className="PageWrapper">
        
        <Hello 
            headlineContent="Hi, I'm A-M! Designer, developer, and lover of RPGs. Welcome to my portfolio."
        />

        <h1 id="frontpage-h1">Case studies</h1>
        <span class="subtag">A selection of projects written out as case studies</span>
        
        <div className="thumbnail-container">
            <Thumbnail
                link="/Remap"
                title="Re:map"
                image={amhjo}
                desc="Moodboard for event and graphic expression."
                category="Graphic design"
                category2="Test"
            />

            <Thumbnail
                link="/Konstruktivism"
                image={amhjo}
                title="Konstruktivism"
                category="Graphic design"
                desc="Moodboard for event and graphic expression."
            />

            <Thumbnail
                link="/Chrome"
                image={amhjo}
                title="Chrome letter"
                category="Web design"
                desc="Moodboard for event and graphic expression."
            />
        </div>

        <Subheader 
        headlineContent="Besök mig på Github"
        subHeadline="From time to time, I like to post the odd evening project on my GitHub."
        />

      </div>
  )

}
 
export default Home;