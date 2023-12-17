import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductHeader from './ProductHeader';
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDemo from './ProductDemo';
import ProductTryIt from './ProductTryIt';
import ProductContactUs from './ProductContactUs';
import * as ToolDetails from './ToolDetails/index.js';

const ProductInformation = () => {
  const { productName } = useParams();
  const productDetails = ToolDetails[productName][productName]
  // console.log(ToolDetails[productName][productName].title)
  useEffect(() => {
    AOS.init({
      delay: 20
    }
    );
    AOS.refresh();
  }, []);

  return (
    <>
    {/* {console.log(productData)} */}
    <section className='product-information'>
      <Container fluid>
        <Row className="bg-voilet-linear-gradient text-white">
            <ProductHeader data={{title: productDetails.title, description: productDetails.description}}/>
        </Row>
        {/* Product Overview Section */}
        <Row id="prodinfo" className='product-overview'>
          <Col>
          <div className='product-container' data-aos="fade-right">

          
            <h3>Business Case</h3>
            <ul>
            {productDetails.BusinessCase.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            </ul>
            </div>
          </Col>
        </Row>
        {/* Product Screenshots Section */}
        {/* <Row className='product-gallery'>
          <Col>
            <h2>Product Gallery</h2>
            <ProductGallery />
          </Col>
        </Row> */}
        {/*target users */}
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

        {/*business outcomes */}
        <Row className='fade-in product-overview d-flex justify-content-center' data-aos="fade-right">
        <h3>Business Outcomes</h3>
        {productDetails.businessOutcomes.map((outcome, index) => (
          <Col key={outcome.name} md={3}>
             <div key={index} className="square fixed-dimensions mb-4">
               <div>
                  <div className="fade-in icon-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {outcome.icon}
                  </div>
                 <b style={{fontSize: "0.7rem",}}>{outcome.outcome}</b>
                 <p style={{fontSize: "0.7rem"}}>{outcome.caption}</p>
               </div>
             </div>
          </Col>
            ))}
          
        </Row>

          {/*Solution Highlights​ */}
          <Row id="prodinfo" className='product-overview' data-aos="fade-left">
            <Col>
            <div className='product-container' >
              <h3>Solution Highlights​</h3>
                <ul>
                  {productDetails.solutionHighlights.map((highlights, index) => (
                    <li key={index}>{highlights}</li>
                  ))}
                </ul>
            </div>
          </Col>
        </Row>
        {/*Summary */}
        <Row id="prodinfo" className='product-overview'>
          <h3>Summary</h3>
          {productDetails.summary.map((highlights, index) => (
            index % 2 === 0 ? (
              <Row key={index}>
                <Col data-aos="fade-right">
                  <div className='product-container'>
                    <h4>{highlights.title}</h4>
                    <ul>
                      {highlights.details.map((highlights, index) => (
                      <li key={index}>{highlights}</li>
                     ))}
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="icon-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {highlights.icon}
                  </div>
                </Col>
              </Row>
            ) : (
              <Row key={index}>
                <Col>
                  <div className="icon-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {highlights.icon}
                  </div>
                </Col>
                <Col data-aos="fade-left">
                  <div className='product-container'>
                    <h4>{highlights.title}</h4>
                    <ul>
                      {highlights.details.map((highlights, index) => (
                      <li key={index}>{highlights}</li>
                     ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            )
          ))}
        </Row>
      </Container>
    </section>
    <ProductDemo link={productDetails.demo.link}/>
    <ProductTryIt />
    <ProductContactUs />
    </>
  );
};

export default ProductInformation;
