import "./css/RoadMapNew.css"

const RoadMapNew = (props) => {

    const {heading,desc,items} = props;
    return(
        <section className="RoadMapSection">
            <h2>{heading}</h2>
            {desc?<p>desc</p>:(<></>)}
            <ol className="RoadMapList">
                {items.map((item) => {
                    return(
                        <div className="RoadMapElement">
                            <li>
                                {item.img?(
                                    <div className="RoadMapBg">
                                        <div className="RoadMapImg">
                                            {item.img}
                                        </div>
                                    </div>
                                ):(<></>)}
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </li>
                        </div>
                    )
                })}
            </ol>
        </section>
    )
}

export default RoadMapNew;