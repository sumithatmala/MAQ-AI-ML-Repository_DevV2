import React from 'react'
import Banner from "../common/Banner";
import BannerData from "./JSONData/BannerData";
import AlternateBanner from '../common/AlternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import './css/SportWellness.css'
import Grid from "../common/grid"
import { benefitCards } from './JSONData/WhatWeOffer';
import OneCardData from './JSONData/OneCardData'
import OneCardCoursal from '../common/OneCardCoursal';
import BusinessCases from '../common/GridOfCards'
import BusinessCasesData from './JSONData/BusinessCasesData';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';

const SportWellness =() =>{
    return (
        <>
        <Banner BannerData={BannerData}/>
        <div className="Container-SportWellness">
          <section className="WelcomeMsg">
              <h2>Areas of Expertise</h2>
              <p>Unleash Peak Performance & Holistic Wellness through AI-Powered Solutions. Optimize your journey towards athletic excellence and sustainable well-being with our cutting-edge, AI-driven offerings designed to tackle critical challenges in the Sports & Wellness landscape.</p>
          </section>
          <AlternateBanner banners={AlternateBannerData} count={1} ContactBtn={true}/>
          <OneCardCoursal items={OneCardData}/>
          </div>
          <div className="Container-ir">
            <Grid content={benefitCards}/>
          </div>
          <BusinessCases items={{item: BusinessCasesData, title: "Pros of Implementing AI Software in Logistics and Transportation"}}/>
          <CustomerSuccess items={CutomerSuccessData} heading="Customer Success"/>
          <ContactForm />
        </>
      )
}
export default SportWellness