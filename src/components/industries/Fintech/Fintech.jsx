import React from 'react';
import { Helmet } from 'react-helmet';
import OneCardCoursal from '../common/OneCardCoursal';
import OneCardData from './JSONData/Exprtise';
import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import FlatGridLayout from '../../solutions/common/FlatGridLayout';
import BusinessLevelUpData from './JSONData/BusinessLevelUpData';
import Grid from "../../solutions/common/grid";
import { benefitCards } from './JSONData/Benefit';
import ContactForm from '../../solutions/common/contactForm';
import NewBanner from '../../solutions/common/NewBanner';
import bannerdata from './bannerData';

const Fintech = () => {
  return (
    <>
      <Helmet>
        <title>Fintech AI Solutions | Enhance Efficiency and Customer Service | MAQ Software</title>
        <meta name="description" content="Unlock enhanced efficiency and customer service with our tailored Fintech solutions. Infuse AI into your financial services for better performance." />
        <meta name="keywords" content="Fintech AI, Financial Services AI, AI in Finance, Fintech Solutions, AI Efficiency, Customer Service AI, Financial Technology AI, MAQ Software, Artificial Intelligence, Machine Learning" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fintech AI Solutions | Enhance Efficiency and Customer Service" />
        <meta property="og:description" content="Discover how our AI solutions can revolutionize the Fintech sector by enhancing efficiency and customer service." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NewBanner data={bannerdata} />
      <section className="WelcomeMsg" style={{margin: "3rem"}}>
        <h2>Our Strengths</h2>
        <p>Unlocking enhanced efficiency and customer service through our tailored Fintech solutions.</p>
      </section>
      <OneCardCoursal items={OneCardData} />
      <div className="InfoVisual" style={{padding: "0px 50px"}}>
        <AlternateBanner banners={AlternateBannerData} count={0} ContactBtn={true} />
      </div>
      <FlatGridLayout items={BusinessLevelUpData} title={"How We Can Help You"} />
      <div className="Container-ir">
        <section className="WelcomeMsg" style={{margin: "3rem"}}>
          <h2>Benefits</h2>
          <p>Infuse AI into tailored solutions for the Fintech sector.</p>
        </section>
        <Grid content={benefitCards} />
      </div>
      <ContactForm />
    </>
  )
}

export default Fintech;
