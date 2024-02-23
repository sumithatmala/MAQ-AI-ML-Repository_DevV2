import nlp from "./icons/nlp_sentiment.png";
import retention from "./icons/RetentionPrediction.png";

const featuresData = [
  {
    heading: "NLP for Feature-Based Sentiment Analysis",
    points: [
      "Curious to understand what users appreciate most about your applications? Gather insights from forums and social media platforms, then analyze the data effortlessly. Obtain valuable information to adapt your development plans and enhance user engagement with automated feature review analysis.",
      "Tailored human-like responses",
      "Categorize users’ feedback by topics such as user interface, characters, application speed issues, music, etc. to comprehend the path for further development and enhancements.",
    ],
    img: <img src={nlp} width={400} />,
  },
  {
    heading: "Advanced Analytics in Applications for User Retention Prediction",
    points: [
      "Seeking to maximize your application revenue? Identify early indicators of user attrition to extend a user’s engagement and revenue contribution with effective advanced analytics solutions. Scrutinize log data and user behavior for valuable insights into user satisfaction and retention strategies. Encourage high-value users or connect them with other applications to sustain a consistent income.",
    ],
    img: <img src={retention }width={400} />,
  },
];

export default featuresData;
