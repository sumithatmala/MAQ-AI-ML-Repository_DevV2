import ai_img from "./images/ai_engineering.jpg";
import ml_img from "./images/ml_products.jpg";
import ds_img from "./images/data_science.jpg";

export default function Sdata() {
  const Sdata = [
    {
      imgsrc: ds_img,
      cardTitle: "Data Science",
      descriptionTitle: "Understanding Data Science",
      description:
        "Data Science involves analyzing and interpreting vast datasets using statistical and computational methods to uncover valuable insights, enabling informed decision-making across industries.",
    },
    {
      imgsrc: ai_img,
      cardTitle: "AI Engineering",
      descriptionTitle: "AI Engineering Overview",
      description:
        "AI Engineering focuses on designing, developing, and implementing artificial intelligence systems and algorithms that emulate human cognitive functions, aiming to solve complex problems, automate processes, and improve efficiency across various applications and industries.",
    },
    {
      imgsrc: ml_img,
      cardTitle: "ML Products",
      descriptionTitle: "ML Products Insight",
      description:
        "ML Products utilize machine learning algorithms, powering applications for recommendation engines, predictive analytics, and personalized services. They leverage data-driven insights to automate tasks, enhance user experiences, and offer customized solutions across various domains.",
    },
  ];
  return Sdata;
}
