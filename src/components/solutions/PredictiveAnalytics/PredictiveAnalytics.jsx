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

const PredictiveAnalytics = () => {
  return (
    <>
    <Banner BannerData = {PredictiveAnalyticsBannerData}/>
    <BusinessCases items={{item: BusinessCasesData, title: "How Our Predictive Analytics Models Can Augment Your Business"}}/>
    <WhatWeOffer />
    <Insights />
    <FlatGridLayout items={IndustriesData}/>
    <CustomerSuccess items={CutomerSuccessData}/>
    <FAQs FAQs = {FAQsData} />
    </>
  )
}

export default PredictiveAnalytics