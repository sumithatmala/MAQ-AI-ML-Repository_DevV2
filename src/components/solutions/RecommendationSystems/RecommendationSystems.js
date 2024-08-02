import React from 'react';
import { Helmet } from 'react-helmet';
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
import NewBanner from "../common/NewBanner";
import NewBannerdata from "./NewBannerdata";

const RecommendationSystems = () => {
  return (
    <>
      <Helmet>
        <title>Personalized Recommendation Systems | Enhance Customer Engagement</title>
        <meta name="description" content="Discover the power of personalized recommendation systems with MAQ Software. Enhance customer engagement and satisfaction with bespoke solutions tailored to your business needs." />
        <meta name="keywords" content="Personalized Recommendation Systems, Customer Engagement, MAQ Software, Bespoke Solutions, Digital Era Shopping, Custom Solutions" />
      </Helmet>
      <NewBanner data={ NewBannerdata } />

      <div className="container_pharma" style={{margin:"0px"}} >
        <Alternate banners={bannerData} ContactBtn={false} />
      </div>

      <section className="info-section margin-adjust">
        <div className="info-section-inner margin-adjust" style={{padding:"0px"}}>
          <h2 className="info-section__title heading-size">
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

      {/* <CustomerSuccess items={BiSlider} slidesToShow={3} heading="Intelligent Recommendation Solutions" CardHeight="500px" /> */}

      <ContactForm />
    </>
  );
};

export default RecommendationSystems;
