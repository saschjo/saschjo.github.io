import React from "react"
import ProjectObject from './portfolio-object.js';
import RemapContent from './RemapContent.js';
import SwAnimalsContent from './SwAnimalsContent.js';
import InternetskolanContent from './InternetskolanContent.js';
 
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

function Chrome(props) {

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
 
export {
  Remap,
  Internetskolan,
  Chrome
}