import gif from "./Tools/bot.gif";
import support from "./Tools/AiSupport.png";
import appointment from "./Tools/AppointmentShedule.gif";
import crm from "./Tools/chatbot.jpg";
import chat from "./Tools/textAndvoice.avif";

const BannerData = [
  {
    heading: "24/7 Personalized Customer Assistance",
    points: [
      "Addressing common queries about the company’s services and products tailored to the specific client’s request",
      "Round-the-clock availability during festive seasons and busy times",
      "Personalized human-like responses",
      "Immediate comprehensive response to the query based on the company’s proprietary knowledge base",
      "Virtual assistant tool for multilingual support",
      "Recommendations concerning the topic generated by ML",
    ],
    img: <img src={gif} alt="" width={350}/>,
  },
  {
    heading: "Automated Support for Sales Teams",
    points: [
      "Automated Q&A with customers to free up your human agents for more intelligent and urgent tasks",
      "Effective appointment scheduling across time zones",
      "Fast data transfer to the sales team (conversation history and context)",
      "Automatic email notifications to the sales team and customer",
    ],
    img: <img src={support} alt="" width={350}/>,
  },
  {
    heading: "Streamlined Appointment Scheduling",
    points: [
      "Efficient handling of back-and-forth communication",
      "Scheduling tasks across time zones",
      "Calendar integration",
    ],
    img: <img src={appointment} alt="" width={350}/>,
  },
  {
    heading: "Seamless Integration with CRM",
    points: [
      "Automated data extraction and summarization from conversations",
      "Prompt creation of CRM records as required",
      "Enhanced data precision",
    ],
    img: <img src={crm} alt="" width={350}/>,
  },
  {
    heading: "Text and Voice Recognition Capabilities",
    points: [
      "The ability to audio communicate your needs to a chatbot",
      "Fluid and natural customer experience",
    ],
    img: <img src={chat} alt="" width={350}/>,
  },
];

export default BannerData;
