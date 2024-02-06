const UsageBenefits = (props) => {
    return (
        <section className="LogisticsContainer">
            <div className="LogisticsTitle">
                <h5>{props.item.title}</h5>
                {props.desc.map((para) => {
                    return(<p>{para}</p>)
                })}
                <ul>
                    {props.points.map((points) => {
                        <li>{points}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default UsageBenefits;