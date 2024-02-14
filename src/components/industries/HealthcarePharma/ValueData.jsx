import health from "../../solutions/ConsumerSentimentAnalysis/icons/bi-health.svg";
import check from "./icons/checkkup.svg";
import lock from "./icons/lock.svg";
import connect from "./icons/connection.svg";
import deal from "./icons/handshake.svg";
import gear from "./icons/setting.svg";

const ValueData = [
  {
    iconSrc: <img src={check} />,
    altText: "Simplified Diagnosis",
    title: "Simplified Diagnosis",
    description: "Assisting in analyzing extensive volumes of medical data.",
  },
  {
    iconSrc: <img src={health} alt="Patient Care" />,
    altText: "Optimized Patient Care",
    title: "Optimized Patient Care",
    description: "Patient-centric care leading to improved patient outcomes.",
  },
  {
    iconSrc: <img src={lock} />,
    altText: "Data Security",
    title: "Data Security",
    description:
      "Your data remains secure with you. Processing is done locally.",
  },
  {
    iconSrc: <img src={connect} alt="User-Friendly Solutions" />,
    altText: "User-Friendly Solutions",
    title: "User-Friendly Solutions",
    description: "Quick to adapt and easy to use, even for non-tech users.",
  },
  {
    iconSrc: <img src={deal} alt="Automated Business Processes" />,
    altText: "Automated Business Processes",
    title: "Automated Business Processes",
    description:
      "Enhanced operational efficiency and reduced human error in the workplace.",
  },
  {
    iconSrc: <img src={gear} alt="Tailored Solutions" />,
    altText: "Tailored Solutions for Your Requirements",
    title: "Tailored Solutions for Your Requirements",
    description:
      "Haven’t found the right fit? Need a healthcare IT solution customized to your specific needs?",
    link: '<a href="#section-contacts" class="industries__item-link reports-list__action"><span>Let’s Talk</span></a>',
  },
];

export default ValueData;
