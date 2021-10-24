import React from "react";
import FullImage from "./CaseCmpnts.js";
import sustainlab_head from "./assets/sustainlab/sustainlab_head.gif";
import sustainlab_lofi from "./assets/sustainlab/sustainlab_lofi.jpg";
import sustainlab_logo from "./assets/sustainlab/sustainlab_logo.png";
import sustainlab_final from './assets/sustainlab/sustainlab_final.jpg';
import BackToTop from "./BackToTop.js";


 
function SustainlabContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <FullImage 
      image={sustainlab_head}
      caption="The homepage of SustainLab-SH."
      />
      
      <div className="visit-case-subject">
        <a href={'http://www.sustainlab-sh.se'}>Visit Sustainlab-SH here!</a>
      </div>
      

      <div className="case-text">
        <h3>The project</h3>
        <p>SustainLab-SH is a venture by the Environmental Science Department of Södertörn University. In fall of 2020, they asked for students to create a website where they could share news, research and connect with other research departments and initiatives. I was chosen together with my partner David Wechana to create it. I was project manager, UI- and graphic designer, and David took responsibility over UX research and testing. We worked on the concept, wireframes and development of the website together.</p>
        <h4>How we did it</h4>
        <p>As David and I had limited time due to being in school, and it being my second semester of college, the department and I decided it would be best to create a sort of "Phase 1" website, that could be expanded on in the future as SustainLab-SH grew. As they wanted to be able to update the site themselves, share their research, as well publish posts, we decided to create the website in Wordpress and Elementor. The client also wanted us to produce a logo that would emulate both Södertörn University, fun and environmental research, which I got the task of producing.</p> 
      </div>

      <FullImage 
      image={sustainlab_lofi}
      caption="Some of our lo-fi wireframes in Figma from early on in the project."
      />

      <FullImage 
      image={sustainlab_final}
      caption="Some excerpts of the final website."
      />

      <FullImage 
      image={sustainlab_logo}
      caption="The final logo variations and icon I created for SustainLab-SH."
      />


      <div className="case-text">
        <p>David and I worked almost entirely remotely on this project, working primarily over Figma, Mural and Zoom. In the project, we worked with a user centered mindset both in regards to the visitors on the frontend as well as the backend that the research department would need to use. We conducted iterative user testing throughout the project.</p>
        <h3>Result</h3>
        <p>Our client was very satisfied with the result, and our users enjoyed the design and usability of the site. The finished site features places for the department to share their research, news and partnerships. In the future, it will be easy to add functionality to the site as needed. At the end of the project, we handed off the website to a new group of students who would continue to work on- and administer the website.</p>
      
      </div>


      <BackToTop />

    </div>

  )
}
 
export default SustainlabContent;