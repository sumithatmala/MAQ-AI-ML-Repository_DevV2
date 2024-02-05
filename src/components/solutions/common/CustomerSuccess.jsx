import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/CustomerSuccess.css"


const CustomerSuccess = (props) => {
  const { items, defaultSlidesToShow } = props;

  const slidesToShow = props.slidesToShow || defaultSlidesToShow;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
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
        className="slick-list1 draggable fade-in product-overview d-flex justify-content-center "
        style={{ backgroundColor: "white", height: "auto" }}
      >
        <Slider {...settings}>
          {items.map((outcome, index) => (
            <div className="separate-slider__item" key={index}>
              {outcome.image ? (
                <div className="separate-slider__img-figure">
                  {outcome.image}
                </div>
              ) : (
                <></>
              )}
              <div className="separate-slider__content">
                <h3 className="separate-slider__title">{outcome.title}</h3>
                <div className="separate-slider__text">
                  {outcome.description.map((paragraph, index) => (
                    <p key={index}> {paragraph} </p>
                  ))}
                </div>
                {outcome.link ? (
                  <a href={outcome.link}>Learn More</a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </Row>
    </section>
  );
};

// Set a default value for slidesToShow if not provided
CustomerSuccess.defaultProps = {
  defaultSlidesToShow: 3,
};

export default CustomerSuccess;
