import "./css/Grid.css"

const Grid = ({content}) => {
    return (
        <section className="center_grid margin-adjust">
        <section className="IndustriesContainer">
            {content.map((item, index)=>{
                return(
                    // item.img?(
                        <div key={index} className="IndustryCard">
                            {/* <img src={process.env.PUBLIC_URL + item.img} alt={item.label} width={100}></img> */}
                            {item.img}
                            <div className="IndustryCard-txt">
                                <b className="subheading-size">{item.label}</b>
                                <p className="content-size">{item.disc}</p>
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