
import statistics from "../img/statistics.svg"
import consult from '../img/icons8-consultation-100 4.svg';
import feature from '../img/icons8-rfid-signal-100 (1) 1.svg'
import soft from '../img/icons8-ai-100 (2) 5.svg'
import ecommerce from "../img/icons8-bar-chart-100 1.svg"

const reviewData = [
    {
      iconSrc:  <img src={consult} alt="chat" height={70}/>,
      title: "Consulting Services",
      description: "Require a recommender system to boost in-app purchases? Or looking to integrate ChatGPT into your gaming business? Consult with our AI specialists to explore how we can assist you."
    },
    {
      iconSrc: <img src={feature} alt="program" height={70}/>,
      title: "Feature Detection",
      description: "Recognition of separate elements of each character, such as lines, strokes, angles, etc."
    },
    {
      iconSrc: <img src={soft} alt="Feature Analysis" height={70}/>,
      title: "AI Software Development",
      description: "Leverage our AI expertise to develop cutting-edge marketing software solutions perfectly aligned with your firm's requirements."
    },
    {
      iconSrc: <img src={ecommerce} alt="Barcode Scan" height={70}/>,
      title: "E-commerce Data Analytics",
      description: "Harness predictive analytics to monitor churn rate and cart abandonment, leveraging analytical insights to maximize profits from your online store."
    },
  ];
  export default reviewData;