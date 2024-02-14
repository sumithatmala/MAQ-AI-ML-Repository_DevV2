import "./css/UsageBenefits.css"
import CartonImg from "./img/cartonImg.svg"

const UsageBenefits = (props) => {
    return (
        <section className="LogisticsContainer">
            <h5>{props.items.title}</h5>
            <div className="LogisticsTitle">
                <div className="LogisticsDesc">
                    {props.items.desc.map((para) => {
                        return(<p>{para}</p>)
                    })}
                    <ul>
                        {props.items.points.map((point) => {
                            console.log(point);
                            return(<li>{point}</li>)
                        })}
                    </ul>
                </div>
                <div className="LogisticsImg">
                        <img src={CartonImg} alt="Logistics and Transportation"></img>
                </div>
            </div>
        </section>
    )
}

export default UsageBenefits;