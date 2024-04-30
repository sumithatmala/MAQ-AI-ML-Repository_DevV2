import React from 'react';
// import geometry from './icons/Geometry.jpg';
// import dataAnalysis from './icons/dataAnalysis.jpg';
// import automatedDefect from './icons/AutomatedDefect.jpg';
import geometry from './icons/Rectangle 71.svg';
import dataAnalysis from './icons/Rectangle 72.svg';
import automatedDefect from './icons/Rectangle 73.svg';

const OurExpertise =  [
    {
      heading: 'Geometry Optimization for Rapid Design Studies',
      points: [
        'Challenge: Creating a high-performing geometry design is difficult and risky. Simulations are commonly used to assist manufacturers in constructing a robust design. However, they require significant time and computational resources to solve complex load cases.',
        'Solution: Enhance the design of complex geometries using deep learning techniques. Geometry AI solutions for the automotive industry enable safe product design with real-time simulation, reducing costs and engineering effort.',
      ],
      img: (
        <img src={geometry} alt="" width={400} />
      ),
    },
    {
      heading: 'Data Analysis for Intelligent Design Engineering',
      points: [
        'Challenge: Automotive manufacturers perform complex simulations and numerous design iterations to stay competitive and compliant. These requirements generate a need to process vast information and obtain useful insights in an automated way.',
        'Solution: Process simulation results in an automated way with machine learning systems. An end-to-end data pipeline handles vast amounts of data and produces valuable insights like parameters affecting simulation results.',
      ],
      img: (
        <img src={dataAnalysis} alt="" width={400} />
      ),
    },
    {
      heading: 'Visual Inspection for Automated Defect Detection',
      points: [
        'Challenge: High-quality standards are essential to achieve the longevity and reliability of vehicles. However, manual inspection is error-prone and expensive, decreasing the accuracy of malfunction analysis.',
        'Solution: Non-destructive visual testing that relies on 3D Geometry-based vision systems, enabling reliable and automated quality inspection. This AI automotive solution improves efficiency at your production sites and ensures traceability with low human intervention.',
      ],
      img: (
        <img src={automatedDefect} alt="" width={400} />
      ),
    },
    
  ];

export default OurExpertise;
