import React from 'react';
import './css/SentimentAnalyticsSection.css';
import one from './icons/icon-1.svg';
import two from './icons/icon-2.svg';
import three from './icons/icon-3.svg';
import four from './icons/icon-4.svg';



const NumberingTileItem = ({ iconSrc, title, description, link }) => (
  <li className="numbering-tile-list__list-item">
    <div className="numbering-tile-list__item">
      <img className="numbering-tile-list__icon" src={iconSrc} alt={title} />
      <div className="numbering-tile-list__text">
        <div className="numbering-tile-list__title">{title}</div>
        <div className="numbering-tile-list__description">{description} {link && <a href={link}>Learn more</a>}</div>
      </div>
    </div>
  </li>
);

const SentimentAnalyticsSection = () => {
  const items = [
    {
      iconSrc: one,
      title: "Get Live Insights",
      description: "Use our custom sentiment analytics solutions to recognize emotions behind texts across the web and integrate customer interaction into a single source of truth.",
      link: "https://indatalabs.com/services/ai-customer-care-analytics-solutions"
    },
    {
      iconSrc: three,
      title: "Reduce Customer Churn",
      description: "Gather unsolicited feedback to surface what’s truly top of mind for your clients, identify frustrated customers, and respond with the right retention strategy."
    },
    {
      iconSrc: two,
      title: "Provide Better Services",
      description: "Gain a clear picture of the level of customer happiness, close the gap between your company and your customers, and maintain high service quality."
    },
    {
      iconSrc: four,
      title: "Detect Changes in Customer Opinion",
      description: "Detect drops and rises in optimism about your brand, monitor recurring trends, and align messages to consumer mindsets to build a positive brand image."
    }
  ];

  return (
    <section className="numbering-tile">
      <div className="numbering-tile-inner">
        <h2 className="head-block-center">Capture the Whole Picture with Sentiment Analytics</h2>
        <div className="text-block-center">Transform emotions into quantitative metrics and deliver the right products at the right time.</div>
        <ul className="numbering-tile-list">
          {items.map((item, index) => (
            (index % 2 === 0) && (
              <div className="row" key={index}>
                <NumberingTileItem {...item} />
                {index + 1 < items.length && <NumberingTileItem {...items[index + 1]} />}
              </div>
            )
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SentimentAnalyticsSection;
