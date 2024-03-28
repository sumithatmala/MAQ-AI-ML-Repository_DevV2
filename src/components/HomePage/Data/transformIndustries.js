import healthIcon from "../img/health.svg"
import sportsIcon from "../img/sports.svg"
import marketingIcon from "../img/marketing.svg"
import ecommIcon from "../img/ecomm.svg"
import fintechIcon from "../img/finance.svg"
import gameIcon from "../img/game.svg"

const transformIndustries = [
    {
        title: "Health Care",
        desc: "Innovative healthcare analytics and AI solutions in pharma optimize patient care and streamline operations, enhancing overall effectiveness.",
        img: <img src={healthIcon} alt="" width={40}/>,
        link:"/Industries/Health&Pharma",
    },
    {
        title: "Sports and Wellness",
        desc: "Advanced AI-driven sports and wellness solutions focus on personalized strategies for injury prevention and enhancing physical well-being in both sports and wellness contexts.",
        img: <img src={sportsIcon} alt="" width={40}/>,
        link:"/Industries/SportWellness",
    },
    {
        title: "Marketing Tech",
        desc: "Harness the potential of AI-driven marketing and sales solutions to elevate your brand's performance and drive revenue growth.",
        img: <img src={marketingIcon} alt="" width={40}/>,
        link:"/Industries/Martech",
    },
    {
        title: "E-Commerce",
        desc: "Tailored AI solutions for e-commerce are revolutionizing project development in the online retail space, optimizing processes and enhancing customer experiences.",
        img: <img src={ecommIcon} alt="" width={40}/>,
        link:"/Industries/E-commerce",
    },
    {
        title: "Fintech",
        desc: "Smart finance innovations are transforming the finance and banking landscape by leveraging AI and analytics, optimizing processes, and improving decision-making for enhanced financial services.",
        img: <img src={fintechIcon} alt="" width={40}/>,
        link:"/Industries/Fintech",
    },
    {
        title: "Game and Entrtainment",
        desc: "AI-powered game solutions are revolutionizing game development businesses, offering advanced capabilities for enhanced gameplay, player engagement.",
        img: <img src={gameIcon} alt="" width={40}/>,
        link:"/Industries/GameEntertainment",
    },
]
export default transformIndustries;