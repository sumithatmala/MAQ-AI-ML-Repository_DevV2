import one from './icons/icons8-consultation-100 6.svg';
import two from './icons/icons8-health-100 (1) 2.svg';
import three from './icons/icons8-bar-chart-100 2.svg';
import four from './icons/icons8-faq-64 1.svg';

const ServiceProvide = [
  {
    label: "Consulting",
    disc: "Facing a business challenge? Utilize our consulting services, robust tech expertise, and extensive experience in the healthcare IT solutions market.",
    img: <img src={one} alt="" width={100}></img>,
  },
  {
    label: "Healthcare IT Solution Development",
    disc: "Unsatisfied with off-the-shelf healthcare software? Let our tech team craft web or mobile solutions tailored to your specific requirements.",
    img: <img src={two} alt="" width={100}></img>,
  },
  {
    label: "Healthcare Analytics and Business Intelligence",
    disc: "Seeking insights into clinical care, administration, and costs? Leverage analytics and BI tools to track KPIs and refine your strategies.",
    img: <img src={three} alt="" width={100}></img>,
  },
  {
    label: "Testing and QA",
    disc: "Whether it's document processing systems, AI apps for mental health, or physical therapy – we'll ensure your healthcare IT solution operates seamlessly.",
    img: <img src={four} alt="" width={100}></img>,
  },
];

export default ServiceProvide;
