import React from "react";
import FullImage from "./CaseCmpnts.js";
import legimeet_vote from "./assets/legimeet/legimeet_vote.gif";
import legimeet_example from "./assets/legimeet/legimeet_example.jpg";
import BackToTop from "./BackToTop.js";


 
function LegimeetContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <FullImage 
      image={legimeet_vote}
      caption="One of the voting modules as well as a more minimal menu UI I designed in the Legimeet demo."
      />

      <div className="case-text">
        <h3>About the project</h3>
        <p>Legimeet is an Financial Times award-winning startup company that offers digital Annual General Meetings (AGMs) as a service through the Twebcast platform. The platform offers a variety of interactive modules that can be used to create different projects, meetings and even conferences. These modules can be styled quite freely through HTML, CSS, and JS.</p> 
        <p>As Legimeet is a small startup, they needed a designer who could also develop using HTML and CSS, and so I was brought onboard to work on some of their AGMs as well as the modules used in their demo. Eventually, I also got to work on some graphic design for their social media, webinars and product listing.</p>
        <h4>A fast paced startup</h4>
        <p>As I was only at Legimeet one day a week as well as the only designer, the work pace was very fast, with designs often being commissioned, designed and implemented in a day. This lead to an agile approach where new designs were produced, evaluated by the team and then iterated upon. Since each AGM consisted of several different modules that each needed a unique design, both speed and iteration were key. For overarching visual themes, I used Figma, Adobe XD and Illustrator before diving into development. However, I oftentimes designed straight in the CSS in order to test several ideas quickly, due to the design constraints of the Twebcast modules not always being clear until after the fact. For example, every design had to look good in both a wide- and medium screen mode without using media queries.</p>
        </div>

      <FullImage 
      image={legimeet_example}
      caption="Some excerpts of the UI I designed for the Legimeet demo using CSS."
      />

      <div className="case-text">
        <p>Each AGM featured a bespoke UI design custom made to fit their visual identity. Some projects I got to work on were Taxi Stockholm, Gigger and Landshypotek. My work as mostly consisted of designing and styling the AGMs through CSS, as well as implementing new elements as needed through HTML. As the service was hosted through Twebcast, the limitations on what could be done design wise only depended on the hard coded structure of the modules themselves.</p>
        <h3>The result</h3>
        <p>I was praised highly for my speed in getting things done, producing as well as implementing consistent designs that fit the visual identities of the different clients, and my design ability overall. The designs were received very well by both our clients and Legimeet themselves. From my time at Legimeet, I learned a lot about working efficiently, thinking outside of the box and really improved my CSS skills.</p>
      </div>


    </div>

  )
}
 
export default LegimeetContent;