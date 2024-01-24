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
import demoVideo from './demos/SmartSupportFramework.mp4'

const iconSize = {
    height: "3rem",
    width: "3rem"
}

export const SmartSupportFramework = {
    title: "Smart Support Framework",
    description: "Organizations face challenges in managing support tickets efficiently, necessitating an automated solution for assigning tickets, offering prompt severity feedback, and enabling seamless collaboration among teams for effective resolution.",
    BusinessCase: [
        "Organizations often face difficulties in managing support ticket requests, experiencing delays, uncertainty in ticket severity, and inefficient team collaboration. Addressing this, there's a rising demand for a solution to automate ticket assignments, offer timely severity feedback, and foster seamless communication among teams, aiming for more effective issue resolution.",
    ],
    targetUsers: [
        {
            name: "Ticket Requester",
            caption: "Users who submit support tickets and seek timely and accurate assistance.",
            icon: <MdGroups style={iconSize} />,
        },
        {
            name: "Support Representative",
            caption: "Support Engineers who are responsible for managing and resolving support tickets.",
            icon: <PsychologyIcon style={iconSize} />,
        },
        {
            name: "Support Manager",
            caption: "Leads or supervisors overseeing support teams, ensuring efficient ticket resolution and customer satisfaction.",
            icon: <CastForEducationIcon style={iconSize} />,
        },
        {
            name: "System Administrator",
            caption: "Administrators responsible for configuring and maintaining the support ticket management system.",
            icon: <GrUserAdmin style={iconSize} />,
        },
    ],
    businessOutcomes: [
        {
            outcome: "Improved Response Time",
            caption: "Reduced response times for support ticket requests, enhancing customer satisfaction and loyalty.",
            icon: <IntegrationInstructionsIcon style={iconSize} />,
        },
        {
            outcome: "Enhanced Ticket Severity Management",
            caption: "Accurate determination and communication of ticket severity enable better prioritization and faster resolution of critical issues.",
            icon: <QueryStatsIcon style={iconSize} />,
        },
        {
            outcome: "Streamlined Collaboration",
            caption: "Efficient communication and collaboration between support teams lead to quicker ticket resolution, reducing overall response and resolution times.",
            icon: <MdManageHistory style={iconSize} />,
        },
        {
            outcome: "Increased Customer Satisfaction",
            caption: "By addressing customer concerns quickly and efficiently can enhance the customer experience, resulting in higher satisfaction levels and positive brand perception.",
            icon: <LocalLibraryIcon style={iconSize} />,
        },
        {
            outcome: "Improved Operational Efficiency",
            caption: "Automating ticket assignment and streamlining collaboration can optimize resource allocation, improve productivity, and reduce operational costs.",
            icon: <ConstructionIcon style={iconSize} />,
        },
        {
            outcome: "Enhanced Escalation Process",
            caption: "Streamlined escalation process ensures that critical support tickets are promptly escalated to the appropriate teams or higher-level support.",
            icon: <SchoolIcon style={iconSize} />,
        },
    ],
    solutionHighlights: [
        "Intelligent Routing of support tickets to the teams by utilizing Open AI.",
        "Contextual search ensuring fast & efficient support.",
        "Acknowledges support requests and assigns priorities, providing prompt communication and reassurance to users.",
        "Identifies patterns and improves collaboration across teams, optimizing support processes for quick ticket resolution.",
        "Sentiment Monitoring on the replies received and ensure satisfactory responses were generated.",
    ],
    summary: [
        {
            title: "Pain Points",
            icon: <PsychologyAltIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Challenges in managing support tickets efficiently",
                "Delays and uncertainty in ticket severity",
                "Inefficient collaboration among support teams",
            ],
        },
        {
            title: "How the Solution will Help",
            icon: <SpeedIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Automated ticket assignment for efficient management",
                "Timely severity feedback for accurate prioritization",
                "Seamless collaboration among support teams",
                "Effective resolution of support ticket requests",
            ],
        },
        {
            title: "Outcomes",
            icon: <OutputIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Reduced response times for support ticket requests",
                "Accurate determination and communication of ticket severity",
                "Efficient communication and collaboration leading to quicker ticket resolution",
                "Increased customer satisfaction and loyalty",
                "Improved operational efficiency through automation",
                "Streamlined escalation process for critical support tickets",
            ],
        },
    ],
    demo: {
        link: { demoVideo },
    },
    FAQs : [
        {
          question: "What is the purpose of the Smart Support Framework?",
          answer: "The Smart Support Framework addresses challenges in managing support tickets efficiently by automating ticket assignments, offering prompt severity feedback, and enabling seamless collaboration among teams for effective issue resolution."
        },
        {
          question: "Who are the target users for the Smart Support Framework?",
          answer: "The target users include Ticket Requesters, Support Representatives, Support Managers, and System Administrators. These users are involved in submitting support tickets, managing and resolving tickets, overseeing support teams, and configuring/maintaining the support ticket management system."
        },
        {
          question: "What are the key outcomes expected from implementing the Smart Support Framework?",
          answer: "The expected outcomes include improved response time, enhanced ticket severity management, streamlined collaboration leading to quicker ticket resolution, increased customer satisfaction, improved operational efficiency through automation, and a streamlined escalation process for critical support tickets."
        },
        {
          question: "What are the highlights of the Smart Support Framework solution?",
          answer: "The solution includes intelligent routing of support tickets using Open AI, contextual search for fast and efficient support, acknowledgment and priority assignment for support requests, identification of patterns for improved collaboration, and sentiment monitoring to ensure satisfactory responses are generated."
        },
        {
          question: "How does the Smart Support Framework address pain points in support ticket management?",
          answer: "The solution addresses challenges such as delays and uncertainty in ticket severity, inefficient collaboration among support teams, and overall difficulties in managing support tickets efficiently. It achieves this through automated ticket assignment, timely severity feedback, and seamless collaboration."
        },
        {
          question: "What role does Open AI play in the Smart Support Framework?",
          answer: "Open AI is utilized for intelligent routing of support tickets, enhancing the efficiency of the ticket assignment process and contributing to fast and accurate support."
        },
        {
          question: "Is there a demo available for the Smart Support Framework?",
          answer: "Yes, you can watch the demo video by following this link: [Demo Video](demoVideo)."
        }
      ]    
};

export default SmartSupportFramework;