import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/OneCardCoursal.css";


import testimg from './img/heading-net-bg.svg';

const OneCardCoursal = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({
      delay: 20,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="target-section" style={{ backgroundColor: "white" }}>
      <Row
        className="slick-list2 draggable fade-in product-overview d-flex justify-content-center"
        style={{ backgroundColor: "white" }}
      >
        {props.heading && (
          <h3 className="head-block-center">{props.heading}</h3>
        )}
        <Slider {...settings}>
          {props.items.map((outcome, index) => (
            <div
              className="separate-slider__item"
              key={index}
              style={{ boxShadow: "none", height: "100px", display: "flex" }}
            >
              <div className="separate-slider__item item_inner">
              {outcome.image ? (
                <div className="separate-slider__img-figure">
                  {outcome.image}
                </div>
              ) : (
                <></>
              )}
              <div
                className="separate-slider__content"
                style={{
                  boxShadow: "none",
                  // backgroundImage: outcome.image
                  // ? `url(${outcome.image})`
                  // : "none", 
                  // backgroundImage: outcome.image ? `url(${outcome.backimage})` : <img src={testimg} />,
                  // backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "center",
                  // minHeight: "200px",
                  // backgroundColor: outcome.image ? "transparent" : "red",
                }}
              >
                <div>
                  <h3 className="separate-slider__title">{outcome.title}</h3>
                </div>
                <div className="separate-slider__text">
                  {outcome.description.map((paragraph, index1) => (
                    <p key={index1}> {paragraph} </p>
                  ))}
                  
                </div>
                {/* <a
                    href="#"
                    className="separate-slider__link reports-list__action"
                    tabindex="0"
                  >
                    <span>View Details</span>
                  </a> */}
                {outcome.link ? <a href={outcome.link}>Learn More</a> : <></>}
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </Row>
    </section>
  );
};

export default OneCardCoursal;
