import React from "react";
// import cart from './icons/icon-ecommerce-alt.svg';
// import horn from './icons/bi-marketing.svg';
// import cube from './icons/bi-logistic.svg';
// import monitor from './icons/bi-fin-service.svg';
// import health from './icons/bi-health.svg';
// import manufactur from './icons/icon-manufacturing.svg';


import cart from './icons/icons8-shopping-mall-100 1.svg';
import horn from './icons/icons8-marketing-100 (1) 1.svg';
import cube from './icons/icons8-inventory-flow-100 1.svg';
import monitor from './icons/icons8-refund-100 1.svg';
import health from './icons/icons8-pharma-100 1.svg';
import manufactur from './icons/icons8-manufacturing-100 1.svg';


const IndustriesData = [
    {
        iconSrc: <img src={cart} alt="E-commerce" width="70px" />,
        altText: "E-commerce",
        title: "E-commerce",
        description: "Tailored solutions for the E-commerce industry."
      },
      {
        iconSrc: <img src={horn} alt="Marketing & Advertising" width="70px" />,
        altText: "Marketing & Advertising",
        title: "Marketing & Advertising",
        description: "Tailored solutions for the Marketing & Advertising industry."
      },
      {
        iconSrc: <img src={cube} alt="Supply Chain & Logistics" width="70px" />,
        altText: "Supply Chain & Logistics",
        title: "Supply Chain & Logistics",
        description: "Tailored solutions for the Supply Chain & Logistics industry."
      },
      {
        iconSrc: <img src={monitor} alt="Financial Services" width="70px" />,
        altText: "Financial Services",
        title: "Financial Services",
        description: "Tailored solutions for the Financial Services industry."
      },
      {
        iconSrc: <img src={health} alt="Healthcare & Pharma" width="70px" />,
        altText: "Healthcare & Pharma",
        title: "Healthcare & Pharma",
        description: "Tailored solutions for the Healthcare & Pharma industry."
      },
      {
        iconSrc: <img src={manufactur} alt="Manufacturing" width="70px" />,
        altText: "Manufacturing",
        title: "Manufacturing",
        description: "Tailored solutions for the Manufacturing industry."
      }
]

export default IndustriesData;