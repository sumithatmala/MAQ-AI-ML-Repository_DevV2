import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductGallery from "./ProductGallery";
import ProductHeader from "./ProductHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDemo from "./ProductDemo";
import ProductTryIt from "./ProductTryIt";
import "./css/target-users.css";
import FAQs from "./FAQs";
import ContactForm from "../solutions/common/contactForm";
import CustomerSuccess from "../solutions/common/CustomerSuccess";
import LoaderComp from "../views/LoaderComp";
import GridOfCards from "../solutions/common/GridOfCards";

import solutionhigh from './icons/SolutionHigh.svg'
import pain from './icons/PainPoints.svg'
import howsolution from './icons/HowSolutionHelp.svg'
import outcomes from './icons/Outcomes.svg';

// import "./css/target-user2.css"

const ProductInformation = () => {
  const [productDetails, setproductDetails] = useState(null);
  const { productName } = useParams();

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
                className="target-section"
                style={{
                  backgroundColor: "white",
                  paddingTop: "50px",
                  margin: "0",
                }}
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
          <div className="product_carousel">
          <h3 className="head-block-center" style={{marginTop:"30px"}}>Business Outcomes</h3>
          <CustomerSuccess
            items={productDetails.businessOutcomes}
            CardHeight={"230px"}
            // autoPlay={true}
            autoPlay={false}
            centerUp={true}
            style={{ marginBottom: "0px", paddingBottom: "5rem" }}
          />
          </div>

          {/* Solution Highlights​ */}
          <section className="bannerCenter">
            {productDetails.solutionHighlights &&
              productDetails.solutionHighlights.length > 0 && (
                <Row id="prodinfo" className="product-overview sol">
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
                        {/* <AnimatedHighlights /> */}
                        <img src={solutionhigh} />
                      </div>
                    </div>
                  </Col>
                  <Col style={{}}>
                    <div
                      className="product-container"
                      data-aos="fade-left"
                      style={{ display: "Block" }}
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
                 
                  <div
                    className="sum"
                    style={{
                      margin: "1rem 10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {productDetails.summary.map((highlights, index) =>
                      index === 0 ? (
                        <Row
                          key={index}
                          style={{
                            margin: "6rem 10px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
                                {/* <AnimatedDevelopment /> */}
                                <img src={pain} />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ) : index === 2 ? (
                        <Row
                          key={index}
                          style={{
                            margin: "6rem 10px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
                                {/* <AnimatedOutcome /> */}
                                <img src={outcomes} />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ) : (
                        <Row
                          key={index}
                          className="row2"
                          style={{
                            margin: "6rem 10px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
                                {/* <AnimatedSolution /> */}
                                <img src={howsolution} />
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
        <div style={{marginTop: "30px"}}>
        <FAQs FAQs={productDetails.FAQs} />
        </div>
      )}
      <ContactForm />
    </>
  );
};

export default ProductInformation;
