import React from 'react';
 
function PortfolioObject(props) {

    //Ser till att man hamnar högst upp på sidan även via framsidan
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <div>
      <img className="header-image" src={props.image} alt={props.alt}/>
      <div className="page-con">
        <div className="PageWrapper">
          <div className="portfolio-object">
            <h2 className="object-title">{props.title}</h2>
            <div className="object-short-description">{props.description}</div>
            <div className="information">
              <div className="stat"><h3>Client:&nbsp;</h3>{props.client}</div>
              <div className="stat"><h3>Mission:&nbsp;</h3> {props.mission}</div>
              <div className="stat"><h3>My role:&nbsp;</h3> {props.myrole}</div>
              <div className="stat"><h3>Time period:&nbsp;</h3> {props.datum}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )

  }

 
export default PortfolioObject;