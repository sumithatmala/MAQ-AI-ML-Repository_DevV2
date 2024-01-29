import React from "react";
import AnimatedTarget from "../../product-dashboard/icons/AnimatedTarget";
import "./css/Expertise.css";
import AnimatedDevelopment from "../../product-dashboard/AnimatedDevelopment";
import AnimatedSolution from "../../product-dashboard/AnimatedSolution";
import AnimatedOutcome from "../../product-dashboard/AnimatedOutcome";

const Expertise = () => {
  return (
    <div>
      <section class="section-text-image type-center __xs-pic-size __w-50 __image-right">
        <div class="section-text-image-inner">
          <div class="section-text-image__figure">
            <div
              id="anim-65b615d862068"
              class="wpbdmv-animation align-center renderer-svg playing"
              Style="max-width: 100%; margin-right: auto; margin-left: auto;"
            >
              <AnimatedTarget />
            </div>
          </div>
          <div class="section-text-image-details">
            <h3 class="section-text-image__title"> Strategy and Consulting</h3>
            <div class="section-text-image__description">
              <p>
                We help you get a better handle on your business vision and
                chalk out a step-by-step strategy for the adoption of language
                models. Our experts define a use case, assess your proprietary
                data, and provide actionable recommendations on the tech
                infrastructure.
              </p>
              <ul>
                {" "}
                <li>Business case analysis</li> <li>Proof of Concept</li>{" "}
                <li>Overview of proprietary data</li>{" "}
                <li>Project estimation and roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-text-image type-center __xs-pic-size __w-50 ">
        <div class="section-text-image-inner">
          <div class="section-text-image__figure">
            <div
              id="anim-65b615d862a49"
              class="wpbdmv-animation align-center renderer-svg playing"
              Style="max-width: 100%; margin-right: auto; margin-left: auto;"
            >
              <AnimatedDevelopment />
            </div>
          </div>
          <div class="section-text-image-details">
            <h3 class="section-text-image__title"> LLM Development</h3>
            <div class="section-text-image__description">
              <p>
                Our engineers build custom LLM models on top of GPT, DALL.E2,
                and other foundation models and make them a native part of your
                tech ecosystem. Our NLP, machine learning, and data science
                experts help tailor the model to your specific business needs.
              </p>
              <ul>
                {" "}
                <li>User workflow development</li>{" "}
                <li>Custom solutions development</li>{" "}
                <li>Dataset preparation</li> <li>LLM integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-text-image type-center __xs-pic-size __w-50 __image-right">
        <div class="section-text-image-inner">
          <div class="section-text-image__figure">
            <div
              id="anim-65b615d86361b"
              class="wpbdmv-animation align-center renderer-svg playing"
              Style="max-width: 100%; margin-right: auto; margin-left: auto;"
            >
              <AnimatedSolution />
            </div>
          </div>
          <div class="section-text-image-details">
            <h3 class="section-text-image__title"> Fine-Tuning</h3>
            <div class="section-text-image__description">
              <p>
                We customize off-the-shelf LLM language models with your data to
                maximize the value of base models for your business. Our machine learning engineers fine-tune them to your unique business needs, improve accuracy
                rates, and make the model more efficient.
              </p>
              <ul>
                {" "}
                <li>Large language model fine-tuning</li>{" "}
                <li>API integration</li>{" "}
                <li>Data architecture modernization</li>{" "}
                <li>Large language model automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-text-image type-center __xs-pic-size __w-50">
  <div class="section-text-image-inner">
    <div class="section-text-image__figure">
      <div
        id="anim-65b615d86426e"
        class="wpbdmv-animation align-center renderer-svg playing"
        Style="max-width: 100%; margin-right: auto; margin-left: auto"
      >
        <AnimatedOutcome/>
      </div>
    </div>
    <div class="section-text-image-details">
      <h3 class="section-text-image__title">Support and Maintenance</h3>
      <div class="section-text-image__description">
        <p>
          Our support team keeps a close watch on your language learning model,
          making sure its performance is up to par.<br />
          From model optimization to troubleshooting, our
          generative AI company is there for you 24/7, perfecting, enhancing, and evolving your AI
          solutions.
        </p>
        <ul>
          <li>Model monitoring</li>
          <li>Model updates</li>
          <li>Data retraining pipeline</li>
          <li>Risk management and compliance.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

     </div>
  );
};

export default Expertise;
