import React from "react";
// import biFinService from './img/bi-fin-service.svg';
// import iconEcommerceAlt from './img/icon-ecommerce-alt.svg';
// import biMarketing from './img/bi-marketing.svg';
// import iconTelecommunications from './img/icon-telecommunications.svg';
// import biIconConslng from './img/bi-icon-conslng.svg';
// import iconSecurity from './img/icon-security.svg';


import biFinService from './img/icons8-technology-100 1.svg';
import iconEcommerceAlt from './img/icons8-shopping-mall-100 2.svg';
import biMarketing from './img/icons8-marketing-100 (1) 2.svg';
import iconTelecommunications from './img/icons8-social-100 2.svg';
import biIconConslng from './img/icons8-consultation-100 (1) 1.svg';
import iconSecurity from './img/icons8-insurance-100 1.svg';

const Industries = [
  {
    iconSrc: <img src={biFinService}  alt="icon" width="70px"/>,
    title: "FinTech",
    // image: biFinService,
    alt: "Financial Services",
    description: "",
  },
  {
    iconSrc: <img src={iconEcommerceAlt} alt="icon" width="70px" />,
    title: "Retail & E-commerce",
    // image: iconEcommerceAlt,
    alt: "ecommerce",
    description: "",
  },
  {
    iconSrc: <img src={biMarketing} alt="icon" width="70px" />,
    title: "Marketing & Advertising",
    // image: biMarketing,
    alt: "Marketing & Advertising",
    description: "",
  },
  {
    iconSrc: <img src={iconTelecommunications} alt="icon" width="70px" />,
    title: "Telecommunication",
    // image: iconTelecommunications,
    alt: "telecommunications",
    description: "",
  },
  {
    iconSrc: <img src={biIconConslng} alt="icon" width="70px" />,
    title: "Consulting services",
    // image: biIconConslng,
    alt: "BI Consulting Services",
    description: "",
  },
  {
    iconSrc: <img src={iconSecurity} alt="icon" width="70px" />,
    title: "Insurance",
    // image: iconSecurity,
    alt: "security",
    description: "",
  },
];

export default Industries;
