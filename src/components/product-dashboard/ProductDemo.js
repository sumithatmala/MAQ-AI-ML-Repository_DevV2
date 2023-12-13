// ProductDemo.jsx
import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

const ProductDemo = () => {
  return (
    <section class="ftco-section">
    <Container fluid style={{paddingLeft: "15%", paddingRight: "15%"}}>
        <Row className="bg-dark text-white p-4" >
        <Col>
          <h1 className="display-4">Scikit-Learn</h1>
          <p className="lead">Powerful machine learning library for Python</p>
        </Col>
      </Row>
        <Row style={{paddingLeft: "15%", paddingTop: "3%", paddingRight: "15%"}}>
        <Col>
            <h2>Product Demo</h2>
          <p>Watch our demo video to see the product in action.</p>
        </Col>
      </Row>
      <Row style={{paddingLeft: "15%",  paddingRight: "15%"}}>
        <Col>
          <MDBContainer>
            <div className="ratio ratio-16x9">
                <iframe
                src="https://media.istockphoto.com/id/1459392381/video/time-lapse-of-passenger-walking-and-running-on-escalator-in-rush-hour.mp4?s=mp4-640x640-is&k=20&c=tF-Zlbhb731ZvCEszW-EgBgPYvD_g_CMAh7N1jJhqzM="
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
