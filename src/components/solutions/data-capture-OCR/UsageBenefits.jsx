import "./css/UsageBenefits.css"

const UsageBenefits = (props) => {
    console.log(props.data.title);
    console.log(props.data.desc);
    console.log(props.data.points);
    return (
        <section className="LogisticsContainer">
            {/* <div className="LogisticsTitle">
                <h5>{props.items.title}</h5>
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
            </div> */}
        </section>
    )
}

export default UsageBenefits;