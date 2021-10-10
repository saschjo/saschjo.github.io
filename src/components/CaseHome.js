import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import amhjo from './assets/amhjo.png';
import Hello from './Hello.js';
import remap_thumb from './assets/remap_thumb.png';
import codimals_thumb from './assets/codimals_thumb.png';
import internetskolan_thumb from './assets/internetskolangif.gif';
 
function CaseHome(props) {

  return (
        // Render a Thumbnail component
        <div>
        <Hello 
        headlineContent="Case studies"
        subHeadline="A selection of projects I've been a part of through 2019–2021."
        />

        <div className="PageWrapper">
        <div class="projects-container">
            <div className="thumbnail-container">

                <Thumbnail
                    link="/Remap"
                    title="Re:map"
                    image={remap_thumb}
                    desc="Design concept, graphic identity and animation for a project aimed at inspiring teens to get involved in urban development."
                    category="✧ Product and Graphic Design"
                />

                <Thumbnail
                    link="/Internetskolan"
                    image={internetskolan_thumb}
                    title="Internetskolan"
                    category="✧ Product, UX/UI Design and Development"
                    desc="Product design and prototype development to bridge the digital divide, commissioned by Spånga-Tensta municipality administration."
                />

                <Thumbnail
                    link="/Codimals"
                    image={codimals_thumb}
                    title="Codimals"
                    category="✧ Product, UX/UI Design and Development"
                    desc="An evocative, interactive web experience made in p5.js allowing children to explore parts of the Swedish ecosystem."
                />

            </div>
        </div>
    </div>
</div>
  )

}
 
export default CaseHome;