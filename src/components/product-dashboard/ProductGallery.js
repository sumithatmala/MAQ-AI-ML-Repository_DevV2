import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

export default function ProductGallery() {
  const carouselContainerStyle = {
    height: "600px",
  };

  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem className='active' style={carouselContainerStyle}>
        <img className="img d-block w-100" style={imageStyle} src='https://images.contentstack.io/v3/assets/blt71da4c740e00faaa/bltfa1c2cc3224db5c3/6178559ac2de5e0b3c33bfc2/Scikit-Learn-Blog.png?format=webp' alt='Scikit Learn V 1.0.0' />
        <MDBCarouselCaption>
          <h5>Scikit Learn V 1.0.0</h5>
          <p>
            Scikit Learn version 1.0.0 introduces new features for enhanced machine learning capabilities. The release focuses on improved model interpretability and performance optimizations.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem style={carouselContainerStyle}>
        <img style={imageStyle} src='https://daxg39y63pxwu.cloudfront.net/images/blog/scikit-learn-projects/scikit_learn_projects.webp' alt='Scikit Example' />
        <MDBCarouselCaption>
          <h5>Scikit Example</h5>
          <p>
            Explore real-world Scikit-Learn examples and projects. Learn how Scikit-Learn is used in various domains, including finance, healthcare, and more.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem style={carouselContainerStyle}>
        <img style={imageStyle} src='https://pythonfix.com/pkg/s/sklearn/sklearn-banner.webp' alt='Scikit 2' />
        <MDBCarouselCaption>
          <h5>Scikit 2</h5>
          <p>
            Scikit version 2 introduces advanced model tuning options and compatibility enhancements. Stay updated with the latest improvements in Scikit-Learn.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
