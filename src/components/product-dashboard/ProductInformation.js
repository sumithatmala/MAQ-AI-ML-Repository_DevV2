import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../../css/style.css'

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

  return (
    <body>
    <section className='product-information'>
      <Container fluid>
        <Row className="product-header bg-voilet-linear-gradient text-white p-4">
          <Col>
            <h1 className="display-4">Scikit-Learn</h1>
            <p className="lead">Powerful machine learning library for Python</p>
          </Col>
        </Row>
        {/* Product Overview Section */}
        <Row className='product-overview'>
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
        <Row className='product-gallery'>
          <Col>
            <h2>Product Gallery</h2>
            <ProductGallery />
          </Col>
        </Row>
        {/* Detailed Content Section */}
        <Row className='product-content'>
          <Col>
            <h2>Detailed Content</h2>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Button
                  variant="link"
                  onClick={handleToggleDescription}
                  aria-controls="description-collapse"
                  aria-expanded={isOpenDescription}
                  className='product-info-button'
                  style={{width: "100%",textAlign: "left"}}
                >
                  Description
                </Button>
                <span>{isOpenDescription ? <ExpandLessIcon /> : <ExpandMoreIcon /> }</span>
              </Card.Header>
              <Accordion.Collapse in={isOpenDescription}>
                <Card.Body>
                  Scikit-Learn simplifies the process of implementing machine learning algorithms. It is designed for efficiency and ease of use, making it suitable for both beginners and experienced data scientists.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Button
                  variant="link"
                  onClick={handleToggleUseCases}
                  aria-controls="use-cases-collapse"
                  aria-expanded={isOpenUseCases}
                  className='product-info-button'
                  style={{width: "100%",textAlign: "left"}}
                >
                  Use Cases
                </Button>
                <span>{isOpenUseCases ? <ExpandLessIcon /> : <ExpandMoreIcon /> }</span>
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
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Button
                  variant="link"
                  onClick={handleToggleTechSpecs}
                  aria-controls="tech-specs-collapse"
                  aria-expanded={isOpenTechSpecs}
                  className='product-info-button'
                  style={{width: "100%",textAlign: "left"}}
                >
                  Technical Specifications
                </Button>
                <span>{isOpenTechSpecs ? <ExpandLessIcon /> : <ExpandMoreIcon /> }</span>
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
    </body>
  );
};

export default ProductInformation;
