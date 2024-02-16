import retailimg from './icons/AI-in-Retail-945x630.jpeg';
import ecommerce from './icons/ecommerce.jpg';
import invoice from './icons/invoice.jpg';

const retailCustData = [
  {
    title: "Enhancing Retail Platform with Business Intelligence Solution",
    image: <img src={retailimg} class="attachment-full size-full" alt="AI business intelligence solution" style={{height:"230px"}} />,
    description: [
      "Efficient decision-making and 91% sentiment accuracy achieved.",
      "Our client, a global tech vendor in international trade, sought our expertise to integrate BI into their platform for precise sentiment analysis.",
      "We provided an innovative solution that collects, analyzes, and stores customer reviews in the database.",
    ],
    link: "",
  },
  {
    title: "Developing Predictive Analytics Module for E-Commerce Platform",
    image: <img src={ecommerce} class="attachment-full size-full" alt="Building Predictive Analytics Module" style={{height:"230px"}}/>,
    description: [
      "Streamlined processes and elevated customer experience.",
      "Our client, operating in E-commerce, approached us for the development of a robust recommender system.",
      "Our tech team implemented an ML-based solution to generate relevant recommendations. The result was an enhanced customer loyalty and improved brand perception for the client.",
    ],
    link: "",
  },
  {
    title: "Revolutionizing Retail with Automated Invoice Processing Software",
    image: <img src={invoice} class="attachment-full size-full" alt="ai software" style={{height:"230px"}} />,
    description: [
      "Achieved a 43% increase in performance.",
      "Our client, a major retail company, sought to automate their invoice processing system.",
      "We utilized ML for data capture and extraction, resulting in a 43% performance boost and a significant reduction in workload for the accounting department.",
    ],
    link: "",
  },
];

export default retailCustData;
