import React from "react";
import './css/NewBanner.css';

const NewBanner = (props) => {
    const { title, content, image } = props.data;
    return(
        <>
        <section className="bannerbody">
            <div className="backImg" >
            {/* <img src={props.backImage} alt="backgroundImage" className="bgImage" /> */}
            <div className="container container_newBanner">
                <div className="banner_content">
                    <h2>{title} </h2>
                    <p> {content} </p>
                </div>
                <div className="banner_image"> <img src={image} alt="bannerImage" /> </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default NewBanner;