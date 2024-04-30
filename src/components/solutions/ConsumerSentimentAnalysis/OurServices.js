import React from "react";
// import real from "./Images/RealTime.jpg";
// import intent from "./Images/Intent.gif";
// import info from "./Images/InfoExtraction.svg";
// import nlp from "./Images/NLp.svg";

import sentiment from "./Images/Rectangle 43.svg"
import intent from "./Images/Rectangle 44.svg"
import textMining from "./Images/Rectangle 46.svg"
import fullcycle from "./Images/Rectangle 45.svg"
// import textMining from "./Images/textmining.jpg"
// import fullcycle from "./Images/fullcycle.jpg"

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
    img: <img src={sentiment} alt="" width={400} height={250}/>,
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
    img: <img src={intent} alt="" width={400} height={250}/>,
  },
  {
    heading: "Text Mining and Info Extraction",
    points: [
      "Extract knowledge from unstructured content and retrieve valuable information from diverse data sources.",
      "Optimize your use of emails, scripts, documents, and conversations with less effort and quicker turnarounds.",
      "Voice-of-the-customer solutions",
      "Document analysis (CMS, RPA, ERP, and others)",
      "Text analytics for call centers",
    ],
    img: <img src={textMining} alt="" width={400} height={250}/>,
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
    img: <img src={fullcycle} alt="" width={400} height={250}/>,
  },
];

export default OurServices;
