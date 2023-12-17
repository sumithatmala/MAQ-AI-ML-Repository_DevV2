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
// import SessionInformationBotimg1 from "../images/SessionInformationBot1.png";
const iconSize = {
    height: "3rem", 
    width: "3rem"
}

export const SessionInformationBot = {
    title: "Session Information Bot",
    description: "The Session Information Bot optimizes information retrieval from past sessions, offering quick access, contextual search, and interactive user experiences. It enhances knowledge management, streamlining support processes and fostering improved collaboration within organizations.",
    BusinessCase: [
      "Many organizations face the challenge of finding relevant information from past sessions and meetings, as accessing session metadata and summaries is often not readily available to users.",
      "This leads to time-consuming searches and difficulties in retrieving specific content. To address this issue, there is a need for a comprehensive solution that allows users to easily access relevant content and recordings from previous sessions, all in one place.",
    ],
    targetUsers: [
      {
        name: "Attendees",
        caption: "Primary users who attend various sessions, events might need to reference the session content later for better understanding",
        icon: <MdGroups style={iconSize}/>,
      },
      {
        name: "Analysts",
        caption: "Need to gather insights, track progress and look for improvements",
        icon: <PsychologyIcon style={iconSize}/>,
      },
      {
        name: "Training Teams",
        caption: "Responsible for organizing and managing the sessions. Facilitates efficient knowledge management and sharing",
        icon: <CastForEducationIcon style={iconSize}/>,
      },
      {
        name: "Administrators",
        caption: "Maintain the record of sessions, transcripts available for usage of various teams",
        icon: <GrUserAdmin style={iconSize} />,
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
      link: "https://media.istockphoto.com/id/1459392381/video/time-lapse-of-passenger-walking-and-running-on-escalator-in-rush-hour.mp4?s=mp4-640x640-is&k=20&c=tF-Zlbhb731ZvCEszW-EgBgPYvD_g_CMAh7N1jJhqzM=",
    },
    gallery: [
                {
                    name: "SessionInformationBot-1",
                    url: "SessionInformationBot1.png",
                },
            ],
  };
  
// export default SessionInformationBot;