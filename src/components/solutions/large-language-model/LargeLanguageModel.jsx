import React, { useEffect } from "react";
import Banner from "./Banner";
import Benfits from "./Benefits";
import UseCases from "./UseCases";
import Industries from "./Industries";
// import "./css/Industries.css";
import "./css/LargeLanguageModel.css"
import Expertise from "./Expertise";
import ArticleBanner from "./ArticleBanner";
import Benfits2 from "./Benefits2";
import Integration from "./Integration";
import WhyMAQSoftware from "../common/WhyMAQSoftware";
import OurTechStack from "./OurTechStack";
import BroadExpertise from "./BroadExpertise";
import CustomerSuccess from "../common/CustomerSuccess";
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import FAQs from '../../product-dashboard/FAQs'
import FAQsData from "./JSONData/FAQsData";
const LargeLanguageModel = () => {
  return (
    <div>
      <div>
        <Banner />
        <Benfits />
        <UseCases />
        <Industries />
        <div class="quick-block">
          <h2 class="head-block-center w-800">
            Our Expertise in Large Language Model Development
          </h2>
          <div class="text-block-center">
            We provide a broad spectrum of LLM Large Language Model services
            that meet your needs at scale.
          </div>
        </div>
        <Expertise />
        {/* <ArticleBanner /> */}
        <Benfits2 />
        <Integration />
        <OurTechStack />
        <BroadExpertise />
        {/* <WhyMAQSoftware /> */}
        <CustomerSuccess items={CutomerSuccessData}/>
        <FAQs FAQs = {FAQsData} />
      </div>
    </div>
  );
};

export default LargeLanguageModel;
