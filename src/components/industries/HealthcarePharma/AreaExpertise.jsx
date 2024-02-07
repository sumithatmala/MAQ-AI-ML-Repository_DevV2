import delivery from './icons/HealthCare.jpeg';
import ocr from './icons/OCR.jpg'
import personal from './icons/PersonalCare.webp';

const AreaExpertise = [
  {
    heading: "Enhancing Healthcare Delivery with Predictive Analytics",
    details:
      "Address unique patients’ needs and elevate healthcare delivery through exceptional predictive analytics solutions. Streamline diagnostics with big data analysis and machine learning. Leverage our ML-based predictive models for automated anomaly detection in patient clinical data. Analyze the results to fine-tune treatment plans and navigate medicine risks such as adverse reactions and medication side effects. Proactively prevent chronic diseases and enhance patient outcomes. By analyzing patient-generated data, predict disorders like diabetes or heart disease. Utilize predictive analytics tools to identify high-risk patients and foresee their future outcomes. Implement personalized predictions and treatment plans, reducing the risk of hospitalization.",
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
      />
    ),
  },
  {
    heading: "OCR Solutions for Healthcare Business Process Optimization",
    details:
      "Streamline the transition from paper to digital with our customized OCR solutions. Optimize healthcare business processes through data capture, retrieval, and extraction. With OCR solutions, easily digitize various healthcare documents, including patients’ records, prescriptions, claims, reports, and invoices. Enable automatic data entry and seamless health data transfer between organizations. Deploy tailored OCR software in your hospital to tackle laborious tasks, saving time and money. Develop an AI pharma EHR for efficient clinical predictions and analytics. Facilitate smart workload forecasting and resource management, including medication demand. Gain insights to promote better patient outcomes with artificial intelligence in pharmacy.",
    points: [
      "Smooth transition from paper to digital with custom OCR solutions",
      "Digitize various healthcare documents, including records, prescriptions, claims, reports, and invoices",
      "Enable automatic data entry and seamless health data transfer between organizations",
      "Deploy tailored OCR software for laborious tasks, saving time and money",
      "Develop AI pharma EHR for clinical predictions and analytics",
      "Smart workload forecasting and resource management in healthcare",
      "Gain insights for better patient outcomes with AI in pharmacy",
    ],
    img: (
      <img
        src={ocr}
        alt="OCR Solutions for Healthcare Business Process Optimization"
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
      "Analyze social media comments for customer feedback on services",
      "Categorize comments into people, places, and services to assess customer satisfaction",
      "Use insights to improve the overall quality of services and care",
    ],
    img: (
      <img
        src={personal}
        alt="NLP for Personalized Healthcare"
      />
    ),
  },
];

export default AreaExpertise;
