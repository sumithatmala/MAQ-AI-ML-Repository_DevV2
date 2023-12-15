
import React, { useEffect } from 'react';
import "./product-banner.css";
import ProductBackground from './images/product-banner-2.jpg'
import './button.css'
import AOS from "aos";
import "aos/dist/aos.css";
// import mouseIcon from "./images/mouse-icon.png"
// import downArrow from "./images/down-arow.png"


const ProductHeader = () => {
    
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
                        <div style={{fontFamily:"segoe UI",fontSize:"60px",fontWeight:"600"}}>Scikit-Learn</div>
                        </div>
                        <p className="mt-3" data-aos="zoom-in" data-aos-delay="1000" style={{fontFamily:"segoe UI",color:"#fff"}}>
                            Powerful machine learning library for Python
                        </p>
                    </div>
                </div>
                {/* Reach out button */}
                {/* <div className="reach-out mt-4 fade-up3 ml-3 justify-content-end">
                    Reach out to learn more
                </div> */}
                <div id="container" className="row justify-content-center">
                {/* <a href="./#prodinfo"> */}
                    <button class="learn-more" >
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text" style={{paddingLeft: "12px"}}>Learn More</span>
                    </button>
                {/* </a> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductHeader