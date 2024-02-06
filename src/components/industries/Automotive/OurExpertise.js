import React from 'react';
import geometry from './icons/Geometry.jpg';
import dataAnalysis from './icons/dataAnalysis.jpg';
import automatedDefect from './icons/AutomatedDefect.jpg';

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
      title: 'Geometry Optimization for Rapid Design Studies',
      description: [
        'Challenge: Creating a high-performing geometry design is difficult and risky. Simulations are commonly used to assist manufacturers in constructing a robust design. However, they require significant time and computational resources to solve complex load cases.',
        'Solution: Enhance the design of complex geometries using deep learning techniques. Geometry AI solutions for the automotive industry enable safe product design with real-time simulation, reducing costs and engineering effort.',
      ],
      gifSrc: geometry,
    },
    {
      title: 'Data Analysis for Intelligent Design Engineering',
      description: [
        'Challenge: Automotive manufacturers perform complex simulations and numerous design iterations to stay competitive and compliant. These requirements generate a need to process vast information and obtain useful insights in an automated way.',
        'Solution: Process simulation results in an automated way with machine learning systems. An end-to-end data pipeline handles vast amounts of data and produces valuable insights like parameters affecting simulation results.',
      ],
      gifSrc: dataAnalysis,
    },
    {
      title: 'Visual Inspection for Automated Defect Detection',
      description: [
        'Challenge: High-quality standards are essential to achieve the longevity and reliability of vehicles. However, manual inspection is error-prone and expensive, decreasing the accuracy of malfunction analysis.',
        'Solution: Non-destructive visual testing that relies on 3D Geometry-based vision systems, enabling reliable and automated quality inspection. This AI automotive solution improves efficiency at your production sites and ensures traceability with low human intervention.',
      ],
      gifSrc: automatedDefect,
    },
  ];

  return (
    <div >
      <div className="quick-block">
        <div className="head-block-center" style={{ marginBottom: '10px' }}>
          <h2 className="headblock">
          Our Expertise
          </h2>
        </div>
        <div className="text-block-center" style={{ marginBottom: '10px' }}>
        We provide automotive AI services for car manufacturers that leverage 3D computer vision to make data-driven decisions at each manufacturing stage.
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
