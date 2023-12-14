import React from "react";
import "./Banner.css";
// import "./plyr.min.css";
import hero from "./images/homepage.png"
import heroTrial from "./images/Framebackgorund-trial.png"
import mouseIcon from "./images/mouse-icon.png"
import downArrow from "./images/down-arow.png"
import ai from "./images/banner.jpg";

export default function Banner() {
  return (
    <>
    <section id="hero" className="hero">
      <img src={hero} alt="" className="box fade-into-view hero-img"/>

      <div className="container">
        <div className="col mx-5">
          <div className="col-lg-5">
            <h2 className="box fade-up1">
              Machine Learning
            </h2>
            <p className="box fade-up2 mt-1 ">
              Our solutions empower our clients to gain intelligent insights at scale on their business data. We combine the best of the advances in machine learning algorithms and technologies with our deep understanding of our customers’ business domain to deliver highly impactful solutions for our customers.
            </p>
          </div>
          {/* Reach out button */}
          <div className="reach-out mt-4 fade-up3 ml-3">
              Reach Out to learn more
          </div>
        </div>
        {/* add mouse image to show user to scroll to learn more */}
        <div className="mouse-container move-mouse fade-up3 mt-5"
          onClick={() => {
            const element = document.getElementsByClassName("middle-section");
            console.log(element);
            //scroll down to the middle-section class
            element[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

          }}
        >
          <img src={mouseIcon} alt="" className="mouse-icon" width={"20px"}/>
          <p className="m-auto learn-text">Learn more</p>
          <img src={downArrow} alt="" className="down-arrow" width={"15px"}/>
        </div>
      </div>
      
    </section>
    
  </>
  );
}
