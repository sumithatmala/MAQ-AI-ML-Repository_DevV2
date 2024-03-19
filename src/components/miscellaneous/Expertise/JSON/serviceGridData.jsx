import strategy_icon from "../img/strategy.svg"
import ai_icon from "../img/ai.svg"
import mvp_icon from "../img/mvp.svg"
import model_icon from "../img/model.svg"
import software_icon from "../img/software.svg"
import Application_icon from "../img/application.svg"
import pocicon from '../img/pocAiBased.webp';

const serviceGridData = [
    {
        title: "AI/ML Strategy & Consulting",
        desc: "Have a project idea and need help implementing it? We're here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.",
        img: <img src={strategy_icon} alt="" width={40}/>,
        link:"",
    },
    {
        title: "PoC of Al-based Solution",
        desc: "POC is an essential step before adopting any AI solution. If you have a project idea, our data science consultants will verify  that your concept has potential.",
        img: <img src={pocicon} alt="" width={40}/>,
        link:"",
    },
    {
        title: "MVP of Al-based Product",
        desc: "Need a breakthrough AI product? We're ready to start with a version of just enough features to satisfy early customers and provide feedback for product development.",
        img: <img src={mvp_icon} alt="" width={40}/>,
        link:"",
    },
    {
        title: "Custom Model Development",
        desc: "We can build and train custom models for your business needs, or retrain your existing ones (open-source and proprietary) for better efficiency and scalability.",
        img: <img src={model_icon} alt="" width={40}/>,
        link:"",
    },
    {
        title: "Al Software Development",
        desc: "If you need to develop an innovative web application from scratch, or empower the existing one with AI capabilities, let our experts help you.",
        img: <img src={software_icon} alt="" width={40}/>,
        link:"",
    },
    {
        title: "Al-driven Mobile App Development",
        desc: "Our experts are here to help you build your innovative mobile app from scratch and power it with AI capabilities that your users will love.",
        img: <img src={Application_icon} alt="" width={40}/>,
        link:"",
    },
]
export default serviceGridData;