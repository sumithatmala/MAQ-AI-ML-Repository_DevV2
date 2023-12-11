// import {
//     ClockIcon,
//     PaperAirplaneIcon,
//     ReceiptRefundIcon,
//     DocumentIcon,
//     PlusCircleIcon,
//     ListBulletIcon,
//   } from "@heroicons/react/24/outline";
// import img from './img-1.jpg'
import AIProducts from './images/AI-Product.jpg'
import ComputerVision from './images/Computer-Vision.png'
import DeepLearning from './images/Deep-Learning.png'
import MLProduct from './images/ML-Product.png'
import NLP from './images/NLP.jpg'
import OtherProducts from './images/Other-Products.png'
import SpeechRecognition from './images/Speech-Recognition.jpg'
import SupervisedLearning from './images/Supervised-Learning.png'
import UnsupervisedLearning from './images/Unsupervised-Learning.png'


const ImageComponent = props => <div
                                  className="img"
                                  style={{
                                    backgroundImage: `url(${props.src})`,
                                    backgroundPosition: 'center', 
                                    backgroundSize: 'contain',
                                    paddingBottom: '75%',
                                  }}
                                  ></div>

const NavigationLinks = [
    {
        name: "Products",
        subLinks: [
          {
            name: "AI Products",
            description: "AI Products",
            link: "/AIProducts",
            color: "bg-green-300 dark:bg-green-700",
            icon: <ImageComponent src={AIProducts} />,
          },
          {
            name: "ML Products",
            description: "ML Products",
            link: "/MLProducts",
            color: "bg-blue-300 dark:bg-blue-700",
            icon: <ImageComponent src={MLProduct} />,
          },
          {
            name: "Other Products",
            description: "Other Products",
            link: "/OtherProducts",
            color: "bg-red-300 dark:bg-red-700",
            icon: <ImageComponent src={OtherProducts} />,
          },
        ],
      },
    {
      name: "Machine Learning",
      subLinks: [
        {
          name: "Supervised Learning",
          description: "Supervised Learning",
          link: "/SupervisedLearning",
          color: "bg-green-300 dark:bg-green-700",
          icon: <ImageComponent src={SupervisedLearning} />,
        },
        {
          name: "Unsupervised Learning",
          description: "Unsupervised Learning",
          link: "/UnsupervisedLearning",
          color: "bg-blue-300 dark:bg-blue-700",
          icon: <ImageComponent src={UnsupervisedLearning} />,
        },
        {
          name: "Deep Learning",
          description: "Deep Learning",
          link: "/DeepLearning",
          color: "bg-red-300 dark:bg-red-700",
          icon: <ImageComponent src={DeepLearning} />,
        },
      ],
    },
    {
        name: "Artificial Intelligence",
        subLinks: [
          {
            name: "Natural Language Processing (NLP)",
            description: "Natural Language Processing (NLP)",
            link: "/NLP",
            color: "bg-teal-300 dark:bg-teal-700",
            icon: <ImageComponent src={NLP} />,
          },
          {
            name: "Computer Vision",
            description: "Computer Vision",
            link: "/ComputerVision",
            color: "bg-indigo-300 dark:bg-indigo-700",
            icon: <ImageComponent src={ComputerVision} />,
          },
          {
            name: "Speech Recognition",
            description: "Speech Recognition",
            link: "/SpeechRecognition",
            color: "bg-amber-300 dark:bg-amber-700",
            icon: <ImageComponent src={SpeechRecognition} />,
          },
        ],
      },
    
    // {
    //   name: "Demos",
    //   subLinks: [],
    // },
    
  ];
export default NavigationLinks