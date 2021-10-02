import React from "react"
 
function FullImage(props) {
  return (
      <div class="fullImage">
          <img src={props.image} alt={props.alt}/>
          <span className="img-caption">{props.caption}</span>
      </div>
  )
}
 
export default FullImage;