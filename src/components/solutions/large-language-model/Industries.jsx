import React from "react";
import "./css/Industries.css";
import icon_ecommerce_alt from './img/icon-ecommerce-alt.svg'
import bi_fin_service from './img/bi-fin-service.svg'
import bi_marketing from './img/bi-marketing.svg'
import icon_telecommunications from './img/icon-telecommunications.svg'
import bi_icon_conslng from './img/bi-icon-conslng.svg'
import icon_security from './img/icon-security.svg'
const Industries = () => {
  return (
    <section class="section-industries">
      <div class="industries__inner __bi-impl__inner">
        <h2 class="head-block-center">
          Build a Custom LLM Model for Your Industry
        </h2>
        <div class="text-block-center">
          Our generative AI company delivers custom models rooted in AI
          expertise &amp; years of cross-domain expertise.
        </div>
        <div class="industries__list">
          <div class="industries__item-link">
            <div class="industries__item">
              <div class="industries__item-icon">
                
                <img
                  src={bi_fin_service}
                  alt="Financial Services"
                />
              </div>
              <div class="industries__item-title">FinTech</div>
            </div>
          </div>
          <div class="industries__item-link">
            <div class="industries__item">
              <div class="industries__item-icon">
                
                <img
                  src={icon_ecommerce_alt}
                  alt="ecommerce"
                />
              </div>
              <div class="industries__item-title">Retail &amp; E-commerce</div>
            </div>
          </div>
          <div class="industries__item-link">
            <div class="industries__item">
              <div class="industries__item-icon">
                
                <img
                  src={bi_marketing}
                  alt="Marketing &amp; Advertising"
                />
              </div>
              <div class="industries__item-title">
                Marketing &amp; Advertising
              </div>
            </div>
          </div>
          <div class="industries__item-link">
            <div class="industries__item">
              <div class="industries__item-icon">
                
                <img
                  src={icon_telecommunications}
                  alt="telecommunications"
                />
              </div>
              <div class="industries__item-title">Telecommunication</div>
            </div>
          </div>
          <div class="industries__item-link">
            <div class="industries__item">
              <div class="industries__item-icon">
                
                <img
                  src={bi_icon_conslng}
                  alt="BI Consulting Services"
                />
              </div>
              <div class="industries__item-title">Consulting services</div>
            </div>
          </div>
          <div class="industries__item-link">
            <div class="industries__item">
              <div class="industries__item-icon">
                
                <img
                  src={icon_security}
                  alt="security"
                />
              </div>
              <div class="industries__item-title">Insurance</div>
            </div>
          </div>
        </div>
        <div class="block__action">
          
          <a
            href="large-language-model.html#section-contacts"
            class="btn btn-empty"
          >
            Your Industry
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
