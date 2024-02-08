import React from 'react'
import Banner from '../common/Banner'
import PredictiveAnalyticsBannerData from './JSONData/PredictiveAnalyticsBannerData'
import BusinessCases from '../common/GridOfCards'
import './css/PredictiveAnalytics.css'
import WhatWeOffer from './WhatWeOffer'
import Insights from './Insights'
import BusinessCasesData from './JSONData/BusinessCasesData'
import FlatGridLayout from '../common/FlatGridLayout'
import IndustriesData from './JSONData/IndustriesData'
import CustomerSuccess from "../common/CustomerSuccess";
import CutomerSuccessData from "./JSONData/CutomerSuccessData";
import FAQs from '../../product-dashboard/FAQs'
import FAQsData from "./JSONData/FAQsData";
import ContactForm from "../common/contactForm";
import RoadMap from '../common/RoadMap'
import PredictiveAnalyticsModelsProcessData from './JSONData/PredictiveAnalyticsModelsProcessData'

const PredictiveAnalytics = () => {
  return (
    <>
    <Banner BannerData = {PredictiveAnalyticsBannerData}/>
    <BusinessCases items={{item: BusinessCasesData, NoCards:4, title: "How Our Predictive Analytics Models Can Augment Your Business"}}/>
    <WhatWeOffer />
    <Insights />
    <FlatGridLayout items={IndustriesData}/>
    <RoadMap items={PredictiveAnalyticsModelsProcessData} title="How We Build Predictive Analytics Models"/>
    <CustomerSuccess items={CutomerSuccessData} heading="Customer Success"/>
    <FAQs FAQs = {FAQsData} />
    <ContactForm/>
    </>
  )
}

export default PredictiveAnalytics