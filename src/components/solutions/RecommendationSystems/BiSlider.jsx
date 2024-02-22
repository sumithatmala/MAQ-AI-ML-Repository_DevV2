// import CookingAssistant from '../ConsumerSentimentAnalysis/Images/IntelligentCookingAssistant.jpeg';
// import ServiceSoltion from '../ConsumerSentimentAnalysis/Images/IntelligentServiceSolution.jpg';
import AutomatedFeedback from "../ConsumerSentimentAnalysis/Images/AutomatedFeedback.png";
import EmotionalAnalysis from "../ConsumerSentimentAnalysis/Images/EmotionalAnalysis.jpeg";

const BiSlider = [
  {
    title: "Smart TV App's Movie Suggestion Algorithm",
    image: <img src={AutomatedFeedback} />,
    description: [
      "Our client is a prominent player in the Smart TV digital home entertainment sector, offering a leading premium video-on-demand service. This service allows users to enjoy newly released movies in impeccable quality or select from an extensive library of over 7000 titles.",
      "With 1.5 million monthly active users on their Smart TV application, our client ensures that personalized movie recommendations are delivered to every customer.",
      "",
      "",
      "",
    ],
    link: "",
  },
  {
    title: "Development of Predictive Analytics Module for E-Commerce Giant",
    image: (
      <img
        src={EmotionalAnalysis}
        alt="Emotion Analysis Intelligence"
       
      />
    ),
    description: [
      "Our client, a prominent e-commerce provider collaborating with over 50 brands, sought a solution for generating cross-brand and single-brand recommendations. ",
      "The primary business objective was to leverage machine learning (ML) to boost sales, enhance customer experience, and attract new clients while retaining loyal users on the online platform. Ultimately, the client acquired a state-of-the-art ML-led system for their e-commerce operations.",
    ],
    link: "",
  },
];

export default BiSlider;
