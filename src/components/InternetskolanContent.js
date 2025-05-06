import React from "react";
import FullImage from "./CaseCmpnts.js";
import internetskolan_moodboard from './assets/internetskolan/internetskolan_moodboard.png';
import internetskolan_personas from './assets/internetskolan/internetskolan_personas.png';
import internetskolan_behovsanalys from './assets/internetskolan/internetskolan_behovsanalys.png';
import internetskolan_kravspec from './assets/internetskolan/internetskolan_kravspec.png';
import internetskolan_lilalinjen from './assets/internetskolan/internetskolan_lilalinjen.png';
import internetskolan_framsida from './assets/internetskolan/internetskolan_framsida.gif';
import internetskolan_lofi from './assets/internetskolan/internetskolan_lofi.png';
import internetskolan_coloriteration from './assets/internetskolan/internetskolan_coloriteration.png';
import internetskolan_hifi_wireframes1 from './assets/internetskolan/internetskolan_hifi_wireframes1.png';
import internetskolan_kodplan from './assets/internetskolan/internetskolan_kodplan.png';
import internetskolan_overview from './assets/internetskolan/internetskolan_overview.png';
import internetskolan_final1 from './assets/internetskolan/internetskolan_final1.png';
import internetskolan_howmightwe from './assets/internetskolan/internetskolan_howmightwe.png';
import internetskolan_insights from './assets/internetskolan/internetskolan_insights.png';
import internetskolan_idegen from './assets/internetskolan/internetskolan_idegen.png';
import internetskolan_trigger from './assets/internetskolan/internetskolan_trigger.png';
import internetskolan_finalhifi from './assets/internetskolan/internetskolan_finalhifi.png';
import internetskolan_illustrationer from './assets/internetskolan/illustrationer.jpg';

import BackToTop from "./BackToTop.js";
 
function InternetskolanContent(props) {
  return (
    <div className="InnerCaseWrapper">

      <FullImage 
      image={internetskolan_framsida}
      caption="Front page of the launched hi-fi prototype."
      />

      <div className="visit-case-subject">
        <a href={'https://saschjo.github.io/internetskolan/'}>Experience Internetskolan here →</a>
        <p>* This prototype is not responsive, and works best on 13" screens.</p>
      </div>

      <div className="case-text">
        <h3>Introduction</h3>
        <p>In the spring of 2021, we were tasked to take on real, live design projects with a client as part of the class “Designproject” (7,5hp). We had a month to work with our client and produce a design solution to fit their needs. We got paired with Spånga-Tensta Municipality to help them find solutions to the digital divide in the community.</p>
        <h4>Project background</h4>
        <p>The digital divide refers to different groups in society being shut out from different services and opportunities due to low digital literacy. In Spånga-Tensta municipality, the digital divide especially affects seniors and people with disabilities. Spånga is a middle-class, fairly affluent and predominantly white community, while Tensta is of lower socioeconomic status, much more culturally and ethnically diverse, and is listed on the Swedish Police’s list of especially vulnerable areas. As such, there also exists a sociocultural divide between the communities.</p>
        <h3>Problem statement</h3>
        <p>Spånga-Tensta municipality administration tasked us with finding solutions for the digital divide in the municipality, especially regarding the elderly and those with neuropsychiatric disabilities. As such, our problem statement became: <em>“How can we solve the issue of the digital divide in Spånga-Tensta?”</em></p>
      </div>

      <FullImage 
      image={internetskolan_overview}
      caption="An overview of our Mural wall, where we did most of our Empathy, Define and Ideate work."
      />

      <div className="case-text">
        <h3>Design Thinking</h3>
        <p>We decided to work with design thinking in order to build a thorough, user centered focus for our solution, as well as iterate our concept throughout the project. We used Mural to collaborate, gather our thoughts and insights, as well as analyze and map our findings as we went.</p>
        <h3>Empathy</h3>
        <h4>Contextual user research</h4>
        <p>Prior to the project, we  individually conducted heavy user research into Spånga-Tensta as a single municipality and individual communities. This way we created an understanding for the complexities of the communities, how users might differ or be similar, as well as finding interesting perspectives to work with during the project. We also analyzed external data on the digital divide from The Public Heath Agency of Sweden, The Swedish Internet Foundation and SeniorNet.</p>
       </div> 

       <FullImage 
      image={internetskolan_insights}
      caption="Mapped and categorized insights from research articles as well as our user surveys."
      />

       <div className="case-text">
        <h4>User surveys and data mapping</h4>
        <p>As this was during the height of the pandemic and our users were vulnerable to infection as well as possessing low digital literacy, it was hard for us to meet our users “in the wild”. We decided to conduct user surveys to get in touch with our users. I was very involved in both shaping, spreading and analyzing the surveys.</p> 
        <p>We shared the surveys in different Facebook groups for people living in Spånga and Tensta, and asked that they help our users partake in the survey by functioning as spokespersons. As the response count was lower than we’d have liked, we also got in touch with elderly people affected by the digital divide outside of Spånga-Tensta to receive insight on the issue on a wider scale. Afterwards, we mapped our findings and iteratively added insights produced as a result. I suggested color coding our findings for an easier overview.</p>
      </div>

      <FullImage 
      image={internetskolan_behovsanalys}
      caption="The insight maps we created from our user research, the blue post-its representing data from our surveys and orange representing data from external research."
      />

      <div className="case-text">
        <h4>Mapping insights and user needs</h4>
        <p>Once we'd gathered enough data, we summarized and analyzed our findings by mapping our users' needs. From the survey turnout, we realized we wouldn't be able to get in touch with enough neurodivergent people to support our user centered methodology. We decided it'd be better to shift our focus to seniors, who'd proven to be much better represented in our research. However, we realized both groups had some needs in common, such as minimizing mind strain, creating intuitive navigation and short, concise paragraphs, and so our solution would be able help some of these users as well. This felt important to me, as they were also affected by the digital divide.</p>
      </div>

      <FullImage 
      image={internetskolan_personas}
      caption=""
      />

      <div className="case-text">
        <h4>Personas</h4>
        <p>Based on the data from the surveys, we created three personas. Agda, Nahom, and Anna. Agda and Nahom were part of our primary user group; seniors living in Spånga and Tensta. Anna represented our secondary user group; younger users with neurodivergency. Their common denominator was experiencing difficulties due to the digital divide. The personas were made to represent different demographics and people in Spånga-Tensta, which was very important to us, as well as our client, in designing our solutions.</p>
      </div>

      <FullImage 
      image={internetskolan_howmightwe}
      caption="An excerpt from our brainstorm on Point of View and How Might We-statements."
      />

      <div className="case-text">
        <h3>Define</h3>
        <h4>Point of View and How Might We</h4>
        <p>To get closer to understanding our users’ needs, we produced a myriad of How Might We-prompts as well as a collective Point of View.</p>
        
        <div className="bigwords">
          <h3>Elderly people over 65 need to learn more about the internet in order to dare to be involved.</h3>
          <div className="bigwords-caption">– Our Point of View</div>
          <h3>How might we teach seniors about the internet in a fun and inspirational way?</h3>
          <div className="bigwords-caption">– Our final How Might We-prompt</div>
        </div>
        <h4>Core values</h4>
        <p>As the project was evolving, the amount of information we’d collected about our users, Spånga-Tensta and different strategies began to pile up. To prevent getting off track, I suggested we condense our user insights into a few core values to lead our project throughout our iterative process. These were:</p>
        <div className="bigwords">
          <h3>Knowledge, Meaningfulness, Participation, Safety, Independence.</h3>
            <div className="bigwords-caption">– Our core values</div>
        </div>
      </div>

      <FullImage 
      image={internetskolan_kravspec}
      caption="The requirement specification we created in Mural."
      />

      <div className="case-text">
        <h4>Requirement specification</h4>
        <p>Following our user research and analysis, I suggested we create a requirement specification to follow and iterate on throughout the project. This was used to recognize and identify different constraints and goals the project had to adhere to and meet, and communicate those to the entirety of the group. I initiated working with the three stages of functional, cognitive and emotional needs, as well as functional and non-functional requirements.</p>
      </div>

      <FullImage 
      image={internetskolan_idegen}
      caption="An excerpt from our brainstorm and cluster session."
      />

      <div className="case-text">
        <h3>Ideation</h3>
        <h4>Brainstorming with post-it clusters</h4>
        <p>Drawing from all the data we’d collected, we began brainstorming different ideas. Afterwards, we clustered similar concepts together and color coded them to get a better overview. Interesting concepts and ideas that stayed throughout the entire project included a service through the municipality libraries allowing seniors to rent digital devices, as well as personnel helping out with, for example, applying for- and installing digital ID, setting up devices and downloading apps. </p>
       </div> 

       <FullImage 
      image={internetskolan_moodboard}
      caption="An early moodboard for what Internetskolan could look and feel like."
      />

       <div className="case-text">
        <h4>The birth of Internetskolan</h4>
        <p>Inspired by the online course Elements of AI I’d taken during the summer, I suggested a website that would function as a sort of “start” to the internet – a free, open online course with lessons on different subjects related to the internet, how it works and how to utilize it (from basic to advanced) that the users could go through at their own pace. The thought was to help our users get a a better grasp on the internet by helping them create more informed mental models. Discussing the idea within the group, we added that the website could also contain helpful features such as a link bank of useful and safe links, and a lexicon to learn more about internet slang and expressions. It would also be important to be able to choose between languages predominant in Spånga-Tensta, such as arabic and tigrinya. Both the project group, client and teachers loved the idea, and we decided to pursue it further.</p>
      </div>

      <FullImage 
      image={internetskolan_trigger}
      caption="The four styles used in the online surveys (left), and the typographic- and color treatments we asked users to rate in real life (right)."
      />

      <div className="case-text">
        <h4>Trigger material</h4>
        <p>We continued to iterate our concept through quick feedback cycles with our users. To settle on a visual style, we created trigger material to present to users. These were performed both through online surveys and real life sit downs, allowing users to rate what they liked and disliked, as well as tell us why. This stage also presented us with new, important information, such as users preferring shorter paragraphs with many illustrations due to it easing their mental strain. Our users really liked the bright, minimalistic styles with simple, rounded illustrations, layouts with plenty of white space as well as the color purple.</p>
      </div>

      <FullImage 
      image={internetskolan_lilalinjen}
      caption="Concept illustrations of Lila Linjen made by me."
      />

    <div className="case-text">
      <h4>Lila linjen – "The purple line"</h4>
      <p>As part of our brainstorming sessions, we discussed how to help seniors contextualize the platform. Inspired by a train line map our project leader Linda Norlén had drawn to illustrate the users’ location on the site as well as lesson structure, I came up with the idea of Lila Linjen (The Purple Line).</p> 
      <p>Lila Linjen would act as a metaphor for the whole concept, having different stations (lessons) that would teach the user new things, while using trains as a metaphor both in copy, illustrations and for teaching. We also thought Lila Linjen would be a great way to bring Spånga and Tensta together as a community. Our client adored the idea, and so did we.</p>
    </div>

    <FullImage 
      image={internetskolan_lofi}
      caption="Our lo-fi wireframes created in Figma."
      />

    <div className="case-text">
      <h3>Prototyping</h3>
      <p>As we were working completely remotely, I suggested to work together through Figma, actively referring to our user research, maps and insights produced in Mural. During this time, I was heavily involved in designing both the UX and UI, focusing on intuitiveness and accessibility according to the needs we’d recognized in our user research.</p>
      <h4>Lo-Fi prototyping</h4>
      <p>The goal of the lo-fi prototype was to convey the concept idea to our user group and client in order to get further feedback on the concept, page types and layout.</p> 
      <p>As we couldn't test on our users directly due to the pandemic, we had to find user representatives of a similar demographic within our close circle. We tested the prototype by presenting the wireframes to these representatives on tablets and laptops, describing the goal, idea, and what a lesson could look like. Both users and client liked the idea very much, and gave us some more valuable tips to implement in later iterations, such as the value of making the website feel safe and adding descriptive captions to images and interactables.</p>
    </div>

    <FullImage 
      image={internetskolan_hifi_wireframes1}
      caption="Our first iteration of hi-fi wireframes in Figma, where Lila Linjen was still the main concept."
      />
    
    <div className="case-text">
      <h4>Hi-fi prototype phase 1</h4>
      <p>The hi-fi wireframes were designed with the intention of making the website fun, easy and encouraging to use. The colors, layout, typography and illustration style were all based on user feedback from the trigger material.</p>
      <p>Once more we sat down with the representatives and asked them to interact with the wireframes and tell us what they thought. They liked the overall look and feel a lot, and found the website easy and fun to use as well as helpful for their needs. However, some felt that Lila Linjen as a metaphor might be confusing, and actually make it harder to use the website. We decided to rework the concept, and instead use Lila Linjen as an all-encompassing concept for dealing with the digital divide within Spånga-Tensta wherein the website played a part.</p>
    </div>

    <FullImage 
      image={internetskolan_coloriteration}
      caption="Color and UI iterations throughout the project."
      />
    <FullImage 
      image={internetskolan_finalhifi}
      caption="Our second phase hi-fi wireframes."
      />

    <div className="case-text">
      <h4>Hi-fi prototype phase 2</h4>
      <p>As the structure and layout of the website had received such a great response from the representatives, we were able to spend a lot of our remaining time working on the UI, which I spent a lot of time on. Among other things, I designed the header, wanting to keep things simple yet intuitive and easy to find. I was also heavily involved in designing the layout for the front page, lessons and link bank.</p>
      <p>We tried an array of different color combinations to make the website feel safe, educational and fun, resulting in us settling on blue for a while. However, this was later changed due to the blue not feeling fun or engaging enough, and users (as well as us) preferring the energetic purple look. I spent a lot of time working on the color treatment and typography.</p>
    </div>

    <FullImage 
      image={internetskolan_kodplan}
      caption="An excerpt from our code planning sessions in Figma."
      />

    <div className="case-text">
      <h3>Developing the web based MVP</h3>
      <p>To finish up the project and showcase our solution to the client and their stakeholders, we developed a web based MVP prototype. At this point, the group split into our respective roles. I worked as head web developer, Desirée Strand as head media producer, Lava Persaw as head UX-designer and Linda Norlén as project manager.</p>
      <p>We continued to work collaboratively according to our specialities, and worked live over Zoom during the entire workday to give and receive feedback and direction from the team as a whole. For example, I continued to do a lot of work on the UI, Linda on graphic design, and Lava on documentation. Desirée, Linda and I developed the majority of the website together.</p>
      <h4>Planning and execution</h4>
      <p>To make the collaborative coding seamless, I suggested we plan out how each part of the website would be built in Figma. This way, we could find and solve problems before they appeared, and make sure the code was uniform throughout despite never having coded together prior. It became a sort of visual pseudo-code. We decided to create the website using HTML, vanilla CSS and jQuery as all of us knew how to work with these well. We coded collaboratively using Visual Studio Code Live Share and LiveServer hosted by my (poor) laptop, GitHub and Zoom. From start to finish, the MVP took about two weeks to produce.</p>
    </div>

    <FullImage 
      image={internetskolan_illustrationer}
      caption="The beautiful illustrations created by Desirée Strand and Linda Norlén."
      />

    <div className="case-text">
      <h4>Adding the Illustrations</h4>
      <p>We wanted to use illustrations throughout Internetskolan to help users absorb information easier, and radiate a fun, welcoming vibe. From our trigger material and user testing, we knew users preferred a rounded, simplistic and colorful look inspired by the animation style of YouTube channel Kurzgesagt. These were then beautifully made by our project leader Linda Norlén and media producer Desirée Strand. Featured are Agda and Nahom, our primary personas. As a group, we held a meeting to iterate on the designs together, mainly focusing on the colors and minute details. These illustrations were used to aid our users in understanding the material presented in the classes, and make learning both fun and energetic.</p>
    </div>

    <FullImage 
      image={internetskolan_final1}
      caption="Screenshots from the final MVP web experience."
      />

    <div className="case-text">
      <h3>Result</h3>
      <h4>Final iteration and MVP</h4>
      <p>As we were developing, we re-worked the color palette to a more vibrant purple with a bright pink accent color. I was very involved in the final touches on both UX and UI, and developed a majority of the MVP together with Desirée. A wave shape was added on the top and bottom to give the website a more organic and warm feel. We also iterated on the location tracker at the bottom to make the site easier to navigate, and added a back to top-button. I simplified the headers of the lessons to make it more clean and the content more readable. Since we'd spent so much time working on our hi-fi wireframes and planning our code, it was a seamless process to convert our design to code and continuously iterate on individual elements in this way.</p>
      <h4>Client response</h4>
      <p>Internetskolan and our MVP was lauded by both our client, teachers and classmates alike. We got great feedback on the extent of our research and user testing (despite working 100% remotely), our approach to solving the problem at hand and attention to detail. Our client was extremely happy with the result, and wished to pursue it further by introducing it to their higher-ups. At the end of the project, our client even offered to act as references for us, and were very interested in having us come back to work with them in the future.</p>
      <h4>The future of Internetskolan</h4>
      <p>As we only had access to people outside the specific user group of elderly people living in Spånga-Tensta, performing rigorous user testing with the actual users in mind should be the top priority for any future development of Internetskolan. As we only had time to finish a very hi-fi prototype within the scope of the project, it would also be necessary to further develop lessons, the lexicon and link page.</p>
      <h3>What I learned</h3>
      <p>Through working on this project, I learned a lot more about working with different demographics, the usefulness and necessity of proper user research, and gained more confidence in my UI and web development abilities. Working solely on this project for a whole month was a true joy, and by the end I was so excited about it all I wanted was to keep working on it. Finally, I learned more about working with surveys, data gathering and user testing to create a bespoke, user centered design solution.</p>
    </div>

    
    </div>

  )
}
 
export default InternetskolanContent;