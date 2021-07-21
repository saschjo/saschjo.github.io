import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.scss';
import remap from './assets/remap.png';
import konstrukt from './assets/konstrukt.png';
import amhjo from './assets/amhjo.png';
import leo from './assets/leo.png';
import Hello from './Hello.js';
import blob from './assets/blob.svg';
 
function Minorprojects(props) {

  return (
        // Render a Thumbnail component
        <div>
        

        <h1 id="frontpage-h1">Other projects</h1>
        
        <div className="thumbnail-container">

        <Thumbnail
                link="/Remap"
                title="Sjukhushästen"
                image={remap}
                desc="Moodboard for event and graphic expression."
                category="Graphic design"
            />

            <Thumbnail
                link="/Chrome"
                image={amhjo}
                title="Chrome letter"
                category="Web design"
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
    </div>
  )

}
 
export default Minorprojects;