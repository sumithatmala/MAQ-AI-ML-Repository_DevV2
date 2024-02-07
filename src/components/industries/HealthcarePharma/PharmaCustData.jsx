import pose from "./icons/poseEstimation.jpg";
import peroid from "./icons/periodPrediction.jpg";
import baby from "./icons/BabyCare.png";

const PharmaCustData = [
  {
    title: "Pose Estimation for Fitness and Therapy",
    image: <img src={pose} />,
    description: [
      "Enhanced pose estimation and error detection by 64%",
      "The client, based in the United States, specializes in human activity recognition and motion analysis. They approached InData Labs to develop custom pose estimation models for real-time human pose detection during physical therapy and fitness.",
      "As a result, we created proprietary pose estimation and error detection algorithms to enhance the client’s app. These algorithms detect human position and provide feedback on how to correct movements.",
    ],
  },
  {
    title: "ML to Enhance Period Accuracy Prediction",
    image: <img src={peroid} />,
    description: [
      "Improved period prediction accuracy by up to 15%.",
      "The client, a media and entertainment company located in Japan, aimed to advance overall period prediction accuracy without impacting app performance.",
      "Benefits from cooperation with MAQ Software include:",
      "- Increased prediction accuracy by up to 15%",
      "- App now predicts irregular periods",
      "- Tips on implementing ovulation prediction into the app",
    ],
  },
  {
    title: "BI Implementation for Baby Care Mobile App",
    image: <img src={baby} />,
    description: [
      "Elimination of data bottlenecks.",
      "The client, a U.S. company developing an iOS and Android mobile app related to baby care, sought a reliable vendor with expertise in data analysis and BI. The client needed to implement data analysis and structure existing data assets.",
      "Throughout the project, we analyzed and collected data, built dashboards for users, and devised a solution to streamline reports. The overall user experience and content relevance increased as a result.",
    ],
  },
];

export default PharmaCustData;
