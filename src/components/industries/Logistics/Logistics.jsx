import React from 'react';
import { Helmet } from 'react-helmet';
import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import './css/Logistics.css';
import Grid from "../../solutions/common/grid";
import { benefitCards } from './JSONData/WhatWeOffer';
import BusinessCases from '../../solutions/common/GridOfCards';
import BusinessCasesData from './JSONData/BusinessCasesData';

import ContactForm from '../../solutions/common/contactForm';
import NewBanner from '../../solutions/common/NewBanner';
import bannerdata from './bannerdata';

const Logistics = () => {
  return (
    <>
      <Helmet>
        <title>Advanced Logistics Solutions | Optimize Transportation with AI | MAQ Software</title>
        <meta name="description" content="Maximize efficiency and customer satisfaction with advanced logistics solutions. Discover how AI can streamline delivery routes, enhance operational efficiency, and improve safety in transportation." />
        <meta name="keywords" content="Logistics Solutions, Transportation Optimization, AI in Logistics, Freight Forwarding Technology, Intelligent Logistics, Supply Chain Efficiency, MAQ Software, Artificial Intelligence, Machine Learning" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Advanced Logistics Solutions | Optimize Transportation with AI" />
        <meta property="og:description" content="Maximize efficiency and customer satisfaction with advanced logistics solutions. Discover how AI can streamline delivery routes, enhance operational efficiency, and improve safety in transportation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <NewBanner data={bannerdata} />
      {/* <Banner BannerData={BannerData}/> */}
      <div className="InfoVisual">
        <section className="WelcomeMsg margin-adjust" style={{ marginTop: 0, width: "80%" }}>
          <h2>Areas of Expertise</h2>
          <div className='text-block-center'>
            <p style={{fontSize: "16px"}}>Maximize customer satisfaction by reliably delivering products on schedule, within budget, and at the pace expected by your clientele. Utilize intelligent logistics and transportation solutions to streamline delivery routes and prioritize driver safety throughout the journey. Access a comprehensive range of software and services tailored for carriers, freight forwarders, and logistics firms to enhance operational efficiency and exceed customer expectations.</p>
          </div>
        </section>
        <AlternateBanner banners={AlternateBannerData} count={1} ContactBtn={true} />
      </div>
      <h2 className='head-block-center'>Strategic Solutions for Advanced Logistics Optimization</h2>
      <div className="Container-ir">
        <Grid content={benefitCards} />
      </div>
      <BusinessCases items={{ item: BusinessCasesData, NoCards: 4, title: "Pros of Implementing AI Software in Logistics and Transportation" }} />
      {/* <CustomerSuccess items={CutomerSuccessData} heading="AI Automation in Logistics and Transport" CardHeight="400px"/> */}
      <ContactForm />
    </>
  );
};

export default Logistics;
