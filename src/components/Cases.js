import React from "react"
import ProjectObject from './portfolio-object.js';
import RemapContent from './RemapContent.js';
import SwAnimalsContent from './SwAnimalsContent.js';
import InternetskolanContent from './InternetskolanContent.js';
import  SustainlabContent  from './SustainlabContent.js';
import LeoContent from "./LeoContent.js";
 
function Remap(props) {

    return (
        <div className="container-project">
            <div className="project-1">
                <ProjectObject
                  title="Re:Map"
                  category="✧ Graphic and product design"
                  uppdragstyp="School project"
                  mission="Pitch material and graphic identity"
                  myrole="Concept, graphic and motion design"
                  datum="Three weeks (Dec. 2020 – Jan. 2021)"
                  description="Re:Map was a school project where we really got to flex our creative muscles. The assignment was to create pitch material in the form of a graphic identity and short pitch film for a design solution previously created by our classmates. The result was Re:Map, a modern punk concept aiming to inspire teens to take action and make their voices heard through action, creativity, and team work. Re:Map was met with a lot of praise from both classmates and teachers alike, and is one of my favourite projects I’ve ever worked on."
                    />

                <RemapContent />

            </div>
        </div>
    )
  }
  
function Internetskolan(props) {

  return (
       
      <div className="container-project">
              <ProjectObject
                  title="Internetskolan"
                  category="✧ Product, UX/UI design and development"
                  uppdragstyp="Live client project"
                  mission="Fighting the digital divide in Spånga-Tensta"
                  myrole="Product, UX/UI Designer and web developer"
                  datum="1 month (Spring of 2021)"
                  description="Internetskolan (The Internet School) was a project performed on behalf of the Spånga-Tensta municipality administration in collaboration with Södertörn University. The administration wanted us to produce potential solutions to the digital divide plaguing the municipality. Through user research, testing and client feedback, we produced Internetskolan, a place where digital beginners could learn the basics of the internet and get started on their online journey. The project was lauded by the administration, who wished to pursue and work on it further. "
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
                  title="Codimals"
                  category="✧ Product design and web development"
                  uppdragstyp="School project (pair programming)"
                  mission="Interactive web experience"
                  myrole="Designer, developer and illustrator"
                  datum="Two weeks (Fall of 2020)"
                  description="Codimals was a project I was a part of during the class Creative Programming in the fall of 2020. We were tasked with creating an interactive web experience on the theme of sustainability and nature, using the JavaScript library p5.js. Using design thinking and different design methods, we produced Codimals as an evocative experience for children to learn about the Swedish ecosystem. Codimals was met with a lot of praise, especially for our music and illustrations."
                />

              <SwAnimalsContent />

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
                  category="✧ Web Development and Graphic Design"
                  uppdragstyp="Live client project"
                  mission="Website and light visual identity"
                  myrole="Project manager, developer and designer"
                  datum="Fall of 2020 – Spring of 2021"
                  description="SustainLab-SH is a venture of the Environmental Science Department, Södertörn University. They recruited me and my project partner David Wechana to create a website for them that they would be able to update the site themselves, share their research, as well publish posts. They also needed a logo. We realized this project in Wordpress and Elementor, utilizing user research and testing to validate the project iteratively throughout. The client was very happy with the result, and the website will be easy to expand as needed in the future."
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
                  title="Legimeet"
                  category="✧ Web Development and Graphic Design"
                  uppdragstyp="Live client project"
                  mission="Website and light visual identity"
                  myrole="Project manager, developer and designer"
                  datum="Fall of 2020 – Spring of 2021"
                  description="SustainLab-SH is a venture of the Environmental Science Department, Södertörn University. They recruited me and my project partner David Wechana to create a website for them that they would be able to update the site themselves, share their research, as well publish posts. They also needed a logo. We realized this project in Wordpress and Elementor, utilizing user research and testing to validate the project iteratively throughout. The client was very happy with the result, and the website will be easy to expand as needed in the future."
                />

              <SustainlabContent />

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
                  category="✧ Product and Graphic Design"
                  uppdragstyp="School assignment"
                  mission="Typographic logo and mock-ups"
                  myrole="Product and Graphic designer"
                  datum="Fall of 2019"
                  description="Leo; was the result of one of our first assignments in graphic design. We were tasked with creating a concept, design a typographic logotype and couple it with mock-ups. I created Leo;, an oral birth control aimed at cis men. The inspiration for the product was how women are portrayed in ads for mentrual products, birth control pills as well as my thoughts on what a birth control for men would realistically look like.  While there are a lot of details in the execution that could be improved upon, especially now that I've more knowledge and experience, it's still a project I hold near and dear to my heart, and feel represent a part of me as a designer."
                />

              <LeoContent />

          </div>
        </div>
      </div>
  )

}
 
export {
  Remap,
  Internetskolan,
  Codimals,
  SustainLab,
  Leo,
  Legimeet
}