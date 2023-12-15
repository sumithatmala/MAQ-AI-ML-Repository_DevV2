import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductTryIt = () => {
  return (
    <section className='product-information' style={{paddingTop: "60px"}}>
    <Container fluid>
        <Row className="product-header  bg-voilet-linear-gradient text-white p-4" >
        <Col>
          <h1 className="display-4">Scikit-Learn</h1>
          <p className="lead">Powerful machine learning library for Python</p>
        </Col>
      </Row>
      <Row className='product-overview'>
        <Col>
            <h2>Scikit-Learn Tool Showcase</h2>
        </Col>
      </Row>
      <Row className='product-content'>
        <Col>
        <MDBContainer>
            <iframe
                title="Scikit-Learn Tool"
                width="100%"
                height="600"
                src="https://onecompiler.com/python/3wz7uns6h"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </MDBContainer>
        </Col>
    </Row>
    </Container>
    </section>
  );
};

export default ProductTryIt;
