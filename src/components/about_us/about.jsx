import React from "react";
import './about.css';
export const About = (props) => {
  return (
    <div id="about" >
      <div className="container">
        <div className="row">
          <div className="header-container">
            <div className="line-1"></div>
                <h2 className="header-text">Welcome</h2>
            <div className="line-2"></div>
          </div>
            <div className="about__text-container">
                { props.data ? props.data.paragraph.map((p, i) => {
                    return <p style={{fontSize:20}} key={i}>{p}</p>;
                  }) : "...loading"
                }
          </div>
        </div>
      </div>
      <div id="ourmission"> 
        <div  className="container ourmissioncontainer">
          <div className="row">
            <div className="header-container">
            <div className="line-1"></div>
                <h2 className="header-text">Our Mission</h2>
              <div className="line-2"></div>
            </div>

            <div className="about__text-container">
            { props.data ? props.data.ourmission.map((p, i) => {
                      return <p style={{fontSize:20}} key={i}>{p}</p>;
                    }) : "...loading"
                  }
            </div>
            
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="header-container">
          <div className="line-1"></div>
              <h2 className="header-text">Our Founder</h2>
            <div className="line-2"></div>
          </div>
          <div className="col-xs-12 col-md-6 about__image-container">
            {" "}
            <img src="img/about.jpg" className="about__founder-image" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6 about__our-mission-text-container">
          { props.data ? props.data.ourmission.map((p, i) => {
                    return <p style={{fontSize:20}} key={i}>{p}</p>;
                  }) : "...loading"
                }
          </div>
          
        </div>
      </div>
    </div>
  );
};
