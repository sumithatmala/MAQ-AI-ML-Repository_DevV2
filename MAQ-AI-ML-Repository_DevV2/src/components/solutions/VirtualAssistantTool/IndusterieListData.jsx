import React from 'react';
import img1 from './icon/icon-bi-analytics.svg'
import icon24 from './icon/icon-24hours.svg';
import iconCost from './icon/icon-cost-alt.svg';
import personcheck from './icon/icon-person-check.svg';
import engine from './icon/icon-engine.svg';
import dollar from './icon/icon-dollar-reduce.svg';

const IndustData = [
  {
    iconSrc: <img src={icon24} />,
    altText: "ai customer care analytics",
    title: "Seamless Customer Service",
    description: "Be available for your customers 24/7",
  },
  {
    iconSrc:<img src= {personcheck} />,
    altText: "Intelligent Transport",
    title: "Tailored Experiences",
    description: "Boost retention and lifetime value",
  },
  {
    iconSrc: <img src={engine} />,
    altText: "recommendation engine",
    title: "Streamlined Task Automation",
    description: "Liberating time to focus on your priorities",
  },

  {
    iconSrc: <img src={iconCost} />,
    altText: "increase",
    title: "Boost Deflections and Agent Productivity",
    description: "Direct your customers to a chatbot for consultation",
  },

  {
    iconSrc: <img src={dollar} />,
    altText: "dollar reduce",
    title: "Cost-Efficiency",
    description:
      "Minimize hiring hassles and decrease the need for overtime pay",
  },

  {
    iconSrc: <img src={img1} />,
    altText: "business intelligence",
    title: "Customer Insights and Analytics",
    description: "Analyze customer trends, needs, and pain points",
  },
];

export default IndustData;
