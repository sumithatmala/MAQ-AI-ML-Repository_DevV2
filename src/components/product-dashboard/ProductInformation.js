import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductHeader from './ProductHeader';
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDemo from './ProductDemo';
import ProductTryIt from './ProductTryIt';
import ProductContactUs from './ProductContactUs';
// import * as ToolDetails from './ToolDetails/index.js';
import './target-users.css'

const ProductInformation = () => {
  const [productDetails, setproductDetails] = useState(null);
  const { productName } = useParams();
  
  console.log(productDetails)
  useEffect(() => {
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
        console.error('Error loading dynamicContent.js:', error);
      });
  }, []);

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
        )}
        {/* Product Screenshots Section */}
        {productDetails.gallery && (
        <Row className='product-gallery'>
          <Col>
            <h2>Product Gallery</h2>
            <ProductGallery images={productDetails.gallery}/>
          </Col>
        </Row>
        )}
        {/*target users */}
        {productDetails.targetUsers && productDetails.targetUsers.length > 0 && (
        <section class="target-section">
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
        )}

          {/*Solution Highlights​ */}
          {productDetails.solutionHighlights && productDetails.solutionHighlights.length > 0 && (
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
          )}
        {/*Summary */}
        {productDetails.summary && productDetails.summary.length > 0 && (
        <Row id="prodinfo" className='product-overview'>
          <h3>Summary</h3>
          {productDetails.summary.map((highlights, index) => (
            index % 2 === 0 ? (
              <Row key={index}>
                <Col data-aos="fade-right">
                  <div className='product-container'>
                    <h4>{highlights.title}</h4>
                    <ul>
                      {console.log(highlights)}
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
        )}
      </Container>
    </section>
    <ProductDemo link={productDetails.demo.link}/>
    <ProductTryIt items={productDetails.title}/>
    <ProductContactUs />
    </>
  );
};

export default ProductInformation;
