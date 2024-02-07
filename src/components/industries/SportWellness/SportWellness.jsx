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
          <div className="InfoVisual">
            <section className="WelcomeMsg">
                <h2>Areas of Expertise</h2>
                <div className='text-block-center'>Unleash Peak Performance & Holistic Wellness through AI-Powered Solutions. Optimize your journey towards athletic excellence and sustainable well-being with our cutting-edge, AI-driven offerings designed to tackle critical challenges in the Sports & Wellness landscape.</div>
            </section>
            <AlternateBanner banners={AlternateBannerData} count={1} ContactBtn={true}/>
          </div>
          <OneCardCoursal items={OneCardData}/>
          <BusinessCases items={{item: BusinessCasesData, NoCards:3, title: "How We Can Assist You", caption: "Delivering valuable services tailored to sports organizations and businesses."}}/>
          <div className="Container-ir">
            <Grid content={benefitCards}/>
          </div>
          <CustomerSuccess items={CutomerSuccessData} heading="Customer Success"/>
          <ContactForm />
        </>
      )
}
export default SportWellness