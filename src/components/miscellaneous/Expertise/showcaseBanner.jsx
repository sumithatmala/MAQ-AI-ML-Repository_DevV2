import { Link } from "react-router-dom";
import "./css/showcaseBanner.css"
import { useState } from "react";
import { RxArrowRight } from "react-icons/rx";
// import { VscArrowCircleRight } from "react-icons/vsc";
// import { BiChevronRightCircle } from "react-icons/bi";
// import { CiCircleChevRight } from "react-icons/ci";
import { TfiArrowCircleRight } from "react-icons/tfi";

const ShowcaseBanner = (props) => {
    const [data, setData] = useState(props.item1);
    const [toggle, setToggle] = useState(true);
    return (
        <section className="ShowcaseBannerCnt margin-adjust">
            <div className="ShowcaseBannerTitle">
                <div className="ShowcaseBannerheader">
                    <button onClick={() => {
                        toggle ? (setData(props.item2)) : (setData(props.item1));
                        setToggle(!toggle);
                    }}>
                        <div className="heading-container">
                            <h3>{data.heading}</h3>
                            <TfiArrowCircleRight className="ShowcaseBannerNavigate" />
                        </div>
                    </button>
                    <p>{data.desc}</p>
                </div>
                <div className="ShowcaseBannerGrid">
                    {data.title.map((val, index) => {
                        return (
                            <div className="ShowcaseBanerCard" key={index}>
                                <h5>
                                    <Link to={val.link}>{val.heading} <RxArrowRight className="ShowcaseBannerArrow" /></Link>
                                </h5>
                                <p>{val.desc}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="navigation-dots">
                    <div className={toggle?"dot filled":"dot"}></div>
                    <div className={toggle?"dot":"dot filled"}></div>
                </div>
            </div>
            {/* <div className="ShowcaseBannerBg">
                    <img src=""></img>
                </div> */}
        </section>
    )
}

export default ShowcaseBanner;