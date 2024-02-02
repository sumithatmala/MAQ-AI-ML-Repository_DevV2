import gamedev from "../img/gamedev.webp"
import cosmetics from "../img/cosmetics.webp"
import customerAnalysis from "../img/customerAnalysis.webp"
import analytics from "../img/analytics.webp"

const customerSuccessData = [
  {
    title: "Helping a Leading Game Developer Automate Customer Feedback Analysis",
    image: <img src={gamedev} alt="Game dev customer feedback" />,
    description: [
      "A well-known game developer dedicated considerable resources to gathering and analyzing fan feedback on social media about their game releases. They enlisted us to develop an NLP-based tool for automated review collection and analysis.",
      "The tool we developed streamlined the collection and analysis of reviews and sentiments, providing deeper insights for the client's social media interactions.",
    ],
  },
  {
    title: "ML and NLP Models For Marketing & Advertising",
    image: <img src={cosmetics} alt="MML_NLP marketing ad" />,
    description: [
      "The client, a beauty company, faced challenges in managing and interpreting large amounts of data. They sought to leverage machine learning (ML) to automate data collection and gain insights.",
      "This collaboration resulted in the client receiving tailored software solutions for efficient data collection and analysis, accurate customer behavior prediction, and comprehensive brand health tracking.",
    ],
  },
  {
    title: "AI Customer Analytics Solution",
    image: <img src={customerAnalysis} alt="AI-Powered customer analytics" />,
    description: [
      "A medium-sized FMCG company based in the US sought a natural language processing service provider to assist with data collection and analysis.",
      "In response, we delivered a comprehensive solution encompassing a data analysis pipeline for extracting insights. This software facilitates rapid and precise mining and analysis of email and audio data, meeting the client's needs effectively.",
    ],
  },
  {
    title: "Customer Review Analytics Solution for E-commerce",
    image: <img src={analytics} alt="E-commerce analytics solution" />,
    description: [
      "A major US-based e-commerce platform was in search of a vendor offering natural language processing services. Their goal was to gain insights into their products and services to enhance their marketing campaigns.",
      "This solution enabled the client to leverage advanced analytics for informed decision-making, leading to more effective marketing strategies and improved customer satisfaction.",
    ],
  },
];

export default customerSuccessData;