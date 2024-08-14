import React from 'react';
import { Helmet } from 'react-helmet';
// import Banner from "../../solutions/common/Banner";
// import BannerData from "./JSONData/BannerData";
import OneCardCoursal from '../common/OneCardCoursal';
import OneCardData from './JSONData/Exprtise';
import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import FlatGridLayout from '../../solutions/common/FlatGridLayout';
import BusinessLevelUpData from './JSONData/BusinessLevelUpData';
import Grid from "../../solutions/common/grid";
import { benefitCards } from './JSONData/Benefit';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';

import NewBanner from '../../solutions/common/NewBanner';
import bannerdata from './bannerdata';

const AISolutionsEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions for E-commerce | Elevate Online Shopping | MAQ Software</title>
        <meta name="description" content="Explore our AI solutions for E-commerce. Enhance online shopping experiences and drive conversion growth with advanced AI technologies." />
        <meta name="keywords" content="AI E-commerce Solutions, Online Shopping, Conversion Growth, AI Technologies, E-commerce AI, Business Growth, Customer Experience, MAQ Software" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Solutions for E-commerce | Elevate Online Shopping" />
        <meta property="og:description" content="Discover how our AI solutions can revolutionize your E-commerce business by enhancing online shopping experiences and driving conversion growth." />
        <meta property="og:image" content="/path-to-image.jpg" /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://www.example.com/ecommerce-ai-solutions" /> {/* Replace with actual URL */}
        <meta property="og:type" content="website" />
      </Helmet>
      <NewBanner data={bannerdata} />
      {/* <Banner BannerData={BannerData}/> */}
      
      <section className="WelcomeMsg" style={{margin: "3rem"}}>
        <h2>Our Strengths</h2>
        <p>Elevating Online Shopping Experiences and Driving Conversion Growth.</p>
      </section>
      <OneCardCoursal items={OneCardData} />
      <div className="InfoVisual" style={{padding: "0px 50px"}}>
        <AlternateBanner banners={AlternateBannerData} count={0} ContactBtn={true} />
      </div>
      <FlatGridLayout items={BusinessLevelUpData} title={"How We Can Level Up Your Business"} />
      <div className="Container-ir">
        <section className="WelcomeMsg" style={{margin: "0rem"}}>
          <h2>Leveraging AI for Business Advantages</h2>
          <p>Harnessing the potential of AI to revolutionize E-commerce.</p>
        </section>
        <Grid content={benefitCards} />
      </div>
      {/* <CustomerSuccess items={CutomerSuccessData} heading="Our AI Solutions" CardHeight="400px"/> */}
      <ContactForm />
    </>
  );
}

export default AISolutionsEcommerce;
