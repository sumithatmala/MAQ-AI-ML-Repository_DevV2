import { Link } from "react-router-dom";
import "./css/ServiceGrid.css"

const ServiceGrid = (props) => {
    return(
        <section className="ServiceGridCnt margin-adjust">
            <div className="ServiceGridHeading">
                <h3 style={{fontSize:"32px"}}>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className="ServiceGridTitle">
                {props.items.map((item, index)=>{
                    return(
                        <Link to={item.link} key={index}>
                            <div className="ServiceGridCard">
                                <div className="ServiceGridCard-txt">
                                    <div className="ServiceGridCardHeader">
                                        {item.img}
                                        <h4 style={{fontSize:"19px"}}>{item.title}</h4>
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