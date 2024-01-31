const Grid = ({content}) => {
    return (
        <section className="IndustriesContainer">
            {content.map((item)=>{
                return(
                    item.img?(
                        <div className="IndustryCard">
                            <img src={process.env.PUBLIC_URL + item.img} alt={item.label} width={100}></img>
                            <div className="IndustryCard-txt">
                                <b>{item.label}</b>
                                <p>{item.disc}</p>
                            </div>
                        </div>
                        ):(
                        <div className="IndustryCard-noImg">
                            <div className="IndustryCard-txt">
                                <h4>{item.label}</h4>
                                <p>{item.disc}</p>
                            </div>
                        </div>
                    )
                )
            })}
        </section>
    )
}

export default Grid;