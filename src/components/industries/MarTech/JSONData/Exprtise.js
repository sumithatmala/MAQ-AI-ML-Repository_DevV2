import pa_customer_churn_prediction from "../img/pa-customer-churn-prediction.jpg"
import pa_personalized_advertising from "../img/pa-personalized-advertising.jpg"
import pa_deman_forecasting from "../img/pa-deman-forecasting.jpg"

const OneCardData = [
  {
    title: "Customer Churn Prediction",
    image: <img src={pa_customer_churn_prediction} alt="Customer Churn Prediction" />,
    description: [
      "Utilize predictive analytics to identify customers likely to cancel subscriptions, proactively prevent churn, and retain valuable customers.",
    ],
  },
  {
    title: "Personalized Advertising",
    image: <img src={pa_personalized_advertising} alt="Personalized Advertising" />,
    description: [
      "Enhance customer engagement and loyalty by leveraging AI-powered personalized advertising to deliver targeted content and advertisements tailored to individual preferences.",
    ],
  },
  {
    title: "Product Price Optimization",
    image: <img src={pa_deman_forecasting} alt="Product Price Optimization" />,
    description: [
      "Leverage predictive analytics to optimize product pricing strategies, ensuring competitive prices while maximizing profit margins and customer satisfaction.",
    ],
  },
];

export default OneCardData;