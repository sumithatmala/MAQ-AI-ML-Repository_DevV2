import React from 'react';
import custom from './icons/icon-customizable-solutions.svg';
import dataP from  './icons/icon-data-processing.svg';
import implemnet from './icons/icon-implementing.svg';

const SentimentAnalysisCompany = () => (
  <section className="trinity">
    <div className="trinity__inner">
      <h2 className="head-block-center">Your Trusted Sentiment Analysis Company</h2>
      <div className="text-block-center">Our team of problem solvers builds intelligent solutions with long-term value and added business benefits.</div>
      <ul className="trinity__list">
        {[
          {
            icon: custom,
            title: 'Customizable Solutions',
            description: 'Our solutions are tailored to fit the needs of our clients and overcome the challenges of their domain.',
          },
          {
            icon: dataP,
            title: 'Scalable Results',
            description: 'We base your solutions on scalable architectures to let them grow in lockstep with your business.',
          },
          {
            icon: implemnet,
            title: 'State-of-the-Art Models',
            description: 'Our sentiment analysis services are based on cutting-edge AI algorithms to deliver results with high accuracy.',
          },
        ].map((item, index) => (
          <li key={index} className="trinity__item __w-33">
            <div className="trinity__item_figure">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className="trinity__item_title">{item.title}</h3>
            <div className="trinity__item_descr">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SentimentAnalysisCompany;
