import dataAnalysis from './icons/icon-data-analysis-2.svg';
import idea from './icons/icon-idea.svg';
import structured from './icons/icon-structured-data.svg';

const IndustryItem = ({ iconSrc, altText, title, description }) => (
  <div className="industries__list-items">
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
      description: 'Broaden your analysis of consumer behavior. Gather sentiments from various sources and consolidate the data into a unified view.',
    },
    {
      iconSrc: dataAnalysis,
      altText: 'Analyze',
      title: 'Analyze',
      description: 'Incorporate intelligent algorithms to gauge the vibe of emerging trends. Monitor crucial shifts in behavior and uncover hidden opportunities within sentiments.',
    },
    {
      iconSrc: idea,
      altText: 'Activate',
      title: 'Activate',
      description: 'Convey insights through interactive dashboards, take action based on your data, and make informed decisions regarding the trends to pursue.',
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
