import React from 'react';
import './HomePage.css';

//components---

import Banner from './Banner';
// import AlternateBanner from './AlternateBanner';
import AlternateBanner from '../solutions/common/alternateBanner'
import TrustedCompanies from './companies.js';
import GridOfCards from '../solutions/common/GridOfCards';
// import CustomerSuccess from "../solutions/common/CustomerSuccess";
import Grid from "../solutions/common/grid"
import ShowcaseBanner from "../miscellaneous/Expertise/showcaseBanner";
import CertificateGrid from './Certificate.js';

//component-data----
import blogData from './Data/blogData.js';
import reviewData from "./Data/reviewData";
import bannerData from './Data/BannerData';
import ContributionData from './Data/ContributionData.js';
import showcaseBannerData1 from "./Data/showcaseBannerData1.js";
import showcaseBannerData2 from "./Data/showcaseBannerData2.js";


//extra

// import OneCardCarousel from './OneCardCarousel';
// import BackgroundBanner from './backgroundBanner';
// import OneCardData from './Data/OneCardData';
// import { backBannerData } from './Data/backgroundBannerData';
// import CustomerSuccess from './Blogs.js';


const HomePage = () => {
 

  return (
    <>
      <div className='mainbody'>
        <div className='container-banner' style={{height:'20%'}}>
          <Banner />
        </div>
        <div className='container mid-section parent-middle-sections'>
          <AlternateBanner banners={bannerData} count={0} ContactBtn={false}/>
          {/* <OneCardCarousel items={OneCardData}/> */}
          <ShowcaseBanner item1={showcaseBannerData1} item2={showcaseBannerData2}/>
          <CertificateGrid/>
          {/* <BackgroundBanner items={backBannerData} alignType={"start"} width={"1000px"}/> */}

          {/* <section className="trusted-companies-block">
            <h2>Trusted Companies</h2>
            <div className='text-block-center'>
              <p> Image </p>
              <p> Image </p>
              <p> Image </p>
            </div>
          </section> */}

          <TrustedCompanies/>
          
          {/* <section className="contributionGrid"> */}
            <Grid content={ContributionData} />
          {/* </section> */}

          {/* <CustomerSuccess heading={"Recommended Blogs"} items={blogData} CardHeight="30rem"/> */}
          {/* <Customer items={{ item: reviewData, NoCards:4, title: "Customer Reviews" }} /> */}
        </div>
      </div>
      {/* <CustomerSuccess heading={"Recommended Blogs"} items={blogData} CardHeight="30rem"/> */}
      <GridOfCards items={{ item: reviewData, NoCards:4, title: "Customer Reviews", contactLink: "./ContactUs" }} />
    </>
  );
};

export default HomePage;
