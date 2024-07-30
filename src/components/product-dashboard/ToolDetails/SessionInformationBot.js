// import { MdGroups } from "react-icons/md";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import CastForEducationIcon from "@mui/icons-material/CastForEducation";
// import { GrUserAdmin } from "react-icons/gr";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import QueryStatsIcon from "@mui/icons-material/QueryStats";
// import { MdManageHistory } from "react-icons/md";
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import ConstructionIcon from "@mui/icons-material/Construction";
// import SchoolIcon from "@mui/icons-material/School";

import TrainingTeam from '../images/TrainingTeam.svg'
import Admin from '../images/Administrators.svg';
import Analyst from '../images/Analyst.svg'
import Attedes from '../images/Attendes.svg';

import Accel from '../images/Accelerated.svg';
import EnhancedData from '../images/EnhancedData.svg';
import EfficientProject from '../images/EfficientProject.svg'
import Engagement from '../images/EnhancedEngagement.svg'
import ImporvedL from '../images/ImprovedLearning.svg'
import ImporvedKnw from '../images/ImprovedKnowledge.svg'


// import AnimatedDevelopment from "../icons/AnimatedDevelopment";
// import AnimatedOutcome from "../icons/AnimatedOutcome";
// import AnimatedSolution from "../icons/AnimatedSolution";

// import AnimatedDevelopment from "../icons/AnimatedDevelopment";
// import AnimatedOutcome from "../icons/AnimatedOutcome";
// import AnimatedSolution from "../icons/AnimatedSolution";
// import AnimatedHighlights from "../icons/AnimatedHighlights";

import demoVideo from "./DemoVideo/SessionInformationBot.mp4";
import bannerImg from "../images/Session Information Bot.png"

const iconSizeBO = {
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
  // border: "solid #dc848d 3px",
  // margin: "0px 10px",
  // padding: "30px 50px",
  borderRadius: "10px",
  // boxShadow: "0px 8px 16px 0px red"
}

export const SessionInformationBot = {
  title: "Session Information Bot",
  content:
    "The Session Information Bot optimizes information retrieval from past sessions, offering quick access, contextual search, and interactive user experiences. It enhances knowledge management, streamlining support processes and fostering improved collaboration within organizations.",
  img: bannerImg,
  BusinessCase: [
    "Organizations often grapple with the challenge of retrieving pertinent information from past sessions and meetings, as the accessibility of session metadata and summaries remains limited for users. This results in time-consuming searches and difficulties in locating specific content. To overcome this hurdle, there is a pressing need for a comprehensive solution that provides users with effortless access to relevant content and recordings from previous sessions, consolidating all essential information in one accessible platform.",
  ],
  targetUsers: [
    {
      title: "Attendees",
      description:
        "Primary users who attend various sessions, events might need to reference the session content later for better understanding",
      iconSrc: <img src={Attedes} width="70px" alt=''/>,
    },
    {
      title: "Analysts",
      description:
        "Need to gather insights, track progress and look for improvements",
      iconSrc: <img src={Analyst} width="70px" alt=''/>,
    },
    {
      title: "Training Teams",
      description:
        "Responsible for organizing and managing the sessions. Facilitates efficient knowledge management and sharing",
      iconSrc: <img src={TrainingTeam} width="70px" alt=''/>,
    },
    {
      title: "Administrators",
      description:
        "Maintain the record of sessions, transcripts available for usage of various teams",
      iconSrc: <img src={Admin} width="70px" alt=''/>,
    },
  ],
  businessOutcomes: [
    {
      title: "Accelerated onboarding and training for new hires",
      description:
        ["Enable new employees to quickly familiarize themselves with various trainings, expediting their integration into the organization."],
      image: <img src={Accel} width="100px" style={iconSizeBO} alt=''/>
    },
    {
      title: "Enhanced data analysis and research capabilities",
      description:
        ["Researchers and analysts can leverage the solution to extract insights from session content and recordings, supporting data analysis, research projects."],
      image: <img src={EnhancedData}  style={iconSizeBO} alt=''/>
    },
    {
      title: "Efficient project management for successful outcomes", 
      description:
        ["End to End tracking and maintenance of the content and improve usage."],
      image: <img src={EfficientProject}  style={iconSizeBO} alt=''/>
    },
    {
      title: "Enhanced engagement of Employees Regarding learning",
      description:
        ["Foster an environment that encourages employee engagement in learning activities, promoting a culture of continuous learning."],
      image: <img src={Engagement} style={iconSizeBO}  alt=''/>
    },
    {
      title: "Improved learning and development initiatives",
      description:
        ["Enhanced training experience and continuous learning to support employee skill development and professional growth."],
      image: <img src={ImporvedL}  style={iconSizeBO} alt=''/>
    },
    {
      title: "Improved knowledge sharing and collaboration",
      description:
        ["Promote seamless knowledge sharing and collaboration among employees, fostering a culture of information exchange and collective expertise."],
      image: <img src={ImporvedKnw}  style={iconSizeBO} alt=''/>
    },
  ],
  solutionHighlights: [
    "Quick and accurate retrieval of the necessary information from the stored data",
    "Contextual search for the user queries to reduce the search time and return prompt responses",
    "Interactive UI experience to engage the users while exploring the content",
    "Retrieval of video content with relevant timestamps to directly redirect to specific topic that the user is looking for",
    "Results include the relevant information with supporting sources like video links or documents",
  ],

  summary: [
    {
      title: "Challenges",
      // icon: <PsychologyAltIcon style={{height: "16rem", width: "16rem"}}/>,
      details: [
        "Dissipation of Knowledge sources",
        "Difficulty in finding Specific content",
        "Limited Availability and Accessibility of Past Sessions",
        "Lack of Context in search results",
        "Availability & accessibility of the previous sessions",
        "Lengthy Training and Onboarding Periods",
        "Lack of Employee Engagement",
      ],
    },
    {
      title: "Building Solution",
      // icon: <SpeedIcon style={{height: "16rem", width: "16rem"}}/>,
      details: [
        "Efficient information retrieval",
        "Contextual search capabilities",
        "Interactive virtual agent providing near human interactive experience",
        "Inclusion of supporting sources pointing to specific parts of videos",
        "Improved the user engagement while looking for information",
      ],
    },
    {
      title: "Outcomes",
      // icon: <OutputIcon style={{height: "16rem", width: "16rem"}}/>,
      details: [
        "Accelerated onboarding and training",
        "Enhanced data analysis and research capabilities",
        "Efficient project management",
        "Heightened Employee Engagement",
        "Enhanced Learning and Development Initiatives",
        "Improved knowledge sharing and collaboration",
      ],
    },
  ],
  demo: {
    link: { demoVideo },
  },
  tryit: {
    link: "",
  },
  // gallery: [
  //             {
  //                 name: "SessionInformationBot-1",
  //                 url: "SessionInformationBot1.png",
  //             },
  //         ],
  FAQs: [
    {
      question: "What is Session Information Bot?",
      answer:
        "Session Information Bot is a tool designed to optimize information retrieval from past sessions. It offers quick access, contextual search, and interactive user experiences, enhancing knowledge management within organizations.",
    },
    {
      question: "Who are the primary users of Session Information Bot?",
      answer:
        "The primary users include attendees, analysts, training teams, and administrators. Attendees can reference session content, analysts can gather insights, training teams facilitate efficient knowledge management, and administrators maintain records of sessions and transcripts.",
    },
    {
      question:
        "What are the business outcomes of using Session Information Bot?",
      answer:
        "The business outcomes include accelerated onboarding, enhanced data analysis and research capabilities, efficient project management, improved employee engagement in learning, enhanced learning and development initiatives, and improved knowledge sharing and collaboration.",
    },
    {
      question: "How does Session Information Bot help in data analysis?",
      answer:
        "Researchers and analysts can leverage Session Information Bot to extract insights from session content and recordings, supporting data analysis and research projects.",
    },
    {
      question: "What are the key features of Session Information Bot?",
      answer:
        "Key features include quick and accurate information retrieval, contextual search capabilities, an interactive UI experience, retrieval of video content with relevant timestamps, and results including supporting sources like video links or documents.",
    },
    {
      question: "How does Session Information Bot address Challenges?",
      answer:
        "Session Information Bot addresses Challenges such as the dissipation of knowledge sources, difficulty in finding specific content, limited availability and accessibility of past sessions, lack of context in search results, and lengthy training and onboarding periods.",
    },
    {
      question: "What are the outcomes of using Session Information Bot?",
      answer:
        "The outcomes include accelerated onboarding and training, enhanced data analysis and research capabilities, efficient project management, heightened employee engagement, enhanced learning and development initiatives, and improved knowledge sharing and collaboration.",
    },
    {
      question: "Is there a demo available for Session Information Bot?",
      answer:
        "Yes, you can watch the demo video or request us for a demo.",
    },
  ],
};

export default SessionInformationBot;
