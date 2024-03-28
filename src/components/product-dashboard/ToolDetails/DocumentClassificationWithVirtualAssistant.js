import { MdGroups } from "react-icons/md";
import PsychologyIcon from '@mui/icons-material/Psychology';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { GrUserAdmin } from "react-icons/gr";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { MdManageHistory } from "react-icons/md";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import OutputIcon from '@mui/icons-material/Output';
import demoVideo from './demos/DocumentClassificationWithVirtualAssistant.mp4'
// import demoVideo2 from './demos/DocumentClassificationWithVirtualAssistant2.mp4'

import BusinessAnalyst from '../images/DocumentClassificationWithVirtualAssistant/BusinessAnalyst.svg'
import Collab from '../images/DocumentClassificationWithVirtualAssistant/Collab.svg'
import CompetitiveAdv from '../images/DocumentClassificationWithVirtualAssistant/CompetitiveAdv.svg'
import ComplianceTeam from '../images/DocumentClassificationWithVirtualAssistant/ComplianceTeam.svg'
import DataAccuracy from '../images/DocumentClassificationWithVirtualAssistant/DataAccuracy.svg'
import DecisionMaking from '../images/DocumentClassificationWithVirtualAssistant/DecisionMaking.svg'
import EnhancedProd from '../images/DocumentClassificationWithVirtualAssistant/EnhancedProd.svg'
import FinancialAdvisors from '../images/DocumentClassificationWithVirtualAssistant/FinancialAdvisors.svg'
import SalesMarketing from '../images/DocumentClassificationWithVirtualAssistant/SalesMarketing.svg'
import StreamlinedOp from '../images/DocumentClassificationWithVirtualAssistant/StreamlinedOp.svg'


const iconSize = {
    height: "3rem",
    width: "3rem",
    color: "#dc848d"
}
const iconSizeBO = {
    height: "5rem",
    width: "5rem",
    color: "#dc848d",
}

export const DocumentClassificationWithVirtualAssistant = {
    title: "Document Classification with Virtual Assistant",
    description: "Automating data extraction from business documents using an OpenAI-powered chatbot streamlines processes, ensures accuracy, and enhances user experience by applying business rules seamlessly.",
    BusinessCase: [
        "Implementing an OpenAI-powered chatbot for automated data extraction from business documents addresses the time-consuming and error-prone nature of manual processes, ensuring accurate results while applying necessary business rules, thereby enhancing user experience and improving efficiency.",
    ],
    targetUsers: [
        {
            title: "Business Analysts",
            description: "Relies on accurate and timely data extraction from business documents to analyze trends, identify insights, and make informed business decisions.",
            iconSrc: <img src={BusinessAnalyst} width="70px" alt=''  />
        },
        {
            title: "Sales & Marketing teams",
            description: "Responsible to analyze marketing campaigns, track key metrics, monitor operational performance, and identify areas for improvement.",
            iconSrc: <img src={SalesMarketing} width="70px" alt=''  />
        },
        {
            title: "Financial Advisors",
            description: "Help clients develop a comprehensive financial plan based on their goals, risk tolerance, and financial situation.",
            iconSrc: <img src={FinancialAdvisors} width="70px" alt=''  />
        },
        {
            title: "Compliance Teams",
            description: "Ensures compliance with industry regulations and internal policies by extracting relevant information for audits and reporting.",
            iconSrc:<img src={ComplianceTeam} width="70px" alt=''  />
        },
    ],
    businessOutcomes: [
        {
            title: "Stramlined Operations",
            description: ["Automated data extraction and retrieval processes streamline operations by eliminating manual tasks, reducing bottlenecks, and improving overall efficiency."],
            image: <img src={StreamlinedOp} width="100px" style={iconSizeBO} />
        },
        {
            title: "Enhanced Productivity",
            description: ["Quick and accurate retrieval of relevant information from business documents improves productivity and decision-making across various business functions."],
            image:<img src={EnhancedProd} width="100px" style={iconSizeBO} />
        },
        {
            title: "Competitive Advantage",
            description: ["By streamlining data extraction and retrieval processes, businesses can gain a competitive edge by delivering faster, more accurate, and personalized services to their customers."],
            image: <img src={CompetitiveAdv} width="100px" style={iconSizeBO} />
        },
        {
            title: "Better Decision-Making",
            description: ["Access to accurate and relevant data extracted from business documents enables informed decision-making and supports data-driven strategies."],
            image: <img src={DecisionMaking} width="100px" style={iconSizeBO} />
        },
        {
            title: "Better Collaboration",
            description: ["Solution facilitates collaboration among teams by centralizing and making business document data easily accessible, promoting knowledge sharing and cross-functional collaboration."],
            image: <img src={Collab} width="100px" style={iconSizeBO} />
        },
        {
            title: "Improved Data Accuracy",
            description: ["Accuracy of data extraction is enhanced, minimizing errors and inconsistencies."],
            image: <img src={DataAccuracy} width="100px" style={iconSizeBO} />
        },
    ],
    solutionHighlights: [
        "Efficient Data Extraction: Our solution extracts important information from various types of documents, making it easier to access and use valuable data.",
        "Quick Information Retrieval: The extracted text is organized and categorized in a way that allows users to find specific details they need, helping them save time and effort.",
        "Contextual Understanding: When users have questions, our solution understands the context and retrieves relevant information, providing accurate and meaningful responses.",
        "Seamless Communication: The responses from our solution can be easily shared on different communication channels like Teams or web pages, ensuring smooth and convenient access to the information users seek."
    ],
    summary: [
        {
            title: "Pain Points",
            icon: <PsychologyAltIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Time-consuming and error-prone manual data extraction from business documents",
                "Complexity and inconsistencies in applying business rules during data extraction",
            ],
        },
        {
            title: "How the Solution will Help",
            icon: <SpeedIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Automated data extraction to streamline processes and eliminate manual tasks",
                "Seamless application of business rules for accuracy and consistency",
                "Quick and accurate retrieval of relevant information from business documents",
                "Contextual understanding for accurate responses to user queries",
                "Facilitation of smooth communication and information sharing across teams",
            ],
        },
        {
            title: "Outcomes",
            icon: <OutputIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Streamlined operations by eliminating manual tasks and reducing bottlenecks",
                "Enhanced productivity and decision-making across various business functions",
                "Competitive advantage through faster, more accurate, and personalized services",
                "Improved collaboration among teams through centralized and accessible data",
                "Enhanced data accuracy, minimizing errors and inconsistencies",
            ],
        },
    ],
    demo: {
        link: [ demoVideo ],
    },
    tryit: {
        link: ""
    },
    FAQs : [
        {
          question: "What is the purpose of implementing a chatbot for automated data extraction from business documents?",
          answer: "The purpose is to streamline processes, ensure accuracy, and enhance user experience by automating data extraction, especially from PowerPoint presentations, using an OpenAI-powered chatbot."
        },
        {
          question: "How does the OpenAI-powered chatbot address the challenges of manual data extraction?",
          answer: "The chatbot mitigates the time-consuming and error-prone nature of manual processes. It ensures accurate results while applying necessary business rules during data extraction."
        },
        {
          question: "Who are the target users for this automated data extraction solution?",
          answer: "The target users include Business Analysts, Sales & Marketing teams, Financial Advisors, and Compliance Teams. These professionals rely on accurate and timely data extraction from business documents for various purposes."
        },
        {
          question: "What are the anticipated outcomes for users implementing this solution?",
          answer: "Users can expect streamlined operations, enhanced productivity, a competitive advantage through faster and more accurate services, better decision-making, improved collaboration among teams, and enhanced data accuracy."
        },
        {
          question: "How does the solution contribute to cost reduction in business data management?",
          answer: "The solution reduces manual effort, minimizes errors, and eliminates bottlenecks in data extraction processes, leading to significant cost savings by streamlining operations."
        },
        {
          question: "What are the key highlights of the proposed solution?",
          answer: "Key highlights include efficient data extraction from various documents, quick information retrieval, contextual understanding, seamless communication, and an interactive virtual assistant for an enhanced user experience."
        },
        {
          question: "How does the solution ensure accurate and meaningful responses in data extraction?",
          answer: "The system employs an approach that retrieves data while maintaining the relevance of the question, ensuring accurate and meaningful responses by overcoming limitations in the context length passed to GPT models."
        },
        {
          question: "Is there a demo available for the OpenAI-powered chatbot solution?",
          answer: "Yes, you can watch the demo video by following this link: [Demo Video](demoVideo)."
        }
      ]
      

};

export default DocumentClassificationWithVirtualAssistant;