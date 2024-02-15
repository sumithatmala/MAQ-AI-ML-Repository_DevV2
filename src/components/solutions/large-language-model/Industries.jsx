import React from "react";
import biFinService from './img/bi-fin-service.svg';
import iconEcommerceAlt from './img/icon-ecommerce-alt.svg';
import biMarketing from './img/bi-marketing.svg';
import iconTelecommunications from './img/icon-telecommunications.svg';
import biIconConslng from './img/bi-icon-conslng.svg';
import iconSecurity from './img/icon-security.svg';
// import "./css/Industries.css";

// const Industries = () => {
//   return (
//     <section className="section-industries-alt">
//       <div className="industries__inner-alt __bi-impl__inner-alt">
//         <h2 className="head-block-center-alt">
//           Build a Custom LLM Model for Your Industry
//         </h2>
//         <div className="text-block-center-alt">
//           Our generative AI company delivers custom models rooted in AI
//           expertise &amp; years of cross-domain expertise.
//         </div>
//         <div className="industries__list-alt">
//           {industries.map((industry, index) => (
//             <div key={index} className="industries__item-link-alt">
//               <div className="industries__item-alt">
//                 <div className="industries__item-icon-alt">
//                   <img src={industry.image} alt={industry.alt} />
//                 </div>
//                 <div className="industries__item-title-alt">{industry.title}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="block__action">
//           <a
//             href="large-language-model.html#section-contacts"
//             className="btn btn-empty"
//           >
//             Your Industry
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

const Industries = [
  {
    iconSrc: <img src={biFinService} />,
    title: "FinTech",
    // image: biFinService,
    alt: "Financial Services",
    description: "",
  },
  {
    iconSrc: <img src={iconEcommerceAlt} />,
    title: "Retail & E-commerce",
    // image: iconEcommerceAlt,
    alt: "ecommerce",
    description: "",
  },
  {
    iconSrc: <img src={biMarketing} />,
    title: "Marketing & Advertising",
    // image: biMarketing,
    alt: "Marketing & Advertising",
    description: "",
  },
  {
    iconSrc: <img src={iconTelecommunications} />,
    title: "Telecommunication",
    // image: iconTelecommunications,
    alt: "telecommunications",
    description: "",
  },
  {
    iconSrc: <img src={biIconConslng} />,
    title: "Consulting services",
    // image: biIconConslng,
    alt: "BI Consulting Services",
    description: "",
  },
  {
    iconSrc: <img src={iconSecurity} />,
    title: "Insurance",
    // image: iconSecurity,
    alt: "security",
    description: "",
  },
];

export default Industries;
