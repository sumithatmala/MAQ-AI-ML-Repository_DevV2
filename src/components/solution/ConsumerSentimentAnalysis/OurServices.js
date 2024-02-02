import React from 'react';
import gif from  '../VirtualAssistantTool/Tools/bot.gif'; 

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
    'Achieve an end-to-end view into your consumer preferences with our dynamic emotion tracking solutions.',
    'Detect consumer mood changes, prevent churns, and be the leader of proactive customer service.',
    'Emotion AI model development',
    'Social media listening tools',
    'Smart customer service solutions',
    'ChatGPT conversational solutions',
  ],
      gifSrc: gif,
    },
    {
      title: 'Intent Classification',
  description: [
    'Know exactly what your customers are up to with our user intent analytics solutions.',
    'Track and classify queries, comments, emails, and other data to reduce the time and costs of customer service.',
    'Custom intent classifier development',
    'Sales and marketing campaign analysis',
    'Conversational AI applications',
  ],
      gifSrc: gif,
    },
    {
      title: 'Text Mining and Information Extraction',
  description: [
    'Gain knowledge from unstructured content and extract valuable information from all kinds of data.',
    'Make the most out of your emails, scripts, documents, and conversations – with less effort and quicker turnarounds.',
    'Voice-of-the-customer solutions',
    'Document analysis (CMS, RPA, ERP, and others)',
    'Text analytics for call centers',
  ],
      gifSrc: gif,
    },
    {
      title: 'Full-Cycle NLP Software Development',
      description: [
        'Transform your business requirements into full-fledged smart solutions based on Natural Language Processing.',
        'Uncover insights buried in your data and transform opportunities into great products.',
        'Topic modeling solutions',
        'Text categorization',
        'User feedback analysis',
      ],
      gifSrc: gif,
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
        Our company offers a full range of NLP-based services to address the unique needs of your data.
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