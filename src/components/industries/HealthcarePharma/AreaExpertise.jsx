import delivery from './icons/Rectangle 1010.svg';
import ocr from './icons/Rectangle 102.svg'
import personal from './icons/Rectangle 103.svg';

const AreaExpertise = [
  {
    heading: "Enhancing Healthcare Delivery with Predictive Analytics",
    details:
      "Utilize predictive analytics and machine learning to address unique patient needs and enhance healthcare delivery. Streamline diagnostics and automate anomaly detection in patient data. Analyze results to improve treatment plans and manage medicine risks. Proactively prevent chronic diseases and predict disorders like diabetes or heart disease. Identify high-risk patients and implement personalized treatment plans to reduce hospitalization risk.",
    points: [
      "Automated detection of anomalies in patient clinical data",
      "Fine-tune treatment plans based on analysis results",
      "Predict and prevent chronic diseases",
      "Identify high-risk patients and foresee future outcomes",
      "Implement personalized predictions and treatment plans",
    ],
    img: (
      <img
        src={delivery}
        alt="Enhancing Healthcare Delivery with Predictive Analytics"
        height={450}
        width={350}
      />
    ),
  },
  {
    heading: "OCR Solutions for Healthcare Business Process Optimization",
    details:
      "Facilitate the transition from paper to digital in healthcare with our OCR solutions. Digitize various documents like patient records, prescriptions, claims, and reports. Enable automatic data entry and seamless data transfer. Deploy tailored OCR software to save time and money. Develop an AI pharma EHR for clinical predictions and analytics. Manage workload and resources efficiently with medication demand forecasting. Improve patient outcomes with AI in pharmacy.",
    points: [
      "Smooth transition from paper to digital with custom OCR solutions",
      "Digitize various healthcare documents, including records, prescriptions, claims, reports, and invoices",
      "Enable automatic data entry and seamless health data transfer between organizations",
      "Deploy tailored OCR software for laborious tasks, saving time and money",
      "Develop AI pharma EHR for clinical predictions and analytics",
    ],
    img: (
      <img
        src={ocr}
        alt="OCR Solutions for Healthcare Business Process Optimization"
        height={450}
        width={350}
      />
    ),
  },
  {
    heading: "NLP for Personalized Healthcare",
    details:
      "Analyze medical documents to predict conditions. Utilize NLP to extract data from clinical documents for intelligent diagnostics. Understand your clients better with NLP API software. Identify your target audience characteristics such as age, gender, and interests for effective marketing. Analyze social media comments about customer experiences to gauge their satisfaction with your services. Categorize comments into people, places, and services to assess customer satisfaction and identify areas for improvement. Utilize the insights to enhance the overall quality of services and care.",
    points: [
      "Analyze medical documents for predicting conditions",
      "Use NLP to extract data from clinical documents for intelligent diagnostics",
      "Understand clients better with NLP API software",
      "Identify target audience characteristics (age, gender, interests) for effective marketing",
      "Use insights to improve the overall quality of services and care",
    ],
    img: (
      <img
        src={personal}
        alt="NLP for Personalized Healthcare"
        height={450}
        width={350}
      />
    ),
  },
];

export default AreaExpertise;
