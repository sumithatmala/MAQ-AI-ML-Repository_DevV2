import React from "react";
import GridOfCards from "./GridOfCardsThree";
import icon_speed from './icons/icon-idea.svg';
import cart from './icons/icon-ecommerce-alt.svg';
import horn from './icons/bi-marketing.svg';
import cube from './icons/bi-logistic.svg';
import monitor from './icons/bi-fin-service.svg';
import health from './icons/bi-health.svg';
import manufactur from './icons/icon-manufacturing.svg';

const IndustryGrids = () => {
  const data = [
    {
      iconSrc: <img src={cart} alt="ecommerce" />,
      altText: "E-commerce",
      title: "E-commerce",
      description: "Custom solutions for the E-commerce industry."
    },
    {
      iconSrc: <img src={horn} alt="Marketing & Advertising" />,
      altText: "Marketing & Advertising",
      title: "Marketing & Advertising",
      description: "Custom solutions for the Marketing & Advertising industry."
    },
    {
      iconSrc: <img src={cube} alt="Supply Chain & Logistics" />,
      altText: "Supply Chain & Logistics",
      title: "Supply Chain & Logistics",
      description: "Custom solutions for the Supply Chain & Logistics industry."
    },
    {
      iconSrc: <img src={monitor} alt="Financial Services" />,
      altText: "Financial Services",
      title: "Financial Services",
      description: "Custom solutions for the Financial Services industry."
    },
    {
      iconSrc: <img src={health} alt="Healthcare & Pharma" />,
      altText: "Healthcare & Pharma",
      title: "Healthcare & Pharma",
      description: "Custom solutions for the Healthcare & Pharma industry."
    },
    {
      iconSrc: <img src={manufactur} alt="Manufacturing" />,
      altText: "Manufacturing",
      title: "Manufacturing",
      description: "Custom solutions for the Manufacturing industry."
    }
  ];

  return (
    <div>
      <GridOfCards items={{item: data, title: "Industries"}}/>
    </div>
  );
};

export default IndustryGrids;
