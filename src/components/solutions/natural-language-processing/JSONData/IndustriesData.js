import car from "../img/icons8-trolley-100 2.svg"
import ecomm from "../img/icons8-retail-100 2.svg"
import bank from "../img/icons8-card-exchange-100 1.svg"
import marketing from "../img/icons8-marketing-100 (1) 3.svg"
import movie from "../img/icons8-entertainment-100 1.svg"

const industriesData = [
    {
        name: "Logistics",
        icon: <img src={car} alt="Logistics" width={100}></img>,
        link: "/Industries/Logistics",
    },
    {
        name: "E-Commerce",
        icon: <img src={ecomm} alt="E-commerse" width={100}></img>,
        link: "/Industries/E-commerce",
    },
    {
        name: "Finance and Banking",
        icon: <img src={bank} alt="Banking" width={100}></img>,
        link: "/Industries/Fintech",
    },
    {
        name: "Marketing",
        icon: <img src={marketing} alt="Marketing" width={100}></img>,
        link: "/Industries/MarTech",
    },
    {
        name: "Entertainment",
        icon: <img src={movie} alt="Entertainment" width={100}></img>,
        link: "/Industries/GameEntertainment",
    },
]

export default industriesData;