import React from 'react';
// import custom from './icons/icon-customizable-solutions.svg';
// import dataP from  './icons/icon-data-processing.svg';
// import implemnet from './icons/icon-implementing.svg';

import custom from './icons/icons8-bad-idea-100 1.svg';
import dataP from  './icons/icons8-ratings-100 1.svg';
import implemnet from './icons/icons8-3d-model-100 1.svg';

const SentimentAnalysisCompany = () => (
  <section className="trinity_con">
    <div className="trinity_con__inner">
      <h2 className="head-block-center">Your Trusted Sentiment Analysis Company</h2>
      <div className="text-block-center">Our team of problem solvers builds intelligent solutions with long-term value and added business benefits.</div>
      <ul className="trinity_con__list">
        {[
          {
            icon: custom,
            title: 'Customizable Solutions',
            description: 'Our solutions are tailored to fit the needs of our clients and overcome the challenges of their domain.',
          },
          {
            icon: dataP,
            title: 'Scalable Results',
            description: 'We build your solutions on scalable architectures to let them grow in lockstep with your business.',
          },
          {
            icon: implemnet,
            title: 'State-of-the-Art Models',
            description: 'Our sentiment analysis services are built on cutting-edge AI algorithms to deliver results with high accuracy.',
          },
          
        ].map((item, index) => (
          <li key={index} className="trinity_con__item __w-33">
            <div className="trinity_con__item_figure">
              <img src={item.icon} alt={item.title} width={70}/>
            </div>
            <h3 className="trinity_con__item_title">{item.title}</h3>
            <div className="trinity_con__item_descr">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SentimentAnalysisCompany;
