import React from "react";
import './css/WhyMAQSoftware.css'
import icon_cup from './img/icon-cup.svg'
import icon_five_stars from './img/icon-five-stars.svg'
import icon_medal from './img/icon-medal.svg'
const WhyMAQSoftware = () => {
  return (
    <section className="trinity">
      <div className="trinity__inner">
        <h2 className="head-block-center">Why MAQ Software?</h2>
        <div className="text-block-center w-800">
          As one of the leading AI companies, we help you leverage the power of
          LLMs in your web and mobile applications.
        </div>
        <ul className="trinity__list">
          
          <li className="trinity__item __w-33">
            <div className="trinity__item_figure">
              
              <img
                src={icon_cup}
                alt="AI"
              />
            </div>
            <h3 className="trinity__item_title">Experience You Can Trust</h3>
            <div className="trinity__item_descr">
              Over 150 global companies have chosen us to deliver AI solutions
              at scale - and the results speak for themselves.
            </div>
          </li>
          <li className="trinity__item __w-33">
            <div className="trinity__item_figure">
              
              <img
                src={icon_five_stars}
                alt="icon five stars"
              />
            </div>
            <h3 className="trinity__item_title">Speed-To-Market</h3>
            <div className="trinity__item_descr">
              We owe our immaculate delivery record to calibrated processes and
              a mature product development approach.
            </div>
          </li>
          <li className="trinity__item __w-33">
            <div className="trinity__item_figure">
              
              <img
                src={icon_medal}
                alt="Highly Experienced Team"
              />
            </div>
            <h3 className="trinity__item_title">High-Grade Solutions</h3>
            <div className="trinity__item_descr">
              No matter the challenge, our team of 80+ developers finds an
              optimal solution that propels your business to new heights.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyMAQSoftware;
