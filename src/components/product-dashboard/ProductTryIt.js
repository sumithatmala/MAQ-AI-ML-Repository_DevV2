import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductTryIt = () => {
  return (
    <section id="tryit" className='product-information'>
    <Container fluid>
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
