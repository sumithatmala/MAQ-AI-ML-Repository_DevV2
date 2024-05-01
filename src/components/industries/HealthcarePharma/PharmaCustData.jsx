// import pose from "./icons/poseEstimation.jpg";
// import peroid from "./icons/periodPrediction.jpg";
// import baby from "./icons/BabyCare.png";

import pose from "./icons/Rectangle 104.svg";
import peroid from "./icons/Rectangle 105.svg";
import baby from "./icons/Rectangle 106.svg";

const PharmaCustData = [
  {
    title: "Pose Estimation for Fitness and Therapy",
    image: <img src={pose} alt="Pose Estimation"/>,
    description: [
      "Enhanced pose estimation and error detection by 64%",
      "The client, specialized in human activity recognition and motion analysis, approached MAQ Software to develop custom pose estimation models for real-time human pose detection during physical therapy and fitness.",
      "MAQ Software developed proprietary algorithms for the client's app, enabling real-time detection of human position and providing feedback for movement correction.",
    ],
  },
  {
    title: "ML to Enhance Period Accuracy Prediction",
    image: <img src={peroid} alt="Enhanced Period Prediction"/>,
    description: [
      "Improved period prediction accuracy by up to 15%. The Japanese media client wanted to improve period prediction accuracy without affecting app performance.",
      "Benefits from cooperation with MAQ Software include:",
      "-Increased prediction accuracy by up to 15%",
      "-App now predicts irregular periods",
      "-Tips on implementing ovulation prediction into the app",
    ],
  },
  {
    title: "BI Implementation for Baby Care Mobile App",
    image: <img src={baby} alt="Bay care app"/>,
    description: [
      "Elimination of data bottlenecks.",
      "The client, a U.S. company developing a baby care-related iOS and Android mobile app, sought a vendor with expertise in data analysis and BI to implement data analysis and structure existing data assets.",
      "Throughout the project, MAQ Software analyzed and collected data, built user-friendly dashboards, and streamlined reports, resulting in an improved user experience and increased content relevance.",
    ],
  },
];

export default PharmaCustData;
