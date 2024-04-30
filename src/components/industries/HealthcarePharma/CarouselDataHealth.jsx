import medical from "./icons/Rectangle 100.svg";
import therapy from "./icons/Rectangle 101.svg";
import auth from "./icons/authentication.jpeg";
import cust from "./icons/Rectangle 99.svg";

const OCDataHealth = [
  {
    title: "Computer Vision for Medical Imaging Analysis",
    image: <img src={medical} alt="Medical Imaging Analysis" style={{maxHeight:"200px"}} />,
    backimage: medical,
    description: [
      "Utilize Machine Learning for disease detection and identification in medical image analysis. Gain valuable data insights for timely anomaly detection and early intervention based on clinical imaging. Streamline the workflow of radiologists and achieve improved patient outcomes.",
    ],
  },
  {
    title: "Computer Vision for Transformation in Physical Therapy",
    image: <img src={therapy} alt="Physical Therapy Transformation" style={{maxHeight:"200px"}} />,
    description: [
      "Revolutionize physical therapy with AI health solutions, including pose estimation. Integrate pose estimation models into your app to track, estimate, and provide real-time therapeutic feedback on patient joints and posture. Offer guidance on exercises and motivation to continue. Monitor patient progress to navigate treatment protocols.",
    ],
  },
  {
    title: "Computer Vision for Authentication Processes",
    image: <img src={auth} alt="Computer Vision Authentication Processes" style={{maxHeight:"200px"}} />,
    description: [
      "Meet the growing demand for various personnel authentication tools and technologies in both online and physical systems.",
      "Utilize our robust computer vision algorithms to collect and store facial data. Employ the data for personnel verification and to control access to specific areas.",
    ],
  },
  {
    title: "Computer Vision for Enhancing Customer Services",
    image: <img src={cust} alt="Computer Vision Customer Services Enhancement" style={{maxHeight:"200px"}} />,
    description: [
      "Looking to improve your hospital's marketing without being salesy? Impress patients with the Face Recognition Greeting Tool. Recognize and greet patients by name as soon as they enter the hospital.",
      "By integrating our tool into your infrastructure, you'll provide excellent customer service, boosting patient retention and referrals effortlessly.",
    ],
  },
];

export default OCDataHealth;
