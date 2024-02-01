import React from 'react';
import gif from  './Tools/bot.gif'; 

const FeatureItem = ({ title, description, gifSrc }) => (
  <div className="section-text-image-inner">
    <div className="setion-text-image__details">
      <h3 className="section-text-image__title">{title}</h3>
      <div className="section-text-image__description">
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

const KeyFeaturesSection = () => {
  const featuresData = [
    {
      title: '24/7 Personalized Customer Assistance',
      description: [
        'Addressing common queries about the company’s services and products tailored to the specific client’s request',
        'Round-the-clock availability during festive seasons and busy times',
        'Personalized human-like responses',
        'Immediate comprehensive response to the query based on the company’s proprietary knowledge base',
        'Virtual assistant tool for multilingual support',
        'Recommendations concerning the topic generated by ML',
      ],
      gifSrc: gif,
    },
    {
      title: 'Automated Support for Sales Teams',
      description: [
        'Automated Q&A with customers to free up your human agents for more intelligent and urgent tasks',
        'Effective appointment scheduling across time zones',
        'Fast data transfer to the sales team (conversation history and context)',
        'Automatic email notifications to the sales team and customer',
      ],
      gifSrc: gif,
    },
    {
      title: 'Streamlined Appointment Scheduling',
      description: [
        'Efficient handling of back-and-forth communication',
        'Scheduling tasks across time zones',
        'Calendar integration',
      ],
      gifSrc: gif,
    },
    {
      title: 'Seamless Integration with CRM',
      description: [
        'Automated data extraction and summarization from conversations',
        'Prompt creation of CRM records as required',
        'Enhanced data precision',
      ],
      gifSrc: gif,
    },
    {
      title: 'Text and Voice Recognition Capabilities',
      description: [
        'The ability to audio communicate your needs to a chatbot',
        'Fluid and natural customer experience',
      ],
      gifSrc: gif,
    },
  ];

  return (
    <div>
      <div className="quick-block">
        <div className="head-block-center" style={{ marginBottom: '10px' }}>
          <h2 className="headblock">
            AI-Powered Virtual Assistant: Key Features
          </h2>
        </div>
        <div className="text-block-center" style={{ marginBottom: '10px' }}>
          Revolutionize customer support and enhance productivity with your
          virtual assistant solution.
        </div>
      </div>

      <div className="section-text-image type-center __xs-pic-size __w-50 __image-right">
        {featuresData.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className="section-text-image"
              style={{ flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row' }}
            >
              <FeatureItem {...feature} />
            </div>
            {index % 2 !== 0 && <div className="clear" />} {/* Add a clear div after each pair */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
