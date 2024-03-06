import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/OneCardCoursal.css"

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
    <section class="target-section" style={{ backgroundColor: "white" }}>
      <Row
        className="slick-list2 draggable fade-in product-overview d-flex justify-content-center"
        style={{ backgroundColor: "white" }}
      >
        {props.heading && <h3 class="head-block-center">{props.heading}</h3>}
        <Slider {...settings}>
          {props.items.map((outcome, index) => (
            <>
              <div class="separate-slider__item" key={index} style={{boxShadow: "none",}}>
                {outcome.image?(<div class="separate-slider__img-figure">
                  {outcome.image}
                </div>):(<></>)}
                <div class="separate-slider__content" style={{boxShadow: "none",}}>
                  <h3 class="separate-slider__title">
                    {outcome.title}
                  </h3>
                  <div class="separate-slider__text">
                    {outcome.description.map((paragraph, index) =>(
                      <p key={index}> {paragraph} </p>
                    ))}
                  </div>
                  {/* <a
                    href="#"
                    class="separate-slider__link reports-list__action"
                    tabindex="0"
                  >
                    <span>View Details</span>
                  </a> */}
                  {outcome.link?(<a href={outcome.link}>Learn More</a>):(<></>)}
                </div>
              </div>
            </>
          ))}
        </Slider>
      </Row>
    </section>
  );
};

export default OneCardCoursal;
