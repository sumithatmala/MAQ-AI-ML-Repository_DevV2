import icon_finance_banking_alt from '../img/icons8-technology-100 2.svg'
import sportWell from '../img/icons8-ping-pong-100 1.svg';
import icon_car from '../img/icons8-trolley-100 3.svg'
import icon_manufacturing from '../img/icons8-manufacturing-100 2.svg'
import icon_agriculture from '../img/icons8-agriculture-100 1.svg'
import icon_healtcare from '../img/icons8-pharma-100 2.svg'
import icon_ecommerce_alt from '../img/icons8-retail-100 3.svg'

const IndustriesData = [
  {
    title: "Fintech",
    figure: <img src={icon_finance_banking_alt} alt="finance banking" />,
    alt: "finance banking",
    description: "Transaction fraud detection, Credit risk assessment, Personalized financial recommendations"
  },
  {
    title: "Sport & Wellness",
    figure: <img src={sportWell} alt="sport and wellness"/>, // change this
    alt: "sport - wellness",
    description: "Empowering Individuals, Optimizing Well-being"
  },
  {
    title: "Logistics",
    figure: <img src={icon_car} alt="logistics" />,
    alt: "logistics",
    description: "Delivery route optimization, Fleet management, Inventory tracking"
  },
  {
    title: "Manufacturing",
    figure: <img src={icon_manufacturing} alt="manufacturing" />,
    alt: "manufacturing",
    description: "Supply chain optimization, Quality control, Production forecasting"
  },
  {
    title: "Agriculture",
    figure: <img src={icon_agriculture} alt="agriculture" />,
    alt: "agriculture",
    description: "Crop yield analysis, Weather pattern prediction, Soil health monitoring"
  },
  {
    title: "Healthcare",
    figure: <img src={icon_healtcare} alt="healthcare" />,
    alt: "healthcare",
    description: "Medicaments stockout prevention, Hospital workforce load prediction, EHR analytics"
  },
  {
    title: "Retail",
    figure: <img src={icon_ecommerce_alt} alt="ecommerce" />,
    alt: "ecommerce",
    description: "Customer analysis, Churn prediction, Demand forecasting"
  }
];


export default IndustriesData;