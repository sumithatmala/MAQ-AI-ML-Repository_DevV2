import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const ProductContactUs = () => {
  return (
        <section id="contact" className='product-information' style={{paddingTop: "2%", backgroundColor: "white"}}>
		<Container fluid>
			<Row className="product-overview">
				<Col>
					<h2 className="heading-section">Contact Form</h2>
				</Col>
			</Row>
			<div className="product-content justify-content-center" >
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Get in touch</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" for="name">Full Name</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Name" />
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" for="email">Email Address</label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Email" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject">Subject</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#">Message</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn text-white" style={{backgroundColor: "#5248a6"}}/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 d-flex align-items-stretch ">
								<div className="info-wrap bg-voilet-linear-gradient text-white w-100 p-md-5 p-4" >
									<h3>Let's get in touch</h3>
									<p className="mb-4">We're open for any suggestion or just to have a chat</p>
				        	    <div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
                                    <LocationOnIcon />
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Address:</span> Level 7, H08 Building, aVance Business Hub, Phase 2, Madhapur, Telangana 500081</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<PhoneIcon />
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 8919 0535 20</a></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<EmailIcon />
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@maqsoftware.com</a></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<LanguageIcon />
				        		</div>
				        		<div className="text pl-3">
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
  )
}

export default ProductContactUs