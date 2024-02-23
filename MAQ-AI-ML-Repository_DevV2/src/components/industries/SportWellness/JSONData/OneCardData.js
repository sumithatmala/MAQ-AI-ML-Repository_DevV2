import cv_personnel_authentication from "../img/cv-personnel-authentication.jpg"
import cv_dealing_documents from "../img/cv-dealing-documents.jpg"
import cv_customer_experience from "../img/cv-customer-experience.jpg"

const OneCardData = [
  {
    title: "Enhanced Venue Security with Computer Vision",
    image: <img src={cv_personnel_authentication} alt="cv_personnel_authentication" />,
    description: [
      "Utilize computer vision to monitor staff movements at sports venues with precision.",
      "Implement facial recognition technology for real-time staff tracking, enabling efficient access control to restricted areas like training facilities and locker rooms while ensuring privacy for high-profile athletes.",
    ],
  },
  
  {
    title: "Efficient Document Management with Computer Vision",
    image: <img src={cv_dealing_documents} alt="PA_Fraud_Prevention" />,
    description: [
      "Simplify document handling tasks by leveraging computer vision capabilities.",
      "Automate data capture, retrieval, and extraction processes to streamline team management documentation, saving time and resources with OCR solutions.",
    ],
  },
  {
    title: "Personalized VIP Experiences Using Computer Vision",
    image: <img src={cv_customer_experience} alt="pa_price_analysis" />,
    description: [
      "Enhance VIP guest experiences with personalized services facilitated by cutting-edge face recognition technology. Effortlessly identify and greet guests by name, providing bespoke services to elevate their security and satisfaction within VIP zones.",
    ],
  },
];

export default OneCardData;
