import React from "react";
import FullImage from "./CaseCmpnts.js";
import legimeet_vote from "./assets/legimeet/legimeet_vote2.gif";
import sustainlab_lofi from "./assets/sustainlab/sustainlab_lofi.jpg";
import sustainlab_logo from "./assets/sustainlab/sustainlab_logo.png";
import sustainlab_final from './assets/sustainlab/sustainlab_final.jpg';
import BackToTop from "./BackToTop.js";


 
function LegimeetContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <FullImage 
      image={legimeet_vote}
      caption="One of the voting modules as well as a more minimal menu UI I designed in the Legimeet demo."
      />

      <div className="visit-case-subject">
        <a href={'https://www.legimeet.com/demo'}>See more of the demo here</a>
      </div>

      <div className="case-text">
        <h3>About the project</h3>
        <p>Legimeet is a startup company that offers digital AGMs as a service through the Twebcast platform. The platform offers a variety of interactive modules that can be used to create different projects, meetings and even conferences. These modules can be styled quite freely through HTML, CSS, and JS.</p> 
        <p>As Legimeet is a small startup, they needed a designer who could also develop, and so I was brought onboard to work on some of their AGMs as well as the modules used in their demo. Eventually, I also got to work on some graphic design for their social media, webinars and product listing.</p>
        <h4>A fast paced startup</h4>
        <p>As I was only at Legimeet one day a week as well as the only designer, the work pace was very quick, with designs often being commissioned, designed and implemented in a day. This lead to an fast paced, iterative approach where new designs were produced straight in CSS, and then evaluated by the team. For larger work and overarching visual themes, I used Figma, Adobe XD and Illustrator before diving into development.</p>
        <p>Each AGM featured a bespoke UI design custom made to fit their visual identity. Some projects I got to work on were Taxi Stockholm, Gigger and Landshypotek. My work as a consultant mostly consisted of styling elements through CSS, and implementing new ones as needed through HTML. As the service was hosted through Twebcast, the limitations on what could be done design wise only depended on the hard coded structure of the modules themselves.</p>
        <h3>The result</h3>
        <p>Lorem ipsum</p>
      </div>


      <BackToTop />

    </div>

  )
}
 
export default LegimeetContent;