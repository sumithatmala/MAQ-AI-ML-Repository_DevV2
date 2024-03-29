import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductTryIt = ({ items, link }) => {
  return (
    <section id="tryit" className='product-information' style={{ paddingTop: "2%", backgroundColor: "white", height: "100%" , textAlign:"center"}}>
      <Container fluid>
        <Row className='product-overview'>
          <Col>
            <h2>{items} Tool Showcase</h2>
          </Col>
        </Row>
        <Row className='product-content'>
          <Col>
            <MDBContainer>
              {link ? (
                <iframe
                  title="Scikit-Learn Tool"
                  width="100%"
                  height="700vh"
                  src={link}
                  frameBorder="0"
                  allowFullScreen
                  style={{ border: "3px outset #adb5bd" }}
                ></iframe>
              ) : (
                <div>
                  <p>Sorry, the tool showcase is currently unavailable.</p>
                </div>
              )}
            </MDBContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTryIt;
