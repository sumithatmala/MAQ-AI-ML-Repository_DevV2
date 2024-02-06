import React from 'react';
import img1 from './icon/icon-bi-analytics.svg'
import icon24 from './icon/icon-24hours.svg';
import iconCost from './icon/icon-cost-alt.svg';
import personcheck from './icon/icon-person-check.svg';
import engine from './icon/icon-engine.svg';
import dollar from './icon/icon-dollar-reduce.svg';
const IndustryItem = ({ iconSrc, altText, title, description }) => (
  <div className="industries__list-item">
    <div className="industries__item">
      <div className="industries__item-icon">
        <img src={iconSrc} alt={altText} />
      </div>
      <h3 className="industries__item-title">{title}</h3>
      <div className="industries__item-text">{description}</div>
    </div>
  </div>
);

const IndustriesList = () => {
  const industriesData = [
    {
      iconSrc: icon24,
      altText: 'ai customer care analytics',
      title: 'Seamless Customer Service',
      description: 'Be available for your customers 24/7',
    },
    {
      iconSrc: personcheck,
      altText: 'Intelligent Transport',
      title: 'Tailored Experiences',
      description: 'Boost retention and lifetime value',
    },
    {
        iconSrc: engine,
        altText: 'recommendation engine',
        title: 'Streamlined Task Automation',
        description: 'Liberating time to focus on your priorities',
      },
      
      {
        iconSrc: iconCost,
        altText: 'increase',
        title: 'Boost Deflections and Agent Productivity',
        description: 'Direct your customers to a chatbot for consultation',
      },
      
      {
        iconSrc: dollar,
        altText: 'dollar reduce',
        title: 'Cost-Efficiency',
        description: 'Minimize hiring hassles and decrease the need for overtime pay',
      },
      
      {
        iconSrc: img1,
        altText: 'business intelligence',
        title: 'Customer Insights and Analytics',
        description: 'Analyze customer trends, needs, and pain points',
      },
      
  ];

  return (
    <div className="industries__list">
      {industriesData.map((industry, index) => (
        <IndustryItem key={index} {...industry} />
      ))}
    </div>
  );
};

export default IndustriesList;
