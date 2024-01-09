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
import demoVideo from './demos/FeedbackSummarizerBot.mp4'

const iconSize = {
    height: "3rem", 
    width: "3rem"
}

export const FeedbackSummarizerBot = {
    title: "Feedback Summarizer Bot",
    description: "The Feedback Summarizer Bot utilizes AI and NLP to swiftly analyze and summarize customer feedback, streamlining organizational responses and improving product development.",
    BusinessCase: [
      "As businesses increasingly rely on customer feedback to guide product development and improve the customer experience, it can be a challenge to efficiently analyze and understand the large amounts of feedback data they receive.",
      "Traditional methods of analysis can be subjective and time-consuming, leading to missed opportunities and delays in implementing necessary changes.",
      "Hence there is a need for an efficient intelligent feedback mechanism in place to accelerate the organization response to the feedback received.",
    ],
    targetUsers: [
      {
        name: " Product Managers",
        caption: "Plays a key role in extracting actionable insights from customer feedback. Generates valuable reports by performing in-depth analysis",
        icon: <MdGroups style={iconSize}/>,
      },
      {
        name: "Data Analysts",
        caption: "Need to gather insights, track progress and look for improvements",
        icon: <PsychologyIcon style={iconSize}/>,
      },
      {
        name: "Customer Support Representatives",
        caption: "Frontline team who directly interacts with the customers. accelerates the business by understanding the customer sentiments",
        icon: <CastForEducationIcon style={iconSize}/>,
      },
      {
        name: "Product Development Teams",
        caption: "Understanding customer needs, pain points, and suggestions to develop new features or products that align with customer expectations",
        icon: <GrUserAdmin style={iconSize} />,
      },
    ],
    businessOutcomes: [
      {
        outcome: "Enhanced Customer Experience",
        caption: "Leveraging the insights derived from customer feedback, organizations can prioritize product enhancements, leading to more innovative and customer-centric products.",
        icon: <IntegrationInstructionsIcon style={iconSize}/>,
      },
      {
        outcome: "Improved Product Development",
        caption: "Researchers and analysts can leverage the solution to extract insights from session content and recordings, supporting data analysis, research projects.",
        icon: <QueryStatsIcon style={iconSize}/>,
      },
      {
        outcome: "Accelerated Decision-Making",
        caption: "faster decision-making by business teams  leveraging the timely insights derived from feedback.",
        icon: <MdManageHistory style={iconSize}/>,
      },
      {
        outcome: "Increased Customer Satisfaction",
        caption: "By addressing customer concerns and implementing necessary changes based on feedback analysis, businesses can improve customer satisfaction levels, leading to increased loyalty and retention.",
        icon: <LocalLibraryIcon style={iconSize}/>,
      },
      {
        outcome: "Proactive Issue Resolution",
        caption: "proactively identify and resolve customer issues by analyzing feedback in real-time, minimizing negative impacts and improving customer loyalty.",
        icon: <ConstructionIcon style={iconSize}/>,
      },
      {
        outcome: "Competitive Advantage",
        caption: "Efficient analysis of customer feedback allows businesses to stay ahead of the competition by identifying and addressing customer needs and preferences more effectively.",
        icon: <SchoolIcon style={iconSize}/>,
      },
    ],
    solutionHighlights: [
      "Businesses can automatically categorize and summarize feedback data based on factors such as sentiment and product type. This enables quick identification of key insights and areas for improvement.",
      "A chatbot service is implemented to interact with the feedback data, allowing users to ask questions related to product feedback and retrieve relevant comments.",
      "Feedback insights can be retrieved based on specific criteria, such as a particular product or sentiment. This enhances the customer experience by providing valuable information for decision-making and addressing customer concerns.",
    ],
    demo: {
      link: {demoVideo},
    },
  };
  
export default FeedbackSummarizerBot;