import React from "react";
import './css/Benefits.css'
import { HashLink } from "react-router-hash-link";
const Benfits = () => {
  return (
    <section className="whychoose-section bg-icons margin-adjust">
      <div className="whychoose-section-inner">
        <h2 className="head-block-center w-800">
          Benefits of On-Premise and Private-Cloud LLM Models
        </h2>
        <div className="text-block-center">
          We deploy language models locally to keep your proprietary data
          secure.
        </div>
        <ul className="whychoose-section-list">
          
          <li className="whychoose-section-list__list-item">
            <div className="whychoose-section-list__item">
              <div className="whychoose-section-list__text">
                <h3 className="whychoose-section-list__title subheading-size">Strong Security</h3>
                <div className="whychoose-section-list__description">
                  <p className="content-size">
                    We help you keep a tight rein on your data storage and
                    security by using our custom solutions built on language
                    models that can be deployed on-premise and on private clouds
                    exclusively.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="whychoose-section-list__list-item">
            <div className="whychoose-section-list__item">
              <div className="whychoose-section-list__text">
                <h3 className="whychoose-section-list__title subheading-size">
                  Custom Functionality
                </h3>
                <div className="whychoose-section-list__description">
                  <p className="content-size">
                    Our developers adjust foundational models to match your
                    unique business and functional needs and improve the
                    accuracy of outputs by&nbsp;training large language models
                    on your custom dataset.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        
      </div>
    </section>
  );
};

export default Benfits;
