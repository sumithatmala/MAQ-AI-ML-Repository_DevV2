// import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ProductGallery from './ProductGallery';
// import '../../css/style.css'

const ProductInformation = () => {
  // const [isOpenDescription, setIsOpenDescription] = useState(false);
  // const [isOpenUseCases, setIsOpenUseCases] = useState(false);
  // const [isOpenTechSpecs, setIsOpenTechSpecs] = useState(false);

  // const handleToggleDescription = () => {
  //   setIsOpenDescription(!isOpenDescription);
  //   setIsOpenUseCases(false);
  //   setIsOpenTechSpecs(false);
  // };

  // const handleToggleUseCases = () => {
  //   setIsOpenUseCases(!isOpenUseCases);
  //   setIsOpenDescription(false);
  //   setIsOpenTechSpecs(false);
  // };

  // const handleToggleTechSpecs = () => {
  //   setIsOpenTechSpecs(!isOpenTechSpecs);
  //   setIsOpenDescription(false);
  //   setIsOpenUseCases(false);
  // };

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
            <div>
              <section className="product-content">
                <h2>Description</h2>
                <p>
                  Scikit-Learn simplifies the process of implementing machine learning algorithms. It is designed for efficiency and ease of use, making it suitable for both beginners and experienced data scientists.
                </p>
              </section>

              <section className="product-content">
                <h2>Use Cases</h2>
                <p>
                  Scikit-Learn is used in a variety of applications, including but not limited to:
                </p>
                <ul>
                  <li>Classification of email as spam or non-spam.</li>
                  <li>Predicting house prices based on features.</li>
                  <li>Image and text classification.</li>
                </ul>
              </section>

              <section className="product-content">
                <h2>Technical Specifications</h2>
                <p>System Requirements:</p>
                <ul>
                  <li>Python 3.x</li>
                  <li>NumPy, SciPy, Matplotlib</li>
                </ul>
                <p>Compatibility:</p>
                <ul>
                  <li>Works on Windows, macOS, and Linux.</li>
                </ul>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </body>
  );
};

export default ProductInformation;
