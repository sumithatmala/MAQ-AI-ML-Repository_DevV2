import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductTryIt = (props) => {
  return (
    <section id="tryit" className='product-information' style={{paddingTop: "2%", backgroundColor: "white", height: "100%"}}>
    <Container fluid>
      <Row className='product-overview'>
        <Col>
            <h2>{props.items} Tool Showcase</h2>
        </Col>
      </Row>
      <Row className='product-content'>
        <Col>
        <MDBContainer>
            <iframe
                title="Scikit-Learn Tool"
                width="100%"
                height="700vh"
                src="https://onecompiler.com/python/3wz7uns6h"
                frameborder="0"
                allowfullscreen
                style={{border: "3px outset #adb5bd"}}
            ></iframe>
        </MDBContainer>
        </Col>
    </Row>
    </Container>
    </section>
  );
};

export default ProductTryIt;
