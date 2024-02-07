import React from 'react'
import Banner from "../common/Banner";
import BannerData from "./JSONData/BannerData";
import OneCardCoursal from '../common/OneCardCoursal';
import OneCardData from './JSONData/Exprtise'
import AlternateBanner from '../common/AlternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import FlatGridLayout from '../common/FlatGridLayout'
import BusinessLevelUpData from './JSONData/BusinessLevelUpData'
import Grid from "../common/grid"
import { benefitCards } from './JSONData/Benefit';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';

const Fintech = () => {
  return (
    <>
      <Banner BannerData={BannerData}/>
      
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
      <CustomerSuccess items={CutomerSuccessData} heading="Customer Success"/>
      <ContactForm />
    </>
  )
}

export default Fintech