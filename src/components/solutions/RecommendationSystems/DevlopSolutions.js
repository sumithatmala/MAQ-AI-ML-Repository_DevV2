import React from 'react';
import sentiment from './Images/SentimentAna.gif';
import purpose from './Images/purpose.gif';

const DevlopSolutions = [
    {
      heading: 'Dynamic Sentiment Analysis',
      points: [
        'Enhance engagement and reduce bounce rate with personalized content suggestions. This advanced feature automatically selects the most relevant content for each visitor. Suggestions are crafted based on real-time behavior, visitor profiles, and analogous journeys.',
        '25% quicker',
        'Users can discover their desired content more efficiently',
      ],
      img: (
        <img src={sentiment} width={400} height={250} alt='sentiment'/>
      ),
    },
    {
      heading: 'Purpose Recognition',
      points: [
        'Boost online revenue and increase average order values with personalized product recommendations. This advanced capability suggests products based on real-time behavior, order history, and similar journeys. Implement it on product and checkout pages to maximize upsells and cross-sells.',
        'Up to 5 times speedier',
        'Users can easily locate their desired products',
      ],
      img: (
        <img src={purpose} width={400} height={250} alt='purpose'/>
      ),
    }, 
  ];

export default DevlopSolutions;