import React from 'react'; // Import the Component component from React
import './App.scss';
 
function PortfolioObject(props) {

    return (
      <div className="portfolio-object">
          <div class="object-header">
            <div className="project-category">{props.category}</div>
            <div className="object-title">{props.title}</div>
              <div class="row">
                <div class="column1">
                 <div className="object-uppdragstyp"><h3>Uppdragstyp:</h3> {props.uppdragstyp}</div>
                 <div className="object-uppdragsgivare"><h3>Uppdragsgivare:</h3> {props.uppdragsgivare}</div>
                 <div className="object-datum"><h3>Datum:</h3> {props.datum}</div>
                 <div className="object-uppdrag"><h3>Uppdrag:</h3> {props.uppdrag}</div>
                </div>
              <div class="column2">
                <div className="object-short-description">{props.description}</div>
              </div>
            </div>
          </div>
          <div className="object-image-main">
          <img src={props.image} alt="Projektbild"/></div>
          <div className="object-desc1">{props.desc1}</div>
          <div className="object-image-second"><img src={props.image2} alt="Projektbild"/></div>
          <div className="object-desc2">{props.desc2}</div>
          <div className="object-descs3">{props.desc3}</div>
      </div> 
    )

  }

 
export default PortfolioObject;