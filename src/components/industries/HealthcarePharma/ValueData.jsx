import health from '../../solutions/ConsumerSentimentAnalysis/icons/bi-health.svg';
import check from './icons/checkkup.svg';
import lock from './icons/lock.svg';
import connect from './icons/connection.svg';
import deal from './icons/handshake.svg';
import gear from './icons/setting.svg';

const ValueData = [
    {
      iconSrc: <img src={check} />,
      altText: "Diagnosis Made Easy",
      title: "Diagnosis Made Easy",
      description: "A helping hand to analyze large volumes of medical data."
    },
    {
      iconSrc: <img src={health} alt="Care About" />,
      altText: "Enhanced Patient Care",
      title: "Enhanced Patient Care",
      description: "Patient-centric care and better patient outcomes."
    },
    {
      iconSrc: <img src={lock} />,
      altText: "Data Privacy",
      title: "Data Privacy",
      description: "Your data is safe with you. You process it locally."
    },
    {
      iconSrc: <img src={connect} alt="Solutions" />,
      altText: "Simple-to-Use Solutions",
      title: "Simple-to-Use Solutions",
      description: "Quick to adapt, easy to use for non-tech audiences."
    },
    {
      iconSrc: <img src={deal} alt="Business Process Automation" />,
      altText: "Business Process Automation",
      title: "Business Process Automation",
      description: "Higher level of operational efficiency and reduced human error in the workplace."
    },
    {
      iconSrc: <img src={gear} alt="Custom Solutions" />,
      altText: "Custom Solutions for Your Needs",
      title: "Custom Solutions for Your Needs",
      description: "Haven’t found the right fit? Need a healthcare IT solution tailored to your specific needs?",
      link: '<a href="#section-contacts" class="industries__item-link reports-list__action"><span>Let’s Talk</span></a>'
    },
  ];
  
  export default ValueData;
  