import React from 'react';
 
function PortfolioObject(props) {

    //Ser till att man hamnar högst upp på sidan även via framsidan
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <div className="portfolio-object">
          <div class="object-header">
            <div className="object-title">{props.title} ✧</div>
              <div class="row">
                <div class="column1">
                  <div className="solidborderbox">
                    <span className="box">
                      <div className="stat"><h3>Project type:&nbsp;</h3>{props.uppdragstyp}</div>
                      <div className="stat"><h3>Mission:&nbsp;</h3> {props.mission}</div>
                    </span>
                    <span className="box">
                      <div className="stat"><h3>My role:&nbsp;</h3> {props.myrole}</div>
                      <div className="stat"><h3>Time period:&nbsp;</h3> {props.datum}</div>
                    </span>
                  </div>
                  <div className="category">{props.category}</div>

                </div>
                
              <div class="column2">
                <div className="desc-title">Summary</div>
                <div className="object-short-description">{props.description}</div>
              </div>
            </div>
          </div>
      </div> 
    )

  }

 
export default PortfolioObject;