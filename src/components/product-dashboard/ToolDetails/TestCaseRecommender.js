import demoVideo from "./DemoVideo/TestCaseRecommender.mp4";
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";
import { FaBusinessTime } from "react-icons/fa6";
import { FaFastForward } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { BsWrenchAdjustable } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";

import QualityAssuranceEngineer from '../images/Test Case Recommender/icons8-approval-100 1.svg'
import ProjectManagers from '../images/Test Case Recommender/icons8-manager-100 (2) 3.svg'
import DevOpsTeamsLeads from '../images/Test Case Recommender/icons8-leader-100 1.svg'
import BusinessAnalysts from '../images/Test Case Recommender/icons8-admin-100 4.svg'

import ImprovedTestCoverage from '../images/Test Case Recommender/icons8-test-100 1.svg'
import StandardizationandConsistency from '../images/Test Case Recommender/icons8-neutral-trading-100 1.svg'
import EnhancedQuality from '../images/Test Case Recommender/icons8-quality-100 1.svg'
import FasterTimetoMarket from '../images/Test Case Recommender/icons8-market-100 1.svg'
import EnhancedCollaborationandVisibility from '../images/Test Case Recommender/icons8-user-groups-100 2.svg'
import CostSavings from '../images/Test Case Recommender/icons8-money-box-100 2.svg'
import bannerImg from '../images/Test Case Recommender/Test Care Recommender.png'


const iconSize = {
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
};
const iconSizeBO = {
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
  // border: "solid #dc848d 3px",
  // margin: "0px 10px",
  // padding: "30px 50px",
  // borderRadius: "10px",
  // boxShadow: "0px 8px 16px 0px red"
}
export const TestCaseRecommender = {
  title: "Test Case Recommender",
  content:
    "Revolutionize your software development process with our Test Case Recommender, eliminating the time-consuming and error-prone manual test case creation while ensuring comprehensive coverage of all relevant scenarios.",
  img: bannerImg,
  BusinessCase: [
    "Creating effective and comprehensive test cases is critical in software development to ensure the quality of the final product. Manual test case creation is both time-consuming and error-prone, especially for complex projects. Additionally, manually identifying all relevant test scenarios is challenging and prone to human errors and inconsistencies.",
  ],
  targetUsers: [
    {
      title: "Quality Assurance Engineer",
      description:
        "Involved in testing activities, responsible for creating and executing test cases, and ensuring the quality of the software.",
      iconSrc: <img src={QualityAssuranceEngineer} width="70px" alt='' />
    },
    {
      title: "Project Managers",
      description:
        "Responsible for overseeing the software development process, ensuring quality, and managing resources efficiently",
      iconSrc: <img src={ProjectManagers} width="70px" alt='' />
    },
    {
      title: "DevOps Teams/Leads",
      description:
        "Collaborating with development and operations teams ensuring efficiency, reliability, and scalability",
      iconSrc: <img src={DevOpsTeamsLeads} width="70px" alt='' />
    },
    {
      title: "Business Analysts",
      description:
        "Collaborates with development teams to gather requirements, user stories, and functional specifications",
      iconSrc: <img src={BusinessAnalysts} width="70px" alt='' />
    },
  ],
  businessOutcomes: [
    {
      title: "Improved Test Coverage",
      description:
        ["Automated test case generation helps ensure comprehensive coverage of various scenarios, reducing the risk of undiscovered issues in the software."],
      image: <img src={ImprovedTestCoverage} width="100px" style={iconSizeBO} />
    },
    {
      title: "Standardization and Consistency",
      description:
        ["Automated test case generation ensures consistent formats and adherence to quality standards, promoting uniformity across the development team."],
      image: <img src={StandardizationandConsistency} width="100px" style={iconSizeBO} />
    },
    {
      title: "Enhanced Quality",
      description:
        ["Consistent and accurate test case generation reduces the risk of human errors, improving the overall quality and reliability of the software."],
      image: <img src={EnhancedQuality} width="100px" style={iconSizeBO} />
    },
    {
      title: "Faster Time-to-Market",
      description:
        ["Streamlined test case creation and management processes accelerate software development cycles, enabling faster time-to-market for products and features."],
      image: <img src={FasterTimetoMarket} width="100px" style={iconSizeBO} />
    },
    {
      title: "Enhanced Collaboration and Visibility",
      description:
        ["Integration with Azure DevOps enables better team collaboration, centralized test case management, and real-time testing progress visibility."],
      image: <img src={EnhancedCollaborationandVisibility} width="100px" style={iconSizeBO} />
    },
    {
      title: "Cost Savings",
      description:
        ["Automation reduces the need for manual labor, resulting in cost savings associated with test case creation and maintenance."],
      image: <img src={CostSavings} width="100px" style={iconSizeBO} />
    },
  ],
  solutionHighlights: [
    "Web extension extracts user story data and retrieves relevant descriptions for test case generation using Azure Open AI. ",
    "The resulting test cases can be added to Azure DevOps for easy access and management.",
    "Software development teams can increase efficiency, reliability, and accuracy.",
    "Test cases are generated based on relevant descriptions  and can be easily managed in Azure DevOps using Microsoft Azure's REST API.",
  ],
  summary: [
    {
      title: "Challenges",
      details: [
        "Manual creation of test cases is time-consuming and error-prone.",
        "Identifying all relevant test scenarios manually is challenging and prone to human error.",
        "Maintaining consistency and adherence to quality standards in test case formats is difficult.",
        "Slow software development cycles hinder time-to-market goals.",
        "Limited collaboration and visibility into testing progress.",
      ],
    },
    {
      title: "Building Solution",
      details: [
        <div><b>Automated Test Case Generation:</b> The tool automates the generation of test cases using Azure Open AI, reducing the time and effort required for manual creation.</div>,
        <div><b>Standardization and Consistency:</b> Ensures consistent test case formats, promoting uniformity and adherence to predefined quality standards.</div>,
        <div><b>Enhanced Quality:</b> Reduces the risk of human errors in test case creation, contributing to improved overall software quality and reliability.</div>,
        <div><b>Enhanced Collaboration and Visibility:</b> Integration with Azure DevOps facilitates better collaboration, centralized test case management, and real-time visibility into testing progress.</div>,
      ],
    },
    {
      title: "Outcomes",
      details: [
        <div><b>Improved Test Coverage:</b> Automated test case generation ensures comprehensive coverage of various scenarios, minimizing the risk of undiscovered issues.</div>,
        <div><b>Faster Time-to-Market:</b> Streamlined processes accelerate software development cycles, leading to faster product releases.</div>,
        <div><b>Enhanced Collaboration and Visibility:</b> Integration with Azure DevOps facilitates better collaboration and provides real-time visibility into testing progress.</div>,
        <div><b>Cost Savings: </b> Automation reduces manual labor costs associated with test case creation and maintenance.</div>,],
    },
  ],
  demo: {
    link: { demoVideo },
  },
  tryit: {
    link: "https://testcaserecommenderfrontend.azurewebsites.net/",
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

export default TestCaseRecommender;
