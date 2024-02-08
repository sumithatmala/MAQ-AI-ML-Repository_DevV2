import React from 'react';
// import gif from  '../VirtualAssistantTool/Tools/bot.gif'; 
// import real from './Images/monitoring.svg';
import real from './Images/RealTime.jpg';
import intent from './Images/Intent.gif';
import info from './Images/InfoExtraction.svg';
import nlp from './Images/NLp.svg';

const FeatureItem = ({ title, description, gifSrc, alignRight }) => (
  <div className="section-text-image-inner" style={{ flexDirection: alignRight ? 'row-reverse' : 'row' }}>
    <div className="setion-text-image__details">
      <div className="section-text-image__description">
      <h3 className="section-text-image__title">{title}</h3>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="section-text-image__figure">
      <img src={gifSrc} alt="" />
    </div>
  </div>
);

  const OurServices = () => {
    const featuresData = [
      {
        title: 'Real-Time Sentiment Monitoring',
        description: [
          'Attain an end-to-end view of your consumer preferences with our dynamic emotion tracking solutions.',
          'Detect changes in consumer mood, prevent churn, and lead in proactive customer service.',
          'Emotion AI model development',
          'Social media listening tools',
          'Smart customer service solutions',
          'ChatGPT conversational solutions',
        ],
        gifSrc: real,
      },
      {
        title: 'Intent Classification',
        description: [
          'Gain precise insights into your customers’ intentions with our user intent analytics solutions.',
          'Track and categorize queries, comments, emails, and other data to reduce time and costs in customer service.',
          'Custom intent classifier development',
          'Sales and marketing campaign analysis',
          'Conversational AI applications',
        ],
        gifSrc: intent,
      },
      {
        title: 'Text Mining and Information Extraction',
        description: [
          'Extract knowledge from unstructured content and retrieve valuable information from diverse data sources.',
          'Optimize your use of emails, scripts, documents, and conversations with less effort and quicker turnarounds.',
          'Voice-of-the-customer solutions',
          'Document analysis (CMS, RPA, ERP, and others)',
          'Text analytics for call centers',
        ],
        gifSrc: info,
      },
      {
        title: 'Full-Cycle NLP Software Development',
        description: [
          'Translate your business requirements into comprehensive smart solutions based on Natural Language Processing.',
          'Uncover insights buried in your data and transform opportunities into outstanding products.',
          'Topic modeling solutions',
          'Text categorization',
          'User feedback analysis',
        ],
        gifSrc: nlp,
      },
      
      
    ];
  
    return (
      <div>
        <div className="quick-block">
          <div className="head-block-center" style={{ marginBottom: '10px' }}>
            <h2 className="headblock">
            Our Services
            </h2>
          </div>
          <div className="text-block-center" style={{}}>
          Our company provides a comprehensive suite of NLP-based services tailored to meet the distinct requirements of your data.
          </div>
        </div>
  
        <div className="section-text-image type-center __xs-pic-size __w-50 __image-right">
          {featuresData.map((feature, index) => (
            <FeatureItem
              key={index}
              {...feature}
              alignRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default OurServices;

//   return (
//     <div>
//       <div className="quick-block">
//         <div className="head-block-center" style={{ marginBottom: '10px' }}>
//           <h2 className="headblock">
//           Our Services
//           </h2>
//         </div>
//         <div className="text-block-center" style={{}}>
//         Our company provides a comprehensive suite of NLP-based services tailored to meet the distinct requirements of your data.
//         </div>
//       </div>

//       <div className="section-text-image type-center __xs-pic-size __w-50 __image-right">
//         {featuresData.map((feature, index) => (
//           <FeatureItem
//             key={index}
//             {...feature}
//             alignRight={index % 2 !== 0}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurServices;