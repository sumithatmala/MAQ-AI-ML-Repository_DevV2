import { Link } from "react-router-dom";
import "./css/showcaseBanner.css"

const ShowcaseBanner = (props) => {
    return(
        <section className="ShowcaseBannerCnt">
            <div className="ShowcaseBannerTitle">
                <div className="ShowcaseBannerheader">
                    <h3>{props.items.heading}</h3>
                    <p>{props.items.desc}</p>
                </div>
                <div className="ShowcaseBannerGrid">
                    {props.items.title.map((val) => {
                        return(
                            <div className="ShowcaseBanerCard">
                                <h5>
                                    <Link to={val.link}>{val.heading}</Link>
                                    
                                </h5>
                                <p>{val.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="ShowcaseBannerBg"/>
        </section>
    )
}

export default ShowcaseBanner;