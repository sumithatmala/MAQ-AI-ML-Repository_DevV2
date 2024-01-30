import React from "react";
import './css/OurTechStack.css'
import logo_open_ai from './img/logo-open-ai.svg'
import logo_llama_2 from './img/logo-llama-2.svg'
import logo_hugging_face from './img/logo-hugging-face.png'
import logo_flan_t5 from './img/logo-flan-t5.svg'
const OurTechStack = () => {
  return (
    <section class="services-section __type-technologies">
      <div class="services-section-inner">
        <h2 class="head-block-center">
          Our Stack of Large Language Learning Models
        </h2>
        <div class="text-block-center">
          We work with a variety of models to develop a robust solution your
          business needs.
        </div>
        <ul class="services-technologies-list  __with-mobile-slider">
          
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src={logo_open_ai}
                alt="openAI"
                height="27px;"
              />
            </div>
          </li>
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src={logo_llama_2}
                alt="llama 2"
                height="50px;"
              />
            </div>
          </li>
          {/* <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-incite-redpijama.webp"
                alt="incite-redpijama"
                height="40px;"
              />
            </div>
          </li> */}
          {/* <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-stablelm.webp"
                alt="stablelm"
                height="40px;"
              />
            </div>
          </li>
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-eleutherai.webp"
                alt="eleuther ai"
                height="40px;"
              />
            </div>
          </li> */}
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src={logo_hugging_face}
                alt="hugging face"
                height="30px;"
              />
            </div>
          </li>
          {/* <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-palm2.svg"
                alt="palm2"
                height="40px;"
              />
            </div>
          </li>
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-pythia.webp"
                alt="pythia"
                height="40px;"
              />
            </div>
          </li> */}
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src={logo_flan_t5}
                alt="flan-t5"
                height="40px;"
              />
            </div>
          </li>
          {/* <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-crm-ant.webp"
                alt="crm-ant"
                height="40px;"
              />
            </div>
          </li>
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-flan-ul2.svg"
                alt="flan-ul2"
                height="40px;"
              />
            </div>
          </li>
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-nvidia.webp"
                alt="nvidia"
                height="40px;"
              />
            </div>
          </li>
          <li class="services-technologies-list__list-item">
            <div class="services-technologies-list__item">
              
              <img
                src="https://indatalabs.com/wp-content/uploads/2023/06/logo-pangu.webp"
                alt="pangu"
                height="40px;"
              />
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default OurTechStack;
