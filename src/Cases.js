import React from "react"
import ProjectObject from './portfolio-object.js'; // Import the Thumbnail component
import './App.scss';
import remap from './assets/remap.png';
import konstrukt from './assets/konstrukt.png';
import amhjo from './assets/amhjo.png';
import leo from './assets/leo.png';
 
function Remap(props) {

    return (
          // Render a Thumbnail component
        <div className="container-project">
          <div className="project-container">
            <div className="project-1">
                <ProjectObject
                    title="Re:map"
                    category="Grafisk design"
                    uppdragstyp="Skolarbete"
                    uppdragsgivare="n/a"
                    datum="December 2020 – Januari 2021"
                    uppdrag="Grafisk profil och pitchmaterial"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et."
                    image={remap}
                    desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    image2={remap}
                    desc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    desc3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
            </div>
          </div>
        </div>
    )
  }
   


function Konstruktivism(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  title="Konstruktivism"
                  category="Grafisk design"
                  uppdragstyp="Skolarbete"
                  uppdragsgivare="n/a"
                  datum="December 2020 – Januari 2021"
                  uppdrag="Grafisk profil och pitchmaterial"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et."
                  image={konstrukt}
                  desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
          </div>
        </div>
      </div>
  )

}

function Chrome(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  title="Konstruktivism"
                  category="Grafisk design"
                  uppdragstyp="Skolarbete"
                  uppdragsgivare="n/a"
                  datum="December 2020 – Januari 2021"
                  uppdrag="Grafisk profil och pitchmaterial"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et."
                  image={amhjo}
                  desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
          </div>
        </div>
      </div>
  )

}

function Leo(props) {

  return (
        // Render a Thumbnail component
      <div className="container-project">
        <div className="project-container">
          <div className="project-1">
              <ProjectObject
                  title="Leo;"
                  category="Grafisk design"
                  uppdragstyp="Skolarbete"
                  uppdragsgivare="n/a"
                  datum="HT19"
                  uppdrag="Grafisk profil och pitchmaterial"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et. sed do eiusmod tempor incididunt ut labore et."
                  image={leo}
                  desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
          </div>
        </div>
      </div>
  )

}
 
export {
  Remap,
  Konstruktivism,
  Chrome,
  Leo
}