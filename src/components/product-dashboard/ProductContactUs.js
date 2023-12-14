import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const ProductContactUs = () => {
  return (
		<body>
        <section className='product-information'>
		<Container fluid>
            <Row className="product-header bg-voilet-linear-gradient text-white p-4" >
                <Col>
                    <h1 className="display-4">Scikit-Learn</h1>
                    <p className="lead">Powerful machine learning library for Python</p>
                </Col>
            </Row>
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
    </body>
  )
}

export default ProductContactUs