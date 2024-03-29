import check from "./icons/icons8-easy-100 1.svg";
import health from "./icons/icons8-physical-therapy-100 1.svg";
import lock from "./icons/icons8-data-encryption-100 1.svg";
import connect from "./icons/icons8-change-user-100 1.svg";
import deal from "./icons/icons8-dao-100 1.svg";
import gear from "./icons/icons8-solution-100 (2) 2.svg";

const ValueData = [
  {
    iconSrc: <img src={check} alt="icon"  width="70px" />,
    altText: "Simplified Diagnosis",
    title: "Simplified Diagnosis",
    description: "Assisting in analyzing extensive volumes of medical data.",
  },
  {
    iconSrc: <img src={health} alt="Patient Care" width="70px" />,
    altText: "Optimized Patient Care",
    title: "Optimized Patient Care",
    description: "Patient-centric care leading to improved patient outcomes.",
  },
  {
    iconSrc: <img src={lock} alt="icon"  width="70px" />,
    altText: "Data Security",
    title: "Data Security",
    description:
      "Your data remains secure with you. Processing is done locally.",
  },
  {
    iconSrc: <img src={connect} alt="User-Friendly Solutions" width="70px" />,
    altText: "User-Friendly Solutions",
    title: "User-Friendly Solutions",
    description: "Quick to adapt and easy to use, even for non-tech users.",
  },
  {
    iconSrc: <img src={deal} alt="Automated Business Processes" width="70px" />,
    altText: "Automated Business Processes",
    title: "Automated Business Processes",
    description:
      "Enhanced operational efficiency and reduced human error in the workplace.",
  },
  {
    iconSrc: <img src={gear} alt="Tailored Solutions" width="70px" />,
    altText: "Tailored Solutions for Your Requirements",
    title: "Tailored Solutions for Your Requirements",
    description:
      "Haven’t found the right fit? Need a healthcare IT solution customized to your specific needs?",
    link: '<a href="#section-contacts" class="industries__item-link reports-list__action"><span>Let’s Talk</span></a>',
  },
];

export default ValueData;
