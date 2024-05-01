// import case_targeted_advertising_system from "../img/case-targeted-advertising-system.webp"
// import case_customer_analytics_ai_nlp from "../img/case-customer-analytics-ai-nlp.webp"
// import case_customer_review_analytics_solution from "../img/case-customer-review-analytics-solution.webp"
// import case_predictive_models_improve_debt_collection_process from "../img/case-predictive-models.webp"
// import CookingAssistant from './Images/IntelligentCookingAssistant.jpeg';
// import ServiceSoltion from './Images/IntelligentServiceSolution.jpg';
// import AutomatedFeedback from './Images/AutomatedFeedback.png';
// import EmotionalAnalysis from './Images/EmotionalAnalysis.jpeg';
// import emotions from './Images/emotions.jpg';
// import feedback from './Images/feedback.jpg';

import feedback from './Images/Rectangle 47.svg';
import emotions from './Images/Rectangle 48.svg';
import CookingAssistant from './Images/Rectangle 49.svg';
import ServiceSoltion from './Images/Rectangle 50.svg';

const CarouselData = [
  {
    title: "Automated Feedback Processing",
    image: <img src={feedback} alt='automatedFeedback' style={{height:"230px"}} />,
    description: [
      "Our team developed a cost-efficient analytics tool for evaluating feedback for an international game publisher.",
      "Designed a tailored, NLP-driven solution to cut down on analysis costs and time, ensuring unbiased decision-making.",
    ],
    link: "",
  },
  {
    title: "Emotion Analysis Intelligence",
    image: <img src={emotions} alt="Emotion Analysis Intelligence" style={{height:"230px"}}/>,
    description: [
      "Provided to a major US e-commerce platform aiming to enhance customer experience through automated sentiment analytics.",
      "Deployed an ML-powered emotion analysis tool to identify the emotional tone in customer reviews.",
    ],
    link: "",
  },
  {
    title: "Intelligent Cooking Assistant",
    image: <img src={CookingAssistant} alt="Intelligent Cooking Assistant" style={{height:"230px"}} />,
    description: [
      "Offered project recovery services to enhance the existing product and fix speech recognition functionality.",
      "Addressed all client concerns and delivered an upgraded version of an AI cooking software with hands-free control and intelligent add-ons.",
    ],
    link: "",
  },
  {
    title: "Intelligent Service Solution",
    image: <img src={ServiceSoltion} alt="Intelligent Service Solution" style={{height:"230px"}}/>,
    description: [
      "A US FMCG company required an intelligent solution to extract actionable insights from emails and audio using NLP.",
      "Implemented a robust data analysis pipeline for sentiment analysis, becoming a central tool for our client's customer strategy.",
    ],
    link: "",
  },
];

export default CarouselData;
