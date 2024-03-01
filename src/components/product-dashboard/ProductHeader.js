
import React, { useEffect } from 'react';
import "./css/product-banner.css";
import ProductBackground from './images/product-banner-2.jpg'
import './css/button.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const ProductHeader = (props) => {
    const data = props.data
    useEffect(() => {
        AOS.init({

        }

        );
        AOS.refresh();
    }, []);
    return (
        <>
            <section id="productbanner" className="hero">
                <img src={ProductBackground} alt="" className="hero-img" />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-5">
                            <div data-aos="zoom-in" data-aos-delay="500">
                                <div style={{ fontFamily: "segoe UI", fontSize: "50px", fontWeight: "600" }}>{data.title}</div>
                            </div>
                            <p className="mt-3" data-aos="zoom-in" data-aos-delay="1000" style={{ fontFamily: "segoe UI", color: "#fff" }}>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    {/* Reach out button */}
                    {/* <div className="reach-out mt-4 fade-up3 ml-3 justify-content-end">
                    Reach out to learn more
                </div> */}
                    <div id="container" className="row justify-content-center" style={{marginTop: "2rem"}}>
                        <HashLink
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
                        </HashLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductHeader