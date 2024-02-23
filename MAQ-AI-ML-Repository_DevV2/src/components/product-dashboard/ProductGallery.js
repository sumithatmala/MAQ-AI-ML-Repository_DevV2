import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

export default function ProductGallery(props) {
  const carouselContainerStyle = {
    height: "50vh",
    width: "90vh",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  };

  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  return (
    <MDBCarousel showIndicators showControls fade style={carouselContainerStyle}>
      {props.images.map((item, index) => (
        <MDBCarouselItem key={index} className='active' >
        <img className="img d-block w-100" style={imageStyle} src={`./images/${item.url}`} alt='Scikit v1.0.0' />
        <MDBCarouselCaption>
          <h5>{item.name}</h5>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      ))}
      

      {/* <MDBCarouselItem style={carouselContainerStyle}>
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
      </MDBCarouselItem> */}
    </MDBCarousel>
  );
}
