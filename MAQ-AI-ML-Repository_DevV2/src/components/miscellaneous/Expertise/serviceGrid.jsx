import { Link } from "react-router-dom";
import "./css/ServiceGrid.css"

const ServiceGrid = (props) => {
    return(
        <section className="ServiceGridCnt">
            <div className="ServiceGridHeading">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className="ServiceGridTitle">
                {props.items.map((item)=>{
                    return(
                        <Link to={item.link}>
                            <div className="ServiceGridCard">
                                <div className="ServiceGridCard-txt">
                                    <div className="ServiceGridCardHeader">
                                        {item.img}
                                        <b>{item.title}</b>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default ServiceGrid;