import "./css/RoadMapNew.css"

const RoadMapNew = (props) => {

    const {heading,desc,items} = props;
    return(
        <section className="RoadMapSection">
            <div>
            <h2>{heading}</h2>
            {desc?<p>desc</p>:(<></>)}
            <ol className="RoadMapList">
                {items.map((item,count=0) => {
                    count++;
                    return(
                        <div className={count===1?"RoadMapElement _firstElement":("RoadMapElement")}>
                            <li>
                                {/* {item.img?( */}
                                    <div className="RoadMapBg">
                                        <div className="RoadMapImg">
                                            {item.img}
                                        </div>
                                    </div>
                                {/* ):(<></>)} */}
                                <div className="RoadMapDesc">
                                    <div className="RoadMapDataSource"></div>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </li>
                        </div>
                    )
                })}
            </ol>
            </div>
        </section>
    )
}

export default RoadMapNew;