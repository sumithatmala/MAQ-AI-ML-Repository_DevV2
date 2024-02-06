import React from 'react';

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

const LeftRight = ({items, title, subtitle}) => {
  

  return (
    <div>
      <div className="quick-block">
        <div className="head-block-center" style={{ marginBottom: '10px' }}>
          <h2 className="headblock">
            {title}
          </h2>
        </div>
        <div className="text-block-center" style={{ marginBottom: '10px' }}>
          {subtitle}
        </div>
      </div>

      <div className="section-text-image type-center __xs-pic-size __w-50 __image-right">
        {items.map((feature, index) => (
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

export default LeftRight;