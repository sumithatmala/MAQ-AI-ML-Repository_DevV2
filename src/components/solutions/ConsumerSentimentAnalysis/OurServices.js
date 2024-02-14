import React from "react";
import real from "./Images/RealTime.jpg";
import intent from "./Images/Intent.gif";
import info from "./Images/InfoExtraction.svg";
import nlp from "./Images/NLp.svg";

const OurServices = [
  {
    heading: "Real-Time Sentiment Monitoring",
    points: [
      "Attain an end-to-end view of your consumer preferences with our dynamic emotion tracking solutions.",
      "Detect changes in consumer mood, prevent churn, and lead in proactive customer service.",
      "Emotion AI model development",
      "Social media listening tools",
      "Smart customer service solutions",
      "ChatGPT conversational solutions",
    ],
    img: <img src={real} alt="" width={350}/>,
  },
  {
    heading: "Intent Classification",
    points: [
      "Gain precise insights into your customers’ intentions with our user intent analytics solutions.",
      "Track and categorize queries, comments, emails, and other data to reduce time and costs in customer service.",
      "Custom intent classifier development",
      "Sales and marketing campaign analysis",
      "Conversational AI applications",
    ],
    img: <img src={intent} alt="" width={350}/>,
  },
  {
    heading: "Text Mining and Information Extraction",
    points: [
      "Extract knowledge from unstructured content and retrieve valuable information from diverse data sources.",
      "Optimize your use of emails, scripts, documents, and conversations with less effort and quicker turnarounds.",
      "Voice-of-the-customer solutions",
      "Document analysis (CMS, RPA, ERP, and others)",
      "Text analytics for call centers",
    ],
    img: <img src={info} alt="" width={350}/>,
  },
  {
    heading: "Full-Cycle NLP Software Development",
    points: [
      "Translate your business requirements into comprehensive smart solutions based on Natural Language Processing.",
      "Uncover insights buried in your data and transform opportunities into outstanding products.",
      "Topic modeling solutions",
      "Text categorization",
      "User feedback analysis",
    ],
    img: <img src={nlp} alt="" width={350}/>,
  },
];

export default OurServices;
