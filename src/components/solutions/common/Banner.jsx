import React from "react";
import "./css/Banner.css";

const Banner = (props) => {

  return (
    <section
      className="banner banner-order-effects banner-bg"
      style={{ marginTop: "0px" }}
    >
      <div className="banner-inner">
        <h1 className="banner-title">
          <span className="text-alert">{props.BannerData.title}</span>
        </h1>
        <div className="banner-subtitle">{props.BannerData.subtitle}</div>
      </div>
      <div id="banner-animation">
        <div
          id="anim-65b615d84fa7e"
          className="wpbdmv-animation align-center renderer-svg playing"
          style={{ maxWidth: "100%", marginRight: "auto", marginLeft: "auto" }}
        >
          {props.BannerData.svgCode}
        </div>
      </div>
    </section>
  );
};

export default Banner;
