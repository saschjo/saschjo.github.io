import React from "react"
import Thumbnail from './cases/Thumbnail.js'; // Import the Thumbnail component
import Hello from './Hello.js';
import mosaik_components from './cases/Mosaik/mosaik/mosaik-components.png';
import mittuppdrag_thumb from './cases/MittUppdrag/MittUppdrag/mittuppdrag_illu.png';
import remap_thumb from './assets/remap_thumb.png';
import codimals_thumb from './assets/codimals_thumb.png';
import internetskolan_thumb from './cases/Internetskolan/internetskolan/internetskolan_framsida.gif';
import legimeet_thumb from './cases/Legimeet/legimeet/legimeeet_thumb.png';

function Projects(props) {

  return (
        // Render a Thumbnail component
    <div>
        <div className="page-con">
            <div className="PageWrapper">
            <Hello 
            headlineContent="Case studies"
            subHeadline="Curious about my work? I'm not surprised. Here are some of my favorite projects."
            />
                <div className="thumbnail-container">

                     <Thumbnail
                        link="/Mosaik"
                        title="Nya Mitt Uppdrag"
                        tagline="HSB Riksförbund"
                        image={mittuppdrag_thumb}
                        desc="A platform built on internal assumption and utility-first thinking lead to a lot of features but a poor user experience. I held a design sprint to identify the core problems and opportunities, and then lead the design and vision for a new platform that was more in line with user needs and business goals." 
                        category={<div className="categories">
                                <span className="tag">Design Lead</span>
                                <span className="tag">Workshop facilitation</span>
                                <span className="tag">UX/UI</span>
                                <span className="tag">UX Research</span>
                                <span className="tag">Strategy</span>
                                <span className="tag">Illustration</span>
                                </div>}
                    />

                    <Thumbnail
                        link="/Mosaik"
                        title="Mosaik – HSB's Design System"
                        tagline="HSB Riksförbund"
                        image={mosaik_components}
                        desc="HSB struggled to scale product sustainably while meeting user needs and impending accessibility regulation. As a UX Engineer, I realized a design system could solve a lot of these problems, so I crafted one for them and lead its development for 4 years."
                        category={<div className="categories">
                                <span className="tag">Design Lead</span>
                                <span className="tag">UX/UI</span>
                                <span className="tag">UX Engineering</span>
                                <span className="tag">Accessibility</span>
                                </div>}
                    />

                    <Thumbnail
                        link="/Internetskolan"
                        image={internetskolan_thumb}
                        title="Internetskolan"
                        tagline="Spånga-Tensta municipality administration"
                        desc="Product design and prototype development to bridge the digital divide, commissioned by Spånga-Tensta municipality administration."
                        category={<div className="categories">
                            <span className="tag">Product Design</span>
                            <span className="tag">UX/UI Design</span>
                            <span className="tag">Frontend development</span>
                            </div>}
                    />

                    <Thumbnail
                        link="/Remap"
                        title="Re:map"
                        tagline="Personal project"
                        image={remap_thumb}
                        desc="Design concept, graphic identity and animation for a project aimed at inspiring teens to get involved in urban development."
                        category={<div className="categories">
                            <span className="tag">Product Design</span>
                            <span className="tag">Brand Identity</span>
                            <span className="tag">Graphic Design</span>
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
                        link="/Codimals"
                        image={codimals_thumb}
                        title="Codimals"
                        category={<div className="categories">
                            <span className="tag">Product Design</span>
                            <span className="tag">UX/UI Design</span>
                            <span className="tag">Frontend development</span>
                            </div>}
                        desc="An evocative, interactive web experience made in p5.js allowing children to explore parts of the Swedish ecosystem."
                    />
                <Thumbnail
                        link="/Legimeet"
                        title="Legimeet"
                        image={legimeet_thumb}
                        desc="UI/UX design and development work for Legimeet, an award-winning startup offering a digital solution for AGMs."
                        category={<div className="categories">
                            <span className="tag">UI Engineering</span>
                            <span className="tag">UX/UI Design</span>
                            <span className="tag">Graphic Design</span>
                            </div>}
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