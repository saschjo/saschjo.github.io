import React from "react";
import FullImage from "./CaseCmpnts.js";
import mosaik_img from './assets/mosaik/mosaik_img.png';
import mosaik_img_cover from './assets/mosaik/mosaik_img_cover.png';
import mosaik_tokens from './assets/mosaik/mosaik-tokens.png'
import mosaik_colors from './assets/mosaik/mosaik-colors.png'
import mosaik_components from './assets/mosaik/mosaik-components.png'
import mosaik_modals from './assets/mosaik/modals.png'
import placeholder from './assets/mosaik/placeholder.png';
import minprofil from './assets/mosaik/minprofil.png';
import mosaik_img_icons from './assets/mosaik/mosaik_img_icons.png';
import mosaik_datatable from './assets/mosaik/data table.png';
import mosaik_img_btn from './assets/mosaik/mosaik_img_btn.png';
 
function MosaikContent(props) {
  return (
    <div className="InnerCaseWrapper">
      <div className="case-text">
        <h2>Introduction</h2>
        <h3>Project introduction</h3>
        <p>HSB Affärsstöd is a nationally co-operated organization with over 100 years of history and a broad, diverse user base—from young adults seeking their first apartment to senior stakeholders involved in co-op councils.</p>
        <p>I was brought on as a UX Engineer to help bridge the gap between design and development. Early on, I identified several friction points that were slowing down delivery, wasting resources, and diminishing user satisfaction.</p>
        <h4>My role</h4>
        <p>I created Mosaik, HSB’s first-ever design system, and led its development for 2.5 years. I was responsible for independently designing, testing, and documenting the vast majority of components, tokens, and patterns. Through extensive collaboration and stakeholder advocacy, I turned Mosaik from a personal initiative into a critical, organization-wide investment.</p>
    </div>

    <FullImage 
      image={mosaik_datatable}
      caption="Front page of the launched hi-fi prototype."
      />

    <div className="case-text">
        <h3>Problem statement</h3>
        <p>HSB Affärsstöd offered over 30 different services but lacked a unified design approach. The waterfall process relied heavily on internal assumptions, often ignoring actual user needs. This led to a fragmented UX landscape: inconsistent design patterns, long development times, and significant user frustration.</p>
        <p>Teams frequently rebuilt components from scratch, leading to inefficiencies and confusion. Internally and externally, trust in the digital experience was low. Speculative features aimed at speculative needs cost time, money, and morale.</p>
        <p>So how could we meet the needs of both users and internal teams in a scalable, maintainable way?</p>
      </div>

      <FullImage 
      image={mosaik_modals}
      caption="An excerpt from the Mosaik documentation utilizing the spacing tokens and types of mobile modals."
      />

      <div className="case-text">
        <h2>How we did it</h2>
        <h3>Starting on a sub-atomic level</h3>
        <p>I proposed an atomic design approach to build the system from the ground up. This method offered modular control while promoting speed and reusability—key business objectives. For the first two months, I was joined by UX colleague Amina Muftic, who helped establish the foundation of Mosaik.</p>
       <p>We adapted HSB’s brand guidelines to meet WCAG 2.0 standards, adjusting colors to a minimum AA contrast level. Inspired by systems like Adobe Spectrum, we categorized tokens (e.g., background, border, foreground) for greater clarity. A single update—like --mosaik-background-color-neutrals-300—could cascade across the entire system.</p>
       <p>We applied this rigor to all visual attributes: spacing, sizing, radius, and shadow. Tokens were divided into Core and Alias sets, ensuring both flexibility and precision. These tokens were integrated directly into Figma and exported as JSON files, which our frontend developer, Frida Frick, converted into CSS/SCSS variables via Style Dictionary.</p>

       <h4>Maintaining token integrity</h4>
       <p>To prevent token bloat and maintain cohesion, I established a rule: a new token must be used at least three times across independent components before formal inclusion. Each token underwent a trial period in Figma before being finalized. This ensured thoughtful implementation and system-wide harmony.</p>
       
       <FullImage 
      image={mosaik_components}
      caption="A selection of components I've designed and built in Figma, from smallest atom to more complex organism."
      />
        <h2>Design system in practice</h2>
        <h3>Atoms to organisms</h3>
        <p>Mosaik was designed to be intuitive for all users. Every detail—no matter how small—was crafted with the intent of reducing friction and cognitive load. Regardless of who you were, my goal was that you wouldn't have to think about what you're seeing on the screen—you could simply scan, click, and go.</p>

        <h4>Research and inventory</h4>
        <p>I audited HSB’s services to identify key components and mapped these against successful systems from IBM, Google, Atlassian, Adobe, and IKEA. This helped prioritize which components were essential and which were out of scope.</p>

        <h4>Process and QA</h4>
        <p>Each component followed a two-week lifecycle: ideation, testing, construction, and documentation. Components were only added when existing ones couldn’t solve the problem, helping prevent redundancy and boost UX consistency.</p>

        <h4>User testing and feedback loops</h4>
        <p>We tested components through interactive prototypes, preference and A/B tests (via Hotjar), and interviews via Teams. These insights often led to fundamental improvements in patterns and tokens. Because of Mosaik’s atomic structure, improvements could be implemented across the system instantly—making iteration fast, efficient, and user-centered.</p>
      </div>

      <div class ="case-text">
      <FullImage 
        image={mosaik_img_btn}
        caption="A page from a presentation explaining how design tokens work."
        />
        <h3>Stakeholders and Business Strategy</h3>
        <h4>Demystifying Design Systems</h4>
        <p>To build buy-in and literacy, I presented Mosaik during company-wide PI Planning events (200+ attendees) and in smaller stakeholder sessions. I used visual metaphors—like Lego blocks—to help non-designers build a mental model of how the system works and why it matters.</p> 
        <p>Multiple colleagues approached me afterward to express how much the sessions improved their understanding and trust in the design process.</p>

        <h4>Starting a Community of Practice</h4>
        <p>At the start, developers were siloed, with little cross-team collaboration. I formed a Community of Practice—a dedicated space for experienced devs to co-create the technical foundation of Mosaik.</p>
        <p>The group helped future-proof the system, align business goals with technical feasibility, and encourage better communication between decision-makers and implementers.</p>
      </div>

      <div class ="case-text">
        <h3>Challenges and how I solved them</h3>
        <h4>Time and prioritization</h4>
        <p>I was the only person working on Mosaik full-time while also handling other product design responsibilities. To stay on track, I maintained a personal Trello board and practiced transparent communication with my team and Product Owner—proactively flagging risks and trade-offs as they arose.</p>
        
        <h4>Balancing control with creative freedom</h4>
        <p>Previously, too much design freedom led to visual inconsistency. I introduced a constrained spacing system based on an exponential 8px scale (inspired by Tailwind CSS). By eliminating ambiguous “medium” values, designers were nudged into using deliberate, intentional spacing—resulting in cleaner, more unified interfaces.</p>
      </div>

      <div class ="case-text">
        <h3>Result</h3>
        <p>Today, Mosaik is embedded in HSB Affärsstöd’s digital strategy. It has dramatically improved product quality and development speed. In usability tests:

          <ul>A redesigned legacy product saw its Hotjar satisfaction score rise from 2.4 to 4.6.</ul>

          <ul>UMUX scores consistently show higher usability and appeal for Mosaik-based products.</ul>

          <ul>Users describe products using Mosaik as "intuitive," "easy," and "clean."</ul>

          <ul>Development times have dropped from months to weeks for new features.</ul>

        The system has brought measurable benefits to users, designers, and developers—saving time, reducing costs, and improving satisfaction across the board.</p>
        
        <h4>What's next for Mosaik?</h4>
        <p>As a living product, Mosaik must continue to grow, adapt, and evolve. Continuous testing and iterative development will be essential to maintain its current usability standards.</p>
      <p>Due to recent organizational changes, Mosaik no longer has a dedicated governance structure. I’ve stepped down from the Lead role to focus on product design, but I strongly recommend establishing a dedicated Design System Team to maintain vision, quality, and strategic alignment.</p>
      </div>

      <div class ="case-text">
        <h3>What I learned</h3>
        <p>Working on Mosaik for 2.5 years has been one of the most formative experiences of my career. Some challenges only revealed themselves with time—and that’s okay. Every design system evolves through trial, error, and iteration.</p>        
        <p>If I could do it again, I’d push even harder for early-stage UX research to build stronger foundations. Still, I’m very proud of the system’s impact and of the collaborative culture it fostered across design and engineering.</p>
      </div>

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

    </div>

    

  )
}
 
export default MosaikContent;