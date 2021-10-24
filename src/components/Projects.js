import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import Hello from './Hello.js';
import remap_thumb from './assets/remap_thumb.png';
import codimals_thumb from './assets/codimals_thumb.png';
import internetskolan_thumb from './assets/internetskolangif.gif';
import sustainlab_thumb from './assets/sustainlab/sustainlab_thumb.png';
import leo_thumb from './assets/leo/leo_thumb.png';
import legimeet_thumb from './assets/legimeet/legimeeet_thumb.png';
import BackToTop from "./BackToTop.js"; 

function Projects(props) {

  return (
        // Render a Thumbnail component
    <div>
        <div className="page-con">
            <Hello 
            headlineContent="Case studies"
            subHeadline="A deep dive through a selection of projects I've been a part of."
            />

            <div className="PageWrapper">
                <div className="thumbnail-container">

                    <Thumbnail
                        link="/Remap"
                        title="Re:map"
                        image={remap_thumb}
                        desc="Design concept, graphic identity and animation for a project aimed at inspiring teens to get involved in urban development."
                        category="✧ Graphic and Product Design"
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


            <Hello 
            headlineContent="Other Projects"
            subHeadline="A short and sweet display of a few client and school projects."
            />

            <div className="PageWrapper">
                <div className="thumbnail-container">

                    <Thumbnail
                        link="/Sustainlab"
                        image={sustainlab_thumb}
                        title="SustainLab-SH"
                        category="✧ Web Development and Logo Design"
                        desc="Design and development for SustainLab-SH, a research initiative by Södertörn University's Environmental Studies Department."
                    />

                    <Thumbnail
                        link="/Legimeet"
                        title="Legimeet"
                        image={legimeet_thumb}
                        desc="UI/UX design and development work for Legimeet, an exciting startup offering easy solutions for digital AGMs."
                        category="✧ UX/UI Design and Development"
                    />

                    <Thumbnail
                        link="/Leo"
                        title="Leo;"
                        image={leo_thumb}
                        desc="Product and logo design for an oral contraceptive aimed at cis men, as part of a school assignment on typographic logotypes."
                        category="✧ Product and Graphic Design"
                    />

                </div>
            </div>

            <BackToTop />

        </div>
    </div>
  )

}
 
export default Projects;