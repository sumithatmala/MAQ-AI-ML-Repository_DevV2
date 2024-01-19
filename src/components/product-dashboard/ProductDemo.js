// ProductDemo.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Media, Video } from '@vidstack/player-react';

const ProductDemo = (props) => {
  console.log(props.link.demoVideo)
  return (
    <section id="demo" className="product-information" style={{paddingTop: "2%", backgroundColor: "white"}}>
      <Container fluid>
        <Row className='product-overview'>
          <Col>
            <h2>Product Demo</h2>
            <p>Watch our demo video to see the product in action.</p>
          </Col>
        </Row>
        <Row className='product-content'>
          <Col>
          <Media>
            <Video loading="visible" controls preload="true">
              <video loading="visible"  src={props.link.demoVideo} preload="none" data-video="0" controls />
            </Video>
          </Media>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDemo;
  