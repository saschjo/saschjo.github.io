import React from "react";
import FullImage from "./CaseCmpnts.js";
import remap_1 from './assets/remap/remap_1.png';
import remap_personas from './assets/remap/remap_personas.png';
import remap_2 from './assets/remap/remap_2.png';
import remap_3 from './assets/remap/remap_3.png';
import remap_4 from './assets/remap/remap_4.png';
import remap_5 from './assets/remap/remap_5.png';
import remap_paper_storyboard from './assets/remap/remap_paper_storyboard.png';
import remap_logo from './assets/remap/remap_logo.png'
import remap_logo_sketches from './assets/remap/remap_logo_sketches.png'
import remap_screens_before from './assets/remap/remap_screens_before.png'
import remap_results from './assets/remap/remap_results.png';
import BackToTop from "./BackToTop.js";
 
function RemapContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <iframe src="https://player.vimeo.com/video/500366747?h=9f3a46c6e1" height="500px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

      <div className="case-text">
        <h3>Introduction</h3>
        <h4>Project background</h4>
        <p>In urban development, the voices of teens are often set aside. Many young people in society feel like they don't have any say in the way their city looks and feel, and that even if they did speak up, it wouldn't matter. In this project, we were challenged to create pitch material in the form of a graphic identity and pitch film, as well as further develop a product concept already created and supported by user research done by our classmates to solve this issue. We chose to take on Re:Map. </p>
        <p>Re:Map's concept was the placement of interactive screens in different parts of Sweden, focusing on places with lacking incorporation of youths in their urban planning. These screens would allow teens to make suggestions, wish for different kinds of development in their area (a pizzeria, soccer field, park etc) and vote on each other's ideas.</p>
        <h3>Our mission</h3>
        <p>Re:Map lacked a distinct identity, hadn't developed a thorough concept for what the physical screens and UI would look and feel like, or how to engage with the target user group to promote usage of the product. Re:Map felt very quiet, neutral, and lacked a spark we felt was needed to engage with teens and make them interact with the product. These were the main problems we decided to tackle.</p>
      </div>

      <FullImage 
      image={remap_1}
      caption="The concept I'd created prior to the group project (left) and the final moodboard created by the group (right)"
      />

      <div className="case-text">
        <h3>A modern punk workshop</h3>
        <h4>My moodboard</h4>
        <p>In the days prior to the group project, we were each given one day to complete a moodboard for a concept of our choice. I decided to work on Re:Map. I wanted to encourage physically creating with your hands, and created the concept of youth workshops where you could play around with and explore different materials to create and visualise ideas. </p>
        <p>To attract teens to the concept and make it stand out, I worked hard to incorporate Norman’s three levels of design into the visual language, especially the visceral level.</p>
        <h4>Group moodboard</h4>
        <p>We decided to base our group project on my moodboard and develop it further. We were very inspired by deconstructivism and classic punk and their historical roots. The workshop concept from my moodboard was further developed into a modern punk workshop, where you could spend time with other likeminded teens after school and create in a limitless, creative and rebellious space. These were inspired by places such as Kulturhuset’s Lava.</p>
      </div>


      <FullImage 
      image={remap_personas}
      caption="Erin and Lo, our primary target audiance, and Mikael and Adriana, our secondary target audience."
      />

      <div className="case-text">
        <h3>Design methodology</h3>
        <h4>Design thinking</h4>
        <p>We started out with the design thinking process to build empathy with our user group. This was based on user research conducted by the original product design group. Then, we explored different ideas and visual concepts through post-it clusters on Mural and a moodboard made in Google Slides.</p>
        <h4>Personas</h4>
        <p>To connect with our target audience and get a feel for their needs, we created two young personas to represent our primary target audience, and two secondary personas to represent our secondary. These were based on the user research provided to us by the original concept group.</p>
        <p>The primary audience were teens of varying backgrounds, technical prowess and goals, who felt it was hard to make a difference and that no one would listen if they tried. The secondary audience were adults who were in daily contact with teens, such as parents and high school teachers. What defined them as a group was wanting to help teens make a difference, but not knowing how to go about it.</p>
        <h4>Co-creating remotely</h4>
        <p>Due to the pandemic, this project was done completely remotely. Therefore, we had to communicate well, deliver what we promised and work efficiently through collaborative tools such as Mural, Zoom and Google Drive. An important aspect of our project is that we all worked together on every deliverable together: We were each given responsibility for designing and producing individual pieces, but we all came together as a group to iterate, propose new directions and hand off designs to finish different bits and pieces.</p>
      </div>

      <FullImage 
      image={remap_2}
      caption="The final typography, logotypes, color scheme and icon variations."
      />

      <div className="case-text">
        <h3>Typography, patterns and colors</h3>
        <h4>Typography</h4>
        <p>The main typography was lifted from my original concept. I chose the humanist sans serif Syne for headlines because of its wide, bold and modern look, as well as industrial feel, echoing geometric industrial fonts such as Eurostyle. </p>
        <p>For the body, I chose Work Sans as a softer yet complimentary sans serif to balance out Syne’s bold presence. The goal was for the typography to elicit an industrial feel while still showing warmth; to take up space while still remaining open. To further add to this, as well as the punk feel, we added Märkpenna, a custom typeface created by our team mate Sebastian Åhman, as a display typeface to emphasise the DIY and rebellious feel of the concept as a whole.</p>
        <h4>Industrial textures, colourful shapes</h4>
        <p>The look and feel of Re:Map was very important for us. We wanted to include representations of industrial urban textures like metal plating, plywood panels and overgrowth into the design, while keeping a bold, symbolic and colorful aesthetic. To achieve this, we created a bright color palette, and symbolic patterns and shapes that would repeat throughout the profile. Our team mate Desirée Strand created the hashed texture seen throughout the visual language, and I created the dotted one.</p>

      </div>

      <FullImage
      image={remap_logo_sketches}
      caption="Early digital sketches I made to explore ideas for the logo; the ones to the left remained virtually unchanged throughout the project." />

      <FullImage
      image={remap_logo}
      caption="The final logo with the tagline added in." />

      <div className="case-text">
        <h3>Logotype and icon</h3>
        <h4>Logotype</h4>
        <p>For the logo, we decided to rework the one from my moodboard a bit to fit our new direction more. I was given this task.</p>
        <p>I worked to make the logo stand out and communicate the concept clearly in different situations. For this reason I used our dotted texture, different font weights in Syne and colors from the graphic profile. The different font weights also clarifies the humanist characteristics in Syne, adding to a warm and welcoming look. The two coloured lines represent the interactive screens, and how ideas put into one end affects the other. The finalised version features the addition of our tagline, added by Sebastian.</p>
        <h4>Icon</h4>
        <p>Re:Map’s icon is a map pin, signifying the functionality of the product as well as acting as a UI metaphor in digital products. The icon was worked on by me and Sebastian together. The pin is featured throughout the visual language, such as on posters, in the pitch film as well as on the website and screens.</p>
      </div>

      <FullImage 
      image={remap_screens_before}
      caption="The iterative process of creating the screens (to the far left is the original UI for Re:Map). 3D models and renders by Sebastian Åhman, UI by me."
      />

      <FullImage 
      image={remap_4}
      caption="3D mockup of the final screen concept. UI design by me, 3D model and render by Sebastian Åhman."
      />

      <div className="case-text">
        <h3>Screen design</h3>
        <h4>Physical design</h4>
        <p>We wanted the interactive screens to call attention to themselves and make a statement in the environment they were placed in: The goal was for teens to get excited. We played around with different materials, shapes and textures to manifest this in a physical way. We decided on two formats: One futuristic cylindrical screen to allow several users to use the screen at once, and one conventional flat, rectangular screen for single use. </p>
        <p>The metal plating that inspired some of Re:Map’s patterns was re-introduced as a physical texture for the stand, and paired with neon lights to subvert the industrial look and communicate a forward thinking vibe. We also decided to broaden the concept to include an website with the same functionality as the screens, for teens who prefer to create at home, or who aren’t able to use the screens due to different circumstances.</p>
      </div>


      <FullImage 
      image={remap_3}
      caption="A mockup of the rectangular, flat screen (rendered by Sebastian Åhman) and the interactive web experience."
      />

      <div className="case-text">
        <h4>UX and UI</h4>
        <p>I was given the task of creating the UI for the screens and website. The UI was maximalist in its idle state, but minimalist in the interactive one – this way, we could preserve the feel of Re:Map without compromising ease of use or infringe on the user experience. I worked to adhere to Norman’s six design principles, focusing on affordance, signifiers and constraints to create an enjoyable and effective user experience. If the screens were fun and easy to use without having to read instructions prior, more teens would use them and be heard as a result. </p>
        <p>For the interactive UI, I based my design on the user research performed by our classmates. This lead to the incorporation of category based symbols for different kinds of suggestions/ideas and a progress bar.</p>
      </div>

      <FullImage 
      image={remap_paper_storyboard}
      caption="A late stage storyboard drawn by me, and a GIF of the paper animation I made seen throughout the film."
      />

      <div className="case-text">
        <h3>Pitch film</h3>
        <p>In addition to the graphic profile, we were instructed to produce pitch material for a presentation to potential investors. This included a short film showcasing the concept. We wanted to really show what Re:Map was about. Since we had to work remotely, we chose to work with graphics, music and animation to get our message across rather than real-life video footage.</p>
        <h4>Film concept</h4>
        <p>The deconstructivist, cut out images of teens creating a city together paired with the bright color theme, animation and Viagra Boy’s Ain’t Nice were creative choices we hoped would elicit a feeling of wanting to take back the city from the adults, and make their voices heard whether “the suits wanted to listen or not”. The punk spirit really came through in the making of this film. <a href={'https://vimeo.com/500366747'}>Watch it here.</a></p>
        <h4>Production</h4>
        <p>I was heavily involved in the pitch video, working on- and drawing the storyboards, transitions, and film editing. My main responsibility was motion design and stop motion animation. The graphics were made by Desirée Strand in Adobe Illustrator, and then animated by me in After Effects. Together we produced the Re:Do, Re:Set and Create segments in this way. I also shot and created the animated paper sequence seen throughout the video. </p>
        <p>The final cut was edited by me, Simon Karlsson and Sebastian Åhman.</p>
      </div>

      <FullImage 
      image={remap_5}
      caption="Mockups of a bus stop poster (by Desirée Strand) and Instagram post (by Ottilia Olsson)."
      />
      
      <div className="case-text">
        <h3>Engagement</h3>
        <h4>Meeting teens in their space</h4>
        <p>To further engage with teens, we wanted to create a digital- and physical media campaign in spaces where they would naturally spend time. Instagram and bus stops were two such places. To exemplify this, we created mockups of a campaign meant to call teens to action and get involved with Re:Map. Our intent was to further emphasise making them feel part of something bigger, that they would and should be listened to and that they could change their community.</p>
      </div>

      <FullImage 
      image={remap_results}
      caption=""
      />

      <div className="case-text">
        <h3> The result</h3>
        <h4>Pitch presentation</h4>
        <p>Our project was an immense success. During the presentation, our project was deemed one of the best the program has ever seen, and was given very high praise by both our teachers and classmates. Re:Map was described by one teacher as being able to bring a hopeful rebellious spirit into a dull, “overdog” world. The visual hierarchy, scope and voice of the project were met with high praise from both our teachers and guest lecturer visual- and UX designer Andreas Carlsson.</p>
        <p>In the end, we felt that we definitely met the goals we’d set out to achieve at the start of the project, and we’re very happy with having achieved it in such a short amount of time, as well as working 100% remotely.</p>
        <h4>Future development</h4>
        <p>Since user testing wasn’t a part of the project, we didn’t receive any user feedback or opinions from actual teenagers beyond what the original product design group had gathered. Thus, it would be amazing to be able to test the reception of Re:Map through focus groups, and iterate further on the design.</p>
        
        <h3>What I learned</h3>
        <p>As the project was based on my original concept, I had to let go of what I’d created and allow it to grow through our collaborative creative process. Through doing this, Re:Map turned into something greater than I could have ever expected, and I’m very proud to have worked on it as part of the creative team and grateful to have been able to do so. I also got to explore new creative practices and dimensions, such as the punk aesthetic, motion design and editing a fully animated film.</p>
      </div>

      <BackToTop />

    </div>

    

  )
}
 
export default RemapContent;