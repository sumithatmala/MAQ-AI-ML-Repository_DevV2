// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import { MdManageHistory } from "react-icons/md";
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import ConstructionIcon from '@mui/icons-material/Construction';
// import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import OutputIcon from '@mui/icons-material/Output';
import demoVideo from './DemoVideo/IntelligentDocumentProcessingBot.mp4';

import HealthcareAdmin from '../images/HealthcareAdmins.svg'
import HealthcarePro from '../images/HealthcareProviders.svg'
import HealthInsurance from '../images/HealthInsurancePro.svg'
import MedicalRes from '../images/MedicalResearchers.svg'


import ImprovedAccesstoInsights from '../images/IntelligentDocProcessing/ImprovedAccesstoInsights.svg'
import EnhancedDocHandling from '../images/IntelligentDocProcessing/EnhancedDocHandling.svg'
import PersonalizedPatientEXp from '../images/IntelligentDocProcessing/PersonalizedPatientEXp.svg'
import AnalyticsandDecisionMaking from '../images/IntelligentDocProcessing/AnalyticsandDecisionMaking.svg'
import CostReduction from '../images/IntelligentDocProcessing/CostReduction.svg'
import EfficiencyandTimeSaving from '../images/IntelligentDocProcessing/EfficiencyandTimeSaving.svg'
import bannerImg from '../images/IntelligentDocProcessing/Intelligent Document Process Bot.png'
// const iconSize = {
//   height: "5rem",
//   width: "5rem",
//   color: "#dc848d"
// }
const iconSizeBO = {
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
  // border: "solid #dc848d 3px",
  // margin: "0px 10px",
  // padding: "30px 50px",
  // borderRadius: "10px",
  // padding: "10%",
  // boxShadow: "0px 8px 16px 0px red"
}
export const IntelligentDocumentProcessingBot = {
  title: "Intelligent Document Process Bot",
  content: "An OCR system automates converting patient information from PDFs and images, reducing manual effort and errors. It extracts data, adds it to a knowledge base, and ensures accurate retrieval. An interactive virtual agent enhances user experience with an intuitive interface.",
  img:bannerImg,
  BusinessCase: [
    "A highly efficient and accurate OCR system is required to automate the conversion of patient information from PDFs and images, reducing manual effort, saving time, and minimizing errors while generating structured and insightful data.",
  ],
  targetUsers: [
    {
      title: "Healthcare Providers",
      description: "Doctors, nurses and other healthcare professionals who handle patient data on daily basis for various treatments and procedures.",
      iconSrc: <img src={HealthcarePro} width="70px" alt=''  />
    },
    {
      title: "Healthcare Admins",
      description: "Responsible for managing and organizing patient records to maintain a structured and easily accessible database, with high rate of accuracy data integrity.",
      iconSrc: <img src={HealthcareAdmin} width="70px" alt=''  />
    },
    {
      title: "Medical Researchers",
      description: "Researchers working in healthcare, who refers to numerous research papers, clinical trial documents, and medical journals for their studies and contribute to medical advancements.",
      iconSrc: <img src={MedicalRes} width="70px" alt=''  />
    },
    {
      title: "Health Insurance Providers",
      description: "Insurance companies dealing with healthcare claims often require accurate and up-to-date patient information, to process the claims by verifying medical bills & insurance forms.",
      iconSrc:<img src={HealthInsurance} width="70px" alt=''  />
    },
  ],
  businessOutcomes: [
    {
      title: "Improved Access to Insights ",
      description: ["By structuring and indexing the extracted data, Healthcare providers can generate insightful reports, identify patterns, and make data-driven decisions more effectively."],
      image: <img src={ImprovedAccesstoInsights} width="100px" style={iconSizeBO} alt=''/>
    },
    {
      title: "Enhanced Document handling",
      description: ["Handling massive volumes of data from multiple documents by accurately classifying the documents helps the teams to easily access the required data quickly"],
      image: <img src={EnhancedDocHandling} width="100px" alt='' style={iconSizeBO} />
    },
    {
      title: "Personalized Patient Experience",
      description: ["Improved patient experience as healthcare professionals can provide personalized and timely care, considering relevant medical history and preferences."],
      image: <img src={PersonalizedPatientEXp} width="100px" alt='' style={iconSizeBO} />
    },

    // done till this point
    {
      title: "Improved Analytics and Decision Making ",
      description: ["Accurate data extraction and structuring in healthcare enable advanced analytics, evidence-based decision-making, process optimization, and improved outcomes."],
      image: <img src={AnalyticsandDecisionMaking} width="100px" style={iconSizeBO} alt=''/>
    },
    {
      title: "Cost Reduction",
      description: ["Reduction of manual effort, minimizing errors, saves costs associated with data entry and processing. It also eliminates the need for physical storage of paper documents], leading to image cost savings."],
      image:<img src={CostReduction} width="100px" alt='' style={iconSizeBO} />
    },
    {
      title: "Improved efficiency & Time Saving",
      description: ["Elimination of manual intervention in data entry, data processing and retrieval improves the productivity of the staff and allows them to focus on much critical tasks."],
      image: <img src={EfficiencyandTimeSaving} width="100px" alt='' style={iconSizeBO} />
    },
  ],
  solutionHighlights: [
    "Data is extracted by parsing diverse documents such as patient registration forms and health records.",
    "The extracted data is added to a knowledge base and indexed, facilitating efficient understanding and retrieval of relevant information from large knowledge bases.",
    "When a question is posed, the system retrieves data while maintaining the relevance of the question.",
    "This approach overcomes limitations in the context length passed to GPT models, ensuring accurate and meaningful responses.",
    "An interactive virtual agent is employed to simplify and enhance the user experience, providing an intuitive interface for users to interact with the system.",
  ],
  summary: [
    {
      title: "Challenges",
      icon: <PsychologyAltIcon style={{ height: "16rem", width: "16rem" }} />,
      details: [
        "Manual extraction of patient information from PDFs and images",
        "Difficulty in organizing and accessing patient records",
        "Handling massive volumes of data from diverse documents",
        "Challenges in maintaining data accuracy and integrity",
        "Limited insights due to unstructured data",
        "Time-consuming processes for healthcare professionals",
        "Issues in processing and verifying healthcare claims",
      ],
    },
    {
      title: "Building Solution",
      icon: <SpeedIcon style={{ height: "16rem", width: "16rem" }} />,
      details: [
        "Automated OCR system for efficient data extraction",
        "Structured knowledge base creation and indexing",
        "Question-based approach for accurate data retrieval",
        "Interactive virtual agent for an intuitive user interface",
        "Improved access to insights through structured data",
        "Efficient document handling with accurate classification",
        "Personalized patient experience based on relevant data",
      ],
    },
    {
      title: "Outcomes",
      icon: <OutputIcon style={{ height: "16rem", width: "16rem" }} />,
      details: [
        "Accelerated onboarding and training for healthcare professionals",
        "Enhanced data analysis and research capabilities for researchers",
        "Efficient project management for healthcare admins",
        "Heightened employee engagement in healthcare processes",
        "Improved learning and development initiatives",
        "Cost reduction through minimized manual effort",
        "Time savings with improved efficiency in data processing",
      ],
    },
  ],
  
  demo: {
    link: { demoVideo },
  },
  tryit: {
      link: ""
  },
  // gallery: [
  //             {
  //                 name: "SessionInformationBot-1",
  //                 url: "SessionInformationBot1.png",
  //             },
  //         ],

  FAQs: [
    {
      "question": "What is Intelligent Document Processing Bot?",
      "answer": "Intelligent Document Processing Bot is a system designed to automate the extraction of patient information from PDFs and images through OCR. It aims to reduce manual effort, save time, and minimize errors while generating structured and insightful data."
    },
    {
      "question": "Who are the target users of Intelligent Document Processing Bot?",
      "answer": "The target users include healthcare providers (doctors, nurses), healthcare admins responsible for managing patient records, medical researchers relying on research papers, and health insurance providers processing claims."
    },
    {
      "question": "What are the business outcomes of using Intelligent Document Processing Bot?",
      "answer": "The business outcomes include improved access to insights for healthcare providers, enhanced document handling through accurate classification, and a personalized patient experience. It also leads to improved analytics and decision-making, cost reduction, and increased efficiency and time savings."
    },
    {
      "question": "How does Intelligent Document Processing Bot work?",
      "answer": "Data is extracted by parsing diverse documents, added to a knowledge base, and indexed. The system employs a question-based approach for accurate retrieval. An interactive virtual agent enhances the user experience with an intuitive interface."
    },
    {
      "question": "What are the key features of Intelligent Document Processing Bot?",
      "answer": "Key features include efficient OCR for patient information, structured knowledge base creation, question-based retrieval, and an interactive virtual agent for an intuitive user interface."
    },
    {
      "question": "How does Intelligent Document Processing Bot contribute to cost reduction?",
      "answer": "The system reduces manual effort, minimizes errors, and eliminates the need for physical storage of paper documents, leading to cost savings associated with data entry, processing, and document storage."
    },
    {
      "question": "Is there a demo available for Intelligent Document Processing Bot?",
      "answer": "Yes, you can watch the demo video by following this link: Demo Video."
    }
  ]
};

export default IntelligentDocumentProcessingBot;