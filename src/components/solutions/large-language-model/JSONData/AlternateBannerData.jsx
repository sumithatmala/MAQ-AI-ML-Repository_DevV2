import AnimatedTarget from "../../../product-dashboard/icons/AnimatedTarget";
import AnimatedDevelopment from "../../../product-dashboard/icons/AnimatedDevelopment";
import AnimatedSolution from "../../../product-dashboard/icons/AnimatedSolution";
import AnimatedOutcome from "../../../product-dashboard/icons/AnimatedOutcome";

const bannerData = [
    {
        heading: "Strategic Implementation", 
        details: "We collaborate with your team to develop a strategic vision and plan for integrating language models into your business processes. Our experts analyze your needs, evaluate available data, and provide actionable insights to optimize your technological infrastructure.",
        points:["Strategic planning","Proof of concept development","Data analysis and evaluation","Project estimation and timeline creation"],
        img: <AnimatedTarget/>,
    },
    {
        heading: "Model Developmen", 
        details: "Our dedicated team constructs tailored language models using advanced AI techniques and tools. Leveraging natural language processing and machine learning expertise, we design models aligned with your business requirements.",
        points:["User-centric model design","Custom model development","Data preprocessing and cleansing","Seamless model integration"],
        img: <AnimatedDevelopment/>,
    },
    {
        heading: "Optimization and Enhancement", 
        details: "We fine-tune existing language models to suit your specific business needs, maximizing their effectiveness and efficiency. Our team of machine learning engineers enhances model performance and integration for seamless operation within your ecosystem.",
        points:["Model refinement and enhancement",">API integration and optimization","Data architecture modernization","Automation of model maintenance"],
        img: <AnimatedSolution/>,
    },
    {
        heading: "Maintenance and Support", 
        details: "Our support team ensures the continuous optimization and performance of your language models. From monitoring to updates, we provide round-the-clock assistance to enhance and evolve your AI solutions.",
        points:["Ongoing model monitoring and evaluation","Regular model updates and enhancements","Continuous data retraining and refinement","Risk mitigation and compliance measures"],
        img: <AnimatedOutcome/>,
    },
]

export default bannerData;