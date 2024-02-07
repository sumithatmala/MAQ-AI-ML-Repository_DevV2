import React from 'react'
import Banner from "../common/Banner";
import BannerData from "./JSONData/BannerData";
import AlternateBanner from '../common/AlternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import './css/Logistics.css'
import Grid from "../common/grid"
import { benefitCards } from './JSONData/WhatWeOffer';
import BusinessCases from '../common/GridOfCards'
import BusinessCasesData from './JSONData/BusinessCasesData';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';
const Logistics = () => {
  return (
    <>
    <Banner BannerData={BannerData}/>
      <div className="InfoVisual">
        <section className="WelcomeMsg">
            <h2>Areas of Expertise</h2>
            <p>Maximize customer satisfaction by reliably delivering products on schedule, within budget, and at the pace expected by your clientele. Utilize intelligent logistics and transportation solutions to streamline delivery routes and prioritize driver safety throughout the journey. Access a comprehensive range of software and services tailored for carriers, freight forwarders, and logistics firms to enhance operational efficiency and exceed customer expectations.</p>
        </section>
        <AlternateBanner banners={AlternateBannerData} count={1} ContactBtn={true}/>
      </div>
      <div className="Container-ir">
        <Grid content={benefitCards}/>
      </div>
      <BusinessCases items={{item: BusinessCasesData, NoCards:4, title: "Pros of Implementing AI Software in Logistics and Transportation"}}/>
      <CustomerSuccess items={CutomerSuccessData} heading="Customer Success"/>
      <ContactForm />
    </>
  )
}

export default Logistics