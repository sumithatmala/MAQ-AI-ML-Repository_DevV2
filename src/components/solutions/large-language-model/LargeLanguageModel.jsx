// import Banner from "../common/Banner";
import Benfits from "./Benefits";
import Industries from "./Industries";
import "./css/LargeLanguageModel.css";
import Benfits2 from "./Benefits2";
import Integration from "./Integration";
import OurTechStack from "./OurTechStack";
import BroadExpertise from "./BroadExpertise";
import CustomerSuccess from "../common/CustomerSuccess";
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import FAQs from "../../product-dashboard/FAQs";
import FAQsData from "./JSONData/FAQsData";
// import BannerData from "./JSONData/BannerData";
import ContactForm from "../common/contactForm";
import GridOfCards from "../common/GridOfCards";
import AlternateBanner from "../common/alternateBanner";
import AlternateBannerData from "./JSONData/AlternateBannerData";
import AccessibleTabs from "../common/LLM Accordion/AccessibleTabs";
import AccessibleTabsData from "./useCasesData";
import NewBanner from "../common/NewBanner";
import NewBannerdata from "./NewBannerData";

const LargeLanguageModel = () => {
  return (
    <div>
      <div>
        <NewBanner data={NewBannerdata} />
        {/* <Banner BannerData={BannerData} /> */}
        <Benfits />

        <section
          className="access_tabs margin-adjust"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <AccessibleTabs
            tabsData={AccessibleTabsData}
            subheading="Discover the versatility of Large Language Models in various domains."
            sectionName="Large Language Models Use Cases"
            foot="Explore how Large Language Models can revolutionize your operations!"
            bttn={true}
          />
        </section>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "1126px" }}>
            <GridOfCards
              content={Industries}
              items={{
                item: Industries,
                NoCards: 3,
                title: "Build a Custom LLM Model for Your Industry",
                caption:
                  "Our generative AI company delivers custom models rooted in AI expertise &amp; years of cross-domain expertise.",
              }}
            />
          </div>
        </div>

        <div className="quick-block">
          <h2 className="head-block-center w-800">
            Explore Our Advanced Language Model Solutions
          </h2>
          <div className="text-block-center">
            Discover a diverse range of language model services tailored to your
            specific requirements.
          </div>
        </div>
        <div style={{ margin: "0 auto", maxWidth: "1470px" }}>
          <AlternateBanner banners={AlternateBannerData} />
        </div>
        {/* <Expertise /> */}
        {/* <ArticleBanner /> */}
        <Benfits2 />
        <Integration />
        <OurTechStack />
        <BroadExpertise />
        {/* <WhyMAQSoftware /> */}
        <CustomerSuccess
          items={CutomerSuccessData}
          heading="Large Language Models Implications"
          CardHeight="320px"
        />
        <FAQs FAQs={FAQsData} />
        <ContactForm />
      </div>
    </div>
  );
};

export default LargeLanguageModel;
