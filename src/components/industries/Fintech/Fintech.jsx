import React from 'react'
// import Banner from "../../solutions/common/Banner";
// import BannerData from "./JSONData/BannerData";
import OneCardCoursal from '../common/OneCardCoursal';
import OneCardData from './JSONData/Exprtise'
import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import FlatGridLayout from '../../solutions/common/FlatGridLayout'
import BusinessLevelUpData from './JSONData/BusinessLevelUpData'
import Grid from "../../solutions/common/grid"
import { benefitCards } from './JSONData/Benefit';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';
import NewBanner from '../../solutions/common/NewBanner'
import bannerdata from './bannerData'

const Fintech = () => {
  return (
    <>
      {/* <Banner BannerData={BannerData}/> */}
      <NewBanner data = {bannerdata} />
      
      <section className="WelcomeMsg" style={{margin: "3rem"}}>
        <h2>Our Strengths</h2>
        <p>Unlocking enhanced efficiency and customer service through our tailored Fintech solutions.</p>
      </section>
      <OneCardCoursal items={OneCardData}/>
      <div className="InfoVisual">
        <AlternateBanner banners={AlternateBannerData} count={0} ContactBtn={true}/>
      </div>
      <FlatGridLayout items={BusinessLevelUpData} title={"How We Can Help You"}/>
      <div className="Container-ir">
          <section className="WelcomeMsg" style={{margin: "3rem"}}>
            <h2>Benefits</h2>
            <p>Infuse AI into tailored solutions for the Fintech sector.</p>
          </section>
        <Grid content={benefitCards}/>
      </div>
      <CustomerSuccess items={CutomerSuccessData} heading="AI Innovations in Finance" CardHeight="400px"/>
      <ContactForm />
    </>
  )
}

export default Fintech