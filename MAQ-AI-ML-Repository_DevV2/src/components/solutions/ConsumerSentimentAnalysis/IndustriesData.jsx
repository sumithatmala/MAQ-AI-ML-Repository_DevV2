import React from "react";
import cart from './icons/icon-ecommerce-alt.svg';
import horn from './icons/bi-marketing.svg';
import cube from './icons/bi-logistic.svg';
import monitor from './icons/bi-fin-service.svg';
import health from './icons/bi-health.svg';
import manufactur from './icons/icon-manufacturing.svg';


const IndustriesData = [
    {
        iconSrc: <img src={cart} alt="E-commerce" />,
        altText: "E-commerce",
        title: "E-commerce",
        description: "Tailored solutions for the E-commerce industry."
      },
      {
        iconSrc: <img src={horn} alt="Marketing & Advertising" />,
        altText: "Marketing & Advertising",
        title: "Marketing & Advertising",
        description: "Tailored solutions for the Marketing & Advertising industry."
      },
      {
        iconSrc: <img src={cube} alt="Supply Chain & Logistics" />,
        altText: "Supply Chain & Logistics",
        title: "Supply Chain & Logistics",
        description: "Tailored solutions for the Supply Chain & Logistics industry."
      },
      {
        iconSrc: <img src={monitor} alt="Financial Services" />,
        altText: "Financial Services",
        title: "Financial Services",
        description: "Tailored solutions for the Financial Services industry."
      },
      {
        iconSrc: <img src={health} alt="Healthcare & Pharma" />,
        altText: "Healthcare & Pharma",
        title: "Healthcare & Pharma",
        description: "Tailored solutions for the Healthcare & Pharma industry."
      },
      {
        iconSrc: <img src={manufactur} alt="Manufacturing" />,
        altText: "Manufacturing",
        title: "Manufacturing",
        description: "Tailored solutions for the Manufacturing industry."
      }
]

export default IndustriesData;