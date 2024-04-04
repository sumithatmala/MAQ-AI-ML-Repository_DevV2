import React from "react";
import dataAnalysis from './icons/icons8-analysis-100 (3) 2.svg';
import idea from './icons/icons8-activate-100 1.svg';
import structured from './icons/icons8-users-90 1.svg';


const IndustriesListData = [
  {
    iconSrc: <img src = {structured} alt="" width={70}  />,
    altText: "Aggregate",
    title: "Aggregate",
    description:
      "Broaden your analysis of consumer behavior. Gather sentiments from various sources and consolidate the data into a unified view.",
  },
  {
    iconSrc: <img src = {dataAnalysis} alt="" width={70} />,
    altText: "Analyze",
    title: "Analyze",
    description:
      "Incorporate intelligent algorithms to gauge the vibe of emerging trends. Monitor crucial shifts in behavior and uncover hidden opportunities within sentiments.",
  },
  {
    iconSrc: <img src = {idea} alt=""width={70}  />,
    altText: "Activate",
    title: "Activate",
    description:
      "Convey insights through interactive dashboards, take action based on your data, and make informed decisions regarding the trends to pursue.",
  },
];

export default IndustriesListData;
