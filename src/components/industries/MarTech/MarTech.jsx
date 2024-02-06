import React from 'react'
import Banner from "../common/Banner";
import BannerData from "./JSONData/BannerData";
import OneCardCoursal from '../common/OneCardCoursal';
import OneCardData from './JSONData/Exprtise'
import AlternateBanner from '../common/AlternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import FlatGridLayout from '../common/FlatGridLayout'
import BusinessLevelUpData from './JSONData/BusinessLevelUpData'
import BusinessCases from '../common/GridOfCards'
import BusinessCasesData from './JSONData/BusinessCasesData';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';

const MarTech = () => {
  return (
    <>
      <Banner BannerData={BannerData}/>
      <section className="WelcomeMsg" style={{margin: "3rem"}}>
        <h2>Our Strengths</h2>
        <div className='text-block-center'>Utilize our specialized knowledge to accelerate your digital evolution, minimize advertising expenditures, and elevate customer satisfaction through cutting-edge AI solutions.</div>
      </section>
      <div className="InfoVisual">
        <AlternateBanner banners={AlternateBannerData} count={0} ContactBtn={true}/>
      </div>
      <OneCardCoursal items={OneCardData}/>
      <FlatGridLayout items={BusinessLevelUpData} title={"Our Services"} caption={"Enhance your customer experience with our tailored AI solutions, including big data analytics, predictive analytics, ML, computer vision, and NLP."}/>
      <BusinessCases content={BusinessCasesData} items={{item: BusinessCasesData,NoCards:3, title: "Have an Upper Hand with Leveraging AI Software Development for Marketing", caption: "We are ready to help you add value to your business with AI software development for reliable marketing solutions. You can give up guesswork with our predictive analytics technology for precise data-driven forecasts and better communication with your clients. Automate business processes to reduce marketing expenses and increase client satisfaction."}}/>
      <CustomerSuccess items={CutomerSuccessData} heading="Customer Success"/>
      <ContactForm />
    </>
  )
}

export default MarTech