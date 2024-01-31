import React from "react";
import './css/Benefits.css'
const Benfits = () => {
  return (
    <section class="whychoose-section bg-icons">
      <div class="whychoose-section-inner">
        <h2 class="head-block-center w-800">
          Benefits of On-Premise and Private-Cloud LLM Models
        </h2>
        <div class="text-block-center">
          We deploy language models locally to keep your proprietary data
          secure.
        </div>
        <ul class="whychoose-section-list">
          
          <li class="whychoose-section-list__list-item">
            <div class="whychoose-section-list__item">
              <div class="whychoose-section-list__text">
                <h3 class="whychoose-section-list__title">Strong Security</h3>
                <div class="whychoose-section-list__description">
                  <p>
                    We help you keep a tight rein on your data storage and
                    security by using our custom solutions built on language
                    models that can be deployed on-premise and on private clouds
                    exclusively.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="whychoose-section-list__list-item">
            <div class="whychoose-section-list__item">
              <div class="whychoose-section-list__text">
                <h3 class="whychoose-section-list__title">
                  Custom Functionality
                </h3>
                <div class="whychoose-section-list__description">
                  <p>
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
        <div class="block__action">
          
          <a
            href="large-language-model.html#section-contacts"
            class="btn btn-empty"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benfits;
