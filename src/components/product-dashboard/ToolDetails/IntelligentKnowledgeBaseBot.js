// import StorefrontIcon from '@mui/icons-material/Storefront';
// import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import { GrUserManager } from "react-icons/gr";
// import { FaFastForward } from "react-icons/fa";
// import { GrDocumentPerformance } from "react-icons/gr";
// import { GoCodescanCheckmark } from "react-icons/go";
// import { GiNetworkBars } from "react-icons/gi";
// import { MdOutlineNetworkCheck } from "react-icons/md";
// import { GrStatusGood } from "react-icons/gr";





import demoVideo from "./DemoVideo/KnowledgeBaseBot.mp4";
import PreSalesRepresentative from '../images/Sales Assistant/icons8-manager-100 (2) 1.svg'
import DataAnalysts from '../images/Sales Assistant/icons8-analyzing-skill-100 (3) 1.svg'
import CXO from '../images/Sales Assistant/icons8-accessibility-tools-100 1.svg'
import StrategyManager from '../images/Sales Assistant/icons8-visualization-skill-100 1.svg'

import StreamlinedClientProfiling from '../images/Sales Assistant/icons8-manager-100 (2) 2.svg'
import FasterPersonalizedSolutions from '../images/Sales Assistant/icons8-solution-100 1.svg'
import ImprovedAccuracy from '../images/Sales Assistant/icons8-accuracy-100 1.svg'
import EnhancedEfficiencyandProductivity from '../images/Sales Assistant/icons8-punctuality-100 1.svg'
// import IncreasedSalesConversion from '../images/Sales Assistant/icons8-summer-sales-100 (1) 1.svg'
// import CompetitiveAdvantage from '../images/Sales Assistant/icons8-american-football-player-100 1.svg'
import bannerImg from '../images/Sales Assistant/Sales assistant.png'


// const iconSize = {
//   height: "5rem",
//   width: "5rem",
//   color: "#dc848d",
// };
const iconSizeBO = {
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
}
export const IntelligentKnowledgeBaseBot = {
  title: "Intelligent Knowledge Base Bot",
  content:
    "Unlock the power of data with our AI-powered Knowledge Base Bot. Experience swift responses, personalized interactions, and safeguarded data confidentiality.",
  img: bannerImg,
  BusinessCase: [
    "Our Knowledge Base Bot is an advanced solution designed to manage common data inquiries involving both structured and unstructured data assets. Powered by Azure Cognitive Search, Azure Blob, Azure OpenAI, and Python, this interactive bot ensures timely and accurate responses to user questions while safeguarding sensitive data.",
  ],
  targetUsers: [
    {
      title: "Businesses and Organizations",
      description:
        "Handle large volumes of data and require efficient knowledge management.",
      iconSrc: <img src={PreSalesRepresentative} width="70px" alt='' />
    },
    {
      title: "Customer Support Teams",
      description:
        "Need quick access to accurate information to resolve customer queries.",
      iconSrc: <img src={DataAnalysts} width="70px" alt='' />
    },
    {
      title: "Data Analysts",
      description:
        "Require swift responses and personalized interactions for data analysis.",
      iconSrc: <img src={CXO} width="70px" alt='' />
    },
    {
      title: "Professionals",
      description:
        "Need quick access to accurate information for decision making",
      iconSrc: <img src={StrategyManager} width="70px" alt='' />
    },
  ],
  businessOutcomes: [
    {
      title: "Data-Driven Decision Making",
      description:
        ["Easy access to accurate information facilitates informed decision-making"],
      image: <img src={StreamlinedClientProfiling} width="100px" style={iconSizeBO} alt=""/>
    },
    {
      title: "Improved Productivity",
      description:
        ["Quick and accurate retrieval of relevant information saves time and boosts productivity."],
      image: <img src={FasterPersonalizedSolutions} width="100px" style={iconSizeBO} alt=""/>
    },
    {
      title: "Enhanced Collaboration",
      description:
        ["Robust knowledge sharing enables better teamwork."],
      image: <img src={ImprovedAccuracy} width="100px" style={iconSizeBO} alt=""/>
    },
    {
      title: "Competitive Advantage",
      description:
        ["Deliver faster and stay ahead of the competition."],
      image: <img src={EnhancedEfficiencyandProductivity} width="100px" style={iconSizeBO} alt=""/>
    }
  ],
  solutionHighlights: [
    "User questions are classified using OpenAI for swift responses",
    "The bot accommodates custom prompts for personalized interactions.",
    "Users enjoy an engaging chat experience.",
    "The bot understands user context to provide precise and meaningful responses."
  ],
  summary: [
    {
      title: "Challenges",
      details: [
        <div><b>Data Management:</b> Handling diverse data types effectively.</div>,
        <div><b>Timely Responses:</b> Optimizing the bot’s performance and response time.</div>,
        <div><b>Data Confidentiality:</b>Implementing robust security measures to protect data.</div>,
        <div><b>User Context Understanding:</b> Delivering precise and meaningful responses based on user context.</div>,
      ],
    },
    {
      title: "Building Solution",
      details: [
        <div><b>User Question Classification:</b> Utilizing OpenAI to classify user questions for swift responses.</div>,
        <div><b>Custom Prompts:</b> Accommodating custom prompts for personalized interactions.</div>,
        <div><b>Interactive Chat Experience:</b>Creating an engaging chat experience for users.</div>,
        <div><b>Contextual Understanding:</b> Developing a deep understanding of user context to deliver precise and meaningful responses.</div>,
      ],
    },
    {
      title: "Outcomes",
      details: [
        <div><b>Data-Driven Decision Making:</b> Facilitated informed decision-making through easy access to accurate information.</div>,
        <div><b>Improved Productivity:</b>Boosted productivity by enabling quick and accurate retrieval of relevant information.</div>,
        <div><b>Enhanced Collaboration:</b>Fostered better teamwork through robust knowledge sharing.</div>,
        <div><b>Competitive Advantage:</b> Achieved faster delivery, providing a competitive edge.</div>
      ],
    },
  ],
  demo: {
    link: { demoVideo },
  },
  tryit: {
    link: ""//"https://kbbotmaq-dev.azurewebsites.net/",
  },

  FAQs: [
    {
      question: "What technologies does the Knowledge Base Bot use?",
      answer: "The bot uses Azure Cognitive Search, Azure Blob, Azure OpenAI, and Python."
    },
    {
      question: "Who can benefit from using the Knowledge Base Bot?",
      answer: "Any businesses or organizations that handle large volumes of data and require efficient knowledge management. It is particularly beneficial for customer support teams, data analysts, and any professionals who need quick access to accurate information."
    },
    {
      question: "How does the bot manage both structured and unstructured data assets?",
      answer: "The bot uses advanced algorithms and Azure Cognitive Search to effectively manage and process both structured and unstructured data assets."
    },
    {
      question: "How does the bot ensure timely and accurate responses?",
      answer: "The bot classifies user questions using OpenAI, which allows it to provide swift and accurate responses. It also accommodates custom prompts for personalized interactions."
    },
    {
      question: "How does the bot safeguard sensitive data?",
      answer: "The bot is designed with robust security measures to protect data confidentiality while still allowing necessary access to information for processing and answering queries."
    },
    {
      question: "How does the bot accommodate custom prompts for personalized interactions?",
      answer: "The bot is designed to be flexible and can accommodate custom prompts provided by users, allowing for personalized interactions."
    },
    {
      question: "How does the bot understand user context to deliver precise and meaningful responses?",
      answer: "The bot uses advanced AI algorithms to understand the context of user queries. This allows it to provide precise and meaningful responses that are relevant to the user’s needs."
    }
  ]
};

export default IntelligentKnowledgeBaseBot;
