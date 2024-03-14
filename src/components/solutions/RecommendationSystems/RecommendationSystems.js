import "./css/RecommendationSystems.css";
// import Benefits from "./Benefits";
import BiSlider from "./BiSlider";
import DevlopSolutions from "./DevlopSolutions";
import ContactForm from "../common/contactForm";
import CustomerSuccess from "../common/CustomerSuccess";
import Alternate from '../common/alternateBanner';
import GridOfCards from "../common/GridOfCards";
import bannerData from './BannerData';
import BenefitsData from './BenefitsData';

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

      <section className="info-section">
        <div className="info-section-inner">
          <h2 className="info-section__title">
            The Significance of Personalization
          </h2>
          <div className="info-section__description">
            <p>
              <b>Customer engagement poses increasing challenges for both online
                and brick-and-mortar businesses. Empowered by their social
                networks and devices, consumers in the digital era are
                progressively shaping the shopping process and specifying WHAT
                they desire and WHERE and WHEN they want it.</b>
            </p>
          </div>
        </div>
      </section>

      <div className="container_pharma">
        <Alternate banners={DevlopSolutions} ContactBtn={false} />
      </div>

      {/* <Benefits /> */}
      <GridOfCards
        items={{
          item: BenefitsData,
          NoCards: 3,
          title: "Benefits of Bespoke Recommendation Systems",
        }}
      />

      <CustomerSuccess items={BiSlider} slidesToShow={2} heading="Customer Success" CardHeight="510px" />

      <ContactForm />
    </>
  );
};

export default RecommendationSystems;
