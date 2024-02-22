import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import ContactForm from "../../solutions/common/contactForm";
import pic from "./Images/contact-us-MAQ.png";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="product-information"
      style={{ backgroundColor: "white" }}
    >
      <section className="image_form">
        <div className="image">
          <img src={pic} alt="Contact Us at MAQ Software" />
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </section>
      <section className="locations">
        <div className="our_location">
          <h3>Our Locations</h3>
        </div>
        <div className="location_item">
          <div className="place_center">
            <div className="place">
              <span className="subheading">Redmond</span>
              <br></br>2027 152nd Avenue NE
              <br></br>Redmond, WA 98052
            </div>
            <div className="place">
              <span className="subheading">Hyderabad</span>
              <br></br> Level 7, Astro, aVance Business Hub
              <br></br> Behind Dell Campus
              <br></br> HITEC City 2, Madhapur
              <br></br> Hyderabad 500 081
              <br></br> +91 40 4010 0570
            </div>
            <div className="place">
              <span className="subheading">Mumbai</span>
              <br></br>201, Meadows Building
              <br></br>Sahar Plaza on Andheri Kurla Road <br></br> Andheri East
              <br></br>Mumbai 400 059
              <br></br>+91 908 256 1327
            </div>
            <div className="place">
              <span className="subheading">Noida</span>
              <br></br>Express Trade Towers 2<br></br>B-36, Tower 3, Second
              Floor
              <br></br>Sector 132
              <br></br>NOIDA 201 301
              <br></br>+91 908 256 1327
            </div>
          </div>
        </div>
      </section>

	  <section className="email_web">
		<div className="text_center">
		For more information, contact us through <a href='info@maqsoftware.com'>email</a> or visit our <a href='https://maqsoftware.com/'>website</a>.
		</div>
	  </section>

      <div>
        {/* <Container fluid>
        <Row className="product-overview">
          <Col>
            <center>
              <h2 class="heading-section" style={{ paddingTop: "15px" }}>
                Contact Form
              </h2>
            </center>
          </Col>
        </Row>
        <div class="product-content justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    {/* <h5 class="mb-4">Get in touch</h5> }
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <ContactForm />
                  </div>
                </div>
                <div class="col-lg-4 col-md-5 d-flex align-items-stretch ">
                  <div class="info-wrap bg-voilet-linear-gradient text-white w-100 p-md-5 p-4">
                    <h5>Let's get in touch</h5>
                    <p class="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div class="dbox w-100 d-flex align-items-start">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <LocationOnIcon />
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Address:</span> Level 7, H08 Building, aVance
                          Business Hub, Phase 2, Madhapur, Telangana 500081
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <PhoneIcon />
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+91 6301 033 610</a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <EmailIcon />
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            info@maqsoftware.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <LanguageIcon />
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Website</span>{" "}
                          <a href="https://maqsoftware.com/">maqsoftware.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      </div>
    </section>
  );
};

export default ContactUs;
