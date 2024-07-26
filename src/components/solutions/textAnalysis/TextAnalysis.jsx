import React from 'react';
import { Helmet } from 'react-helmet';

import "./css/TextAnalysis.css";

import { learnMoreItems, Banners, SpecialCards } from "./JSON/LearnMoreList";
import ContactForm from "../common/contactForm";
import AlternateBanner from "../common/alternateBanner";
import SpecialContainer from "../common/specializationCards";
import NewBanner from "../common/NewBanner";
import bannerdata from "./JSON/bannerdata";
import GridOfCards from "../common/GridOfCards";

const TextAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>Custom Text Analysis Software | NLP Solutions for Your Business</title>
        <meta name="description" content="Develop tailored text analysis software to extract meaning from text data, enhance reporting, and accelerate project delivery. Discover our NLP solutions designed for customer feedback analysis, customer support automation, and more." />
        <meta name="keywords" content="Text Analysis Software, Natural Language Processing, NLP Solutions, Customer Feedback Analysis, Customer Support Automation, Semantic Search, Text Data Analysis, MAQ Software" />
      </Helmet>
      <NewBanner data={bannerdata} />
      <div className="InfoVisual">
        <div className="HeaderBox margin-adjust">
          <h1>
            Text analysis software customized to meet your specific needs.
          </h1>
          <p>
            We develop tailored text analysis software that extracts meaning
            from text data, enhancing reporting and analysis speed. Our
            proprietary natural language processing (NLP) technology accelerates
            project delivery for our customers. Our NLP solutions are designed
            to drive customer-centric initiatives such as customer feedback
            analysis, customer support automation, information access, and
            semantic search.
          </p>
        </div>
        <GridOfCards
          content={learnMoreItems}
          items={{
            item: learnMoreItems,
            NoCards: 3,
            title: "Elevate Your Business Strategy with User Sentiment",
            caption:
              "Sentiment analytics, utilizing cutting-edge NLP-based technology, discerns the emotional tone within consumer sentiment data.",
          }}
        />
        <AlternateBanner banners={Banners} count={0} ContactBtn={true} />
        <SpecialContainer SpecialCards={SpecialCards} />
        <ContactForm
          contactMsg={"Let's talk about your text analysis project."}
        />
      </div>
    </>
  );
};

export default TextAnalysis;
