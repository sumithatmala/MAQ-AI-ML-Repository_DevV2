import React from "react";
import "./Banner.css";
// import "./plyr.min.css";
import ai from "./images/banner.jpg";

export default function Banner() {
  return (
    <section id="hero" className="hero">
      <img src={ai} alt="" className="box fade-in"/>

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 className="box fade-up1">
              Welcome to the Future of Intelligence
            </h2>
            <p className="box fade-up2">
              Explore the Cutting-Edge World of Artificial Intelligence and
              Machine Learning. Revolutionize Industries, Drive Innovation, and
              Transform Possibilities
            </p>
          </div>
          <div className="col-lg-5 box fade-up3">
            <form action="#" className="sign-up-form d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <button className="btn btn-primary">
                <iconify-icon
                  icon="bx:search"
                  width="23"
                  height="23"></iconify-icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
