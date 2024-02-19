import React from 'react';
import './HomePage.css';

//components---

import Banner from './Banner';
// import AlternateBanner from './AlternateBanner';
import AlternateBanner from '../solutions/common/alternateBanner'
import TrustedCompanies from './companies.js';
import Customer from './CustomerReviews.js';
import Blogs from "./Blogs.js";
import Grid from './Grid.js';
import ShowcaseBanner from "./showcaseBanner";
import CertificateGrid from './Certificate.js';

//component-data----
import blogData from './Data/blogData.js';
import reviewData from "./Data/reviewData";
import bannerData from './Data/BannerData';
import ContributionData from './Data/ContributionData.js';
import showcaseBannerData1 from "./Data/showcaseBannerData1.js";
import showcaseBannerData2 from "./Data/showcaseBannerData2.js";


//extra

import OneCardCarousel from './OneCardCarousel';
import BackgroundBanner from './backgroundBanner';
import OneCardData from './Data/OneCardData';
import { backBannerData } from './Data/backgroundBannerData';


const HomePage = () => {
 

  return (
    <>
      <div className='mainbody'>
        <div className='container-banner' style={{height:'20%'}}>
          <Banner />
        </div>
        <div className='container mid-section'>
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
          
          <section className="contributionGrid">
            <Grid content={ContributionData} />
          </section>

          <Blogs heading={"Recommended Blogs"} items={blogData} CardHeight="30rem"/>
          <Customer items={{ item: reviewData, NoCards:4, title: "Customer Reviews" }} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
