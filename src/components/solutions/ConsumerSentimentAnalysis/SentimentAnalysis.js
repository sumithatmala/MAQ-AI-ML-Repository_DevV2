import React from 'react';
import './css/SentimentAnalysis.css';
import like from './icons/icon-like-alt.svg';
import bar from './icons/icon-cost-bar.svg';
import conversation from './icons/icon-conversation.svg';
import search from './icons/icon-data-analysis-mag.svg';

const SentimentAnalysis = () => {
  const listItems = [
    {
      iconSrc: like,
      title: "Monitor Your Brand’s Social Media",
      description: "Make a health check of public opinion about your brand and verify if it’s in the green or the red zone. We build custom opinion tracking solutions that run opinion mining on unstructured data from the brand's social media channels.",
    },
    {
      iconSrc: conversation,
      title: "Focus on The Voice of the Customer (VoC)",
      description: "Gain insight into consumer expectations, preferences, and pain points to gain competitive intelligence. Our VoC solutions analyze and derive insight from all types of VoC data using a variety of analytical and visualization techniques.",
    },
    {
      iconSrc: bar,
      title: "Get Insights from Product Analysis",
      description: "Convert negative comments into positive interactions and keep customers satisfied during product changes. Uncover gaps between your product and the competition and predict your customers' response to new products.",
    },
    {
      iconSrc: search,
      title: "Track Your Competitors",
      description: "Benchmark the strengths and weaknesses of your brand against competitors and detect reputation risks before they break loose. Lift your business ranking, get a better handle on your competition, and position your products strategically.",
    },
  ];

  return (
    <section className="licon-text">
      <div className="licon-text-inner">
        <h2 className="head-block-center">Sentiment Analysis for Brand Building</h2>
        <div className="text-block-center">Get a leg up in the competition through innovative technologies for sentiment tracking.</div>
        <ul className="licon-text-list">
          {listItems.map((item, index) => (
            index % 2 === 0 && (
              <div className="row" key={index}>
                <ListItem {...item} />
                {index + 1 < listItems.length && <ListItem {...listItems[index + 1]} />}
              </div>
            )
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
