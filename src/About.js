import React from "react"
 
function About(props) {
  return (
    <div className="container-about">
      <h1>About</h1> 
      <div className="row">
        <div className="column-1">
        <p>I'm a freelance web and graphic designer soon to receive my BoS in Media technology at the ICT, Media and design program at Södertörn University.
          In my spare time, I enjoy drawing, eating awesome food and coding stuff (like this website!)
        </p>

        <p>I first found my love for code as a member of Stallet.se, a Swedish website that sort of functioned as Neopets for 
          kids who loved horses. With the power of HTML tags like &#60;marquee&#62;, &#60;center&#62; and &#60;b&#62;, I promptly 
          spent hours upon hours creating intricate designs in Gimp and bedazzeling them with gorgeous HTML code.</p>
      
       </div>

        <div className="column-2">
          <span class="pdf-button">PDF download</span>
        </div>
      </div>
       {/* 
          <span class="proficiency">Adobe Photoshop</span> <div class="progressbar" style={{width: "60%"}}></div>
          <span class="proficiency">Adobe Illustrator</span> <div class="progressbar" style={{width: "40%"}}></div>
          <span class="proficiency">Adobe InDesign</span> <div class="progressbar" style={{width: "60%"}}></div>
          <span class="proficiency">Adobe AfterEffects</span> <div class="progressbar" style={{width: "20%"}}></div>
          <span class="proficiency">Figma, Adobe XD</span> <div class="progressbar" style={{width: "40%"}}></div>
      */}
    </div>
  )
}
 
export default About;