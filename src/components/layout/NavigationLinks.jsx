// import {
//     ClockIcon,
//     PaperAirplaneIcon,
//     ReceiptRefundIcon,
//     DocumentIcon,
//     PlusCircleIcon,
//     ListBulletIcon,
//   } from "@heroicons/react/24/outline";
// import img from './img-1.jpg'

// const ImageComponent = props => <div
//                                   className="img"
//                                   style={{
//                                     backgroundImage: `url(${props.src})`,
//                                     backgroundPosition: 'center',
//                                     backgroundSize: 'contain',
//                                     paddingBottom: '75%',
//                                   }}
//                                   ></div>

// const NavigationLinks = [
//     {
//         name: "Products",
//         subLinks: [
//           {
//             name: "AI Products",
//             description: "AI Products",
//             link: "/AIProducts",
//             color: "bg-green-300 dark:bg-green-700",
//             icon: <ImageComponent src={AIProducts} />,
//           },
//           {
//             name: "ML Products",
//             description: "ML Products",
//             link: "/MLProducts",
//             color: "bg-blue-300 dark:bg-blue-700",
//             icon: <ImageComponent src={MLProduct} />,
//           },
//           {
//             name: "Other Products",
//             description: "Other Products",
//             link: "/OtherProducts",
//             color: "bg-red-300 dark:bg-red-700",
//             icon: <ImageComponent src={OtherProducts} />,
//           },
//         ],
//       },
//     {
//       name: "Machine Learning",
//       subLinks: [
//         {
//           name: "Supervised Learning",
//           description: "Supervised Learning",
//           link: "/SupervisedLearning",
//           color: "bg-green-300 dark:bg-green-700",
//           icon: <ImageComponent src={SupervisedLearning} />,
//         },
//         {
//           name: "Unsupervised Learning",
//           description: "Unsupervised Learning",
//           link: "/UnsupervisedLearning",
//           color: "bg-blue-300 dark:bg-blue-700",
//           icon: <ImageComponent src={UnsupervisedLearning} />,
//         },
//         {
//           name: "Deep Learning",
//           description: "Deep Learning",
//           link: "/DeepLearning",
//           color: "bg-red-300 dark:bg-red-700",
//           icon: <ImageComponent src={DeepLearning} />,
//         },
//       ],
//     },
//     {
//         name: "Artificial Intelligence",
//         subLinks: [
//           {
//             name: "Natural Language Processing (NLP)",
//             description: "Natural Language Processing (NLP)",
//             link: "/NLP",
//             color: "bg-teal-300 dark:bg-teal-700",
//             icon: <ImageComponent src={NLP} />,
//           },
//           {
//             name: "Computer Vision",
//             description: "Computer Vision",
//             link: "/ComputerVision",
//             color: "bg-indigo-300 dark:bg-indigo-700",
//             icon: <ImageComponent src={ComputerVision} />,
//           },
//           {
//             name: "Speech Recognition",
//             description: "Speech Recognition",
//             link: "/SpeechRecognition",
//             color: "bg-amber-300 dark:bg-amber-700",
//             icon: <ImageComponent src={SpeechRecognition} />,
//           },
//         ],
//       },

//     // {
//     //   name: "Demos",
//     //   subLinks: [],
//     // },

//   ];

//industries
import health_icon from "./images/health.svg"
import automobile_icon from "./images/automobile.svg"
import retail_icon from "./images/cashier.svg"
import ecommerce_icon from "./images/ecommerce.svg"
import fintech_icon from "./images/fintech.svg"
import game_icon from "./images/game.svg"
import logistics_icon from "./images/logistics.svg"
import marketing_icon from "./images/marketing.svg"
import sports_icon from "./images/sports.svg"

//solutions
import bot_icon from "./images/bot.svg"
import image_icon from "./images/image.svg"
import like_icon from "./images/like.svg"
import LLM_icon from "./images/LLM.svg"
import NLP_icon from "./images/NLP.svg"
import OCR_icon from "./images/OCR.svg"
import predictive_icon from "./images/predictive.svg"
import sentiment_icon from "./images/smiley.svg"
import textAnalysis_icon from "./images/textAnalysis.svg"

const NavigationLinks = [
  // { label: "Home", link: "./" },
  { label: "Expertise", link: "./Expertise" },
  {
    label: "Products",
    submenu: [
      {
        label: "Artificial Intelligence & ML",
        submenu: [
          {
            label: "Session Information Bot",
            link: "./product/SessionInformationBot",
          },
          {
            label: "Feedback Summarizer Bot",
            link: "./product/FeedbackSummarizerBot",
          },
          {
            label: "Intelligent Document Processing Bot",
            link: "./product/IntelligentDocumentProcessingBot",
          },
          {
            label: "Document Classification Bot",
            link: "./product/DocumentClassificationWithVirtualAssistant",
          },
          {
            label: "Smart Support Framework",
            link: "./product/SmartSupportFramework",
          },
          { label: "TriviaBot", link: "./product/TriviaBot" },
          { label: "Support Ticket Assistant", link: "./product/SupportTicketAssistant" },
          { label: "Sales Assistant", link: "./product/SalesAssistant" },
          { label: "Test Case Recommender", link: "./product/TestCaseRecommender" },
        ],
      },
      {
        label: "Generative AI & GPT",
        submenu: [
          {
            label: "RunwayML",
            link: "#",
          },
          {
            label: "Hugging Face Transformers",
            link: "#",
          },
          {
            label: "DeepAI Text Generation API",
            link: "#",
          },
          {
            label: "EleutherAI GPT Models",
            link: "#",
          },
        ],
        icon: "",
        alt: "",
        link: "#",
      },
    ],
  },
  {
    label: "Solutions",
    submenu: [
      {
        label: "Virtual Assistant Tool", 
        link: "/solution/VirtualAssistantTool",
        icon: <img src={bot_icon} alt=""  width={35}/>,
        alt: "data",
      },
      {
        label: "Custom Large Language Models",
        link: "/solution/LargeLanguageModel",
        icon: <img src={LLM_icon} alt=""  width={35}/>,
        alt: "ML",
      },
      { 
        label: "Natural Language Processing", 
        link: "/solution/NaturalLanguageProcessing",
        icon: <img src={NLP_icon} alt=""  width={35}/>,
        alt: "data",
      },
      {
        label: "Consumer Sentiment Analysis",
        link: "/solution/ConsumerSentimentAnalysis",
        icon: <img src={sentiment_icon} alt=""  width={35}/>,
        alt: "data",
      },
      { 
        label: "Text Analysis", 
        link: "./solution/TextAnalysis",
        icon: <img src={textAnalysis_icon} alt=""  width={35}/>,
        alt: "data",
      },
      // {
      //   label: "Al Call Center Solutions",

      //   icon: "/icons/dataV.svg",
      //   alt: "data",
      // },
      {
        label: "Predictive Analytics",
        link: "/solution/PredictiveAnalytics",
        icon: <img src={predictive_icon} alt=""  width={35}/>,
        alt: "data",
      },
      {
        label: "Recommendation Systems",
        link: "/Industries/RecommendationSystems",
        icon: <img src={like_icon} alt=""  width={35}/>,
        alt: "data",
      },
      // { 
      //   label: "Computer Vision", 
      //   link: "./solution/ComputerVision",
      //   icon: "/icons/dataV.svg",
      //   alt: "data",
      // },
      { 
        label: "Image Recognition", 
        link: "./solution/ImageRecognition",
        icon: <img src={image_icon} alt=""  width={35}/>,
        alt: "data",
      },
      // {
      //   label: "Pose Estimation",

      //   icon: "/icons/dataV.svg",
      //   alt: "data",
      // },
      {
        label: "Data capture & OCR",
        link: "./solution/DataCaptureOCR",
        icon: <img src={OCR_icon} alt=""  width={35}/>,
        alt: "data",
      },
    ],
  },
  {
    label: "Industries",
    submenu: [
      {
        label: "Healthcare & Pharma",
        link: "/Industries/Health&Pharma",
        icon: <img src={health_icon} alt=""  width={35}/>,
        alt: "frwk",
      },
      {
        label: "Sport & Wellness",
        link: "/Industries/SportWellness",
        icon: <img src={sports_icon} alt="" width={35}/>,
        alt: "nlp",
      },
      {
        label: "E-commerce",
        link: "/Industries/E-commerce",
        icon: <img src={ecommerce_icon} alt="" width={35}/>,
        alt: "comp",
      },
      {
        label: "MarTech",
        link: "/Industries/MarTech",
        icon: <img src={marketing_icon} alt="" width={40}/>,
        alt: "comp",
      },
      {
        label: "Automotive",
        link: "/Industries/Automotive",
        icon: <img src={automobile_icon} alt="" width={35}/>,
        alt: "comp",
      },
      {
        label: "Logistics",
        link: "/Industries/Logistics",
        icon: <img src={logistics_icon} alt="" width={35}/>,
        alt: "comp",
      },
      {
        label: "Game & Entertainment",
        link: "/Industries/GameEntertainment",
        icon: <img src={game_icon} alt="" width={35}/>,
        alt: "comp",
      },
      {
        label: "Fintech",
        link: "/Industries/Fintech",
        icon: <img src={fintech_icon} alt="" width={35}/>,
        alt: "comp",
      },
      {
        label: "Retail",
        link: "/Industries/Retail",
        icon: <img src={retail_icon} alt="" width={35}/>,
        alt: "comp",
      },
    ],
  },
  // { label: "Blog", link: "#" },
  // { label: "Contact", link: "#" },
];

export default NavigationLinks;
