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
  { 
    label: "Artificial Intelligence", 
    submenu: [
      { 
        label: "Frameworks", 
        submenu: [
          { label: "TensorFlow", link: "#" },
          { label: "PyTorch", link: "#" },
          { label: "Keras", link: "#" },
        ],
        icon: "/icons/framework.svg",
        alt: "frwk",
      },
      { 
        label: "NLP", 
        submenu: [
          { label: "Session Information Bot", link: "./product/SessionInformationBot" },
          { label: "Feedback Summarizer Bot", link: "./product/FeedbackSummarizerBot" },
          { label: "Intelligent Document Processing Bot", link: "./product/IntelligentDocumentProcessingBot" },
          { label: "Document Classification With Virtual Assistant", link: "./product/DocumentClassificationWithVirtualAssistant" },
          { label: "Smart Support Framework", link: "./product/SmartSupportFramework" },
          { label: "TriviaBot", link: "./product/TriviaBot" },
          { label: "Text Analysis", link: "./product/TextAnalysis"},
          { label: "Computer Vision", link: "./product/ComputerVision"},
          { label: "Image Recognition", link: "./product/ImageRecognition"},
        ],
        icon: "/icons/nlp.svg",
        alt: "nlp",
      },
      { 
        label: "Computer Vision", 
        submenu: [
          { label: "OpenCV", link: "#" },
          { label: "TensorFlow Object Detection API", link: "#" },
          { label: "YOLO", link: "#" },
          { label: "Dlib", link: "#" },
        ],
        icon: "/icons/computerVision.svg",
        alt: "comp",
      },
    ],
  },
  { 
    label: "Machine Learning", 
    submenu: [
      { 
        label: "Data Processing", 
        submenu: [
          { label: "Pandas", link: "#" },
          { label: "NumPy", link: "#" },
          { label: "Apache Spark", link: "#" },
          { label: "Dask", link: "#" },
        ],
        icon: "/icons/dataP.svg",
        alt: "data",
      },
      { 
        label: "ML Models", 
        submenu: [
          { label: "Scikit Learn", link: "./productdetails" },
          { label: "Regression", link: "#" },
          { label: "Classification", link: "#" },
          { label: "Clustering", link: "#" },
          { label: "Neural Networks", link: "#" },
        ],
        icon: "/icons/ML.svg",
        alt: "ML",
      },
      { 
        label: "Data Visualization", 
        submenu: [
          { label: "Matplotlib", link: "#" },
          { label: "Seaborn", link: "#" },
          { label: "Plotly", link: "#" },
        ],
        icon: "/icons/dataV.svg",
        alt: "data",
      },
    ],
  },
  { label: "Blog", link: "#" },
  { label: "Contact", link: "#" },
];


export default NavigationLinks