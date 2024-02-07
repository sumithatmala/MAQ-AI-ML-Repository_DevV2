import eye from "./icons/eyeTrack.jpg";
import face from "./icons/FacialEmotion.jpg";
import pose from "./icons/PoseEstimation.webp";

const OneCardDataAI = [
  {
    title: "AI-Powered Eye Tracking for Enhanced Gaming Experience",
    image: (
      <img src={eye} alt="AI-Based Eye Tracking to Enhance Gaming Experience" />
    ),
    description: [
      "Looking to elevate your PC gaming experience? Explore tailored eye recognition and tracking software. Enhance gameplay by controlling the in-game camera with your gaze, providing players with freedom of movement and complete immersion in the gaming environment.",
    ],
  },
  {
    title: "AI Facial Emotion Recognition for Personalized Gaming",
    image: (
      <img
        src={face}
        alt="AI Facial Emotion Recognition for Personalized Gaming"
      />
    ),
    description: [
      "Seeking strategies to boost player retention? Experiment with AI-driven emotion recognition. Identify players’ emotions and adapt gameplay based on individual personalities and moods using biometric facial recognition algorithms. Real-time recognition of emotions such as joy, rage, astonishment, antipathy, and fear adds a personalized touch to games and maximizes enjoyment.",
    ],
  },
  {
    title: "Pose Estimation for Body Movement in Gaming",
    image: (
      <img src={pose} alt="Pose Estimation for Body Movement in Video Games" />
    ),
    description: [
      "Capture and analyze player movements during video games with pose estimation and tracking. This technology provides real-time location of human skeletal joints, recognition of human motion, and detailed analysis. Whether in sports or dance video games, estimate players’ moves and determine the winner. Enhance the gaming experience with immersive and fun AI game solutions.",
    ],
  },
];

export default OneCardDataAI;
