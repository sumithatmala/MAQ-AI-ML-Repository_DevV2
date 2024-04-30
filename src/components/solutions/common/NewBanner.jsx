import React from "react";
import './css/NewBanner.css';
import { HashLink } from 'react-router-hash-link';

const NewBanner = (props) => {
    const { title, content, image, learnMore } = props.data;
    return (
        <section className="bannerbody">
            <div className="backImg" >
                {/* <img src={props.backImage} alt="backgroundImage" className="bgImage" /> */}
                <div className="container container_newBanner">
                    <div className="banner_content">
                        <h2>{title} </h2>
                        <p> {content} </p>
                        {learnMore?<HashLink
                            to={"./#prodinfo"}
                            style={{
                                textAlign: "center",
                                display: "inline-block",
                                width: "fit-content",
                            }}>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text" style={{ paddingLeft: "12px" }}>Learn More</span>
                            </button>
                        </HashLink>:<></>}
                    </div>
                    <div className="banner_image"> <img src={image} alt="bannerImage" /> </div>
                </div>
            </div>
        </section>
    )
}

export default NewBanner;