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
  height: "5rem",
  width: "5rem",
  color: "#dc848d",
};
const iconSizeBO = {
  height: "13rem",
  width: "20.4rem",
  color: "#dc848d",
  border: "solid #dc848d 3px",
  // margin: "0px 10px",
  padding: "30px 50px",
  borderRadius: "10px",
  // boxShadow: "0px 8px 16px 0px red"
}

export const FeedbackSummarizerBot = {
    title: "Feedback Summarizer Bot",
    description: "The Feedback Summarizer Bot utilizes AI and NLP to swiftly analyze and summarize customer feedback, streamlining organizational responses and improving product development.",
    BusinessCase: [
      "As businesses increasingly depend on customer feedback for product development and enhancing customer experience, efficiently analyzing vast amounts of feedback data poses a significant challenge. Traditional analysis methods are often subjective and time-consuming, resulting in missed opportunities and delays in implementing crucial changes. Recognizing this, there is a pressing need for an intelligent feedback mechanism that efficiently accelerates organizational responses to the received feedback, facilitating more timely and informed decision-making processes."
    ],
    targetUsers: [
      {
        title: " Product Managers",
        description: "Plays a key role in extracting actionable insights from customer feedback. Generates valuable reports by performing in-depth analysis",
        iconSrc: <MdGroups style={iconSize}/>,
      },
      {
        title: "Data Analysts",
        description: "The client seeks insights, progress tracking, and improvements for their custom pose estimation models in physical therapy and fitness.",
        iconSrc: <PsychologyIcon style={iconSize}/>,
      },
      {
        title: "Customer Support Representatives",
        description: "Frontline team who directly interacts with the customers. accelerates the business by understanding the customer sentiments",
        iconSrc: <CastForEducationIcon style={iconSize}/>,
      },
      {
        title: "Product Development Teams",
        description: "Understanding customer needs, pain points, and suggestions to develop new features or products that align with customer expectations",
        iconSrc: <GrUserAdmin style={iconSize} />,
      },
    ],
    businessOutcomes: [
      {
        title: "Enhanced Customer Experience",
        description: ["Using customer feedback insights, organizations can prioritize product enhancements for more innovative, customer-centric products."],
        image: <IntegrationInstructionsIcon style={iconSizeBO}/>,
      },
      {
        title: "Improved Product Development",
        description: ["Researchers and analysts can leverage the solution to extract insights from session content and recordings, supporting data analysis, research projects."],
        image: <QueryStatsIcon style={iconSizeBO}/>,
      },
      {
        title: "Accelerated Decision-Making",
        description: ["faster decision-making by business teams  leveraging the timely insights derived from feedback."],
        image: <MdManageHistory style={iconSizeBO}/>,
      },
      {
        title: "Increased Customer Satisfaction",
        description: ["Addressing customer concerns and implementing feedback-driven changes can boost satisfaction, loyalty, and retention."],
        image: <LocalLibraryIcon style={iconSizeBO}/>,
      },
      {
        title: "Proactive Issue Resolution",
        description: ["proactively identify and resolve customer issues by analyzing feedback in real-time, minimizing negative impacts and improving customer loyalty."],
        image: <ConstructionIcon style={iconSizeBO}/>,
      },
      {
        title: "Competitive Advantage",
        description: ["Efficient analysis of customer feedback allows businesses to stay ahead of the competition by identifying and addressing customer needs and preferences more effectively."],
        image: <SchoolIcon style={iconSizeBO}/>,
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
    tryit: {
        link: ""
    },
    FAQs: [
      {
        "question": "What is the Feedback Summarizer Bot?",
        "answer": "The Feedback Summarizer Bot is an AI-powered tool designed to swiftly analyze and summarize customer feedback, facilitating efficient organizational responses and improvements in product development."
      },
      {
        "question": "Who are the target users for the Feedback Summarizer Bot?",
        "answer": "The tool caters to various users, including Product Managers, Data Analysts, Customer Support Representatives, and Product Development Teams, each playing a unique role in leveraging customer feedback."
      },
      {
        "question": "How does the Feedback Summarizer Bot benefit Product Managers?",
        "answer": "Product Managers can extract actionable insights from customer feedback, generating valuable reports through in-depth analysis facilitated by the tool."
      },
      {
        "question": "What outcomes can businesses expect from using the Feedback Summarizer Bot?",
        "answer": "The tool delivers outcomes such as enhanced customer experience, improved product development, accelerated decision-making, increased customer satisfaction, proactive issue resolution, and a competitive advantage."
      },
      {
        "question": "How does the Feedback Summarizer Bot enhance customer experience?",
        "answer": "Organizations can prioritize product enhancements based on insights derived from customer feedback, resulting in more innovative and customer-centric products."
      },
      {
        "question": "What role does the Feedback Summarizer Bot play in accelerating decision-making?",
        "answer": "The tool facilitates faster decision-making by providing timely insights derived from feedback analysis, empowering business teams to make informed choices."
      },
      {
        "question": "Can businesses use the tool to proactively resolve customer issues?",
        "answer": "Yes, businesses can proactively identify and resolve customer issues by analyzing feedback in real-time, minimizing negative impacts, and improving customer loyalty."
      },
      {
        "question": "How does the chatbot service work in the Feedback Summarizer Bot?",
        "answer": "A chatbot service is implemented to interact with feedback data, allowing users to ask questions related to product feedback and retrieve relevant comments."
      },
      {
        "question": "What are the key solution highlights of the Feedback Summarizer Bot?",
        "answer": "Solution highlights include automatic categorization and summarization of feedback data based on factors like sentiment and product type, as well as the implementation of a chatbot service for interactive feedback analysis."
      },
      {
        "question": "Is there a demo available for the Feedback Summarizer Bot?",
        "answer": "Yes, a demo is available, and you can access it through the provided link to a demo video."
      }
    ]
  };
  
export default FeedbackSummarizerBot;