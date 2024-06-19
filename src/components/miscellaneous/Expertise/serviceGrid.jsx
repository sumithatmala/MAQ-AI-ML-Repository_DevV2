import { Link } from "react-router-dom";
import "./css/ServiceGrid.css"

const ServiceGrid = (props) => {
    return(
        <section className="ServiceGridCnt margin-adjust">
            <div className="ServiceGridHeading">
                <h3 className="heading-size">{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className="ServiceGridTitle">
                {props.items.map((item, index)=>{
                    return(
                        <Link to={item.link} key={index}>
                            <div className="ServiceGridCard border-shadow">
                                <div className="ServiceGridCard-txt">
                                    <div className="ServiceGridCardHeader">
                                        {item.img}
                                        <h4 className="subheading-size">{item.title}</h4>
                                    </div>
                                    <p className="content-size">{item.desc}</p>
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