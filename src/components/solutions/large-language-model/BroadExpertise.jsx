import React from "react";
import icon_circle_ml from './img/icon-circle-ml.svg'
import icon_circle_nlp from './img/icon-circle-nlp.svg'
import icon_circle_cloud from './img/icon-circle-cloud.svg'
import icon_circle_data_engineering from './img/icon-circle-data-engineering.svg'
import './css/BroadExpertise.css'
const BroadExpertise = () => {
  return (
    <section class="section-benefits __images-left">
      <div class="section-benefits-inner">
        <h2 class="head-block-center">
          Our Broad Expertise Meets Your Needs at Scale
        </h2>
        <div class="text-block-center">
          Our cross-functional teams help you overcome the complexity of LLM
          development.
        </div>
        <ul class="section-benefits-list">
          
          <li class="section-benefits-list__list-item">
            <div class="section-benefits-list__image">
              
              <img
                src={icon_circle_ml}
                alt="Machine Learning"
              />
            </div>
            <div class="section-benefits-list__item">
              <h3 class="section-benefits-list__title">Machine Learning</h3>
              <div class="section-benefits-list__text">
                Our developers push the boundaries of generative AI and create
                innovative solutions with machine learning. Be it predictive analytics or&nbsp;model training, we
                supplement your models with all the AI features your business
                needs.
              </div>
            </div>
          </li>
          <li class="section-benefits-list__list-item">
            <div class="section-benefits-list__image">
              
              <img
                src={icon_circle_nlp}
                alt="Natural Language Processing"
              />
            </div>
            <div class="section-benefits-list__item">
              <h3 class="section-benefits-list__title">
                Natural Language Processing
              </h3>
              <div class="section-benefits-list__text">
                Drawing on our decade years of experience, we help your
                applications mine data across formats and platforms to unearth
                hidden insights. Our&nbsp;developers adapt your sentiment
                analysis and customer analysis applications where it truly matters.
              </div>
            </div>
          </li>
          <li class="section-benefits-list__list-item">
            <div class="section-benefits-list__image">
              
              <img
                src={icon_circle_cloud}
                alt="Cloud Computing"
              />
            </div>
            <div class="section-benefits-list__item">
              <h3 class="section-benefits-list__title">Cloud Computing</h3>
              <div class="section-benefits-list__text">
                Our cloud engineers make sure you have the right tech infrastructure and operating
                model to embrace the benefits of language models and&nbsp;AI.
                When needed, we perform a full-scale cloud migration or optimize
                your existing cloud resources.
              </div>
            </div>
          </li>
          <li class="section-benefits-list__list-item">
            <div class="section-benefits-list__image">
              
              <img
                src={icon_circle_data_engineering}
                alt="Data Engineering"
              />
            </div>
            <div class="section-benefits-list__item">
              <h3 class="section-benefits-list__title">Data Engineering</h3>
              <div class="section-benefits-list__text">
                We rethink your business model with data at its core and set the
                right data practices in place to give you a long-term platform for AI innovation.
                Build the foundation for change and stay prepared for future
                transformations.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BroadExpertise;
