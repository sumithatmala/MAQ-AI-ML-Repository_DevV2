import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../../solutions/common/contactForm";
import BenefitsData from "./BenefitsData";
import OurExpertise from "./OurExpertise";
import "./css/Automotive.css";
import FlatGridLayout from "../../solutions/common/FlatGridLayout";
import Grid from "../../solutions/common/grid";
import { ServiceNum } from "./ServicesNum";
import FAQs from "../../product-dashboard/FAQs";
import FAQsDataAuto from "./FAQsDataAuto";
import OneCardCoursal from "../common/OneCardCoursal";
import OneCardDataAuto from "./OneCardDataAuto";
import AccordionStatic from "../../solutions/common/accordionStatic";
import AccordionDataAuto from "./AccordionDataAuto";
import Alternate from "../../solutions/common/alternateBanner";
import NewBanner from '../../solutions/common/NewBanner';
import bannerdata from './bannerdata';

const Automotive = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions for Automotive Industry | Enhance Manufacturing | MAQ Software</title>
        <meta name="description" content="Explore our AI services for the automotive industry. Leverage 3D computer vision and AI to enhance manufacturing processes and make data-driven decisions." />
        <meta name="keywords" content="Automotive AI, AI in Manufacturing, 3D Computer Vision, Automotive Industry AI, Data-Driven Decisions, AI Services, Automotive AI Solutions, MAQ Software, maq software" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Solutions for Automotive Industry | Enhance Manufacturing" />
        <meta property="og:description" content="Discover how our AI solutions can transform the automotive manufacturing process through advanced 3D computer vision and data-driven decision making." />
        <meta property="og:image" content="/path-to-image.jpg" /> {/* Replace with actual image URL */}
      </Helmet>
      <NewBanner data={bannerdata} />
      <div className="quick-block margin-adjust">
        <div className="head-block-center" style={{ marginBottom: "" }}>
          <h2 className="headblock">Our Expertise</h2>
        </div>
        <div className="text-block-center" style={{ marginBottom: "3rem", fontSize: "16px" }}>
          <p style={{fontSize: "16px"}}>We provide automotive AI services for car manufacturers that leverage
          3D computer vision to make data-driven decisions at each manufacturing
          stage.</p>
        </div>
      </div>

      <div className="container_pharma">
        <Alternate banners={OurExpertise} ContactBtn={false} />
      </div>

      <section className="onecard margin-adjust">
        <OneCardCoursal items={OneCardDataAuto} />
      </section>

      <div style={{ display: "flex", justifyContent: "center"}} >
        <AccordionStatic
          title={"Challenges Addressed in Manufacturing"}
          desc="Transform your manufacturing processes with the automated capabilities of artificial intelligence."
          listItems={AccordionDataAuto}
        />
      </div>

      <section className="benefits">
        <FlatGridLayout
          items={BenefitsData}
          title="Benefits for Your Business"
        />
      </section>
      <h2 className="head-block-center">Comprehensive AI Advisory and Support Services</h2>
      <section className="griddd">
        <Grid content={ServiceNum} />
      </section>

      <FAQs FAQs={FAQsDataAuto} />

      <ContactForm />
    </>
  );
};

export default Automotive;
