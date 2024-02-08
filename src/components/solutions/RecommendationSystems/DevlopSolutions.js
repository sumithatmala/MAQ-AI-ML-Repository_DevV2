import React from 'react';
// import gif from  '../VirtualAssistantTool/Tools/bot.gif'; 
import sentiment from './Images/SentimentAna.gif';
import purpose from './Images/purpose.gif';



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

const DevlopSolutions = () => {
  const featuresData = [
    {
      title: 'Dynamic Sentiment Analysis',
      description: [
        'Enhance engagement and reduce bounce rate with personalized content suggestions. This advanced feature automatically selects the most relevant content for each visitor. Suggestions are crafted based on real-time behavior, visitor profiles, and analogous journeys.',
    
        '25% quicker',
        'users can discover their desired content more efficiently',
      ],
      gifSrc: sentiment,
    },
    {
      title: 'Purpose Recognition',
      description: [
        'Boost online revenue and increase average order values with personalized product recommendations. This advanced capability suggests products based on real-time behavior, order history, and similar journeys. Implement it on product and checkout pages to maximize upsells and cross-sells.',
    
        'up to 5 times speedier',
        'users can easily locate their desired products',
       
      ],
      gifSrc: purpose,
    },
    
    
  ];

  return (
    <div>
      <div className="quick-block">
        <div className="head-block-center" >
          <h2 className="headblock">
          We Craft Solutions to Empower Your Business
          </h2>
        </div>
        
      </div>

      <div className="section-text-image type-center __xs-pic-size __w-50 __image-right" style={{paddingTop:"0", marginTop:"0"}}>
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

export default DevlopSolutions;