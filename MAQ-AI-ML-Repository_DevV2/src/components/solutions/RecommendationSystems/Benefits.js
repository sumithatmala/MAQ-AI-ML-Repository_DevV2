import React from 'react';
import './css/Benefits.css';
import clock from './Images/real-time.svg';
import person from './Images/personalization.svg';
import monitor from './Images/monitor.svg';

const Benefits = () => (
  <div className="bi-benefits__inner __bi-impl__inner">
    <h2 className="bi-benefits__title __bi-impl__title">Benefits of Bespoke Recommendation Systems</h2>
    <ul className="bi-benefits__list" style={{display:"flex"}}>
      {[
        {
          src: clock,
          alt: 'Personalized Real-time Suggestions',
        },
        {
          src: person,
          alt: 'Diverse Personalization Strategies Aligned with Your Business Objectives',
        },
        {
          src: monitor,
          alt: 'Tailored for Your Project Requirements',
        },
        
      ].map(({ src, alt }, index) => (
        <li key={index} className="bi-benefits__item">
          <div className="bi-benefits__item_figure">
            <img src={src} className="attachment-full size-full" alt={alt} decoding="async" />
          </div>
          <div className="bi-benefits__item_descr">{alt}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Benefits;
