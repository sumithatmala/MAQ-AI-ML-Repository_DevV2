import { Link } from "react-router-dom";
import "./css/showcaseBanner.css"
import { useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import { VscArrowCircleRight } from "react-icons/vsc";

const ShowcaseBanner = (props) => {
    const [data, setData] = useState(props.item1);
    const [toggle, setToggle] = useState(true);
    return (
        <section className="ShowcaseBannerCnt">
            <div className="ShowcaseBannerTitle">
                <div className="ShowcaseBannerheader">
                    <h3>
                        {data.heading} 
                        <button
                            onClick={() => {
                                toggle ? (setData(props.item2)) : (setData(props.item1));
                                setToggle(!toggle);
                            }}
                            className="ShowcaseBannerNavigate" >
                            <VscArrowCircleRight/>
                        </button>
                    </h3>
                    <p>{data.desc}</p>
                </div>
                <div className="ShowcaseBannerGrid">
                    {data.title.map((val) => {
                        return (
                            <div className="ShowcaseBanerCard">
                                <h5>
                                    <Link to={val.link}>{val.heading} <RxArrowRight className="ShowcaseBannerArrow" /></Link>
                                </h5>
                                <p>{val.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="ShowcaseBannerBg" />
        </section>
    )
}

export default ShowcaseBanner;