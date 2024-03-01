import React from "react";
import "./css/Banner.css";

const Banner = (props) => {
  const myStyle = { marginTop: "0px", backgroundImage: `url(${require('./img/heading-net-bg.svg')})` }
  return (
    <section
      className="banner1 banner-order-effects banner-bg"
      style={props.BannerData.backgroundImage ? props.BannerData.backgroundImage : myStyle}
    >
      <div className="banner-inner">
        <h1 className="banner-title">
          {props.BannerData.title}
        </h1>
        <div className="banner-subtitle">{props.BannerData.subtitle}</div>
      </div>
      <div id="banner-animation">
        <div
          id="anim-65b615d84fa7e"
          className="wpbdmv-animation align-center renderer-svg playing"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        >
          {props.BannerData.svgCode}
        </div>
      </div>
    </section>
  );
};

export default Banner;
