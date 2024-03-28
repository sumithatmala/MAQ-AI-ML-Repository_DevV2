import React from 'react';

import icon24 from './icon/icons8-human-resources-100 (1) 1.svg';
import personcheck from './icon/icons8-experience-100 1.svg';
import engine from './icon/icons8-automation-100 1.svg';
import iconCost from './icon/icons8-positive-dynamic-100 (2) 1.svg';
import dollar from './icon/icons8-buy-for-change-100 1.svg';
import img1 from './icon/icons8-customer-insight-100 2.svg'

const IndustData = [
  {
    iconSrc: <img src={icon24} alt="" width="70px" />,
    altText: "ai customer care analytics",
    title: "Seamless Customer Service",
    description: "Be available for your customers 24/7",
  },
  {
    iconSrc:<img src= {personcheck} alt="" width="70px" />,
    altText: "Intelligent Transport",
    title: "Tailored Experiences",
    description: "Boost retention and lifetime value",
  },
  {
    iconSrc: <img src={engine} alt="" width="70px" />,
    altText: "recommendation engine",
    title: "Streamlined Task Automation",
    description: "Liberating time to focus on your priorities",
  },

  {
    iconSrc: <img src={iconCost}  alt="" width="70px"/>,
    altText: "increase",
    title: "Boost Deflections and Agent Productivity",
    description: "Direct your customers to a chatbot for consultation",
  },

  {
    iconSrc: <img src={dollar} alt="" width="70px" />,
    altText: "dollar reduce",
    title: "Cost-Efficiency",
    description:
      "Minimize hiring hassles and decrease the need for overtime pay",
  },

  {
    iconSrc: <img src={img1} alt="" width="70px" />,
    altText: "business intelligence",
    title: "Customer Insights and Analytics",
    description: "Analyze customer trends, needs, and pain points",
  },
];

export default IndustData;
