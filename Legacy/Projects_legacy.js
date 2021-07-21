import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.scss';
import remap from './assets/remap.png';
import konstrukt from './assets/konstrukt.png';
import amhjo from './assets/amhjo.png';
import leo from './assets/leo.png';
import Hello from './Hello.js';
 
function Projects(props) {

  return (
        // Render a Thumbnail component
        <div className="frontpageWrapper">
        
        <Hello /> {/* Laddar in introkomponenten med mitt namn */}

        <h1 id="frontpage-h1">Projects</h1>
        <div className="thumbnail-container">
        <div className="project-1">
            
            <Thumbnail
                link="/Remap"
                image={remap}
                title="Re:map"
                desc="Moodboard for event and graphic expression."
                category="Graphic design"
            />
        </div>
        <div className="project-2">
            <Thumbnail
                link="/Konstruktivism"
                image={konstrukt}
                title="Konstruktivism"
                category="Graphic design"
                desc="Moodboard for event and graphic expression."
            />
        </div>
        <div className="project-3">
            <Thumbnail
                link="/Chrome"
                image={amhjo}
                title="Chrome letter"
                category="Web design"
                desc="Moodboard for event and graphic expression."
            />
        </div>
        <div className="project-4">
            <Thumbnail
                link="/Leo"
                image={leo}
                title="Leo;"
                category="Graphic design"
                desc="Moodboard for event and graphic expression."
            />
        </div>
        <div className="project-5">
            <Thumbnail
                link="/Twitter"
                image={amhjo}
                title="Chrome letter"
                category="Graphic design"
                desc="Moodboard for event and graphic expression."
            />
        </div>
        </div>
      </div>
  )

}
 
export default Projects;