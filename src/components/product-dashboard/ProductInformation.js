import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductGallery from "./ProductGallery";
import ProductHeader from "./ProductHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDemo from "./ProductDemo";
import ProductTryIt from "./ProductTryIt";
import ProductContactUs from "./ProductContactUs";
import "./css/target-users.css";
import FAQs from "./FAQs";
import ContactForm from "../solutions/common/contactForm";
import CustomerSuccess from "../solutions/common/CustomerSuccess"

import AnimatedDevelopment from "./icons/AnimatedDevelopment";
import AnimatedOutcome from "./icons/AnimatedOutcome";
import AnimatedSolution from "./icons/AnimatedSolution";

import AnimatedHighlights from "./icons/AnimatedHighlights";
import LoaderComp from "../views/LoaderComp";
import GridOfCards from "../solutions/common/GridOfCards";
import AlternateBanner from "../solutions/common/alternateBanner";

const ProductInformation = () => {
  const [productDetails, setproductDetails] = useState(null);
  const { productName } = useParams();

  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    autoplaySpeed: 5000,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    console.log(productName);
    AOS.init({
      delay: 20,
    });
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
    return <LoaderComp />;
  }

  return (
    <>
      <section className="product-information">
        <Container fluid>
          <Row className="bg-voilet-linear-gradient text-white">
            <ProductHeader
              data={{
                title: productDetails.title,
                description: productDetails.description,
              }}
            />
          </Row>
          {/* Product Overview Section */}
          {productDetails.BusinessCase &&
            productDetails.BusinessCase.length > 0 && (
              <Row id="prodinfo" className="product-overview">
                <Col>
                  <div
                    className="text-block-center2"
                    data-aos="fade-right"
                    style={{ boxShadow: "none", paddingLeft: "40px" }}
                  >
                    {productDetails.BusinessCase.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          {/* Product Screenshots Section */}
          {productDetails.gallery && (
            <Row className="product-gallery">
              <Col>
                <h2>Product Gallery</h2>
                <ProductGallery images={productDetails.gallery} />
              </Col>
            </Row>
          )}
          {/*target users */}
          {productDetails.targetUsers &&
            productDetails.targetUsers.length > 0 && (
              <section
                class="target-section"
                style={{ backgroundColor: "white" , paddingTop:"50px", margin:"0"}}
              >
                <GridOfCards
                  items={{
                    item: productDetails.targetUsers,
                    NoCards: 4,
                    title: "Target Users",
                  }}
                />
              </section>
            )}

          {/*business outcomes */}
          <CustomerSuccess items={productDetails.businessOutcomes} CardHeight={"230px"} style={{marginBottom: "0px", paddingBottom:"5rem"}}/>
          {/* {productDetails.businessOutcomes &&
            productDetails.businessOutcomes.length > 0 && (
              <section
                class="target-section"
                style={{ backgroundColor: "white" }}
              >
                <Row
                  className="slick-list3 draggable fade-in product-overview d-flex justify-content-center"
                  style={{ backgroundColor: "white" }}
                >
                  <h3 class="head-block-center">Business Outcomes</h3>
                  <Slider
                    {...settings}
                    style={{ backgroundColor: "", padding: "0 20px" }}
                  >
                    {productDetails.businessOutcomes.map((outcome, index) => (
                      <div
                        key={index}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          display: index === 0 ? "flex" : "none", // Only display the first slide
                          width: "100%", // Set the width to 100%
                        }}
                      >
                        <div className="carousal__item mb-6 mt-7">
                          <div
                            className="target__item-icon"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            {outcome.icon}
                          </div>
                          <div className="target__item-title">
                            {outcome.outcome}
                          </div>
                          <div className="target__item-text">
                            {outcome.caption}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Row>
              </section>
            )} */}

          {/* Solution Highlights​ */}
          <section className="bannerCenter">
            {productDetails.solutionHighlights &&
              productDetails.solutionHighlights.length > 0 && (
                <Row id="prodinfo" className="product-overview sol">
                  {/* <AlternateBanner banners={productDetails.solutionHighlights1} ContactBtn={false} /> */}
                  <Col style={{ boxShadow: "none" }}>
                    <div
                      className="icon-container"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div className="icons_res">
                        <AnimatedHighlights />
                      </div>
                    </div>
                  </Col>
                  <Col style={{}}>
                    <div
                      className="product-container"
                      data-aos="fade-left"
                      style={{ display: "Block"}}
                    >
                      <h3 style={{ color: "black" }}>Solution Highlights</h3>
                      <ul className="bulletStyle">
                        {productDetails.solutionHighlights.map(
                          (highlights, index) => (
                            <li
                              key={index}
                              style={{
                                color: "#141414",
                                position: "relative",
                                paddingLeft: "1.2em",
                              }}
                            >
                              {highlights}
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
              <>
                <Row id="prodinfo" className="product-overview">
                  {/* <AlternateBanner banners={productDetails.summary1} ContactBtn={false} /> */}
                  <div className="sum" style={{margin: "4rem 10px",alignItems:"center", justifyContent:"center"}}>
                  {productDetails.summary.map((highlights, index) =>
                    index === 0 ? (
                      <Row key={index} style={{margin: "6rem 10px",alignItems:"center", justifyContent:"center"}}>
                        <Col data-aos="fade-right">
                          <div
                            className="product-container"
                            style={{ display: "block" }}
                          >
                            <h3>{highlights.title}</h3>
                            <ul className="bulletStyle">
                              {highlights.details.map((highlight, index) => (
                                <li
                                  key={index}
                                  style={{
                                    color: "#141414",
                                    position: "relative",
                                    paddingLeft: "1.2em",
                                  }}
                                >
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
                            <div className="icons_res">
                              <AnimatedDevelopment />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    ) : index === 2 ? (
                      <Row key={index} style={{margin: "6rem 10px",alignItems:"center", justifyContent:"center"}}>
                        <Col data-aos="fade-right">
                          <div
                            className="product-container"
                            style={{ display: "block" }}
                          >
                            <h3>{highlights.title}</h3>
                            <ul className="bulletStyle">
                              {highlights.details.map((highlight, index) => (
                                <li
                                  key={index}
                                  style={{
                                    color: "#141414",
                                    position: "relative",
                                    paddingLeft: "1.2em",
                                  }}
                                >
                                  {" "}
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
                            <div className="icons_res">
                              <AnimatedOutcome />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    ) : (
                      <Row key={index} className="row2" style={{margin: "6rem 10px",alignItems:"center", justifyContent:"center"}}>
                        <Col>
                          <div
                            className="icon-container"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div className="icons_res">
                              <AnimatedSolution />
                            </div>
                          </div>
                        </Col>
                        <Col data-aos="fade-left">
                          <div
                            className="product-container"
                            style={{ display: "block" }}
                          >
                            <h4>{highlights.title}</h4>
                            <ul className="bulletStyle">
                              {highlights.details.map((highlight, index) => (
                                <li
                                  key={index}
                                  style={{
                                    position: "relative",
                                    paddingLeft: "1em",
                                  }}
                                >
                                  <span style={{ color: "#141414" }}>
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    )
                  )}
                  </div>
                </Row>
              </>
            )}
          </section>
        </Container>
      </section>
      <ProductDemo link={productDetails.demo.link} />
      <ProductTryIt
        items={productDetails.title}
        link={productDetails.tryit.link}
      />
      {/* <ProductContactUs /> */}
      {productDetails.FAQs && productDetails.FAQs.length > 0 && (
        <FAQs FAQs={productDetails.FAQs} />
        )}
        <ContactForm/>
    </>
  );
};

export default ProductInformation;
