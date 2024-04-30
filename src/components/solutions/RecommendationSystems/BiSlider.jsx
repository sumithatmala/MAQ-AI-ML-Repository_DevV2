import tv from "./Images/tv.jpg"
import analytics from "./Images/analytics.jpg"
import healthCare from "./Images/healthCareAppointment.jpg"

const BiSlider = [
  {
    title: "Smart TV App's Movie Suggestion Algorithm",
    image: <img src={tv} alt="tv"/>,
    description: [
      "Our client is a prominent player in the Smart TV digital home entertainment sector, offering a leading premium video-on-demand service. This service allows users to enjoy newly released movies in impeccable quality or select from an extensive library of over 7000 titles.",
      "With 1.5 million monthly active users on their Smart TV application, our client ensures that personalized movie recommendations are delivered to every customer.",
    ],
    link: "",
  },
  {
    title: "Development of Predictive Analytics Module for E-Commerce Giant",
    image: (
      <img
        src={analytics}
        alt="Emotion Analysis Intelligence"
      />
    ),
    description: [
      "Our client, a prominent e-commerce provider collaborating with over 50 brands, sought a solution for generating cross-brand and single-brand recommendations. ",
      "The primary business objective was to leverage machine learning (ML) to boost sales, enhance customer experience, and attract new clients while retaining loyal users on the online platform. Ultimately, the client acquired a state-of-the-art ML-led system for their e-commerce operations.",
    ],
    link: "",
  },
  {
    title: "Healthcare Appointment Scheduling Optimization",
    image: (
      <img
        src={healthCare}
        alt="Healt care appointment"
      />
    ),
    description: [
      "Our client, a leading healthcare provider with multiple clinics, needed a solution to reduce patient wait times, minimize no-shows, and improve clinic efficiency.",
      "We implemented an AI-driven scheduling system that analyzed data to generate optimal schedules, including historical data, patient preferences, and clinic capacities. The system featured automated reminders and rescheduling options, resulting in reduced wait times, increased patient satisfaction, and enhanced staff productivity.",
    ],
    link: "",
  },
];

export default BiSlider;
