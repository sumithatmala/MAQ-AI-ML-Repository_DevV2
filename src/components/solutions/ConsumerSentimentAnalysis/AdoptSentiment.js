import React from 'react';

import graph from './icons/icons8-consumer-100 1.svg';
import people from './icons/icons8-project-100 (1) 1.svg';
import smile from './icons/icons8-interview-100 1.svg';
import stars from './icons/icons8-ophthalmology-100 1.svg';

const BenefitItem = ({ imgSrc, imgAlt, title, text }) => (
  <li className="section-benefits-list__list-item" style={{padding:"0px", marginBottom:"50px"}}>
    <div className="section-benefits-list__image">
      <img src={imgSrc} alt={imgAlt} width={30} />
    </div>
    <div className="section-benefits-list__item">
      <h3 className="section-benefits-list__title">{title}</h3>
      <div className="section-benefits-list__text">{text}</div>
    </div>
  </li>
);

const AdoptSentiment = () => {
    const benefitsData = [
      {
        imgSrc: graph,
        imgAlt: 'Track Sentiment Across Channels',
        title: 'Track Sentiment Across Channels',
        text: 'Extract, analyze, and act on sentiments across multiple touchpoints. Ensure your product resonates with consumers, excel in customer experience, and rely on real-user feedback to inform your strategy.',
      },
      {
        imgSrc: people,
        imgAlt: 'Plan Product Improvements',
        title: 'Plan Product Improvements',
        text: 'Take the pulse of public opinion and consumer sentiment data to analyze your latest product release. Aggregate user insights to identify gaps, add anticipated features, and enhance user experience.',
      },
      {
        imgSrc: smile,
        imgAlt: 'Prioritize Customer Service Issues',
        title: 'Prioritize Customer Service Issues',
        text: 'Identify critical customer issues and prioritize service tickets accordingly. Leverage ChatGPT solutions to prevent escalations by addressing consumer complaints based on real-time sentiments.',
      },
      {
        imgSrc: stars,
        imgAlt: 'Monitor Brand Reputation',
        title: 'Monitor Brand Reputation',
        text: 'Allow our sentiment analysis services to help build a robust brand image through NLP and machine learning. Utilize sentiment data to identify negative mentions, respond promptly to alerts, and effectively manage your online reputation.',
      },
      
      ];
      

  return (
    <section className="section-benefits __images-left margin-adjust">
      <div className="section-benefits-inner">
        <h2 className="head-block-center">Adopt Sentiment Tracking to Stay on the Edge</h2>
        <div className="text-block-center">Put the customer’s perspective at the core of your operating model.</div>
        <ul className="section-benefits-list">
          {benefitsData.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdoptSentiment;
