import React from 'react';
import { Helmet } from 'react-helmet';
import './HomePage.css';

//components---
import ServiceGrid from '../miscellaneous/Expertise/serviceGrid.jsx';
import Banner from './Banner';
import AlternateBanner from '../solutions/common/alternateBanner';
import TrustedCompanies from './companies.js';
import GridOfCards from '../solutions/common/GridOfCards';
import CustomerSuccess from "../solutions/common/CustomerSuccess";
import Grid from "../solutions/common/grid";
import ShowcaseBanner from "../miscellaneous/Expertise/showcaseBanner";

//component-data----
import reviewData from "./Data/reviewData";
import bannerData from './Data/BannerData';
import ContributionData from './Data/ContributionData.js';
import showcaseBannerData1 from "./Data/showcaseBannerData1.js";
import showcaseBannerData2 from "./Data/showcaseBannerData2.js";
import transformIndustries from './Data/transformIndustries.js';
import customerSuccessData from "./Data/customerSuccessData.js";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions for Diverse Industries | Transform Your Business with AI | MAQ Software</title>
        <meta name="description" content="Discover our range of AI solutions designed to empower various industries. From AI/ML solutions to industry-specific applications, explore how we can transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, Machine Learning, AI for industries, AI consulting, digital transformation, AI applications, business intelligence, MAQ Software, maq software,Session Information Bot, Feedback Summarizer Bot, Document Classification Bot, Smart Support Framework, Support Ticket Assistant, Sales Assistant, Intelligent Document Processing Bot, TriviaBot, Test Case Recommender " />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Solutions for Diverse Industries | Transform Your Business with AI" />
        <meta property="og:description" content="Discover our range of AI solutions designed to empower various industries. From AI/ML solutions to industry-specific applications, explore how we can transform your business with cutting-edge technology." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className='container-banner' style={{ height: '20%' , paddingTop: '3vh'}}>
        <Banner />
      </div>
      <div className='container mid-section parent-middle-sections margin-adjust' style={{marginTop:"0"}}>
        <GridOfCards items={{ item: reviewData, NoCards: 4, title: "Our services", contactLink: "./ContactUs" }} />
        <AlternateBanner banners={bannerData} count={0} ContactBtn={false} backHighlights={true} />
        <ServiceGrid items={transformIndustries} title={"Empowering Industries Through AI Solutions"} desc={"We welcome opportunities to work alongside different teams over projects of any complexity. By working together, we will develop new systems, solutions, and products to separate you from your competition."}/>
      </div>
      <div className='margin-adjust'>
        <TrustedCompanies/>
      </div>
      <div className='container mid-section parent-middle-sections' style={{marginTop:"0px"}}>
        <ShowcaseBanner item1={showcaseBannerData1} item2={showcaseBannerData2} />
      </div>
      <h2 className='head-block-center'>AI/ML Solutions Offerings</h2>
      <Grid content={ContributionData} />
      <CustomerSuccess heading={"Highlight Articles"} items={customerSuccessData} CardHeight="260px"/>
    </>
  );
};

export default HomePage;
