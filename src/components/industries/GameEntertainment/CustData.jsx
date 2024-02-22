import game from './icons/Game-Development.jpeg';
import emotion from './icons/gameEmotions.jpg';
import res from './icons/resultPrediction.webp';



const CustData = [
  {
    title: "Automated Customer Feedback Analysis for Game Developers",
    image: (
      <img
        src={game}
        alt="Automated Customer Feedback Analysis for Game Developers"
      />
    ),
    description: [
      "Automation of topic retrieval and classification",
      "Our client, a renowned game developer, sought an AI solution for analyzing customer feedback.",
      "Our team developed a tool for collecting and analyzing game slang in customer feedback, streamlining the analysis process.",
    ],
    link: "",
  },
  {
    title: "Emotion Recognition for Customized Gaming Experience for Children",
    image: (
      <img
        src={emotion}
        alt="Emotion Recognition for Customized Gaming Experience for Children"
      />
    ),
    description: [
      "Enhanced personalized learning and improved working memory",
      "Our client, a private elementary school in the US, aimed to implement emotion recognition in their brain training app for children.",
      "We integrated an AI model for fast face recognition and analysis, allowing the app to offer exercises tailored to children's emotions, promoting cognitive skill development.",
    ],
    link: "",
  },
  {
    title: "Game Results Prediction Technology for Game Developers",
    image: (
      <img
        src={res}
        alt="Game Results Prediction Technology for Game Developers"
      />
    ),
    description: [
      "Improved calculation of winning probabilities",
      "Our client, a well-known game developer, requested an AI solution for predicting game results using data.",
      "Our team implemented technology that, based on process replays, filters and clusters data to calculate winning probabilities and visualize the results.",
    ],
    link: "",
  },
];

export default CustData;
