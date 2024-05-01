// import retailimg from './icons/AI-in-Retail-945x630.jpeg';
// import ecommerce from './icons/ecommerce.jpg';
// import invoice from './icons/invoice.jpg';

import retailimg from './icons/Rectangle 124.svg';
import ecommerce from './icons/Rectangle 125.svg';
import invoice from './icons/Rectangle 126.svg';

const retailCustData = [
  {
    title: "Enhancing Retail Platform with Business Intelligence Solution",
    image: <img src={retailimg} className="attachment-full size-full" alt="AI business intelligence solution" style={{height:"230px"}} />,
    description: [
      <b>Efficient decision-making and 91% sentiment accuracy achieved.</b>,
      "Our client, a global tech vendor in international trade, sought our expertise to integrate BI into their platform for precise sentiment analysis.",
      "We provided an innovative solution that collects, analyzes, and stores customer reviews in the database.",
    ],
    link: "",
  },
  {
    title: "Developing Predictive Analytics Module for E-Commerce Platform",
    image: <img src={ecommerce} className="attachment-full size-full" alt="Building Predictive Analytics Module" style={{height:"230px"}}/>,
    description: [
      <b>Streamlined processes and elevated customer experience.</b>,
      "Our client, operating in E-commerce, approached us for the development of a robust recommender system.",
      "MAQ Software's tech team implemented an ML-based solution for generating recommendations, boosting customer loyalty and brand perception.",
    ],
    link: "",
  },
  {
    title: "Revolutionizing Retail with Automated Invoice Processing Software",
    image: <img src={invoice} className="attachment-full size-full" alt="ai software" style={{height:"230px"}} />,
    description: [
      <b>Achieved a 43% increase in performance.</b>,
      "Our client, a major retail company, sought to automate their invoice processing system.",
      "We utilized ML for data capture and extraction, resulting in a 43% performance boost and a significant reduction in workload for the accounting department.",
    ],
    link: "",
  },
];

export default retailCustData;
