import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/OneCardCarousel.css";

const OneCardCarousel = (props) => {
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
    <section className="our-work-section">
      <h4>Our Work</h4>
      <Row
        className="slick-list2 draggable fade-in product-overview d-flex justify-content-center "
        style={{ backgroundColor: "white" }}
      >
        {props.heading && <h3 className="head-block-center">{props.heading}</h3>}
        <Slider {...settings}>
          {props.items.map((outcome, index) => (
            <div className="separate-slider__item" key={index} style={{ boxShadow: "none" }}>
              {outcome.image && (
                <div className="separate-slider__img-figure">
                  {outcome.image}
                </div>
              )}
              <div className="separate-slider__content" style={{ boxShadow: "none" }}>
                <h3 className="separate-slider__title">{outcome.title}</h3>
                <div className="separate-slider__text">
                  {outcome.description.map((paragraph, index) => (
                    <p key={index}> {paragraph} </p>
                  ))}
                </div>
                {outcome.link && <a href={outcome.link}>Learn More</a>}
              </div>
            </div>
          ))}
        </Slider>
      </Row>
    </section>
  );
};

export default OneCardCarousel;