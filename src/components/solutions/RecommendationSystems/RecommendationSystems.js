import ContactForm from "../common/contactForm";
import Benefits from "./Benefits";
import BiSlider from "./BiSlider";
import DevlopSolutions from "./DevlopSolutions";
import "./css/RecommendationSystems.css";
import CustomerSuccess from "../common/CustomerSuccess";
import Alternate from '../common/alternateBanner';
import bannerData from './BannerData';


const RecommendationSystems = () => {
  return (
    <>
      <section className="toolinformations_recommend">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>Tailored Recommendation Solutions</span>
              </div>
              <div className="heading_inner">
                <p>
                  Unlock unparalleled business success by incorporating our
                  cutting-edge recommendation systems.
                </p>
              </div>
              <div className="images">
                <div className="imageone"></div>
                <div className="imagetwo"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container_pharma" >
        <Alternate banners={bannerData} ContactBtn={false} />
      </div>

      <section class="info-section">
        <div class="info-section-inner">
          <h2 class="info-section__title">
            The Significance of Personalization
          </h2>
          <div class="info-section__description">
            <p>
              Customer engagement poses increasing challenges for both online
              and brick-and-mortar businesses. Empowered by their social
              networks and devices, consumers in the digital era are
              progressively shaping the shopping process and specifying WHAT
              they desire and WHERE and WHEN they want it.
            </p>
          </div>
        </div>
      </section>

      <div className="container_pharma">
        <Alternate banners={DevlopSolutions} ContactBtn={false} />
      </div>

      <Benefits />


      <CustomerSuccess items={BiSlider} slidesToShow = {2}  heading="Customer Success" CardHeight="60rem"/>

      <ContactForm />
    </>
  );
};

export default RecommendationSystems;
