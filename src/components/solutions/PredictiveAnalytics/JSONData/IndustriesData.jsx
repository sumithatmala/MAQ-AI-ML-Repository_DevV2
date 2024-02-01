import icon_ecommerce_alt from '../img/icon-ecommerce-alt.svg'
import icon_healtcare from '../img/icon-healtcare.svg'
import icon_agriculture from '../img/icon-agriculture.svg'
import icon_manufacturing from '../img/icon-manufacturing.svg'
import icon_car from '../img/icon-car.svg'
import icon_finance_banking_alt from '../img/icon-finance-banking-alt.svg'

const IndustriesData = [
  {
    title: "Fintech",
    figure: <img src={icon_finance_banking_alt} alt="finance banking" />,
    alt: "finance banking",
    description: "Transaction fraud detection, Credit risk assessment, Personalized financial recommendations"
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