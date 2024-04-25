import React from 'react';
import './css/SentimentAnalysis.css';
// import like from './icons/icon-like-alt.svg';
// import bar from './icons/icon-cost-bar.svg';
// import conversation from './icons/icon-conversation.svg';
// import search from './icons/icon-data-analysis-mag.svg';

import like from './icons/icons8-social-100 1.svg';
import bar from './icons/icons8-customer-insights-manager-100 1.svg';
import conversation from './icons/icons8-voice-100 1.svg';
import search from './icons/icons8-fast-track-100 1.svg';

const SentimentAnalysis = () => {
  const listItems = [
    {
      iconSrc: like,
      title: "Monitor Your Brand’s Social Media",
      description: "Conduct a health check on public opinion about your brand and determine if it's in the green or red zone. We create custom opinion tracking solutions that perform opinion mining on unstructured data from your brand's social media channels.",
    },
    {
      iconSrc: conversation,
      title: "Focus on The Voice of the Customer (VoC)",
      description: "Gain insights into consumer expectations, preferences, and pain points for competitive intelligence. Our VoC solutions analyze and extract insights from various VoC data types using a range of analytical and visualization techniques.",
    },
    {
      iconSrc: bar,
      title: "Get Insights from Product Analysis",
      description: "Transform negative comments into positive interactions and maintain customer satisfaction during product changes. Identify gaps between your product and competitors, and predict customer responses to new products.",
    },
    {
      iconSrc: search,
      title: "Track Your Competitors",
      description: "Benchmark the strengths and weaknesses of your brand against competitors and proactively identify reputation risks. Improve your business ranking, gain a better understanding of your competition, and strategically position your products.",
    },
    
  ];

  return (
    <section className="licon-text margin-adjust">
      <div className="licon-text-inner">
        <h2 className="head-block-center">Sentiment Analysis for Brand Building</h2>
        <div className="text-block-center">Get a leg up in the competition through innovative technologies for sentiment tracking.</div>
        <ul className="licon-text-list">
          {listItems.map((item, index) => (
            ListItem(item)
          ))}
        </ul>
      </div>
    </section>
  );
};

const ListItem = ({ iconSrc, title, description }) => {
  return (
    <li className="licon-text-list__list-item">
      <div className="licon-text-list__item">
        <div className="licon-text-list__icon">
          <img src={iconSrc} alt="icon" />
        </div>
        <div className="licon-text-list__content">
          <h3 className="licon-text-list__title">{title}</h3>
          <div className="licon-text-list__description">{description}</div>
        </div>
      </div>
    </li>
  );
};

export default SentimentAnalysis;
