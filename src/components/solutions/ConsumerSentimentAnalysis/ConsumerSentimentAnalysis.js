import "./css/toolinformations.css";
import IndustriesList from "./IndustriesList";
import "./css/ConsumerSentimentAnalysis.css";
import OurServices from "./OurServices";
import AdoptSentiment from "./AdoptSentiment";
import SentimentAnalysis from "./SentimentAnalysis";
import SentimentAnalyticsSection from "./SentimentAnalyticsSection";
import SentimentAnalysisCompany from "./SentimentAnalysisCompany";
import CustomerSuccess from "../../solutions/common/CustomerSuccess";
import CarouselData from "./CarouselData";
import FAQs from "../../product-dashboard/FAQs";
import FAQsData from "./FAQsData";
import ContactForm from "../../solutions/common/contactForm";
import GridOfCards from "../../industries/common/GridOfCards";
import IndustriesData from "./IndustriesData";

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

      <section className="section-SentimentAnalysis">
        <div
          className="industries__inner"
          style={{ marginTop: "40px", marginBottom: "0px" }}
        >
          <h2 className="head-block-center">
            Elevate Your Business Strategy with User Sentiment
          </h2>
        </div>

        <div
          class="text-block-center"
          style={{ marginTop: "0px", marginBottom: "20px" }}
        >
          Sentiment analytics, utilizing cutting-edge NLP-based technology,
          discerns the emotional tone within consumer sentiment data.
        </div>
      </section>

      <section>
        <div className="consumer">
          <IndustriesList />
        </div>
      </section>

      <section style={{ marginTop: "100px" }}>
        <OurServices />
      </section>

      <section>
        <AdoptSentiment />
      </section>

      <section>
        <SentimentAnalysis />
      </section>

      <section>
        <SentimentAnalyticsSection />
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
