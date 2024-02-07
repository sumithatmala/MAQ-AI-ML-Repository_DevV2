import pose from './icons/poseEstimation.jpg'
import peroid from './icons/periodPrediction.jpg';
import baby from './icons/BabyCare.png';

const PharmaCustData = [
    {
        title: "Pose Estimation for Fitness and Therapy",
        image: <img src={pose} />,
        description: [
          "Improved pose estimation and error detection by 64",
          "The client is US-based. They specialize in human activity recognition and motion analysis. They asked InData Labs to develop custom pose estimation models for real-time human pose detection during physical therapy and fitness.",
          "As a result, we built proprietary pose estimation and error detection algorithms to level up the client’s app. The algorithms detect human position and provide feedback on how to correct the moves."
        ],
      },
      {
        title: "ML to Improve Period Accuracy Prediction",
        image: <img src={peroid} />, 
        description: [
          "Increased period prediction accuracy up to 15%.",
          "The client is a media and entertainment company located in Japan. The client needed to advance the overall period prediction accuracy without impacting the app performance.",
          "The benefits from cooperation with MAQ Software include:",
          "- Prediction accuracy increased up to 15%",
          "- App allows predicting irregular periods",
          "- Tips on implementing ovulation prediction into the app",
        ],
      },
      {
        title: "BI Implementation for Baby Care Mobile App",
        image: <img src={baby} />, 
        description: [
          "Elimination of data bottlenecks.",
          "The client is a US company developing an iOS and Android mobile app related to baby care. The client was looking for a reliable vendor with expertise in data analysis and BI. The client needed to implement data analysis and structure the existing data assets.",
          "During the project, we were analyzing and collecting the data. We built dashboards for users and came up with a solution on how to streamline reports. As a result, the overall user experience has increased, as well as the content relevance.",
        ],
      },
]

export default PharmaCustData;