import React from 'react';
import { Helmet } from 'react-helmet';
// import Banner from '../common/Banner'
// import PredictiveAnalyticsBannerData from './JSONData/PredictiveAnalyticsBannerData'
import BusinessCases from '../common/GridOfCards';
import './css/PredictiveAnalytics.css';
import WhatWeOffer from './WhatWeOffer';
import Insights from './Insights';
import BusinessCasesData from './JSONData/BusinessCasesData';
import FlatGridLayout from '../common/FlatGridLayout';
import IndustriesData from './JSONData/IndustriesData';

import FAQs from '../../product-dashboard/FAQs';
import FAQsData from "./JSONData/FAQsData";
import ContactForm from "../common/contactForm";
// import RoadMap from '../common/RoadMap'
// import PredictiveAnalyticsModelsProcessData from './JSONData/PredictiveAnalyticsModelsProcessData'
import NewBanner from '../common/NewBanner';
import NewBannerdata from './JSONData/PaBannerdata';

const PredictiveAnalytics = () => {
  return (
    <>
      <Helmet>
        <title>Predictive Analytics Solutions | Enhance Your Business Strategy</title>
        <meta name="description" content="Discover how our predictive analytics models can augment your business. Explore our services, insights, and industry applications to leverage data for better decision-making." />
        <meta name="keywords" content="Predictive Analytics, Business Strategy, Data Insights, Predictive Models, Industry Applications, Customer Success, AI Solutions" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Predictive Analytics Solutions | Enhance Your Business Strategy" />
        <meta property="og:description" content="Explore our predictive analytics solutions designed to enhance your business strategy. Learn about our offerings, insights, and successful customer cases." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NewBanner data={NewBannerdata} />
      {/* <Banner BannerData = {PredictiveAnalyticsBannerData}/> */}
      <BusinessCases items={{item: BusinessCasesData, NoCards:4, title: "How Our Predictive Analytics Models Can Augment Your Business"}} />
      <WhatWeOffer />
      <Insights />
      <FlatGridLayout items={IndustriesData} />
      {/* <RoadMap items={PredictiveAnalyticsModelsProcessData} title="How We Build Predictive Analytics Models"/> */}
      {/* <CustomerSuccess items={CutomerSuccessData} heading="Safe-Guard Business with Predictive Analysis" CardHeight="370px"/> */}
      <FAQs FAQs={FAQsData} />
      <ContactForm />
    </>
  );
};

export default PredictiveAnalytics;
