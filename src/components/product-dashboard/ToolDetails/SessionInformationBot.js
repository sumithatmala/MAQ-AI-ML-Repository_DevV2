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
import demoVideo from './demos/SessionInformationBot.mp4'

const iconSize = {
    height: "3rem", 
    width: "3rem",
    color: "#dc848d"
}

export const SessionInformationBot = {
    title: "Session Information Bot",
    description: "The Session Information Bot optimizes information retrieval from past sessions, offering quick access, contextual search, and interactive user experiences. It enhances knowledge management, streamlining support processes and fostering improved collaboration within organizations.",
    BusinessCase: [
      "Organizations often grapple with the challenge of retrieving pertinent information from past sessions and meetings, as the accessibility of session metadata and summaries remains limited for users. This results in time-consuming searches and difficulties in locating specific content. To overcome this hurdle, there is a pressing need for a comprehensive solution that provides users with effortless access to relevant content and recordings from previous sessions, consolidating all essential information in one accessible platform."
    ],
    targetUsers: [
      {
        title: "Attendees",
        description: "Primary users who attend various sessions, events might need to reference the session content later for better understanding",
        iconSrc: <MdGroups style={iconSize}/>,
      },
      {
        title: "Analysts",
        description: "Need to gather insights, track progress and look for improvements",
        iconSrc: <PsychologyIcon style={iconSize}/>,
      },
      {
        title: "Training Teams",
        description: "Responsible for organizing and managing the sessions. Facilitates efficient knowledge management and sharing",
        iconSrc: <CastForEducationIcon style={iconSize}/>,
      },
      {
        title: "Administrators",
        description: "Maintain the record of sessions, transcripts available for usage of various teams",
        iconSrc: <GrUserAdmin style={iconSize} />,
      },
    ],
    businessOutcomes: [
      {
        outcome: "Accelerated onboarding and training especially for new hires",
        caption: "Enable new employees to quickly familiarize themselves with various trainings, expediting their integration into the organization.",
        icon: <IntegrationInstructionsIcon style={iconSize}/>,
      },
      {
        outcome: "Enhanced data analysis and research capabilities",
        caption: "Researchers and analysts can leverage the solution to extract insights from session content and recordings, supporting data analysis, research projects.",
        icon: <QueryStatsIcon style={iconSize}/>,
      },
      {
        outcome: "Efficient project management for successful outcomes",
        caption: "End to End tracking and maintenance of the content and improve usage.",
        icon: <MdManageHistory style={iconSize}/>,
      },
      {
        outcome: "Enhanced engagement of Employees in terms of learning",
        caption: "Foster an environment that encourages employee engagement in learning activities, promoting a culture of continuous learning.",
        icon: <LocalLibraryIcon style={iconSize}/>,
      },
      {
        outcome: "Improved learning and development initiatives",
        caption: "Enhanced training experience and continuous learning to support employee skill development and professional growth.",
        icon: <ConstructionIcon style={iconSize}/>,
      },
      {
        outcome: "Improved knowledge sharing and collaboration",
        caption: "Promote seamless knowledge sharing and collaboration among employees, fostering a culture of information exchange and collective expertise.",
        icon: <SchoolIcon style={iconSize}/>,
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
        title: "Pain points",
        icon: <PsychologyAltIcon style={{height: "16rem", width: "16rem"}}/>,
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
        title: "How the Solution will help",
        icon: <SpeedIcon style={{height: "16rem", width: "16rem"}}/>,
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
        icon: <OutputIcon style={{height: "16rem", width: "16rem"}}/>,
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
      link: {demoVideo},
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
        "question": "What is Session Information Bot?",
        "answer": "Session Information Bot is a tool designed to optimize information retrieval from past sessions. It offers quick access, contextual search, and interactive user experiences, enhancing knowledge management within organizations."
      },
      {
        "question": "Who are the primary users of Session Information Bot?",
        "answer": "The primary users include attendees, analysts, training teams, and administrators. Attendees can reference session content, analysts can gather insights, training teams facilitate efficient knowledge management, and administrators maintain records of sessions and transcripts."
      },
      {
        "question": "What are the business outcomes of using Session Information Bot?",
        "answer": "The business outcomes include accelerated onboarding, enhanced data analysis and research capabilities, efficient project management, improved employee engagement in learning, enhanced learning and development initiatives, and improved knowledge sharing and collaboration."
      },
      {
        "question": "How does Session Information Bot help in data analysis?",
        "answer": "Researchers and analysts can leverage Session Information Bot to extract insights from session content and recordings, supporting data analysis and research projects."
      },
      {
        "question": "What are the key features of Session Information Bot?",
        "answer": "Key features include quick and accurate information retrieval, contextual search capabilities, an interactive UI experience, retrieval of video content with relevant timestamps, and results including supporting sources like video links or documents."
      },
      {
        "question": "How does Session Information Bot address pain points?",
        "answer": "Session Information Bot addresses pain points such as the dissipation of knowledge sources, difficulty in finding specific content, limited availability and accessibility of past sessions, lack of context in search results, and lengthy training and onboarding periods."
      },
      {
        "question": "What are the outcomes of using Session Information Bot?",
        "answer": "The outcomes include accelerated onboarding and training, enhanced data analysis and research capabilities, efficient project management, heightened employee engagement, enhanced learning and development initiatives, and improved knowledge sharing and collaboration."
      },
      {
        "question": "Is there a demo available for Session Information Bot?",
        "answer": "Yes, you can watch the demo video by following this link: [Demo Video](demoVideo)."
      }
    ]
  };
  
export default SessionInformationBot;