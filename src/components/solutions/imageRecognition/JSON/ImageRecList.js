// import case_targeted_advertising_system from "../img/case-targeted-advertising-system.webp"
// import case_customer_analytics_ai_nlp from "../img/case-customer-analytics-ai-nlp.webp"
// import case_customer_review_analytics_solution from "../img/case-customer-review-analytics-solution.webp"
// import case_predictive_models_improve_debt_collection_process from "../img/case-predictive-models.webp"
import python from "../img/python.png"
import scikit from "../img/scikit-learn.png"
import spark from "../img/spark.png"
import tensorflow from "../img/tensorflow.png"
import logistics from "../img/icons8-trolley-100 1.svg"
import Media from "../img/icons8-media-100 1.svg"
import health from "../img/icons8-health-100 1.svg"
import retail from "../img/icons8-retail-100 1.svg"
import robot from "../img/icons8-robot-100 1.svg"
import automobile from "../img/icons8-car-100 1.svg"
import one from "../../ConsumerSentimentAnalysis/icons/icon-1.svg"
import two from "../../ConsumerSentimentAnalysis/icons/icon-2.svg"
import three from "../../ConsumerSentimentAnalysis/icons/icon-3.svg"
import four from "../../ConsumerSentimentAnalysis/icons/icon-4.svg"
import collect from "../img/icons8-collect-100 1.svg"
import evaluate from "../img/icons8-investment-portfolio-100 1.svg"
import train from "../img/icons8-learning-100 (1) 2.svg"

import case_targeted_advertising_system from "../img/Rectangle 60.svg"
import case_customer_analytics_ai_nlp from "../img/Rectangle 61.svg"
import case_customer_review_analytics_solution from "../img/Rectangle 62.svg"
import case_predictive_models_improve_debt_collection_process from "../img/Rectangle 63.svg"

export const process = [
    {topic: "Collect", disc:"We collect datasets, label images, and add meta tags to each unlabeled picture", img: <img src={collect} height={100} alt="Collect"/>},
    {topic: "Train", disc:"We use collected and labeled data to train an algorithm to process and analyze image datasets", img: <img src={train} height={100} alt="Train"/>},
    {topic: "Evaluate", disc:"We provide a ready-made model with REST API calls to work with new datasets by using a computer vision model. ", img: <img src={evaluate} height={80} alt="Evaluate"/>}
]

export const industrialCards = [
    // {label: "Industries", disc:"Our team of machine learning experts has earned global trust by delivering custom solutions for various industries. Specializing in on-demand computer vision and image recognition software development, we customize solutions to address industry-specific needs. Our clientele spans diverse sectors including logistics, retail, media & entertainment, healthcare, and more.", img: ""},
    {label: "Logistics", disc:"Utilize machine learning algorithms for image processing to analyze, plan, design, and control transferring processes, cargo locations, routes, and monitor delivery status in real time.", img: <img src={logistics} alt="Logistics" width={300}></img>},
    {label: "Media", disc:"Get a solid bespoke solution developed for your needs to analyze visual content, provide your consumers with highly accurate and diverse recommendations, foster user engagement, and reach new audiences.", img: <img src={Media} alt="Media" width={300}></img>},
    {label: "Digital Health", disc:"Facilitate analysis of medical images, enable computer-aided diagnostics, allow predictive analytics and therapy, enhance mobile healthcare apps with custom computer vision software development.", img: <img src={health} alt="Health" width={300}></img>},
    {label: "Retail", disc:"Improve search experience by developing image recognition and analysis software solutions to please your customers with intelligent search by photo and help them find merchandise easily.", img: <img src={retail} alt="Retail" width={300}></img>},
    {label: "Robotics", disc:"Enable machines to efficiently perform a variety of repetitive tasks, such as object and target recognition, navigation, manufacturing & assembly, assisting physically challenged people with image processing techniques, etc.", img: <img src={robot} alt="Robot" width={300}></img>},
    {label: "Automotive", disc:"Amplify design of complex geometries with deep learning techniques. Geometry AI solutions for the automotive industry allow for a safe product design with real-time simulation while reducing costs and engineering effort.", img: <img src={automobile} alt="Automobile" width={300}></img>},
]

export const benefitCards = [
    {label: "Improved Accuracy", disc:"Automate different manual operations, reduce errors, and improve your business efficiency with ML algorithms powering image recognition solutions.", img: <img src={one} alt="" width={100}></img>},
    {label: "Lower Operational Cost", disc:"Eliminate simple errors and cost overrun by adopting a cost-efficient custom solution to help with workflow automation and acceleration.", img: <img src={two} alt="" width={100}></img>},
    {label: "Revamped Services", disc:"Cut time spent on routine tasks, improve service provision and redistribute your intellectual resources to focus on tasks requiring a human touch.", img: <img src={three} alt="" width={100}></img>},
    {label: "Automated Flow", disc:"Enhance employee productivity and achieve cost savings by seamlessly integrating custom recognition and analysis algorithms into your business operations.", img: <img src={four} alt="" width={100}></img>},
]

export const technologies =  [
    { src : python, alt : "python"},
    { src : scikit, alt : "scikit-learn"},
    { src : spark, alt : "spark"},
    { src : tensorflow, alt : "tensorflow"},
]

export const customerSuccessData = [
    {
      title: "E-commerce Personalization Platform",
      image: <img src={case_targeted_advertising_system} alt="E-commerce Personalization Platform" />,
      description: [
        "Cutting-edge e-commerce recommendation system providing personalized product recommendations based on user behavior.",
        "Increased customer engagement and sales conversion rates for our client's online store.",
      ],
    },
    {
      title: "Healthcare Analytics Solution",
      image: <img src={case_customer_analytics_ai_nlp} alt="Healthcare Analytics Solution" />,
      description: [
        "Robust analytics solution leveraging AI and machine learning to analyze patient data and improve operational efficiency.",
        "Identified trends, optimized resource allocation, and enhanced patient care quality.",
      ],
    },
    {
      title: "AI-Powered Chatbot for Customer Support",
      image: <img src={case_customer_review_analytics_solution} alt="AI-Powered Chatbot for Customer Support" />,
      description: [
        "AI-powered chatbot solution handling customer inquiries and support requests efficiently.",
        "Reduced response times, improved customer satisfaction, and decreased operational costs.",
      ],
    },
    {
      title: "Predictive Maintenance Solution for Manufacturing",
      image: <img src={case_predictive_models_improve_debt_collection_process} alt="Predictive Maintenance Solution for Manufacturing" />,
      description: [
        "Predictive maintenance solution anticipating equipment failures and minimizing downtime.",
        "Enabled proactive maintenance scheduling, reducing costs and improving equipment effectiveness.",
      ],
    },
  ];