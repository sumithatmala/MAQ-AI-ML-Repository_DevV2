import healthIcon from "../img/health.svg"
import sportsIcon from "../img/sports.svg"
import marketingIcon from "../img/marketing.svg"
import ecommIcon from "../img/ecomm.svg"
import fintechIcon from "../img/finance.svg"
import gameIcon from "../img/game.svg"

const transformIndustries = [
    {
        title: "Health Care",
        desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Magnam unde soluta aliquam sunt cumque omnis mollitia excepturi natus consequuntur facere?",
        img: <img src={healthIcon} alt="" width={40}/>,
        link:"/Industries/Health&Pharma",
    },
    {
        title: "Sports and Wellness",
        desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Magnam unde soluta aliquam sunt cumque omnis mollitia excepturi natus consequuntur facere?",
        img: <img src={sportsIcon} alt="" width={40}/>,
        link:"/Industries/SportWellness",
    },
    {
        title: "Marketing Tech",
        desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Magnam unde soluta aliquam sunt cumque omnis mollitia excepturi natus consequuntur facere?",
        img: <img src={marketingIcon} alt="" width={40}/>,
        link:"/Industries/Martech",
    },
    {
        title: "E-Commerce",
        desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Magnam unde soluta aliquam sunt cumque omnis mollitia excepturi natus consequuntur facere?",
        img: <img src={ecommIcon} alt="" width={40}/>,
        link:"/Industries/E-commerce",
    },
    {
        title: "Fintech",
        desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Magnam unde soluta aliquam sunt cumque omnis mollitia excepturi natus consequuntur facere?",
        img: <img src={fintechIcon} alt="" width={40}/>,
        link:"/Industries/Fintech",
    },
    {
        title: "Game and Entrtainment",
        desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Magnam unde soluta aliquam sunt cumque omnis mollitia excepturi natus consequuntur facere?",
        img: <img src={gameIcon} alt="" width={40}/>,
        link:"/Industries/GameEntertainment",
    },
]
export default transformIndustries;