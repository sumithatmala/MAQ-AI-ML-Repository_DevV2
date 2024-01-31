import React from "react";
import AnimatedTarget from "../../product-dashboard/icons/AnimatedTarget";
import "./css/Expertise.css";
import AnimatedDevelopment from "../../product-dashboard/AnimatedDevelopment";
import AnimatedSolution from "../../product-dashboard/AnimatedSolution";
import AnimatedOutcome from "../../product-dashboard/AnimatedOutcome";

const Expertise = () => {
  return (
    <div>
      <section className="section-text-image type-center __xs-pic-size __w-50 __image-right">
        <div className="section-text-image-inner">
          <div className="section-text-image__figure">
            <div
              id="anim-65b615d862068"
              className="wpbdmv-animation align-center renderer-svg playing"
              style={{ maxWidth: "100%", marginRight: "auto", marginLeft: "auto" }}
            >
              <AnimatedTarget />
            </div>
          </div>
          <div className="section-text-image-details">
            <h3 className="section-text-image__title"> Strategic Implementation</h3>
            <div className="section-text-image__description">
              <p>
                We collaborate with your team to develop a strategic vision and plan for integrating language models into your business processes. Our experts analyze your needs, evaluate available data, and provide actionable insights to optimize your technological infrastructure.
              </p>
              <ul>
                <li>Strategic planning</li>
                <li>Proof of concept development</li>
                <li>Data analysis and evaluation</li>
                <li>Project estimation and timeline creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-text-image type-center __xs-pic-size __w-50 ">
        <div className="section-text-image-inner">
          <div className="section-text-image__figure">
            <div
              id="anim-65b615d862a49"
              className="wpbdmv-animation align-center renderer-svg playing"
              style={{ maxWidth: "100%", marginRight: "auto", marginLeft: "auto" }}
            >
              <AnimatedDevelopment />
            </div>
          </div>
          <div className="section-text-image-details">
            <h3 className="section-text-image__title"> Model Development</h3>
            <div className="section-text-image__description">
              <p>
                Our dedicated team constructs tailored language models using advanced AI techniques and tools. Leveraging natural language processing and machine learning expertise, we design models aligned with your business requirements.
              </p>
              <ul>
                <li>User-centric model design</li>
                <li>Custom model development</li>
                <li>Data preprocessing and cleansing</li>
                <li>Seamless model integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-text-image type-center __xs-pic-size __w-50 __image-right">
        <div className="section-text-image-inner">
          <div className="section-text-image__figure">
            <div
              id="anim-65b615d86361b"
              className="wpbdmv-animation align-center renderer-svg playing"
              style={{ maxWidth: "100%", marginRight: "auto", marginLeft: "auto" }}
            >
              <AnimatedSolution />
            </div>
          </div>
          <div className="section-text-image-details">
            <h3 className="section-text-image__title"> Optimization and Enhancement</h3>
            <div className="section-text-image__description">
              <p>
                We fine-tune existing language models to suit your specific business needs, maximizing their effectiveness and efficiency. Our team of machine learning engineers enhances model performance and integration for seamless operation within your ecosystem.
              </p>
              <ul>
                <li>Model refinement and enhancement</li>
                <li>API integration and optimization</li>
                <li>Data architecture modernization</li>
                <li>Automation of model maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-text-image type-center __xs-pic-size __w-50">
        <div className="section-text-image-inner">
          <div className="section-text-image__figure">
            <div
              id="anim-65b615d86426e"
              className="wpbdmv-animation align-center renderer-svg playing"
              style={{ maxWidth: "100%", marginRight: "auto", marginLeft: "auto" }}
            >
              <AnimatedOutcome />
            </div>
          </div>
          <div className="section-text-image-details">
            <h3 className="section-text-image__title"> Maintenance and Support</h3>
            <div className="section-text-image__description">
              <p>
                Our support team ensures the continuous optimization and performance of your language models. From monitoring to updates, we provide round-the-clock assistance to enhance and evolve your AI solutions.
              </p>
              <ul>
                <li>Ongoing model monitoring and evaluation</li>
                <li>Regular model updates and enhancements</li>
                <li>Continuous data retraining and refinement</li>
                <li>Risk mitigation and compliance measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
