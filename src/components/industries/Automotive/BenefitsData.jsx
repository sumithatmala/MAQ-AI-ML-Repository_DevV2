import dataIcon from './icons/icons8-activity-history-100 1.svg';
import upIcon from './icons/icons8-deployment-100 1.svg';
import downIcon from './icons/icons8-money-bag-100 1.svg';
import penIcon from './icons/icons8-design-100 1.svg';
import likeIcon from './icons/icons8-quality-100 (1) 1.svg';
import tickIcon from './icons/icons8-safety-100 1.svg';

const BenefitsData = [
  {
    title: "Efficient Data-driven Processes",
    figure: <img src={dataIcon} alt="data engineering and architecture" />,
    alt: "data engineering and architecture",
    // description: "Enhance data-driven production processes for improved efficiency."
  },
  {
    title: "Enhanced Manufacturing Output",
    figure: <img src={upIcon} alt="logistics" />,
    alt: "logistics",
    // description: "Optimize manufacturing yield through advanced visualization techniques."
  },
  {
    title: "Cost-effective Operations",
    figure: <img src={downIcon} alt="Reduced Costs" />,
    alt: "Reduced Costs",
    // description: "Drive down operational costs for a more cost-effective manufacturing approach."
  },
  {
    title: "Innovative Simulation Design",
    figure: <img src={penIcon} alt="design" />,
    alt: "design",
    // description: "Incorporate advanced simulation design for a more innovative manufacturing process."
  },
  {
    title: "Proactive Quality Management",
    figure: <img src={likeIcon} alt="Recommender systems" />,
    alt: "Recommender systems",
    // description: "Proactively manage quality issues with AI-driven recommender systems."
  },
  {
    title: "Safety-focused Operations",
    figure: <img src={tickIcon} alt="Improved Productivity" />,
    alt: "Improved Productivity",
    // description: "Create a safer operational environment through improved productivity measures."
  }
];

export default BenefitsData;
