import React, { useEffect } from "react";
import Banner from "../common/Banner";
import Benfits from "./Benefits";
import UseCases from "./UseCases";
import Industries from "./Industries";
import "./css/LargeLanguageModel.css";
import Expertise from "./Expertise";
import Benfits2 from "./Benefits2";
import Integration from "./Integration";
import OurTechStack from "./OurTechStack";
import BroadExpertise from "./BroadExpertise";
import CustomerSuccess from "../common/CustomerSuccess";
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import FAQs from "../../product-dashboard/FAQs";
import FAQsData from "./JSONData/FAQsData";
import BannerData from "./JSONData/BannerData";
import ContactForm from "../common/contactForm";
import GridOfCards from "../common/GridOfCards";

const LargeLanguageModel = () => {
  return (
    <div>
      <div>
        <Banner BannerData={BannerData} />
        <Benfits />
        <UseCases />
        {/* <Industries /> */}
        <div style={{width:"100%",display:"flex", justifyContent:"center", textAlign:"center"}}>
        <div style={{maxWidth:"1126px", }}>
        <GridOfCards
          content={Industries}
          items={{ item: Industries, NoCards: 3, title: "Build a Custom LLM Model for Your Industry", caption: "Our generative AI company delivers custom models rooted in AI expertise &amp; years of cross-domain expertise." }}
        />
        </div>
        </div>

        <div class="quick-block">
          <h2 class="head-block-center w-800">
            Explore Our Advanced Language Model Solutions
          </h2>
          <div class="text-block-center">
            Discover a diverse range of language model services tailored to your
            specific requirements.
          </div>
        </div>
        <Expertise />
        {/* <ArticleBanner /> */}
        <Benfits2 />
        <Integration />
        <OurTechStack />
        <BroadExpertise />
        {/* <WhyMAQSoftware /> */}
        <CustomerSuccess
          items={CutomerSuccessData}
          heading="Customer Success"
          CardHeight="35rem"
        />
        <FAQs FAQs={FAQsData} />
        <ContactForm />
      </div>
    </div>
  );
};

export default LargeLanguageModel;
