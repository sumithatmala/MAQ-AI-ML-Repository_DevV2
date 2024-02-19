import "./css/toolinformations.css";
import "./css/ConsumerSentimentAnalysis.css";
import OurServices from "./OurServices";
import AdoptSentiment from "./AdoptSentiment";
import SentimentAnalysis from "./SentimentAnalysis";
import SentimentAnalyticsSection from "./SentimentAnalyticsSection";
import SentimentAnalysisCompany from "./SentimentAnalysisCompany";
import CustomerSuccess from "../common/CustomerSuccess";
import CarouselData from "./CarouselData";
import FAQs from "../../product-dashboard/FAQs";
import FAQsData from "./FAQsData";
import ContactForm from "../common/contactForm";
import GridOfCards from "../common/GridOfCards";
import IndustriesData from "./IndustriesData";
import IndustriesListData from "./IndustriesListData";
import Grid from "../common/grid";
import Alternate from '../common/alternateBanner';

const ConsumerSentimentAnalysis = () => {
  return (
    <>
      <section className="toolinformations">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>
                  Tailored Sentiment Analysis Solutions for Your Project
                </span>
              </div>
              <div className="heading_inner">
                <p>
                  Leverage consumer interaction data at scale with our sentiment
                  analysis services.
                </p>
              </div>
              <div className="images">
                <div className="imageone"></div>
                <div className="imagetwo"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="consumer_grid">
        <GridOfCards
        content={IndustriesListData}
        items={{
          item: IndustriesListData,
          NoCards: 3,
          title: "Elevate Your Business Strategy with User Sentiment",
          caption:
            "Sentiment analytics, utilizing cutting-edge NLP-based technology, discerns the emotional tone within consumer sentiment data.",
        }}
        />
      </section>

      <div className="container_pharma">
      <Alternate banners={OurServices} ContactBtn={false} />
      </div>

      <section className="adopt">
        <AdoptSentiment />
      </section>

      <section>
        <SentimentAnalysis />
      </section>

      <section>
        <Grid content={SentimentAnalyticsSection} />
      </section>

      <section className="gridd">
        <GridOfCards
          content={IndustriesData}
          items={{
            item: IndustriesData,
            NoCards: 3,
            title: "Industries",
            caption:
              "We inject our cross-domain experience into building custom solutions aligned with individual business needs.",
          }}
        />
      </section>

      <section>
        <SentimentAnalysisCompany />
      </section>

      <CustomerSuccess items={CarouselData}  heading="Customer Success" CardHeight="35rem"/>

      <FAQs FAQs={FAQsData} />
      <ContactForm />
    </>
  );
};

export default ConsumerSentimentAnalysis;
