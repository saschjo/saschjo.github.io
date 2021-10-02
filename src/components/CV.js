import React from "react"

function CV(props) {
  return (
    <div className="container-resume">
      <section id="resume">
      <h1>Resume</h1>
      <span class="pdf-button">PDF download</span>
      <h3 class="target">Experience</h3>
        <section class="entry">
          <p class="position">Vice chairman, Graphic designer and Webmaster</p>
          <p class="year">Aug. 2019 – Ongoing</p>
          <p class="company">Hedvig Eleonora Scoutkår</p>
        </section>

      <h3>Education</h3>
        <section class="entry">
          <p class="position">BoS. in Media Technology – ICT, Media and Design</p>
          <p class="year">Aug. 2019 – Ongoing</p>
          <p class="company">ICT, Media and Design, Södertörn University</p>
        </section>

      </section>
    </div>
  )
}

/*Gör om denna till en component pls*/

export default CV;

