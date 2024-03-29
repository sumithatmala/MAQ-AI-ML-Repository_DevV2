import nlp1 from "../img/nlp-1.svg";
import nlp2 from "../img/nlp-2.svg";
import nlp3 from "../img/nlp-3.svg";
import icon1 from "../img/icons8-solution-100 (3) 1.svg";
import icon2 from "../img/icons8-3d-model-100 (2) 1.svg";
import icon3 from "../img/icons8-ratings-100 (1) 1.svg";
import icon4 from "../img/icons8-leadership-100 1.svg";

import chatgpt from "../img/icons8-chat-gpt-100 1.svg";
import nlpai from "../img/icons8-language-100 (1) 1.svg";
import nlpmodel from "../img/icons8-customer-survey-100 2.svg";

export const learnMoreItems = [
  {
    title: "ChatGPT",
    description: "Power your product with ChatGPT technology",
    iconSrc: <img src={chatgpt} alt="" width={70} />,
    altText: "",
  },
  {
    title: "NLP-AI",
    description: "NLP API for social media analytics",
    iconSrc: <img src={nlpai} alt="" width={70} />,
    altText: "",
  },
  {
    title: "NLP Models",
    description: "Custom NLP models for customer feedback analysis",
    iconSrc: <img src={nlpmodel} alt="" width={70} />,
    altText: "",
  },
];

export const Banners = [
  {
    heading:
      "Tailored NLP models designed specifically for customer feedback analysis.",
    details:
      "Customer feedback analysis software powered by custom models that surpass simple domain adaptation, ideal for companies with customers and prospects who use unique language styles.",
    points: [
      "Sentiment analysis",
      "Topic detection",
      "Sentiment scored topic extraction",
      "Semantic ontology development",
    ],
    img: <img src={nlp1} alt="Custom NLP" width={250}></img>,
  },
  {
    heading: "Power your product with NLP technology",
    details:
      "Enhance your products' customer engagement and satisfaction rates through the capabilities of Natural Language Processing.",
    points: [
      "Speech recognition",
      "Information extraction (from topic classification to entity extraction)",
      "Semantic search",
      "Text categorization",
    ],
    img: <img src={nlp2} alt="NLP technology" width={250}></img>,
  },
  {
    heading: "An NLP API tailored for social media analytics.",
    details:
      "A user-friendly Natural Language Processing API for analyzing text data from social media, providing detailed audience insights, including demographic information and more.",
    points: ["Gender", "Age", "Location", "Interests", "Language", "etc."],
    img: <img src={nlp3} alt="AI" width={250}></img>,
  },
];

export const SpecialCards = [
  {
    topic: "Customizable solutions",
    disc: "We excel in delivering tailored solutions that precisely match customers' needs and data characteristics.",
    img: <img src={icon1} alt="Custom NLP" height={70}></img>,
  },
  {
    topic: "State of the art models",
    disc: "We constantly seek innovative methods to enhance our predictions and achieve optimal outcomes.",
    img: <img src={icon2} alt="Custom NLP" height={70}></img>,
  },
  {
    topic: "Scalable results",
    disc: "Our solutions are designed to scale alongside your business, continually enhancing your capabilities.",
    img: <img src={icon3} alt="Custom NLP" height={70}></img>,
  },
  {
    topic: "Highly professional team",
    disc: "We are committed to achieving excellence in all our endeavors for our clients.",
    img: <img src={icon4} alt="Custom NLP" height={70}></img>,
  },
];
