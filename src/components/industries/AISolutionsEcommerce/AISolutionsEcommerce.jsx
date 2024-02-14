import React from 'react'
import Banner from "../../solutions/common/Banner";
import BannerData from "./JSONData/BannerData";
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

const AISolutionsEcommerce = () => {
  return (
    <>
      <Banner BannerData={BannerData}/>
      
      <section className="WelcomeMsg" style={{margin: "3rem"}}>
        <h2>Our Strengths</h2>
        <p>Elevating Online Shopping Experiences and Driving Conversion Growth.</p>
      </section>
      <OneCardCoursal items={OneCardData}/>
      <div className="InfoVisual">
        <AlternateBanner banners={AlternateBannerData} count={0} ContactBtn={true}/>
      </div>
      <FlatGridLayout items={BusinessLevelUpData} title={"How We Can Level Up Your Business"}/>
      <div className="Container-ir">
          <section className="WelcomeMsg" style={{margin: "3rem"}}>
            <h2>Leveraging AI for Business Advantages</h2>
            <p>Harnessing the potential of AI to revolutionize E-commerce.</p>
          </section>
        <Grid content={benefitCards}/>
      </div>
      <CustomerSuccess items={CutomerSuccessData} heading="Customer Success" CardHeight="40rem"/>
      <ContactForm />
    </>
  )
}

export default AISolutionsEcommerce