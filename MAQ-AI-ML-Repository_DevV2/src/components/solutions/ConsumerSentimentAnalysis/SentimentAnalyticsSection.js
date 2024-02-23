import React from 'react';
import './css/SentimentAnalyticsSection.css';
import one from './icons/icon-1.svg';
import two from './icons/icon-2.svg';
import three from './icons/icon-3.svg';
import four from './icons/icon-4.svg';

const SentimentAnalyticsSection = [
  {
    img: <img src={one} alt='' width={100} />,
    label: "Get Live Insights",
    disc: "Utilize our custom sentiment analytics solutions to identify emotions behind texts across the web and consolidate customer interactions into a single source of truth.",
  },
  {
    img: <img src={three} alt="" width={100} />,
    label: "Reduce Customer Churn",
    disc: "Collect unsolicited feedback to uncover what's truly top of mind for your clients, identify frustrated customers, and respond with the appropriate retention strategy.",
  },
  {
    img: <img src={two} alt="" width={100} />,
    label: "Provide Better Services",
    disc: "Gain a clear understanding of customer happiness levels, bridge the gap between your company and customers, and maintain high service quality.",
  },
  {
    img: <img src={four} alt="" width={100} />,
    label: "Detect Changes in Customer Opinion",
    disc: "Identify drops and rises in optimism about your brand, monitor recurring trends, and align messages with consumer mindsets to build a positive brand image.",
  }


];

export default SentimentAnalyticsSection;
