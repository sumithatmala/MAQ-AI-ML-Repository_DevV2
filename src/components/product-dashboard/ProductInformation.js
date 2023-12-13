import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Accordion, Button } from 'react-bootstrap';

const ProductInformation = () => {
    const [isOpenDescription, setIsOpenDescription] = useState(false);
    const [isOpenUseCases, setIsOpenUseCases] = useState(false);
    const [isOpenTechSpecs, setIsOpenTechSpecs] = useState(false);

    const handleToggleDescription = () => {
      setIsOpenDescription(!isOpenDescription);
      setIsOpenUseCases(false);
      setIsOpenTechSpecs(false);
    };
  
    const handleToggleUseCases = () => {
      setIsOpenUseCases(!isOpenUseCases);
      setIsOpenDescription(false);
      setIsOpenTechSpecs(false);
    };
  
    const handleToggleTechSpecs = () => {
      setIsOpenTechSpecs(!isOpenTechSpecs);
      setIsOpenDescription(false);
      setIsOpenUseCases(false);
    };

    const buttonStyle = {
      color: 'black',
      borderRadius: '5px',
      marginRight: '10px',
      textDecoration: 'none',
    };

  return (
    <section class="ftco-section">
    <Container fluid  style={{paddingLeft: "15%", paddingRight: "15%"}}>
      <Row className="bg-dark text-white p-4" >
        <Col>
          <h1 className="display-4">Scikit-Learn</h1>
          <p className="lead">Powerful machine learning library for Python</p>
        </Col>
      </Row>
       {/* Product Overview Section */}
      <Row style={{paddingLeft: "15%", paddingTop: "3%", paddingRight: "15%"}}>
        <Col>
          <h2>Product Overview</h2>
          <p>
            Scikit-Learn is an open-source machine learning library in Python. It provides simple and efficient tools for data analysis and modeling. Built on NumPy, SciPy, and Matplotlib, it supports various machine learning algorithms and is widely used in the data science community.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>Classification, regression, clustering, and dimensionality reduction.</li>
            <li>Extensive collection of algorithms for machine learning tasks.</li>
            <li>Integration with other scientific computing libraries in Python.</li>
            <li>Active community and continuous development.</li>
          </ul>
        </Col>
      </Row>
      {/* Product Screenshots Section */}
      <Row style={{paddingLeft: "15%", paddingRight: "15%"}}>
        <Col>
          <h2>Product Gallery</h2>
          <Carousel className="product-gallery-carousel" style={{ width: "60%", height: "300px", overflow: "hidden"  }}>
            <Carousel.Item>
              <img className="img-thumbnail d-block w-100" src="https://www.solivatech.com/assets/uploads/media-uploader/scikit-learn1624452317.png" alt="Screenshot 1" />
              <Carousel.Caption>
                Caption for Screenshot 1.
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-thumbnail d-block w-100" src="https://i0.wp.com/pythonguides.com/wp-content/uploads/2022/01/scikit-learn-classification.png" alt="Screenshot 2" />
              <Carousel.Caption>
                Caption for Screenshot 2.
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      {/* Detailed Content Section */}
      <Row style={{paddingLeft: "15%", paddingRight: "15%"}}>
        <Col>
          <h2>Detailed Content</h2>
          <Card>
            <Card.Header>
              <Button
                variant="link"
                onClick={handleToggleDescription}
                aria-controls="description-collapse"
                aria-expanded={isOpenDescription}
                style={buttonStyle}
              >
                Description
              </Button>
            </Card.Header>
            <Accordion.Collapse in={isOpenDescription}>
              <Card.Body>
                Scikit-Learn simplifies the process of implementing machine learning algorithms. It is designed for efficiency and ease of use, making it suitable for both beginners and experienced data scientists.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Button
                variant="link"
                onClick={handleToggleUseCases}
                aria-controls="use-cases-collapse"
                aria-expanded={isOpenUseCases}
                style={buttonStyle}
              >
                Use Cases
              </Button>
            </Card.Header>
            <Accordion.Collapse in={isOpenUseCases}>
              <Card.Body>
                Scikit-Learn is used in a variety of applications, including but not limited to:
                <ul>
                  <li>Classification of email as spam or non-spam.</li>
                  <li>Predicting house prices based on features.</li>
                  <li>Image and text classification.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Button
                variant="link"
                onClick={handleToggleTechSpecs}
                aria-controls="tech-specs-collapse"
                aria-expanded={isOpenTechSpecs}
                style={buttonStyle}
              >
                Technical Specifications
              </Button>
            </Card.Header>
            <Accordion.Collapse in={isOpenTechSpecs}>
              <Card.Body>
                System Requirements:
                <ul>
                  <li>Python 3.x</li>
                  <li>NumPy, SciPy, Matplotlib</li>
                </ul>
                Compatibility:
                <ul>
                  <li>Works on Windows, macOS, and Linux.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default ProductInformation;
