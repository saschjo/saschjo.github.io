import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import Hello from './Hello.js';
import mosaik_thumb from './assets/mosaik/mosaik_thumb.png';
import remap_thumb from './assets/remap_thumb.png';
import codimals_thumb from './assets/codimals_thumb.png';
import internetskolan_thumb from './assets/internetskolangif.gif';
import sustainlab_thumb from './assets/sustainlab/sustainlab_thumb.png';
import mitt_uppdrag from './assets/Verktyg_ Grid.png';
import leo_thumb from './assets/leo/leo_thumb.png';
import legimeet_thumb from './assets/legimeet/legimeeet_thumb.png';

function Projects(props) {

  return (
        // Render a Thumbnail component
    <div>
        <div className="page-con">
            <div className="PageWrapper">
            <Hello 
            headlineContent="Selected Work"
            subHeadline="A deep dive through a selection of projects I've been a part of."
            />
                <div className="thumbnail-container">

                    <Thumbnail
                        link="/Mosaik"
                        title="Mosaik Design System"
                        image={mosaik_thumb}
                        desc="HSB offer digital services to simplify living and board work but struggled to scale sustainably while meeting user needs. I realized a design system could solve many issues, so we created one together."
                        category={<div className="categories">
                                <span className="tag">Design Lead</span>
                                <span className="tag">Strategy</span>
                                <span className="tag">UX Engineering</span>
                                <span className="tag">UX/UI Design</span>
                                </div>}
                    />

                    <Thumbnail
                        link="/Internetskolan"
                        image={internetskolan_thumb}
                        title="Internetskolan"
                        desc="Product design and prototype development to bridge the digital divide, commissioned by Spånga-Tensta municipality administration."
                        category={<div className="categories">
                            <span className="tag">Product design</span>
                            <span className="tag">Frontend development</span>
                            <span className="tag">UX/UI Design</span>
                            </div>}
                    />

                    <Thumbnail
                        link="/Remap"
                        title="Re:map"
                        image={remap_thumb}
                        desc="Design concept, graphic identity and animation for a project aimed at inspiring teens to get involved in urban development."
                        category={<div className="categories">
                            <span className="tag">Product design</span>
                            <span className="tag">Graphic design</span>
                            <span className="tag">Motion Design</span>
                            </div>}
                    />

                </div>
            </div>

            <div className="PageWrapper">
                <Hello 
                headlineContent="Other Projects"
                subHeadline="A short and sweet display of smaller projects"
                />
                <div className="thumbnail-container">

                <Thumbnail
                        link="/Legimeet"
                        title="Legimeet"
                        image={legimeet_thumb}
                        desc="UI/UX design and development work for Legimeet, an exciting startup offering easy solutions for digital AGMs."
                        category={<div className="categories">
                            <span className="tag">UX/UI Design</span>
                            <span className="tag">Frontend development</span>
                            </div>}
                    />

                    <Thumbnail
                        link="/Codimals"
                        image={codimals_thumb}
                        title="Codimals"
                        category={<div className="categories">
                            <span className="tag">Product Design</span>
                            <span className="tag">Frontend development</span>
                            <span className="tag">Product Design</span>
                            </div>}
                        desc="An evocative, interactive web experience made in p5.js allowing children to explore parts of the Swedish ecosystem."
                    />

                    {/* 
                    <Thumbnail
                        link="/Leo"
                        title="Leo;"
                        image={leo_thumb}
                        desc="Product and logo design for an oral contraceptive aimed at cis men, as part of a school assignment on typographic logotypes."
                        category="✧ Product and Graphic Design"
                    />
                    */}

                </div>
            </div>

        </div>
    </div>
  )

}
 
export default Projects;