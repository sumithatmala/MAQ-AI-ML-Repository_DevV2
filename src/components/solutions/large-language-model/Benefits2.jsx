import React from "react";
import './css/Benefits2.css';
// import iconDollarIncrease from './img/icon-dollar-increase.svg';
// import iconCost from './img/icon-cost-2.svg';
// import iconAccuracy from './img/icon-accuracy-2.svg';
// import iconEngine from './img/icon-engine.svg';

import iconDollarIncrease from './img/icons8-user-groups-100 3.svg';
import iconCost from './img/icons8-decision-100 2.svg';
import iconAccuracy from './img/icons8-intelligence-100 1.svg';
import iconEngine from './img/icons8-data-security-100 1.svg';

const benefits = [
  {
    title: "Enhanced Customer Engagement",
    iconSrc: <img src={iconDollarIncrease}  alt="icon" width="70px"/>,
    description: "Enhance customer engagement with personalized interactions and recommendations using Large Language Models (LLMs). Craft dynamic experiences that resonate with your audience, fostering greater satisfaction and loyalty."
  },
  {
    title: "Streamlined Decision-Making",
    iconSrc: <img src={iconCost}  alt="icon" width="70px"/>,
    description: "Empower your decision-making processes with actionable insights derived from comprehensive data analysis facilitated by LLMs. Make informed strategic choices faster and with greater accuracy, driving business growth and success."
  },
  {
    title: "Enhanced Data Security",
    iconSrc: <img src={iconEngine}  alt="icon" width="70px"/>,
    description: "Ensure robust data security and compliance with regulations by leveraging LLMs for data encryption, anomaly detection, and threat identification. Safeguard sensitive information and maintain the trust of your customers and stakeholders."
  },
  {
    title: "Improved Productivity and Efficiency",
    iconSrc: <img src={iconAccuracy}  alt="icon" width="70px"/>,
    description: "Boost productivity and efficiency across your organization by automating repetitive tasks and optimizing workflows with LLMs. Free up valuable time and resources to focus on innovation and core business activities."
  }
];
// const Benefits2 = () => {

//   return (
//     <section className="main-cases">
//       <h2 className="head-block-center w-800">
//         Unlock the Potential Benefits of Large Language Learning Models
//       </h2>
//       <div className="text-block-center">
//         Discover how LLMs can revolutionize your business operations and drive meaningful outcomes.
//       </div>
//       <div className="use-cases __type-predict margin-adjust" style={{paddingBottom:"0px"}}>
//         <div className="use-cases__outer">
//           <div className="use-cases__inner">
//             <div className="use-cases-list-wrapper __type-predict">
//               <ul className="use-cases-list">
//                 {benefits.map((benefit, index) => (
//                   <li key={index} className="use-cases-list__list-item">
//                     <div className="use-cases-list__item border-shadow">
//                       <div className="use-cases-list__icon" style={{display:"flex", justifyContent:"center"}}>
//                         <img src={benefit.icon} alt={benefit.title} />
//                       </div>
//                       <h3 className="use-cases-list__title">{benefit.title}</h3>
//                       <div className="use-cases-list__text">{benefit.text}</div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // export default Benefits2;
export default benefits;
