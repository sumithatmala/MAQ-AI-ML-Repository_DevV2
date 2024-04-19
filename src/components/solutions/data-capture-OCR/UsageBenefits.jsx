import "./css/UsageBenefits.css"
import CartonImg from "./img/cartonImg.svg"

const UsageBenefits = (props) => {
    return (
        <section className="LogisticsContainer margin-adjust">
            <div className="head-block-center">{props.items.title}</div>
            <div className="LogisticsTitle">
                <div className="LogisticsDesc">
                    {props.items.desc.map((para, index) => {
                        return(<p key={index}>{para}</p>)
                    })}
                    <ul>
                        {props.items.points.map((point, index) => {
                            // console.log(point);
                            return(<li key={index}>{point}</li>)
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