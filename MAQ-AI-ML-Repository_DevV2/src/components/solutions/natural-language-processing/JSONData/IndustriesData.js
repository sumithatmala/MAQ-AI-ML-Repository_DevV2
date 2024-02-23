import bank from "../img/ind-banking.svg"
import car from "../img/ind-car.svg"
import ecomm from "../img/ind-ecommerce.svg"
import marketing from "../img/ind-marketing.svg"
import movie from "../img/ind-movie.svg"

const industriesData = [
    {
        name: "Logistics",
        icon: <img src={car} alt="Logistics" width={100}></img>,
        link: "#",
    },
    {
        name: "E-Commerce",
        icon: <img src={ecomm} alt="E-commerse" width={100}></img>,
        link: "#",
    },
    {
        name: "Finance and Banking",
        icon: <img src={bank} alt="Banking" width={100}></img>,
        link: "#",
    },
    {
        name: "Marketing",
        icon: <img src={marketing} alt="Marketing" width={100}></img>,
        link: "#",
    },
    {
        name: "Entertainment",
        icon: <img src={movie} alt="Entertainment" width={100}></img>,
        link: "#",
    },
]

export default industriesData;