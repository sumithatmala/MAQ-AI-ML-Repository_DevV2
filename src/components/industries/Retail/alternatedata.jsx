import predictive from './icons/predictive-analytics-side.jpg';
import competitive from './icons/compettiveAdv.webp';


const AlternateData = [
  {
    heading: "Boost Profits with AI Predictive Analytics",
    details:
      "",
    points: [
      "Facing inventory challenges? Revolutionize inventory management with predictive analytics solutions</a> in the retail industry. Calculate demand forecasts and optimize goods allocation, purchasing, and restocking across various locations for increased efficiency.",
      "Analyze historical sales data and trends to enhance planning for seasonal events. Leverage artificial intelligence in retail for advanced data analysis and visualization, ensuring you stay ahead of your competitors in the retail landscape.",
    ],
    img: (
      <img
        src={predictive}
        alt="Enhancing Healthcare Delivery with Predictive Analytics"
        width={450}
      />
    ),
  },
  {
    heading: "Elevate Your Competitive Edge with NLP",
    details:"",
    points: [
      "Discover how your brand is perceived by leveraging Natural Language Processing (NLP). Utilize sentiment analysis solutions to collect and analyze customer reviews from social platforms. Gain valuable insights to address issues and highlight your competitive advantages in the retail market.",
      "Tailor your marketing strategies to a specific target audience through client segmentation. Utilize data-driven insights into customer needs and provide personalized experiences to capture your target audience's loyalty and boost profits.",
    ],
    img: (
      <img
        src={competitive}
        alt="OCR Solutions for Healthcare Business Process Optimization"
        width={450}
      />
    ),
  },
  
];

export default AlternateData;
