import React from "react";
import "./css/ContactUs.css";
import ContactForm from "../../solutions/common/contactForm";
import pic from "./Images/FormSideImg.svg";
import locationicon from "./Images/locationicon.svg";
import phone from "./Images/phone-svgrepo-com.svg";
import { HashLink } from "react-router-hash-link";

const ContactUs = () => {
  return (
    <section
      id="contactpage"
      className="product-information backimg"
      style={{ backgroundColor: "white" }}
    >
      <div className="content_info">
        <div className="heading-block">
          <div className="head-block-center">
            <h1>Get in touch</h1>
          </div>
          <div className="text-block-center">
            <p>
              To facilitate interactions with our key clients, our offices are
              conveniently located within a few miles of their facilities in the
              US and in India. Our company provides free parking at all our
              locations.
            </p>
          </div>
          <div className="block__action">
            <HashLink
              to="./#contact"
              className="btn btn-empty"
              style={{ width: "fit-content" }}
            >
              {" "}
              Send Message{" "}
            </HashLink>
          </div>
        </div>
      </div>
      <div className="location_block"></div>

      <section className="color_foot">
        <div>
          {/* <section className="social_media">
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
                    {/* <div className="line email"> }
                    <a
                      className="social_name"
                      href="mailto:info@maqsoftware.com"
                    >
                      <Email style={{ fill: "black" }} /> email
                    </a>
                    {/* </div> }
                    {/* <div className="line web"> }
                    <a className="social_name" href="maqsoftware.com">
                      <FaGlobe style={{ fill: "black" }} /> website
                    </a>
                    {/* </div> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        </div>

        <section className="locations">
          <div className="location_width">
            <div className="our_location">
              <h3>Our Locations</h3>
            </div>
            <div className="location_item">
              <div className="place_center">
                <div className="box1">
                  <div className="place">
                    <div className="subheading">Redmond</div>
                    <div className="icon-address" style={{ display: "flex" }}>
                      <div className="location_icon">
                        <img
                          src={locationicon}
                          alt="location icon"
                          style={{ width: "30px" }}
                        />
                      </div>
                      <div className="address">
                        2027 152nd Avenue NE
                        <br></br>Redmond, WA 98052
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <br></br> +91 908 256 1327 */}
                      </div>
                    </div>
                    <div className="phoneNumber">
                      {" "}
                      <img
                        src={phone}
                        alt="phone"
                        style={{ width: "30px" }}
                      />{" "}
                      +91 908 256 1327{" "}
                    </div>
                  </div>
                  <div className="place">
                    <div className="subheading">Hyderabad</div>
                    <div className="icon-address" style={{ display: "flex" }}>
                      <div className="location_icon">
                        <img
                          src={locationicon}
                          alt="location icon"
                          style={{ width: "30px" }}
                        />
                      </div>
                      <div className="address">
                        Level 7, Astro, aVance Business Hub
                        <br></br> Behind Dell Campus
                        <br></br> HITEC City 2, Madhapur
                        <br></br> Hyderabad 500 081
                      </div>
                    </div>
                    <div className="phoneNumber">
                      {" "}
                      <img
                        src={phone}
                        alt="phone"
                        style={{ width: "30px" }}
                      />{" "}
                      +91 40 4010 0570{" "}
                    </div>
                  </div>
                </div>
                <div className="box2">
                  <div className="place">
                    <div className="subheading">Mumbai</div>
                    <div className="icon-address" style={{ display: "flex" }}>
                      <div className="location_icon">
                        <img
                          src={locationicon}
                          alt="location icon"
                          style={{ width: "30px" }}
                        />
                      </div>
                      <div className="address">
                        201, Meadows Building
                        <br></br>Sahar Plaza on Andheri Kurla Road <br></br>{" "}
                        Andheri East
                        <br></br>Mumbai 400 059
                        {/* <br></br> +91 908 256 1327 */}
                      </div>
                    </div>
                    <div className="phoneNumber">
                      {" "}
                      <img
                        src={phone}
                        alt="phone"
                        style={{ width: "30px" }}
                      />{" "}
                      +91 908 256 1327{" "}
                    </div>
                  </div>
                  <div className="place">
                    <div className="subheading">NOIDA</div>
                    <div className="icon-address" style={{ display: "flex" }}>
                      <div className="location_icon">
                        <img
                          src={locationicon}
                          alt="location icon"
                          style={{ width: "30px" }}
                        />
                      </div>
                      <div className="address">
                        Express Trade Towers 2<br></br>B-36, Tower 3, Second
                        Floor
                        <br></br>Sector 132
                        <br></br>NOIDA 201 301
                        <br></br>
                        {/* <br></br> +91 908 256 1327 */}
                      </div>
                    </div>
                    <div className="phoneNumber">
                      {" "}
                      <img
                        src={phone}
                        alt="phone"
                        style={{ width: "30px" }}
                      />{" "}
                      +91 908 256 1327{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="text-block-center" style={{fontWeight:"500", maxWidth:"900px"}}>
        {" "}
        <p>
          For more information on our Microsoft offerings, please visit us on{" "}
          <a href="https://appsource.microsoft.com/en-us/marketplace/consulting-services?search=MAQ%20Software&page=1"><span style={{color:"red"}}> Microsoft AppSource </span> </a> and{" "}
          <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=MAQ%20Software"><span style={{color:"red"}}> Microsoft Marketplace </span> </a>.
        </p>{" "}
      </div>

      <section className="image_form">
        <div className="form">
          <div className="width-form" style={{ width: "90%" }}>
            <ContactForm />
          <div className="text-block-center">
            <p>Or send us mail at  <a href="mailto:sales@MAQSoftware.com" style={{color: "red", fontWeight: "500"}}>Sales@MAQSoftware.com</a>.</p>
          </div>
          </div>
        </div>
        <div className="image">
          <img src={pic} alt="Contact Us at MAQ Software" />
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
