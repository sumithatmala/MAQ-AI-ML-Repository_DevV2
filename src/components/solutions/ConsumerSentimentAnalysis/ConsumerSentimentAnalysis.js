import React from 'react';
import { Helmet } from 'react-helmet';
import "./css/toolinformations.css";
import "./css/ConsumerSentimentAnalysis.css";
import OurServices from "./OurServices";
import AdoptSentiment from "./AdoptSentiment";
import SentimentAnalysis from "./SentimentAnalysis";
import SentimentAnalyticsSection from "./SentimentAnalyticsSection";
import SentimentAnalysisCompany from "./SentimentAnalysisCompany";
import FAQs from "../../product-dashboard/FAQs";
import FAQsData from "./FAQsData";
import ContactForm from "../common/contactForm";
import GridOfCards from "../common/GridOfCards";
import IndustriesData from "./IndustriesData";
import IndustriesListData from "./IndustriesListData";
import Grid from "../common/grid";
import Alternate from '../common/alternateBanner';
import NewBanner from '../common/NewBanner';
import CsmBanner from "./CSMBannerData";

const ConsumerSentimentAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>Consumer Sentiment Analysis | Advanced NLP Solutions | MAQ Software</title>
        <meta name="description" content="Elevate your business strategy with MAQ Software's consumer sentiment analysis services. Utilize cutting-edge NLP-based technology to discern the emotional tone within consumer sentiment data and drive meaningful insights." />
        <meta name="keywords" content="Consumer Sentiment Analysis, NLP Technology, Sentiment Analytics, Business Strategy, MAQ Software, Emotional Tone, Data Insights" />
      </Helmet>
      
      <NewBanner data={CsmBanner} />

      {/* <ContactButton /> */}
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
        <h2 className="head-block-center" style={{ marginTop: "50px" }}>
          Live Insights through Sentiment Analytics</h2>
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

      <section className="margin-adjust">
        <SentimentAnalysisCompany />
      </section>

      {/* <CustomerSuccess items={CarouselData} heading="AI Sentiment Analysis" CardHeight="300px" /> */}

      <FAQs FAQs={FAQsData} />
      
      <ContactForm />
    </>
  );
};

export default ConsumerSentimentAnalysis;
