import React from 'react';
import gif from  './icons/testOurExpertise.jpg'; 

const FeatureItem = ({ title, description, gifSrc, alignRight }) => (
  <div className="section-text-image-inner" style={{ flexDirection: alignRight ? 'row-reverse' : 'row', maxWidth:"1200px" }}>
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

const OurExpertise = () => {
  const featuresData = [
    {
      title: 'Geometry Optimisation for Quick Design Studies',
      description: [
        'Problem: Creating a high-performant geometry design is challenging and risk-prone. Simulations are widely used to aid manufacturers in building a robust design. Yet, they require much time and computational resources to solve complex load cases.',
        'Solution: Amplify design of complex geometries with deep learning techniques. Geometry AI solutions for the automotive industry allow for a safe product design with real-time simulation while reducing costs and engineering effort.',
      ],
      gifSrc: gif,
    },
    {
      title: 'Data Analysis for Smart Design Engineering',
      description: [
        'Problem: Automotive manufacturers perform complex simulations and numerous design iterations to stay competitive and compliant. These requirements generate a need to process huge information and get useful insights in an automated way.',
        'Solution: Process the simulation results in an automated way with machine learning systems. An end-to-end data pipeline handles vast amounts of data and produces valuable insights like parameters affecting simulation results.',
      ],
      gifSrc: gif,
    },
    {
      title: 'Visual Inspection for Automated Defect Detection',
      description: [
        'Problem: High-quality standards are essential to achieve the longevity and reliability of vehicles. However, manual inspection is error-prone and expensive, thus decreasing the accuracy of malfunction analysis.',
        'Solution: Non-destructive visual testing that relies on 3D Geometry-based vision systems, enabling reliable and automated quality inspection. This AI automotive solution improves efficiency at your production sites and ensures traceability with low human intervention.',
      ],
      gifSrc: gif,
    },
  ];

  return (
    <div >
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

export default OurExpertise;