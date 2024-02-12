import React from "react";
import dataAnalysis from './icons/icon-data-analysis-2.svg';
import idea from './icons/icon-idea.svg';
import structured from './icons/icon-structured-data.svg';


const IndustriesListData = [
  {
    iconSrc: <img src = {structured} />,
    altText: "Aggregate",
    title: "Aggregate",
    description:
      "Broaden your analysis of consumer behavior. Gather sentiments from various sources and consolidate the data into a unified view.",
  },
  {
    iconSrc: <img src = {dataAnalysis} />,
    altText: "Analyze",
    title: "Analyze",
    description:
      "Incorporate intelligent algorithms to gauge the vibe of emerging trends. Monitor crucial shifts in behavior and uncover hidden opportunities within sentiments.",
  },
  {
    iconSrc: <img src = {idea} />,
    altText: "Activate",
    title: "Activate",
    description:
      "Convey insights through interactive dashboards, take action based on your data, and make informed decisions regarding the trends to pursue.",
  },
];

export default IndustriesListData;
