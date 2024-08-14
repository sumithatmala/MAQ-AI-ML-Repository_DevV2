// import demoVideo from "./demos/SupportTicketAssistant.mp4";
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





import PreSalesRepresentative from '../images/Sales Assistant/icons8-manager-100 (2) 1.svg'
import DataAnalysts from '../images/Sales Assistant/icons8-analyzing-skill-100 (3) 1.svg'
import CXO from '../images/Sales Assistant/icons8-accessibility-tools-100 1.svg'
import StrategyManager from '../images/Sales Assistant/icons8-visualization-skill-100 1.svg'

import StreamlinedClientProfiling from '../images/Sales Assistant/icons8-manager-100 (2) 2.svg'
import FasterPersonalizedSolutions from '../images/Sales Assistant/icons8-solution-100 1.svg'
import ImprovedAccuracy from '../images/Sales Assistant/icons8-accuracy-100 1.svg'
import EnhancedEfficiencyandProductivity from '../images/Sales Assistant/icons8-punctuality-100 1.svg'
import IncreasedSalesConversion from '../images/Sales Assistant/icons8-summer-sales-100 (1) 1.svg'
import CompetitiveAdvantage from '../images/Sales Assistant/icons8-american-football-player-100 1.svg'
import bannerImg from '../images/Sales Assistant/Sales assistant.png'



const iconSizeBO = {
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
}
export const SalesAssistant = {
  title: "Sales Assistant",
  content:
    "Accelerate sales productivity and efficiency with AI-driven client profiling, enabling personalized solutions in record time.",
  img: bannerImg,
  BusinessCase: [
    "The sales teams are currently burdened with the manual and resource-intensive task of client profiling through calls to map client profiles to business value metrics. To streamline this process, OpenAI is leveraged to ask targeted questions, swiftly gathering information on clients' priorities, challenges, goals, and risks. This data is then matched with business value maps, enabling the rapid delivery of personalized solutions. This approach significantly reduces the time and resources required for client profiling, enhancing efficiency in providing tailored solutions to clients.",
  ],
  targetUsers: [
    {
      title: "Pre-Sales Representative",
      description:
        "Team members responsible for conducting client calls, gathering information, and analyzing client profiles",
      iconSrc: <img src={PreSalesRepresentative} width="70px" alt='' />
    },
    {
      title: "Data Analysts",
      description:
        "Professionals who analyze client data, develop business value maps, and provide insights to sales teams",
      iconSrc: <img src={DataAnalysts} width="70px" alt='' />
    },
    {
      title: "CXO",
      description:
        "Sets the overall strategic direction of the businesses. oversees the executive team, and ensures the achievement of business goals",
      iconSrc: <img src={CXO} width="70px" alt='' />
    },
    {
      title: "Strategy Manager",
      description:
        "Develop strategies to capitalize on market opportunities and stay ahead of the competition.",
      iconSrc: <img src={StrategyManager} width="70px" alt='' />
    },
  ],
  businessOutcomes: {
    cardHeight: "230px",
    cardList: [
      {
        title: "Streamlined Client Profiling",
        description:
          ["Focused questioning and information gathering enables the sales team to streamline the client profiling process, reducing time and resource requirements."],
        image: <img src={StreamlinedClientProfiling} width="100px" style={iconSizeBO} alt="" />
      },
      {
        title: "Faster Personalized Solutions",
        description:
          ["By matching client data with business value maps, the sales team can provide personalized solutions more quickly, improving response times and customer satisfaction"],
        image: <img src={FasterPersonalizedSolutions} width="100px" style={iconSizeBO} alt="" />
      },
      {
        title: "Improved Accuracy",
        description:
          ["Gathering precise and relevant information about client priorities, challenges, goals, and risks, leading to more accurate client profiles and better-aligned solutions"],
        image: <img src={ImprovedAccuracy} width="100px" style={iconSizeBO} alt="" />
      },
      {
        title: "Enhanced Efficiency and Productivity",
        description:
          ["Reduces manual effort, allowing the sales team to focus on more strategic activities, increasing overall efficiency and productivity."],
        image: <img src={EnhancedEfficiencyandProductivity} width="100px" style={iconSizeBO} alt="" />
      },
      {
        title: "Increased Sales Conversion",
        description:
          ["Provides tailored solutions quickly and accurately improves the chances of sales conversion, resulting in higher revenue and business growth."],
        image: <img src={IncreasedSalesConversion} width="100px" style={iconSizeBO} alt="" />
      },
      {
        title: "Competitive Advantage",
        description:
          ["Efficient,& personalized solutions gives the company a competitive edge in the market, attracting more clients and retaining existing ones."],
        image: <img src={CompetitiveAdvantage} width="100px" style={iconSizeBO} alt="" />
      },
    ]
  },
  solutionHighlights: [
    "Leveraging OpenAI to generate the Company profile from the answers derived for the questions related to the company's description, current priorities, challenges, risks, and industry trends.",
    "The Company profile generated through OpenAI returns the categories for each of the Organization values (Strategies, Goals, Industry and Sales Play).",
    "Using OpenAI's generated categories, the Org dataset is filtered to gather relevant data. With this mapped data, OpenAI can then suggest potential use cases.",
  ],
  summary: [
    {
      title: "Challenges",
      details: [
        <div><b>Manual Client Profiling:</b> The sales teams currently engage in time-consuming and resource-intensive manual client profiling through calls.</div>,
        <div><b>Resource Intensiveness:</b> The process of gathering information about client priorities, challenges, goals, and risks is laborious.</div>,
        <div><b>Lack of Speed:</b> The manual approach hinders the quick provision of personalized solutions to clients.</div>,
        <div><b>Accuracy Concerns:</b> There's a challenge in ensuring accurate and aligned client profiles and solutions.</div>,
      ],
    },
    {
      title: "Building Solution",
      details: [
        <div><b>Automated Client Profiling:</b> Leveraging OpenAI for specific questioning automates and streamlines the client profiling process.</div>,
        <div><b>Data-Driven Insights:</b> OpenAI's data generation provides insights into client priorities, challenges, goals, and risks.</div>,
        <div><b>Quick Personalized Solutions:</b> By matching client data with business value maps, the solution enables faster delivery of personalized solutions.</div>,
        <div><b>Enhanced Accuracy:</b> Precise information about clients leads to more accurate client profiles, ensuring better-aligned solutions.</div>,
      ],
    },
    {
      title: "Outcomes",
      details: [
        <div><b>Streamlined Client Profiling:</b> The solution reduces time and resource requirements for client profiling.</div>,
        <div><b>Faster Personalized Solutions:</b> Quick provision of tailored solutions improves response times and customer satisfaction.</div>,
        <div><b>Improved Accuracy:</b> Gathering precise and relevant information enhances the accuracy of client profiles and solutions.</div>,
        <div><b>Enhanced Efficiency and Productivity:</b> Reduction in manual effort allows the sales team to focus on more strategic activities, boosting overall efficiency.</div>,
        <div><b>Increased Sales Conversion:</b> Tailored solutions quickly and accurately delivered increase the likelihood of sales conversion, leading to higher revenue.</div>,
      ],
    },
  ],
  demo: {
    link: [""],
  },
  tryit: {
    link: "",
  },

  FAQs: [
    {
      question: "How does the AI-driven client profiling work?",
      answer: "The AI-driven client profiling works by leveraging OpenAI to ask targeted questions to clients, swiftly gathering information on their priorities, challenges, goals, and risks. This data is then matched with business value maps, enabling the rapid delivery of personalized solutions."
    },
    {
      question: "What are the benefits of using AI for client profiling?",
      answer: "Using AI for client profiling offers several benefits, including streamlined client profiling, faster delivery of personalized solutions, improved accuracy in client profiles and solutions, enhanced efficiency and productivity, increased sales conversion rates, and a competitive advantage in the market."
    },
    {
      question: "How does the solution improve sales productivity?",
      answer: "The solution improves sales productivity by reducing the time and resources required for client profiling, enabling the sales team to focus on more strategic activities. Additionally, the quick provision of tailored solutions enhances response times and customer satisfaction, leading to increased sales conversion rates and revenue."
    },
    {
      question: "What role does OpenAI play in the solution?",
      answer: "OpenAI plays a crucial role in the solution by automating and streamlining the client profiling process through targeted questioning. It generates data-driven insights into client priorities, challenges, goals, and risks, facilitating the delivery of personalized solutions in record time."
    },
    {
      question: "How accurate are the client profiles generated by the solution?",
      answer: "The client profiles generated by the solution are highly accurate due to the precise and relevant information gathered through OpenAI-driven questioning. This ensures that the solutions provided are well-aligned with the clients' needs and preferences."
    }
  ]
};

export default SalesAssistant;
