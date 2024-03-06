import bank from "../img/ind-banking.svg"
import car from "../img/ind-car.svg"
import ecomm from "../img/ind-ecommerce.svg"
import marketing from "../img/ind-marketing.svg"
import movie from "../img/ind-movie.svg"

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