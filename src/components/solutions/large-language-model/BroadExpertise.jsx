import React from "react";
import "./css/BroadExpertise.css";
import iconCircleML from "./img/icon-circle-ml.svg";
import iconCircleNLP from "./img/icon-circle-nlp.svg";
import iconCircleCloud from "./img/icon-circle-cloud.svg";
import iconCircleDataEngineering from "./img/icon-circle-data-engineering.svg";

const BroadExpertise = () => {
  const expertiseAreas = [
    {
      title: "Artificial Intelligence",
      image: iconCircleML,
      text:
        "Harness the power of AI with our expertise in developing cutting-edge machine learning algorithms and models. From recommendation systems to predictive analytics, we help you leverage AI to drive innovation and growth.",
    },
    {
      title: "Language Understanding",
      image: iconCircleNLP,
      text:
        "Unlock the potential of natural language processing (NLP) to understand and analyze human language. Our NLP solutions empower your applications with the ability to extract insights from text data, enabling smarter decision-making and automation.",
    },
    {
      title: "Cloud Solutions",
      image: iconCircleCloud,
      text:
        "Embrace the scalability and flexibility of cloud computing with our expert cloud solutions. We design and implement cloud architectures tailored to your needs, ensuring high availability, security, and performance for your applications and data.",
    },
    {
      title: "Data Management",
      image: iconCircleDataEngineering,
      text:
        "Optimize your data infrastructure with our data engineering expertise. From data pipelines to data lakes, we help you collect, store, and analyze large volumes of data efficiently, enabling you to derive valuable insights and drive strategic decisions.",
    },
  ];

  return (
    <section className="section-benefits __images-left">
      <div className="section-benefits-inner">
        <h2 className="head-block-center">
          Drive Innovation with Our Expertise
        </h2>
        <div className="text-block-center">
          Our diverse skills and deep knowledge empower you to tackle complex challenges and achieve your goals.
        </div>
        <ul className="section-benefits-list">
          {expertiseAreas.map((area, index) => (
            <li key={index} className="section-benefits-list__list-item">
              <div className="section-benefits-list__image">
                <img src={area.image} alt={area.title} />
              </div>
              <div className="section-benefits-list__item">
                <h3 className="section-benefits-list__title">{area.title}</h3>
                <div className="section-benefits-list__text">{area.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BroadExpertise;
