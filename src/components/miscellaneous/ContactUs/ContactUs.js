import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import ContactForm from "../../solutions/common/contactForm";
import pic from "./Images/contact-us-MAQ.png";
import "./css/ContactUs.css";
import media from "./Images/Clients-4.png";
// import face from './Images/5296500_fb_social media_facebook_facebook logo_social network_icon.svg';
// import linked from './Images/5296501_linkedin_network_linkedin logo_icon.svg';
// import twit from './Images/11244080_x_twitter_elon musk_twitter new logo_icon.svg';
// import mail from './Images/622401_mail_packet_email_envelope_letter_icon.svg';
// import yout from './Images/5296521_play_video_vlog_youtube_youtube logo_icon.svg';
import {
  Email,
  Facebook,
  GitHub,
  LinkedIn,
  Twitter,
  Web,
  YouTube,
} from "@mui/icons-material";
import { FaGlobe } from "react-icons/fa6";

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

      <section className="color_foot">
        <section className="social_media">
          <div className="social_flex">
            <div className="social_image">
              <img src={media} alt="Contact Us at MAQ Software" />
            </div>
            <div className="social_content">
              <div className="media_links">
                <h3>Get help on social media</h3>
                <div className="social_medias">
                  <div className="line line1">
                    <a
                      className="social_name"
                      href="https://www.linkedin.com/company/maq-software/"
                    >
                      <LinkedIn />
                      Linkedin
                    </a>
                    <a
                      className="social_name"
                      href="https://www.facebook.com/maqsoftware"
                    >
                      <Facebook />
                      Facebook
                    </a>
                    <a
                      className="social_name"
                      href="https://twitter.com/MAQSoftware"
                    >
                      <Twitter />
                      Twitter
                    </a>
                  </div>
                  <div className="line line2">
                    <a
                      className="social_name"
                      href="https://github.com/maqsoftware"
                    >
                      <GitHub style={{ fill: "black" }} />
                      Git Hub
                    </a>
                    <a
                      className="social_name"
                      href="https://www.youtube.com/user/maqsoftware"
                    >
                      <YouTube style={{ fill: "red" }} />
                      You Tube
                    </a>
                  </div>
                </div>
              </div>
              <div className="email_web">
                <h4>For more information email us or visit our website</h4>
                <div className="email_web_links">
                  <div className="line">
                    {/* <div className="line email"> */}
                    <a
                      className="social_name"
                      href="mailto:info@maqsoftware.com"
                    >
                      <Email style={{ fill: "black" }} /> email
                    </a>
                    {/* </div> */}
                    {/* <div className="line web"> */}
                    <a className="social_name" href="maqsoftware.com">
                      <FaGlobe style={{ fill: "black" }} /> website
                    </a>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="locations">
          <div className="location_width">
            <div className="our_location">
              <h3>Our Locations</h3>
            </div>
            <div className="location_item">
              <div className="place_center">
                <div className="box1">
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
                </div>
                <div className="box2">
                  <div className="place">
                    <span className="subheading">Mumbai</span>
                    <br></br>201, Meadows Building
                    <br></br>Sahar Plaza on Andheri Kurla Road <br></br> Andheri
                    East
                    <br></br>Mumbai 400 059
                    <br></br>+91 908 256 1327
                  </div>
                  <div className="place">
                    <span className="subheading">Noida</span>
                    <br></br>Express Trade Towers 2<br></br>B-36, Tower 3,
                    Second Floor
                    <br></br>Sector 132
                    <br></br>NOIDA 201 301
                    <br></br>+91 908 256 1327
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
