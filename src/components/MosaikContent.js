import React from "react";
import FullImage from "./CaseCmpnts.js";
import mosaik_img from './assets/mosaik/mosaik_img.png';
import mosaik_img_cover from './assets/mosaik/mosaik_img_cover.png';
import minprofil from './assets/mosaik/minprofil.png';
import mosaik_img_icons from './assets/mosaik/mosaik_img_icons.png';
import mosaik_img_comp from './assets/mosaik/mosaik_img_comp.gif';
import mosaik_img_btn from './assets/mosaik/mosaik_img_btn.png';
import BackToTop from "./BackToTop.js";
 
function MosaikContent(props) {
  return (
    <div className="InnerCaseWrapper">
      <div className="case-text">
        <h3>Project background</h3>
        <p>I was brought on as a UX Engineer to help bridge the gap between design and development. When I joined the project, I identified several pain points that halted progress at the cost of both time and money.</p>
        
        <h4>Problem statement</h4>
        <p>HSB Affärsstöd struggled to deliver the high-quality user experience they aimed for while maintaining consistency in both design and development. Their previous waterfall methodology, with minimal user input, prioritized large-scale deliveries focusing on functionality over experience. This resulted in similar services using different design patterns—confusing and frustrating users. An interactive element that worked well in one service might unexpectedly fail in another. Moreover, design and development were time-consuming, as teams had to build components and structures from scratch for each project. Most services were "hard-coded" and iFramed, severely limiting their interaction with the surrounding navigational UI. This approach also meant that maintenance or design updates were isolated to specific service instances rather than applying to the entire service catalog. User feedback indicated frustration, confusion, and even anger.</p>
        <p>Switching to an agile workflow with fast-paced, small-scale deliveries, HSB aimed to achieve consistency in visual design and user experience throughout their services. A key point was that they wanted their services to assist users in their everyday living and council work, ranging from paying bills to transferring apartments and writing protocols. They also wanted to deliver changes faster and holistically with dynamic control over the UI—for example, changing the shade of one primary button would apply to all primary buttons in their service catalog.</p>
      </div>

      <div className="case-text">
        <h3>Mosaik, a custom atomic design system</h3>
        
        <h4>Why a design system?</h4>
        <p>Design systems allow for the creation of cohesive UIs and save time by allowing single-line code changes instead of many. They offer both designers and frontend developers creativity within limits, ensuring usability and accessibility, and help designers and developers work in sync, enhancing innovation and testing. They also save organizations time and money – with a library of components and patterns ready to go, a flow that would’ve taken weeks to design and test can be finished in as little as a few days. Since development has access to the same library of UI building blocks as the designers do, the production goes much quicker without as much need for checking in regarding colors, spacing or typography. It’s already there, mirrored in the design system.</p>
        
        <h4>Why make Mosaik atomic?</h4>
        <p>HSB Affärsstöd faced numerous consistency issues due to a lack of control over individual UI elements. A single service might have four primary buttons in four different shades of blue. Spacing, layout, and effects like drop shadows were similarly inconsistent. While smaller, fast-paced projects can manage with a limited set of components, this approach sacrifices control and can lead to long-term problems—precisely the issue we aimed to solve.</p>
        <p>Given the scale of HSB's service catalog, website, and intranet, we couldn't deliver a simple design system without compromising essential control. Atomic design systems offered a solution by using small components to build complex ones. Design tokens (also known as sub-atoms) such as line-heights and color codes form buttons (atoms). Combining buttons and text fields creates forms (molecules), and adding titles produces organisms.</p>
        <p>I decided that if we were going to build a custom design system from scratch, we'd do it thoroughly—from sub-atomic design tokens all the way up to fully fledged pages.</p>
      </div>

      <FullImage 
      image={minprofil}
      caption="Front page of the launched hi-fi prototype."
      />

      <div className="case-text">
        <h2>Work process</h2>
        <h3>Design Tokens</h3>
        <h4>Token sets, values and naming convention</h4>
        <p>HSB Affärsstöd wished for us to utilize their existing brand identity style guide as much as possible. Basing our color and typographic system on this, we aimed to achieve as high a level of abstraction as possible. This way, we'd allow for any future change of values within the tokens without having to correct any code. In order to secure as high level of granular control over the design system as possible, we split our tokens into two sets: Core and Alias. The Core set was created as a "root" source of truth for all the alias tokens to inherit their values from.</p>
        
        <h4>Accessibility and future proofing</h4>
        <p>In order to meet WCAG 2.0 requirements, many colors from the style guide had to be adjusted. They were then separated into specific sets – background colors, forground colors, border colors etc. This both guided designers to make accessible designs with minimal mental load, as well as giving us a high level of control over specific instances within every component. Changing —mosaik-background-color-neutrals-300 wouldn’t just affect singular components, but all components inheriting their color value from that specific token.</p>
        
        <h4>Designing for designers</h4>
        <p>A previous issue was designers having too much freedom, leading to an incoherent visual expression. I pondered how we might set helpful guardrails without stifling innovation. Many design systems allow any value divisible by 8, but this risks designer preference and habit overriding holistic visual consistency. Inspired by Tailwind.css, I designed a limited spacing and sizing system based on an exponential 8px scale, avoiding "medium" values. This system nudges designers away from preferential choices—you either use ample spacing (48px) or minimal spacing (32px). Long-term use of Mosaik has proven this system highly effective, with high consistency across independent design work using the system.</p>
        
        <h4>Securing integrity as the system grows</h4>
        <p>A crucial aspect of any design system is to view it as a living product. When something is missing, doesn't work, or creates friction, the system must be able to grow, adapt to new requirements, and integrate newfound insights. However, it's equally—if not more—important to recognize when a restriction is helpful and understand the consequences of removing it. This is especially true for design tokens, as they form the foundation of everything else within the system.</p>
        <p>To safeguard Mosaik's token integrity, I implemented a system where if a value (color, size, or otherwise) was needed at least three times in three independent instances—without an existing token satisfactorily replacing it—its implementation would be discussed within the design team. The token would then undergo a trial run, accessible in Figma but not yet in the Tokens.json file. After sufficient integration and testing, it would be finalized and added to Mosaik as a whole. This approach ensured that individual flows didn't exert undue influence over Mosaik, preserved the integrity of design tokens, and enhanced the system's overall cohesion.</p>
      </div>

      <FullImage 
      image={mosaik_img_comp}
      caption="A demo of the versatility of the Data Table Organism, constructed from 10+ separate components."
      />

<FullImage 
      image={mosaik_img}
      caption="Front page of the launched hi-fi prototype."
      />

      <div className="case-text">
        <h3>Designing and constructing components</h3>
        <h4>Design values and goals</h4>
        <p>HSB's user group is incredibly diverse—ranging from young people seeking their first apartment to dedicated seniors making decisions in cooperation councils. Consequently, Mosaik needed to work for the widest possible range of people, achieving a high level of usability. Recognizing that any system is simply the sum of its parts, I applied this mindset to the design of every single component, no matter how small. My goal was to ensure that regardless of who you were, you wouldn't have to think about what you're seeing on the screen—you could simply scan, click, and go.</p>

        <h4>Inventory and research</h4>
        <p>In order to decide which components to construct in Mosaik, I went through as much of HSB Affärsstöds existing services as possible, noting which components were prominent and not. After doing this, I benchmarked designsystems of large scale organizations with similar needs – among others IBM, Google, Atlassian, Adobe and IKEA. Noting which components were necessary for HSB’s immediate needs and which would be superfluous or ineffective, I got to work.</p>
        
        <h4>Design Thinking on an atomic level</h4>
        <p>Each component underwent a two-week process for its initial version, including ideation, testing, construction, and documentation. New components were introduced only when they served a specific purpose that existing ones couldn't adequately fulfill. This approach aimed to reduce design inconsistency and create recognizable patterns for users to learn and internalize.</p>
        <p>Throughout the process, I adhered closely to usability best practices to create intuitive components that would meet user expectations and enhance learnability. I consistently benchmarked my designs against existing design systems and popular platforms. The designs were then tested through a combination of preference tests, A/B tests, and qualitative interviews to find out what users were thinking and feeling. This research was then fed back into the design process, sometimes influencing elements as fundamental as design tokens or visual patterns.</p>
        <p>This highly iterative process allowed each insight to refine Mosaik incrementally. The atomic construction and high level of control I'd established made this continuous improvement process seamless and effective.</p>
      </div>

      <FullImage 
      image={mosaik_img}
      caption="Front page of the launched hi-fi prototype."
      />
      {/* 
      <div className="case-text">
        <h3>Putting everything together</h3>
        <p>In order to fulfil the need of easing communication both within and between design and development, it was very important to me that the components in Figma acted in the same way as they'd be expected to in code.
          Therefore, I made sure to build each component as atomically as possible, to mirror how I often structured my own code – it also gave me a higher level of control over each component, assigning each element a source of truth for me to manipulate when needed.
        </p>
      </div>

      <div className="case-text">
        <h3>Prototyping and User feedback</h3>
        <p>In order to fulfil the need of easing communication both within and between design and development, it was very important to me that the components in Figma acted in the same way as they'd be expected to in code.
          Therefore, I made sure to build each component as atomically as possible, to mirror how I often structured my own code – it also gave me a higher level of control over each component, assigning each element a source of truth for me to manipulate when needed.
        </p>
      </div>

      <div className="case-text">
        <h3>The result</h3>
        <p>In order to fulfil the need of easing communication both within and between design and development, it was very important to me that the components in Figma acted in the same way as they'd be expected to in code.
          Therefore, I made sure to build each component as atomically as possible, to mirror how I often structured my own code – it also gave me a higher level of control over each component, assigning each element a source of truth for me to manipulate when needed.
        </p>
      </div>

      <div className="case-text">
        <h3>What I learned</h3>
        <p>In order to fulfil the need of easing communication both within and between design and development, it was very important to me that the components in Figma acted in the same way as they'd be expected to in code.
          Therefore, I made sure to build each component as atomically as possible, to mirror how I often structured my own code – it also gave me a higher level of control over each component, assigning each element a source of truth for me to manipulate when needed.
        </p>
      </div>
      */}

      <BackToTop />

    </div>

    

  )
}
 
export default MosaikContent;