import React from "react";
import icon_consulting from './img/icon-consulting.svg'
import icon_pa_sw_dev from './img/icon-pa-sw-dev.svg'
import icon_ml_model_dev from './img/icon-ml-model-dev.svg'
import './css/WhatWeOffer.css'

const WhatWeOffer = () => {
  const offerings = [
    {
      figure: <img src={icon_consulting} alt="Data Analysis" />,
      title: "Data Analysis Services",
      description:
        "Unlock insights from your data with our comprehensive data analysis services tailored to your business needs."
    },
    {
      figure: <img src={icon_pa_sw_dev} alt="Solution Design" />,
      title: "Custom Solution Design",
      description:
        "Get tailored solutions designed specifically for your business, maximizing efficiency and performance."
    },
    {
      figure: <img src={icon_ml_model_dev} alt="AI Integration" />,
      title: "AI Integration Services",
      description:
        "Integrate AI seamlessly into your existing systems and processes to enhance decision-making and drive innovation."
    }
  ];
  
  return (
    <section className="section-benefits benefits-section __icon-left">
      <div className="inner-benefits __bi-impl__inner">
        <h2 className="benefits-title">What We Offer</h2>
        <div className="benefits-description">
          {" "}
          We help our clients acquire the most suitable solutions and implement
          tailored tools to address their business needs.
        </div>
        <ul className="benefits-list">
          {offerings.map((offer, index) => (
            <li key={index} className="benefits-item">
              <div className="benefits-item-figure">
                {offer.figure}
              </div>
              <div className="benefits-item-title">{offer.title}</div>
              <div className="benefits-item-description">
                <p>{offer.description}</p>
              </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeOffer;
