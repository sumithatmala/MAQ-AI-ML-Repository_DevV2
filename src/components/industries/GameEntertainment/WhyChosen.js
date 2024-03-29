import React from 'react';
import './css/WhyChosen.css';
import preson from './icons/icons8-consultation-100 3.svg';
import ai from './icons/icons8-game-controller-100 1.svg';
import mobile from './icons/icons8-iphone-15-pro-100 1.svg';
import { HashLink } from 'react-router-hash-link';

const WhyChooseSection = () => {
  const servicesData = [
    {
      iconSrc: preson,
      altText: 'consulting',
      title: 'Consulting Services',
      description: 'Require a recommender system to boost in-app purchases? Or looking to integrate ChatGPT into your gaming business? Consult with our AI specialists to explore how we can assist you.',
    },
    {
      iconSrc: ai,
      altText: 'AI Game Solutions',
      title: 'Artificial Intelligence in Game Development Solutions',
      description: 'Considering the implementation of AI in the gaming industry? Let us leverage our expertise for your game, ensuring it climbs the charts and generates substantial profits.',
    },
    {
      iconSrc: mobile,
      altText: 'Mobile Gaming AI',
      title: 'Mobile Gaming AI Analytics',
      description: 'Employ Machine Learning models for intelligent player analysis. Extract meaningful insights from gameplay data to predict player behavior.',
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-section-inner">
        <h2 className="head-block-center">Our Services for Your Needs</h2>
        <div className="text-block-center">Make use of artificial intelligence in games to pull ahead of your competitors.</div>
        <ul className="whychoose-section-list">
          {servicesData.map((service, index) => (
            <li key={index} className="whychoose-section-list__list-item">
              <div className="whychoose-section-list__item">
                <img src={service.iconSrc} className="whychoose-section-list__icon" alt={service.altText} />
                <div className="whychoose-section-list__text">
                  <div className="whychoose-section-list__title">{service.title}</div>
                  <div className="whychoose-section-list__description">{service.description}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-block-center">Planning to use AI in game development?</div>
        <div className="block__action">
          <HashLink  to="./#contact" className="btn btn-empty">Contact Us</HashLink>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
