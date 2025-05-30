import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
 
function Thumbnail(props) {

    return (
      <div className="project">
        <Link to={props.link}>
        <div className="description">
          <div className="type">
            <div className="project-title">{props.title}</div>
            <div className="project-desc">{props.desc}</div>
            <hr></hr>
          </div>
            <div className="project-category">{props.category}</div>
          </div>
          <div className="image">
            <img src={props.image} alt="Projektbild"/>
          </div>
        </Link>
      </div> 
    )

  }

export default Thumbnail;