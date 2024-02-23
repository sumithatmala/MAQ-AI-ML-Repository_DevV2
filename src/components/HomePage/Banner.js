import React from "react";
import "./Banner.css";
import hero from "./img/homepage.png"
// import heroTrial from "./images/Framebackgorund-trial.png"
import mouseIcon from "./img/mouse-icon.png"
import downArrow from "./img/down-arow.png"

export default function Banner() {
  return (
    <>
    <section id="hero" className="hero">
      <img src={hero} style = {{marginTop: "2%"}} alt="" className="box fade-into-view hero-img"/>
      <div className="container">
        <div className="col mx-5">
          <div className="col-lg-5">
            <h2 className="box fade-up1" style={{fontFamily:"segoe UI"}}>
              Discover Our AI & ML Solutions
            </h2>
            <p className="box fade-up2 mt-1 " style={{fontFamily:"segoe UI"}}>
            Explore our AI & ML solutions to experience how our advanced algorithms drive innovation and enhance productivity. See how we revolutionize industries with transformative technologies, reshaping the future of businesses.
            </p>
          </div>
          {/* Reach out button */}
          {/* <div className="reach-out mt-4 fade-up3 ml-3" style={{fontFamily:"segoe UI"}}
            onClick={() => {
              const element = document.getElementsByClassName("parent-middle-sections");
              // console.log(element);
              //scroll down to the middle-section class
              element[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

            }}>
              Read more
          </div> */}
        </div>
        {/* add mouse image to show user to scroll to learn more */}
      </div>
        <div className="mouse-container move-mouse fade-up3" style={{}}
          onClick={() => {
            const element = document.getElementsByClassName("parent-middle-sections");
            // console.log(element);
            //scroll down to the middle-section class
            element[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

          }}
        >
          <img src={mouseIcon} alt="" className="mouse-icon" width={"20px"}/>
          <p className="m-auto learn-text">Learn more</p>
          <img src={downArrow} alt="" className="down-arrow" width={"15px"}/>
        </div>
      
    </section>
    
  </>
  );
}
