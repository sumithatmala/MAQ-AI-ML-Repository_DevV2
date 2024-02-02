import React from 'react';
import graph from './icons/icon-sentiment-graph.svg';
import people from './icons/icon-sentiment-people.svg';
import smile from './icons/icon-sentiment-smile.svg';
import stars from './icons/icon-sentiment-stars.svg';

const BenefitItem = ({ imgSrc, imgAlt, title, text }) => (
  <li className="section-benefits-list__list-item">
    <div className="section-benefits-list__image">
      <img src={imgSrc} alt={imgAlt} />
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
          text: 'Extract, analyze, and act on sentiments across multiple touch points. Make sure your product resonates with the consumers, score big on customer experience, and rely on real-user feedback to inform your strategy.',
        },
        {
          imgSrc: smile,
          imgAlt: 'Plan Product Improvements',
          title: 'Plan Product Improvements',
          text: 'Take the pulse of public opinion and consumer sentiment data to analyze your latest product release. Collate user insights to identify gaps, add much-awaited features, and improve user experience.',
        },
        {
          imgSrc: people,
          imgAlt: 'Prioritize Customer Service Issues',
          title: 'Prioritize Customer Service Issues',
          text: 'Identify critical customer issues and put top-priority service tickets at the head of the queue. Enable ChatGPT solutions to avoid escalations when consumer complaints arrive - based on users’ real-time feelings.',
        },
        {
          imgSrc: stars,
          imgAlt: 'Monitor Brand Reputation',
          title: 'Monitor Brand Reputation',
          text: 'Let our sentiment analysis company help you establish a strong brand image through NLP and machine learning. Use sentiment data to spot negative mentions, react swiftly to alerts, and effectively manage your online reputation.',
        },
      ];
      

  return (
    <section className="section-benefits __images-left">
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
