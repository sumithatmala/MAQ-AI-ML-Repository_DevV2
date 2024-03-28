import React from "react";
import './css/Benefits2.css';
// import iconDollarIncrease from './img/icon-dollar-increase.svg';
// import iconCost from './img/icon-cost-2.svg';
// import iconAccuracy from './img/icon-accuracy-2.svg';
// import iconEngine from './img/icon-engine.svg';

import iconDollarIncrease from './img/icons8-user-groups-100 3.svg';
import iconCost from './img/icons8-decision-100 2.svg';
import iconAccuracy from './img/icons8-intelligence-100 1.svg';
import iconEngine from './img/icons8-data-security-100 1.svg';

const Benefits2 = () => {
  const benefits = [
    {
      title: "Enhanced Customer Engagement",
      icon: iconDollarIncrease,
      text: "Elevate customer engagement with personalized interactions and recommendations powered by LLMs. Create dynamic and tailored experiences that resonate with your audience, leading to increased satisfaction and loyalty."
    },
    {
      title: "Streamlined Decision-Making",
      icon: iconCost,
      text: "Empower your decision-making processes with actionable insights derived from comprehensive data analysis facilitated by LLMs. Make informed strategic choices faster and with greater accuracy, driving business growth and success."
    },
    {
      title: "Improved Productivity and Efficiency",
      icon: iconAccuracy,
      text: "Boost productivity and efficiency across your organization by automating repetitive tasks and optimizing workflows with LLMs. Free up valuable time and resources to focus on innovation and core business activities."
    },
    {
      title: "Enhanced Data Security",
      icon: iconEngine,
      text: "Ensure robust data security and compliance with regulations by leveraging LLMs for data encryption, anomaly detection, and threat identification. Safeguard sensitive information and maintain the trust of your customers and stakeholders."
    }
  ];

  return (
    <section className="main-cases">
      <h2 className="head-block-center w-800">
        Unlock the Potential Benefits of Large Language Learning Models
      </h2>
      <div className="text-block-center">
        Discover how LLMs can revolutionize your business operations and drive meaningful outcomes.
      </div>
      <div className="use-cases __type-predict">
        <div className="use-cases__outer">
          <div className="use-cases__inner">
            <div className="use-cases-list-wrapper __type-predict">
              <ul className="use-cases-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="use-cases-list__list-item">
                    <div className="use-cases-list__item">
                      <div className="use-cases-list__icon" style={{display:"flex", justifyContent:"center"}}>
                        <img src={benefit.icon} alt={benefit.title} />
                      </div>
                      <h3 className="use-cases-list__title">{benefit.title}</h3>
                      <div className="use-cases-list__text">{benefit.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits2;
