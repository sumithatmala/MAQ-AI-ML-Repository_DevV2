import dataAnalysis from './icons/icon-data-analysis-2.svg';
import idea from './icons/icon-idea.svg';
import structured from './icons/icon-structured-data.svg';

const IndustryItem = ({ iconSrc, altText, title, description }) => (
  <div className="industries__list-item">
    <div className="industries__item">
      <div className="industries__item-icon">
        <img src={iconSrc} alt={altText} />
      </div>
      <h3 className="industries__item-title">{title}</h3>
      <div className="industries__item-text">{description}</div>
    </div>
  </div>
);

const IndustriesList = () => {
  const industriesData = [
    {
      iconSrc: structured,
      altText: 'Aggregate',
      title: 'Aggregate',
      description: 'Cast your nets wide when analyzing consumer behavior. Collect sentiments across sources and consolidate sentiment data into a unified view.',
    },
    {
      iconSrc: dataAnalysis,
      altText: 'Analyze',
      title: 'Analyze',
      description: 'Add smart algorithms to check the vibe of emerging trends. Track crucial behavior shifts and hidden opportunities in sentiments.',
    },
    {
        iconSrc: idea,
        altText: 'Activate',
        title: 'Activate',
        description: 'Communicate insights through interactive dashboards, act on your data, and make informed decisions about the trends to pursue.',
      },
      
      
      
  ];

  return (
    <div className="industries__list">
      {industriesData.map((industry, index) => (
        <IndustryItem key={index} {...industry} />
      ))}
    </div>
  );
};

export default IndustriesList;
