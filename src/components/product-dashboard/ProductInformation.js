import React, { useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductHeader from './ProductHeader';

// import '../../css/style.css'
import { MDBContainer } from "mdb-react-ui-kit";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      delay: 20
    }
      
    );
    AOS.refresh();
  }, []);

  return (
    <>
    <section className='product-information'>
      <Container fluid>
        <Row className="bg-voilet-linear-gradient text-white">
          {/* <Col> */}
            {/* <h1 className="display-4">Scikit-Learn</h1>
            <p className="lead">Powerful machine learning library for Python</p> */}
            <ProductHeader />
          {/* </Col> */}
        </Row>
        {/* Product Overview Section */}
        <Row id="prodinfo" className='product-overview'>
          <Col>
            <h2>Product Overview</h2>
            <p>
              Scikit-Learn is an open-source machine learning library in Python. It provides simple and efficient tools for data analysis and modeling. Built on NumPy, SciPy, and Matplotlib, it supports various machine learning algorithms and is widely used in the data science community.
            </p>
          <div className='product-container' data-aos="fade-right">

          
            <h3>Key Features</h3>
            <ul>
              <li>Classification, regression, clustering, and dimensionality reduction.</li>
              <li>Extensive collection of algorithms for machine learning tasks.</li>
              <li>Integration with other scientific computing libraries in Python.</li>
              <li>Active community and continuous development.</li>
            </ul>
            </div>
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
              <section className="product-container" data-aos="fade-left">
                <h2>Description</h2>
                <p>
                  Scikit-Learn simplifies the process of implementing machine learning algorithms. It is designed for efficiency and ease of use, making it suitable for both beginners and experienced data scientists.
                </p>
              </section>

              <section className="product-container" style={{marginTop:"20px"}} data-aos="fade-right">
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

              <section className="product-container" style={{marginTop:"20px"}} data-aos="fade-left">
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
    <section id="demo"  class="product-information">
    <Container fluid>
        {/* <Row className="product-header bg-voilet-linear-gradient text-white p-4" >
        <Col>
          <h1 className="display-4">Scikit-Learn</h1>
          <p className="lead">Powerful machine learning library for Python</p>
        </Col>
      </Row> */}
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
    <section id="tryit"  className='product-information'>
    <Container fluid>
        {/* <Row className="product-header  bg-voilet-linear-gradient text-white p-4" >
        <Col>
          <h1 className="display-4">Scikit-Learn</h1>
          <p className="lead">Powerful machine learning library for Python</p>
        </Col>
      </Row> */}
      <Row className='product-overview'>
        <Col>
            <h2>Scikit-Learn Tool Showcase</h2>
        </Col>
      </Row>
      <Row className='product-content'>
        <Col>
        <MDBContainer>
            <iframe
                title="Scikit-Learn Tool"
                width="100%"
                height="600"
                src="https://onecompiler.com/python/3wz7uns6h"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </MDBContainer>
        </Col>
    </Row>
    </Container>
    </section>
    <section id="contact" className='product-information'>
		<Container fluid>
            {/* <Row className="product-header bg-voilet-linear-gradient text-white p-4" >
                <Col>
                    <h1 className="display-4">Scikit-Learn</h1>
                    <p className="lead">Powerful machine learning library for Python</p>
                </Col>
            </Row> */}
			<Row className="product-overview">
				<Col>
					<h2 class="heading-section">Contact Form</h2>
				</Col>
			</Row>
			<div class="product-content justify-content-center">
				<div class="col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Get in touch</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label class="label" for="name">Full Name</label>
													<input type="text" class="form-control" name="name" id="name" placeholder="Name" />
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<label class="label" for="email">Email Address</label>
													<input type="email" class="form-control" name="email" id="email" placeholder="Email" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Subject</label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="#">Message</label>
													<textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Send Message" class="btn text-white" style={{backgroundColor: "#5248a6"}}/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-lg-4 col-md-5 d-flex align-items-stretch ">
								<div class="info-wrap bg-voilet-linear-gradient text-white w-100 p-md-5 p-4" >
									<h3>Let's get in touch</h3>
									<p class="mb-4">We're open for any suggestion or just to have a chat</p>
				        	    <div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
                                    <LocationOnIcon />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> Level 7, H08 Building, aVance Business Hub, Phase 2, Madhapur, Telangana 500081</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<PhoneIcon />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 8919 0535 20</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<EmailIcon />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@maqsoftware.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<LanguageIcon />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="https://maqsoftware.com/">maqsoftware.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
            </Container>
	</section>
    </>
  );
};

export default ProductInformation;
