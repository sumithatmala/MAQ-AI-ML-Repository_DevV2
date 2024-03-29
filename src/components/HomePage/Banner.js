import React from "react";
import "./Banner.css";
import hero from "./img/homepage.png";
import mouseIcon from "./img/mouse-icon.png";
import downArrow from "./img/down-arow.png";

export default function Banner() {
  return (
    <>
      <section id="hero" className="hero" >
        <img
          src={hero}
          style={{ marginTop: "3.5rem" }}
          alt=""
          className="box fade-into-view hero-img"
        />
        <div className="container" style={{ marginTop: "8%" }}>
          <div className="col mx-5">
            <div className="col-lg-5">
              <h2 className="box fade-up1" style={{ fontFamily: "segoe UI" }}>
                Discover Our AI & ML Solutions
              </h2>
              <p
                className="box fade-up2 mt-1 "
                style={{ fontFamily: "segoe UI" }}
              >
                Explore our AI & ML solutions to experience how our advanced
                algorithms drive innovation and enhance productivity. See how we
                revolutionize industries with transformative technologies,
                reshaping the future of businesses.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mouse-container move-mouse fade-up3"
          style={{}}
          onClick={() => {
            const element = document.getElementsByClassName(
              "parent-middle-sections"
            );
            element[0].scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        >
          <img src={mouseIcon} alt="" className="mouse-icon" width={"20px"} />
          <p className="m-auto learn-text">Learn more</p>
          <img src={downArrow} alt="" className="down-arrow" width={"15px"} />
        </div>
      </section>
    </>
  );
}
