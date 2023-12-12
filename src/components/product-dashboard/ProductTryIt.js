import React from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductTryIt = () => {
  return (
    <Container fluid style={{paddingTop: "3%"}}>
        <Row className="bg-dark text-white p-4" >
        <Col>
          <h1 className="display-4">Scikit-Learn</h1>
          <p className="lead">Powerful machine learning library for Python</p>
        </Col>
      </Row>
      <Row style={{paddingLeft: "15%", paddingTop: "3%", paddingRight: "15%"}}>
        <Col>
            <h2>Scikit-Learn Tool Showcase</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <MDBContainer>
            <iframe
                title="Scikit-Learn Tool"
                width="800"
                height="600"
                src="https://example.com/scikit-learn-tool"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </MDBContainer>
        </Col>
    </Row>
    </Container>
  );
};

export default ProductTryIt;
