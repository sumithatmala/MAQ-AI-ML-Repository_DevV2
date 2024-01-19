import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductGallery from './ProductGallery';
import ProductHeader from './ProductHeader';
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDemo from './ProductDemo';
import ProductTryIt from './ProductTryIt';
import ProductContactUs from './ProductContactUs';
// import * as ToolDetails from './ToolDetails/index.js';
import './css/target-users.css'
import FAQs from './FAQs';
import AnimatedDevelopment from './AnimatedDevelopment';
import AnimatedOutcome from './AnimatedOutcome';
import AnimatedSolution from './AnimatedSolution';
import Highlights from './images/highlights.png'


const ProductInformation = () => {
  const [productDetails, setproductDetails] = useState(null);
  const { productName } = useParams();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  useEffect(() => {
    console.log(productName)
    AOS.init({
      delay: 20
    }
    );
    AOS.refresh();
    import(`./ToolDetails/${productName}.js`)
      .then((module) => {
        setproductDetails(module.default);

      })
      .catch((error) => {
        console.error(`Error loading ${productName}.js:`, error);
      });
  }, [productName]);

  if (!productDetails) {
    // Loading state or alternative content
    return <div style={{height: "100vh"}}>Loading...</div>;
  }

 

  return (
    <>
      <section className='product-information'>
        <Container fluid>
          <Row className="bg-voilet-linear-gradient text-white">
            <ProductHeader data={{title: productDetails.title, description: productDetails.description}}/>
          </Row>
          {/* Product Overview Section */}
          {productDetails.BusinessCase && productDetails.BusinessCase.length > 0 && (
            <Row id="prodinfo" className='product-overview'>
              <Col>
                <div className='shadow-container' data-aos="fade-right">


                  <h3>Business Case</h3>
                    {productDetails.BusinessCase.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                </div>
              </Col>
            </Row>
          )}
          {/* Product Screenshots Section */}
          {productDetails.gallery && (
            <Row className='product-gallery' >
              <Col>
                <h2>Product Gallery</h2>
                <ProductGallery images={productDetails.gallery}/>
              </Col>
            </Row>
          )}
          {/*target users */}
          {productDetails.targetUsers && productDetails.targetUsers.length > 0 && (
              <section class="target-section" style={{backgroundColor: "white"}}>
                <div class="target__inner">
                  <h2 class="head-block-center">Target Users</h2>
                  <div class="target__list">
                    {productDetails.targetUsers.map((user, index) => (
                      <div key={index} class="target__list-item">
                        <div class="target__item">
                          <div class="target__item-icon"> 
                  {user.icon}
                  </div>
                          <h3 class="target__item-title">{user.name}</h3>
                          <div class="target__item-text">{user.caption}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          {/* {productDetails.targetUsers && productDetails.targetUsers.length > 0 && (
        <Row className='product-overview d-flex justify-content-center' data-aos="fade-left">
        <h3>Target Users</h3>
        {productDetails.targetUsers.map((user, index) => (
          <Col key={user.name} md={3}>
             <div key={index} className="square fixed-dimensions mb-4">
               <div>
                  <div className="icon-container" data-aos="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {user.icon}
                  </div>
                 <h5>{user.name}</h5>
                 <p style={{fontSize: "0.7rem"}}>{user.caption}</p>
               </div>
             </div>
          </Col>
            ))}
          
        </Row>
        )} */}

        {/*business outcomes */}
        {productDetails.businessOutcomes && productDetails.businessOutcomes.length > 0 && (
          <section class="target-section" style={{backgroundColor: "white"}}>
                <Row className='fade-in product-overview d-flex justify-content-center ' data-aos="fade-right" style={{backgroundColor: "white"}}>
                  <h3 class="head-block-center">Business Outcomes</h3>
                  <Slider {...settings}>
                    {productDetails.businessOutcomes.map((outcome, index) => (
                      <>
                      <div style={{ justifyContent: "center", display: "flex" }}>
                        <div key={index} className="carousal__item mb-5">
                          <div
                            className="target__item-icon"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}>
                            {outcome.icon}
                          </div>
                          <div className="target__item-title" style={{ fontSize: "0.9rem" }}>
                            {outcome.outcome}
                          </div>
                          <div className="target__item-text" style={{ fontSize: "0.7rem" }} >
                            {outcome.caption}
                          </div>
                        </div>
                      </div>
                      </>
                    ))}
                  </Slider>

                </Row>
            </section>
              )}


            {/* Solution Highlights​ */}
          {productDetails.solutionHighlights &&
            productDetails.solutionHighlights.length > 0 && (
              <Row
                id="prodinfo"
                className="product-overview"
              // data-aos="fade-left"
              // style={{ boxShadow: "none" }}
              >

                <Col data-aos="fade-left"
                  style={{ boxShadow: "none" }}>
                  <div
                    className="icon-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",

                    }}
                  >

                    <img
                      style={{ height: "350px" }}
                      // src='https://www.pinclipart.com/picdir/big/394-3941805_groundbreaking-technology-light-bulb-icon-transparent-clipart.png'
                      src = {Highlights}
                      alt="Highlights"
                    ></img>


                  </div>
                </Col>
                <Col>
                  <div className="product-container" style={{ display: "Block" }}>
                    <h3 style={{ color: 'black' }}>Solution Highlights​</h3>
                    <ul className='bulletStyle'>
                      {productDetails.solutionHighlights.map(
                        (highlights, index) => (
                          // <li key={index}>{highlights}</li>
                          <li key={index} style={{ color: "#141414", position: 'relative', paddingLeft: '1.2em' }}>
                            {/* <span style={{ position: 'absolute', left: '0em', color: "#453c90" }}>•</span>*/} {highlights}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </Col>

              </Row>
            )}

          {/*Summary */}
          {productDetails.summary && productDetails.summary.length > 0 && (
            <Row id="prodinfo" className="product-overview">
              {/* <h3>Summary</h3> */}
              {productDetails.summary.map((highlights, index) =>
                index === 0 ? (
                  <Row key={index}>
                    <Col data-aos="fade-right">
                      <div className="product-container" style={{ display: "block" }}>
                        <h4>{highlights.title}</h4>
                        <ul className='bulletStyle' style={{ padding: 0 }}>
                          {highlights.details.map((highlight, index) => (
                            <li key={index} style={{ color: "#141414", position: 'relative', paddingLeft: '1.2em' }}>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                    <Col>
                      <div
                        className="icon-container"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <AnimatedDevelopment />
                      </div>
                    </Col>
                  </Row>
                ) : index === 2 ? (
                  <Row key={index}>
                    <Col data-aos="fade-right">
                      <div className="product-container" style={{ display: "block" }}>
                        <h4>{highlights.title}</h4>
                        <ul className='bulletStyle' style={{ padding: 0 }}>
                          {highlights.details.map((highlight, index) => (
                            <li key={index} style={{ color: "#141414", position: 'relative', paddingLeft: '1.2em' }}>
                              {/* <span style={{ position: 'absolute', left: '0em', color: "#453c90" }}>•</span>  */}
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                    <Col>
                      <div
                        className="icon-container"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <AnimatedOutcome />
                      </div>
                    </Col>
                  </Row>
                )
                  : (
                    <Row key={index}>
                      <Col>
                        <div
                          className="icon-container"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          {/* {highlights.icon} */}
                          <AnimatedSolution />
                        </div>
                      </Col>
                      <Col data-aos="fade-left">
                        <div className="product-container" style={{ display: "block" }}>
                          <h4>{highlights.title}</h4>
                          <ul className='bulletStyle' style={{ padding: 0 }}>
                            {highlights.details.map((highlight, index) => (
                              <li key={index} style={{ position: 'relative', paddingLeft: '1em' }}>


                                <span style={{ color: "#141414" }}>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>





                    </Row>
                  )
              )}
            </Row>
          )}
        </Container>
      </section>
      <ProductDemo link={productDetails.demo.link}/>
      <ProductTryIt items={productDetails.title}/>
      <ProductContactUs/>
      {productDetails.FAQs && productDetails.FAQs.length > 0 && (
        <FAQs FAQs = {productDetails.FAQs}/>
      )}
    </>
  );
};

export default ProductInformation;
