import React from 'react';
import './HomePage.css';

//components---
import ServiceGrid from '../miscellaneous/Expertise/serviceGrid.jsx';
import Banner from './Banner';
import AlternateBanner from '../solutions/common/alternateBanner'
import TrustedCompanies from './companies.js';
import GridOfCards from '../solutions/common/GridOfCards';
import CustomerSuccess from "../solutions/common/CustomerSuccess";
import Grid from "../solutions/common/grid"
import ShowcaseBanner from "../miscellaneous/Expertise/showcaseBanner";
import CertificateGrid from './Certificate.js';

//component-data----
// import blogData from './Data/blogData.js';
import reviewData from "./Data/reviewData";
import bannerData from './Data/BannerData';
import ContributionData from './Data/ContributionData.js';
import showcaseBannerData1 from "./Data/showcaseBannerData1.js";
import showcaseBannerData2 from "./Data/showcaseBannerData2.js";
import transformIndustries from './Data/transformIndustries.js';
import customerSuccessData from "./Data/customerSuccessData.js"


const HomePage = () => {
  return (
    <>
        <div className='container-banner' style={{ height: '20%' , paddingTop: '3vh'}}>
          <Banner />
        </div>
        <div className='container mid-section parent-middle-sections margin-adjust' style={{marginTop:"0"}}>
          <GridOfCards items={{ item: reviewData, NoCards: 4, title: "Our services", contactLink: "./ContactUs" }} />
          <AlternateBanner banners={bannerData} count={0} ContactBtn={false} backHighlights={true} />
          {/* <OneCardCarousel items={OneCardData} /> */}
          <ServiceGrid  items = {transformIndustries} title={"Transforing Industries"} desc={"We welcome opportunities to work alongside different teams over projects of any complexity. By working together, we will develop new systems, solutions, and products to separate you from your competition."}/>
        </div>
        <div className='margin-adjust'>
        <TrustedCompanies/>
        </div>
        <div className='container mid-section parent-middle-sections' style={{marginTop:"0px"}}>
          <ShowcaseBanner item1={showcaseBannerData1} item2={showcaseBannerData2} />
        </div>
          <h2 className='head-block-center'>AI/ML Solutions Offerings</h2>
          <Grid content={ContributionData} />
        {/* <BackgroundBanner items={backBannerData} alignType={"start"} width={"1000px"} /> */}
        <CertificateGrid/>
        <CustomerSuccess heading={"Highlight Articles"} items={customerSuccessData} CardHeight="260px"/>
        {/* <ContactForm contactMsg={"Do Let Us Know Your Concern."}/> */}
    </>
  );
};

export default HomePage;
