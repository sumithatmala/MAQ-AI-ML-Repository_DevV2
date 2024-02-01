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

const NavigationLinks = [
  { label: "Home", link: "./" },
  { label: "Expertise", link: "#" },
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
            label: "Document Classification With Virtual Assistant",
            link: "./product/DocumentClassificationWithVirtualAssistant",
          },
          {
            label: "Smart Support Framework",
            link: "./product/SmartSupportFramework",
          },
          { label: "TriviaBot", link: "./product/TriviaBot" },
        ],
      },
      {
        label: "Generative AI & GPT",
        submenu: [
          {
            label: "Hugging Face Transformers",
            link: "#",
          },
          {
            label: "RunwayML",
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
        icon: "/icons/dataP.svg",
        alt: "data",
      },
      {
        label: "Custom Large Language Models",
        link: "../solutions/large-language-model/LargeLanguageModel.jsx",
        icon: "/icons/ML.svg",
        alt: "ML",
      },
      {
        label: "Natural Language Processing",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Consumer Sentiment Analysis",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Text Analysis",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Al Call Center Solutions",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Predictive Analytics",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Recommendation Systems",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Computer Vision",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Image Recognition",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Pose Estimation",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
      {
        label: "Data capture & OCR",

        icon: "/icons/dataV.svg",
        alt: "data",
      },
    ],
  },
  {
    label: "Industries",
    submenu: [
      {
        label: "Healthcare & Pharma",

        icon: "/icons/framework.svg",
        alt: "frwk",
      },
      {
        label: "Sport & Wellness",

        icon: "/icons/nlp.svg",
        alt: "nlp",
      },
      {
        label: "E-commerce",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
      {
        label: "MarTech",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
      {
        label: "Automotive",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
      {
        label: "Logistics",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
      {
        label: "Game & Entertainment",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
      {
        label: "Fintech",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
      {
        label: "Retail",

        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
    ],
  },
  // { label: "Blog", link: "#" },
  // { label: "Contact", link: "#" },
];

export default NavigationLinks;
