import React from "react";
import FullImage from "./CaseCmpnts.js";
import leo_box from "./assets/leo/leo_box.png";
import leo_karta from "./assets/leo/leo_karta.png";
import leo_reklam from "./assets/leo/leo_reklam.jpg";
import leo_process from "./assets/leo/leo_process.jpg";
import leo_logos from "./assets/leo/leo_logos.png";
import BackToTop from "./BackToTop.js";


 
function LeoContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <FullImage 
      image={leo_reklam}
      caption="The mock-up of an ad for Leo; I produced as part of the assignment."
      />

      <div className="case-text">
        <h3>The project</h3>
        <p>Leo; was one of my first works in graphic design, while I was still very new to the Adobe Suite and learning about the basics of design. We were tasked with creating a typographic logotype for a concept of our own making, as well as pair it with some mock-ups. I wanted to create something tongue in cheek that made a point, and decided to design an oral contraceptive for men.</p>
      </div>

      <FullImage 
      image={leo_process}
      caption="My first and second moodboards, and some progress shots of figuring out the concept name and typography for the logotype."
      />

      <div className="case-text">
      <h4>How I did it</h4>
        <p>At first I was inspired to make an ultra-masculine concept, inspired by the multitude of "For men"-products out there, but ultimately decided it felt too camp and on the nose. I wanted to make a point by making something real. My inspiration became how women were being portrayed in ads for mentrual products and in brochures for contraceptives at the time. I always found it very funny how they were so happy about these products, being playful with friends, laughing with their arms stretched to the sky. That felt very far removed from the reality of using these products. For the name, I played around with different Greek words relating to love and sexuality, but settled on Leo as it felt both neutral, warm and kind.</p>
      </div>

      <FullImage 
      image={leo_logos}
      caption="Different inversions of the final logotype for Leo;"
      />

      <div className="case-text">
      <h4>Designing Leo;</h4>
      <p>For the main font, I chose to go with Cutive, a rounded slab serif, inspired by typography found on medical products and packaging. Cutive felt both trustworthy and inviting, which were feelings I wanted to communicate. The semi-colon was added to represent the continuation of something that could've ended; as in, you get to decide when to go, and when to stop. The dark turquoise was chosen to be attractive to a wide range of men, as well as give a sense of trust and comfort that blue tones usually imbibe. To offset the seriousness, I chose Josefin Sans as a secondary font to make Leo; feel a bit more warm and playful.</p>
      </div>

      <FullImage 
      image={leo_box}
      caption="The mock-up of the Leo; packaging."
      />
      <FullImage 
      image={leo_karta}
      caption="The Leo; pill blister pack, illustrated in a style inspired by the Swedish youth guidance center (UMO)."
      />

      <div className="case-text">        
        <h3>Result</h3>
        <p>I was very happy with the finished product, and received a high grade on the assignment. Since then, I've shown Leo; to many different people both in my personal and professional life, and the response has always been very positive with high praise for both the idea and execution. It seems a lot of people are perceptive to the feeling and points I was trying to convey, and though I initially started the project off very tongue in cheek, it did turn into something that could very well exist in the real world.</p>
      
      </div>


      <BackToTop />

    </div>

  )
}
 
export default LeoContent;