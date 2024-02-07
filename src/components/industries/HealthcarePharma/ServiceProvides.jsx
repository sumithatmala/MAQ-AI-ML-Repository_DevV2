import one from './icons/qanda.svg';
import two from './icons/icon-healthcare-it.svg';
import three from './icons/find.svg';
import four from './icons/gear.svg';

const ServiceProvide = [
  {
    label: "Consulting",
    disc: "Have a business problem? Use our consulting services, strong tech expertise, and experience in the healthcare IT solutions market.",
    img: <img src={one} alt="" width={100}></img>,
  },
  {
    label: "Healthcare IT Solution Development",
    disc: "Not satisfied with packaged healthcare software available on the market? Let our tech team build web or mobile solutions specifically for your needs.",
    img: <img src={two} alt="" width={100}></img>,
  },
  {
    label: "Healthcare Analytics and Business Intelligence",
    disc: "Want to get insights into clinical care, administration and costs? Make use of analytics and BI tools to track KPIs and readjust your strategies.",
    img: <img src={three} alt="" width={100}></img>,
  },
  {
    label: "Testing and QA",
    disc: "Document processing systems, AI apps for mental health or physical therapy – we’ll make sure your healthcare IT solution runs smoothly.",
    img: <img src={four} alt="" width={100}></img>,
  },
];

export default ServiceProvide;
