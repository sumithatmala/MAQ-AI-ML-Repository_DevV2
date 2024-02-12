import "./css/Grid.css"

const Grid = ({content}) => {
    return (
        <section className="center_grid">
        <section className="IndustriesContainer">
            {content.map((item)=>{
                return(
                    // item.img?(
                        <div className="IndustryCard">
                            {/* <img src={process.env.PUBLIC_URL + item.img} alt={item.label} width={100}></img> */}
                            {item.img}
                            <div className="IndustryCard-txt">
                                <b>{item.label}</b>
                                <p>{item.disc}</p>
                            </div>
                        </div>
                    //     ):(
                    //     <div className="IndustryCard-noImg">
                    //         <div className="IndustryCard-txt">
                    //             <h4>{item.label}</h4>
                    //             <p>{item.disc}</p>
                    //         </div>
                    //     </div>
                    // )
                )
            })}
        </section>
        </section>
    )
}

export default Grid;