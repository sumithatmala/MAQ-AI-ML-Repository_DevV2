// ProductDemo.jsx
import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductDemo = (props) => {
  return (
    <section id="demo" class="product-information">
    <Container fluid>
        <Row className='product-overview'>
        <Col>
            <h2>Product Demo</h2>
          <p>Watch our demo video to see the product in action.</p>
        </Col>
      </Row>
      <Row className='product-content'>
        <Col>
          <MDBContainer>
            <div className="ratio ratio-16x9">
                <iframe
                src= {props.link}
                title="Scikit-Learn"
                allowfullscreen
                style={{ width: "100%", height: "80%",paddingTop: "5%", }}
                ></iframe>
            </div>
            </MDBContainer>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default ProductDemo;
