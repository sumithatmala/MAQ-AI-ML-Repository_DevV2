import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductGallery from "./ProductGallery";
// import ProductHeader from "./ProductHeader";
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
import { Helmet } from "react-helmet";
import solutionhigh from "./icons/SolutionHigh.svg";
import pain from "./icons/PainPoints.svg";
import howsolution from "./icons/HowSolutionHelp.svg";
import outcomes from "./icons/Outcomes.svg";
import NewBanner from "../solutions/common/NewBanner";
import "./css/button.css";

const ProductInformation = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { productName } = useParams();

  useEffect(() => {
    console.log(productName);
    AOS.init({
      delay: 20,
    });
    AOS.refresh();
    import(`./ToolDetails/${productName}.js`)
      .then((module) => {
        setProductDetails(module.default);
      })
      .catch((error) => {
        console.error(`Error loading ${productName}.js:`, error);
      });
  }, [productName]);

  if (!productDetails) {
    return <LoaderComp />;
  }

  const productSchema = {
    "@context": "http://schema.org",
    "@type": "Product",
    name: productDetails.title,
    description: productDetails.description,
    image: productDetails.img,
    brand: "MAQ Software",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: productDetails.price,
      itemCondition: "http://schema.org/NewCondition",
      availability: "http://schema.org/InStock",
    },
  };
  console.log(productDetails);
  console.log(productDetails.content);
  console.log(productDetails.img);
  return (
    <>
      <Helmet>
        <title>{productDetails.title} | MAQ Software</title>
        <meta name="title" content={productDetails.title + " | MAQ Software"} />
        <meta
          name="description"
          content={productDetails.content + " By MAQ Software"}
        />
        <meta
          name="keywords"
          content={
            productDetails.title +
            ", AI, ML,Artificial Intelligence, Machine Learning, Products"
          }
        />
        <meta name="author" content="MAQ Software" />

        <meta
          property="og:title"
          content={productDetails.title + " | MAQ Software"}
        />
        <meta
          property="og:description"
          content={productDetails.content + " By MAQ Software"}
        />
        <meta property="og:image" content={productDetails.img} />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="298" />
        <meta property="og:type" content="product" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={productDetails.title + " | MAQ Software"}
        />
        <meta
          name="twitter:description"
          content={productDetails.content + " By MAQ Software"}
        />
        <meta name="twitter:image" content={productDetails.img} />

        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <section className="product-information">
        <Container fluid>
          <Row className="bg-voilet-linear-gradient">
            <NewBanner
              data={{
                title: productDetails.title,
                content: productDetails.content,
                image: productDetails.img,
                learnMore: true,
              }}
            />
          </Row>
          {productDetails.BusinessCase &&
            productDetails.BusinessCase.length > 0 && (
              <Row
                id="learn_more_navigate"
                className="product-overview margin-adjust"
                style={{ display: "block" }}
              >
                <Col style={{ paddingTop: "2.2rem" }}>
                  <div
                    id="prodinfo"
                    className="text-block-center2"
                    data-aos="fade-right"
                    style={{ boxShadow: "none" }}
                  >
                    {productDetails.BusinessCase.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          {productDetails.gallery && (
            <Row className="product-gallery">
              <Col>
                <h2>Product Gallery</h2>
                <ProductGallery images={productDetails.gallery} />
              </Col>
            </Row>
          )}
          {productDetails.targetUsers &&
            productDetails.targetUsers.length > 0 && (
              <section
                className="target-section margin-adjust"
                style={{ backgroundColor: "white", margin: "0" }}
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
          <div className="product_carousel margin-adjust">
            <h3 className="head-block-center" style={{ marginTop: "30px" }}>
              Business Outcomes
            </h3>
            <CustomerSuccess
              items={productDetails.businessOutcomes}
              CardHeight={"230px"}
              autoPlay={false}
              centerUp={true}
              style={{ marginBottom: "0px", paddingBottom: "5rem" }}
            />
          </div>
          <section className="bannerCenter margin-adjust">
            {productDetails.solutionHighlights &&
              productDetails.solutionHighlights.length > 0 && (
                <Row
                  id="prodinfo"
                  className="product-overview sol margin-adjust"
                >
                  <Col
                    className="prodinfor_highlights"
                    style={{ boxShadow: "none" }}
                  >
                    <div
                      className="icon-container"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div className="icons_res">
                        <img src={solutionhigh} alt="img" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div
                      className="product-container"
                      data-aos="fade-left"
                      style={{ display: "Block" }}
                    >
                      <h4 className="heading-size">Solution Highlights</h4>
                      <ul className="bulletStyle">
                        {productDetails.solutionHighlights.map(
                          (highlights, index) => (
                            <li
                              key={index}
                              style={{
                                color: "#141414",
                                position: "relative",
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
            {productDetails.summary && productDetails.summary.length > 0 && (
              <>
                <Row id="prodinfo" className="product-overview ">
                  <div
                    className="sum"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {productDetails.summary.map((highlights, index) =>
                      index === 0 ? (
                        <Row
                          key={index}
                          style={{
                            margin: "2rem 10px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="margin-adjust"
                        >
                          <Col data-aos="fade-right">
                            <div
                              className="product-container"
                              style={{ display: "block" }}
                            >
                              <h4 className="heading-size">
                                {highlights.title}
                              </h4>
                              <ul className="bulletStyle">
                                {highlights.details.map((highlight, index) => (
                                  <li
                                    key={index}
                                    style={{
                                      color: "#141414",
                                      position: "relative",
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
                                <img src={pain} alt="img" />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ) : index === 2 ? (
                        <Row
                          key={index}
                          style={{
                            margin: "2rem 10px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Col data-aos="fade-right">
                            <div
                              className="product-container"
                              style={{ display: "block" }}
                            >
                              <h4 className="heading-size">
                                {highlights.title}
                              </h4>
                              <ul className="bulletStyle">
                                {highlights.details.map((highlight, index) => (
                                  <li
                                    key={index}
                                    style={{
                                      color: "#141414",
                                      position: "relative",
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
                                <img src={outcomes} alt="img" />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ) : (
                        <Row
                          key={index}
                          className="row2 margin-adjust"
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            overflowX: "hidden",
                            margin: "2rem 10px",
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
                                <img src={howsolution} alt="img" />
                              </div>
                            </div>
                          </Col>
                          <Col data-aos="fade-left">
                            <div
                              className="product-container"
                              style={{ display: "block" }}
                            >
                              <h4 className="heading-size">
                                {highlights.title}
                              </h4>
                              <ul className="bulletStyle">
                                {highlights.details.map((highlight, index) => (
                                  <li
                                    key={index}
                                    style={{
                                      position: "relative",
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
      <div id="demo" style={{ marginTop: "-40px" }}></div>
      <ProductDemo link={productDetails.demo.link} />
      <div id="tryit" style={{ marginTop: "-40px" }}></div>
      <ProductTryIt
        items={productDetails.title}
        link={productDetails.tryit.link}
      />
      {productDetails.FAQs && productDetails.FAQs.length > 0 && (
        <>
          <FAQs FAQs={productDetails.FAQs} />
        </>
      )}
      <ContactForm />
    </>
  );
};

export default ProductInformation;
