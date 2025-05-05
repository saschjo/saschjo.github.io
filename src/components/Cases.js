import React from "react"
import ProjectObject from './portfolio-object.js';
import MittUppdragContent from './MittUppdragContent.js';
import RemapContent from './RemapContent.js';
import SwAnimalsContent from './SwAnimalsContent.js';
import InternetskolanContent from './InternetskolanContent.js';
import SustainlabContent  from './SustainlabContent.js';
import LegimeetContent from './LegimeetContent.js';
import LeoContent from "./LeoContent.js";
import MosaikContent from "./MosaikContent.js";
import mosaik_thumb from './assets/mosaik/mosaik_thumb.png';
import remap_1 from './assets/remap/remap_1.jpg';
import internetskolan_framsida from './assets/internetskolan/internetskolan_framsida.gif';
import rav from './assets/swedishanimals/rav.gif';
import legimeet_vote from "./assets/legimeet/legimeet_vote.gif";
import mitt_uppdrag from "./assets/Verktyg_ Grid.png";

function MittUppdrag(props) {

  return (
          <div className="project-1">
              <ProjectObject
                image={mitt_uppdrag}
                title="Nya Mitt Uppdrag"
                category="Design System"
                client=" HSB Affärsstöd"
                mission=" Custom Atomic Design System"
                myrole=" Design Lead and UX/UI Engineer"
                datum="2021 – Ongoing"
                description="HSB, a top Swedish housing management cooperative, manages homes for 1 in 10 Swedes. They offer digital services to simplify living and board work but struggled to scale sustainably while meeting user needs. I realized a design system could solve many issues, so we created one together."
                  />
              <MittUppdragContent />

          </div>
  )
}

function Mosaik(props) {

  return (
          <div className="project-1">
              <ProjectObject
                image={mosaik_thumb}
                title="Mosaik Design System"
                category="Design System"
                client=" HSB Affärsstöd"
                mission=" Custom Atomic Design System"
                myrole=" Design Lead and UX/UI Engineer"
                datum="2022 – Ongoing"
                description="HSB, a top Swedish housing management cooperative, manages homes for 1 in 10 Swedes. They offer digital services to simplify living and board work but struggled to scale sustainably while meeting user needs. I realized a design system could solve many issues, so we created one together."
                  />
              <MosaikContent />

          </div>
  )
}
 
function Remap(props) {

    return (
            <div className="project-1">
                <ProjectObject
                  image={remap_1}
                  title="Re:Map"
                  category="Graphic and Product Design"
                  client="Creative project"
                  mission="Pitch material and graphic identity"
                  myrole="Product-, Graphic- and Motion Designer"
                  datum="Three weeks (Dec. 2020 – Jan. 2021)"
                  description="Re:Map was a creative venture where we crafted pitch material, including a graphic identity and short film, for a design solution developed by classmates. Choosing to work on Re:Map, we embraced a modern punk concept to inspire teens through action, creativity, and teamwork. The project received high praise from both classmates and teachers, and to this day it's one of my favorite projects I've ever worked on."
                    />
                <RemapContent />

            </div>
    )
  }
  
function Internetskolan(props) {

  return (
       
      <div className="container-project">
              <ProjectObject
                  image={internetskolan_framsida}
                  title="Internetskolan"
                  category="Product, UX/UI Design and Development"
                  client=" Spånga-Tensta municipality administration"
                  mission=" Solving the digital divide in Spånga-Tensta"
                  myrole=" Product-, UI Designer and Frontend Developer"
                  datum=" 1 month (Spring of 2021)"
                  description="Internetskolan (The Internet School) was a project performed on behalf of the Spånga-Tensta municipality administration in collaboration with Södertörn University. The administration wanted us to produce potential solutions to the digital divide in the municipality. Through user research, testing and client feedback, we produced Internetskolan, a place where digital beginners could learn the basics of the internet and get started on their online journey. The project was lauded by both our teachers and Spånga-Tensta administration, who wished to pursue- and work on it further right away! "
                />

              <InternetskolanContent />
      </div>
  )

}

function Codimals(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  image={rav}
                  title="Codimals"
                  category="Product-, UX/UI Design and Development"
                  uppdragstyp=" School project"
                  mission=" Interactive web experience in p5.js"
                  myrole=" Designer, developer and illustrator"
                  datum=" Two weeks (Fall of 2020)"
                  description="Codimals was a project I was a part of during the class Creative Programming (7,5hp) during fall 2020. We were tasked with creating an interactive web experience on the theme of sustainability and nature, using the JavaScript library p5.js. Using design thinking and different design methods, we produced Codimals as an evocative experience for children to learn about the Swedish ecosystem. Codimals was met with a lot of praise, especially for our music and illustrations."
                />

              <SwAnimalsContent />

          </div>
        </div>
      </div>
  )

}

function Leo(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  title="Leo;"
                  category="Product and Graphic Design"
                  uppdragstyp=" School assignment"
                  mission=" Typographic logo and mock-ups"
                  myrole=" Product and Graphic designer"
                  datum=" Fall of 2019"
                  description="Leo; was the result of one of our first assignments in graphic design. We were tasked with creating a concept, design a typographic logotype and couple it with mock-ups. I created Leo;, an oral birth control aimed at cis men. The inspiration for the product was how women are portrayed in ads for mentrual products and birth control. While there are a lot of details in the execution that could be improved upon, especially now that I've more knowledge and experience, it's still a project I hold near and dear to my heart, and feel represent a big part of me as a designer."
                />

              <LeoContent />

          </div>
        </div>
      </div>
  )

}

function SustainLab(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  title="SustainLab-SH"
                  category="Web Development and Graphic Design"
                  uppdragstyp=" Client project"
                  mission=" Website and logo design"
                  myrole=" Project Manager, UX/UI Designer and Developer"
                  datum=" Fall of 2020 – Spring of 2021"
                  description="SustainLab-SH is a venture of the Environmental Science Department, Södertörn University. They recruited me and my project partner David Wechana to create a website for them that they would be able to update themselves, share their research, as well publish posts. They also needed a logo for this venture. We realized this project in Wordpress and Elementor, utilizing user research and testing to validate the project iteratively throughout. The client was very happy with the result."
                />

              <SustainlabContent />

          </div>
        </div>
      </div>
  )

}

function Legimeet(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  image={legimeet_vote}
                  title="Legimeet"
                  category="UX/UI Design and Development"
                  uppdragstyp=" Client Project"
                  mission=" UX/UI Development and design"
                  myrole=" UX/UI Developer and designer"
                  datum=" Feb. 2021 – Sept. 2021"
                  description="Legimeet is an exciting startup company offering to build, host and send live digital Annual General Meetings (AGMs) through the Twebcast platform. I was brought in to work on UX/UI development and design for a series of AGMs and projects, which allowed me to combine my skills as a designer and developer at the same time. I mainly worked with HTML, CSS and some light JS during this time. I got to work on designing AGMs for clients such as Taxi Stockholm, Gigger and Landshypotek. As I was the only designer, I occasionally also produced graphic material."
                />

              <LegimeetContent />

          </div>
        </div>
      </div>
  )

}
 
export {
  MittUppdrag,
  Mosaik,
  Remap,
  Internetskolan,
  Codimals,
  SustainLab,
  Leo,
  Legimeet
}