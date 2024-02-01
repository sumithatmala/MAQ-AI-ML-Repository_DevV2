import React from 'react'
import Banner from '../common/Banner'
import PredictiveAnalyticsBannerData from './JSONData/PredictiveAnalyticsBannerData'
import BusinessCases from '../common/GridOfCards'
import './css/PredictiveAnalytics.css'
import WhatWeOffer from './WhatWeOffer'
import Insights from './Insights'
import BusinessCasesData from './JSONData/BusinessCasesData'
const PredictiveAnalytics = () => {
  return (
    <>
    <Banner BannerData = {PredictiveAnalyticsBannerData}/>
    <BusinessCases items={{item: BusinessCasesData, title: "How Our Predictive Analytics Models Can Augment Your Business"}}/>
    <WhatWeOffer />
    <Insights />
    </>
  )
}

export default PredictiveAnalytics