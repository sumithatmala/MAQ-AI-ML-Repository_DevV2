import { Link } from "react-router-dom";
import "./css/showcaseBanner.css"
import { useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import navIcon from "./img/navigateIcon.svg"

const ShowcaseBanner = (props) => {
    const [data, setData] = useState(props.item1);
    const [toggle, setToggle] = useState(true);
    return (
        <section className="NavBannermain">
            <div className="work-section">
                <h2>Our Work</h2>
            </div>
            <div className="work-container">
                <div className="NavBannerTitle">
                    <div className="NavBannerheader">
                        <h3>{data.heading} <button
                            onClick={() => {
                                toggle ? (setData(props.item2)) : (setData(props.item1));
                                setToggle(!toggle);
                            }}
                            className="NavBannerNavigate" >
                            <img src={navIcon} alt="#" />
                        </button></h3>
                        <p>{data.desc}</p>
                    </div>
                    <div className="NavBannerGrid">
                        {data.title.map((val) => {
                            return (
                                <div className="NavBanerCard">
                                    <h5>
                                        <Link to={val.link}>{val.heading} <RxArrowRight className="ShowcaseBannerArrow" /></Link>
                                    </h5>
                                    <p>{val.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="NavBannerBg" />
            </div>
        </section>
    )
}

export default ShowcaseBanner;