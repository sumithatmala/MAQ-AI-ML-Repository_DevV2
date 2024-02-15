import case_targeted_advertising_system from "./case-targeted-advertising-system.webp"
import case_customer_analytics_ai_nlp from "./case-customer-analytics-ai-nlp.webp"
import case_customer_review_analytics_solution from "./case-customer-review-analytics-solution.webp"
import case_predictive_models_improve_debt_collection_process from "./case-predictive-models.webp"
import python from "./python.png"
import scikit from "./scikit-learn.png"
import spark from "./spark.png"
import tensorflow from "./tensorflow.png"
import health from "./health.svg"
import logistics from "./logistics.svg"
import Media from "./media.svg"
import retail from "./retail.svg"
import robot from "./robot.svg"
import automobile from "./automobile.svg"
import one from "./1.png"
import two from "./2.png"
import three from "./3.png"
import four from "./4.png"
import collect from "./collect.svg"
import evaluate from "./evaluate.svg"
import train from "./train.svg"

export const process = [
    {topic: "Collect", disc:"We collect datasets, label images, and add meta tags to each unlabeled picture", img: <img src={collect} height={100}/>},
    {topic: "Train", disc:"We use collected and labeled data to train an algorithm to process and analyze image datasets", img: <img src={train} height={100}/>},
    {topic: "Evaluate", disc:"We provide a ready-made model with REST API calls to work with new datasets by using a computer vision model. ", img: <img src={evaluate} height={80}/>}
]

export const industrialCards = [
    // {label: "Industries", disc:"Our team of machine learning experts has earned global trust by delivering custom solutions for various industries. Specializing in on-demand computer vision and image recognition software development, we customize solutions to address industry-specific needs. Our clientele spans diverse sectors including logistics, retail, media & entertainment, healthcare, and more.", img: ""},
    {label: "Logistics", disc:"Analyze, plan, design, and control transferring processes, cargo locations, routes, etc.; monitor delivery status in real time by using ML algorithms for image processing.", img: <img src={logistics} alt="Logistics" width={100}></img>},
    {label: "Media", disc:"Get a solid bespoke solution developed for your needs to analyze visual content, provide your consumers with highly accurate and diverse recommendations, foster user engagement, and reach new audiences.", img: <img src={Media} alt="Media" width={100}></img>},
    {label: "Digital Health", disc:"Facilitate analysis of medical images, enable computer-aided diagnostics, allow predictive analytics and therapy, enhance mobile healthcare apps with custom computer vision software development.", img: <img src={health} alt="Health" width={100}></img>},
    {label: "Retail", disc:"Improve search experience by developing image recognition and analysis software solutions to please your customers with intelligent search by photo and help them find merchandise easily.", img: <img src={retail} alt="Retail" width={100}></img>},
    {label: "Robotics", disc:"Enable machines to efficiently perform a variety of repetitive tasks, such as object and target recognition, navigation, manufacturing & assembly, assisting physically challenged people with image processing techniques, etc.", img: <img src={robot} alt="Robot" width={100}></img>},
    {label: "Automotive", disc:"Amplify design of complex geometries with deep learning techniques. Geometry AI solutions for the automotive industry allow for a safe product design with real-time simulation while reducing costs and engineering effort.", img: <img src={automobile} alt="Automobile" width={100}></img>},
]

export const benefitCards = [
    {label: "Improved Accuracy", disc:"Automate different manual operations, reduce errors, and improve your business efficiency with ML algorithms powering image recognition solutions.", img: <img src={one} alt="" width={100}></img>},
    {label: "Lower Operational Cost", disc:"Eliminate simple errors and cost overrun by adopting a cost-efficient custom solution to help with workflow automation and acceleration.", img: <img src={two} alt="" width={100}></img>},
    {label: "Revamped Services", disc:"Cut time spent on routine tasks, improve service provision and redistribute your intellectual resources to focus on tasks requiring a human touch.", img: <img src={three} alt="" width={100}></img>},
    {label: "Automated Flow", disc:"Enhance employee productivity and achieve cost savings by seamlessly integrating custom recognition and analysis algorithms into your business operations.", img: <img src={four} alt="" width={100}></img>},
]

export const technologies =  [
    {img: <img src={python} alt="python"></img>},
    {img: <img src={scikit} alt="scikit-learn"></img>},
    {img: <img src={spark} alt="spark"></img>},
    {img: <img src={tensorflow} alt="tensorflow"></img>},
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