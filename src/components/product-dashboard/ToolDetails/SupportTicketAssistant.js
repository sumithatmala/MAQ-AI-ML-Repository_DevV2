
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import SpeedIcon from "@mui/icons-material/Speed";
import OutputIcon from "@mui/icons-material/Output";
import demoVideo from "./demos/SupportTicketAssistant.mp4";
import { IoTicketSharp } from "react-icons/io5";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { GrUserManager } from "react-icons/gr";
import { FaBusinessTime } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { GiProcessor } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import ScaleIcon from "@mui/icons-material/Scale";


import TicketReq from '../images/Support Ticket Assistant/icons8-new-ticket-100 1.svg'
import SupportRep from '../images/Support Ticket Assistant/icons8-support-100 2.svg'
import SupportManage from '../images/Support Ticket Assistant/icons8-admin-100 3.svg'
import BusinessOwners from '../images/Support Ticket Assistant/icons8-business-documentation-100 1.svg'

import ImprovedResTime from '../images/Support Ticket Assistant/icons8-time-100 (1) 2.svg'
import StandardizedSupport from '../images/Support Ticket Assistant/icons8-process-100 1.svg'
import TeamPerformance from '../images/Support Ticket Assistant/icons8-onboarding-100 1.svg'
import CustSatisfaction from '../images/Support Ticket Assistant/icons8-happy-100 1.svg'
import WorkloadCosts from '../images/Support Ticket Assistant/icons8-low-price-pound-100 (1) 1.svg'
import Scalability from '../images/Support Ticket Assistant/icons8-weight-care-100 1.svg'


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
export const SupportTicketAssistant = {
  title: "Support Ticket Assistant",
  description:
    "Transform support operations with our automated system, ensuring faster responses and happier customers.",
  BusinessCase: [
    "The support teams currently face challenges in responding to high volumes of requests daily, as the existing manual systems are slow, inefficient, and error-prone, resulting in customer dissatisfaction. To address this, the implementation of an automated system becomes crucial. Such a system aims to streamline the processing of repetitive and predictable requests, significantly reducing response times and enhancing accuracy. The introduction of automation not only boosts overall efficiency but also contributes to improved customer satisfaction by ensuring a more prompt and error-free support process.",
  ],
  targetUsers: [
    {
      title: "Ticket Requester",
      description:
        "Users who submit support tickets and seek timely and accurate assistance",
      iconSrc: <img src={TicketReq} width="70px" alt=''  />
    },
    {
      title: "Support Representative",
      description:
        "Support Engineers who are responsible for managing and resolving support tickets",
      iconSrc: <img src={SupportRep} width="70px" alt=''  />
    },
    {
      title: "Support Manager",
      description:
        "Leads or supervisors overseeing support teams, ensuring efficient ticket resolution and customer satisfaction",
      iconSrc: <img src={SupportManage} width="70px" alt=''  />
    },
    {
      title: "Business Owners",
      description:
        "Rely on the support team to provide timely assistance to their customers, address any issues, and maintain positive customer relationships",
      iconSrc: <img src={BusinessOwners} width="70px" alt=''  />
    },
  ],
  businessOutcomes: [
    {
      title: "Improved Response Time",
      description:
        ["Reduced response times for support ticket requests, enhancing customer satisfaction and loyalty."],
      image: <img src={ImprovedResTime} width="100px" style={iconSizeBO} />
    },
    {
      title: "Standardized Support Processes",
      description:
        ["Automated system enforces consistent handling of support requests, ensuring standardized responses and improving the overall customer experience."],
      image: <img src={StandardizedSupport} width="100px" style={iconSizeBO} />
    },
    {
      title: "Improved Team Performance",
      description:
        ["Automation provides visibility into support team performance metrics, enabling managers to identify areas for improvement, provide targeted training, and enhance overall team performance."],
      image:<img src={TeamPerformance} width="100px" style={iconSizeBO} />
    },
    {
      title: "Increased Customer Satisfaction",
      description:
        ["By addressing customer concerns quickly and efficiently can enhance the customer experience, resulting in higher satisfaction levels and positive brand perception"],
      image: <img src={CustSatisfaction} width="100px" style={iconSizeBO} />
    },
    {
      title: "Reduced Workload and Costs",
      description:
        ["Automation eliminates repetitive and manual tasks, reducing the workload on support teams and minimizing operational costs associated with support request handling."],
      image:<img src={WorkloadCosts} width="100px" style={iconSizeBO} />
    },
    {
      title: "Scalability",
      description:
        ["The automated system can handle high volumes of support requests without compromising response times or accuracy, allowing businesses to scale their support operations as needed."],
      image:<img src={Scalability} width="100px" style={iconSizeBO} />
    },
  ],
  solutionHighlights: [
    "Azure Blob Storage is used to store data related to support requests for processing and analysis. By leveraging the indexing capabilities of Azure Search, the system can quickly and accurately retrieve necessary information from the stored data.",
    "App service interacts with the search index to retrieve relevant data when prompted by a user's request. Using Azure Open AI service, contextual information that matches the user's query is processed to generate a response, which is then displayed on the website or Chatbot.",
  ],
  summary: [
    {
      title: "Pain Points",
      icon: <PsychologyAltIcon style={{ height: "16rem", width: "16rem" }} />,
      details: [
        "High Volumes of Support Requests: Existing manual systems struggle to handle the daily influx of support tickets efficiently.",
        "Slow and Inefficient Processes: Manual handling leads to slow response times, causing customer dissatisfaction.",
        "Error-Prone Practices: Repetitive and predictable requests are prone to errors, impacting overall support quality.",
      ],
    },
    {
      title: "How the Solution will Help",
      icon: <SpeedIcon style={{ height: "16rem", width: "16rem" }} />,
      details: [
        "Automated Processing: The introduction of an automated system will streamline support ticket processing.",
        "Reduced Response Times: Automation will lead to quicker responses, addressing customer needs promptly.",
        "Error Reduction: Automation minimizes manual errors, ensuring accurate and consistent support.",
      ],
    },
    {
      title: "Outcomes",
      icon: <OutputIcon style={{ height: "16rem", width: "16rem" }} />,
      details: [
        "Improved Response Time",
        "Improved Team Performance",
        "Reduced Workload and Costs",
        "Standardized Support Processes",
        "Increased Customer Satisfaction",
        "The automated system handles high support volumes, allowing for scalable support operations.",
      ],
    },
  ],
  demo: {
    link: [demoVideo],
  },
  tryit: {
    link: "",
  },

  FAQs: [
    {
      question:
        "What are the main challenges faced by support teams currently?",
      answer:
        "Support teams currently face challenges related to high volumes of requests, slow and inefficient manual processes, and error-prone practices.",
    },
    {
      question:
        "How does the automated system aim to address these challenges?",
      answer:
        "The automated system aims to streamline support ticket processing, reduce response times, and minimize manual errors by introducing automation.",
    },
    {
      question:
        "What are the benefits of implementing the automated support system?",
      answer:
        "The benefits include improved response times, standardized support processes, enhanced team performance, reduced workload and costs, increased customer satisfaction, and scalability.",
    },
    {
      question:
        "What technologies are utilized in the automated support system?",
      answer:
        "The system utilizes Azure Blob Storage for data storage, Azure Search for indexing and retrieval, and Azure Open AI service for generating responses based on user queries.",
    },
    {
      question: "How does the automated system interact with users?",
      answer:
        "The system interacts with users through a website or Chatbot interface, processing user queries using contextual information and generating relevant responses.",
    },
  ],
};

export default SupportTicketAssistant;
