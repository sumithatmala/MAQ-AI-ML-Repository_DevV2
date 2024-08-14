import React from 'react';
import { Helmet } from 'react-helmet';
import AccordionStatic from "../../solutions/common/accordionStatic";
import AlternateBanner from "../../solutions/common/alternateBanner";
import BiotechDigitalData from "./AccorData";
import AreaExpertise from "./AreaExpertise";
import "./css/HealthcarePharma.css";
import ContactForm from "../../solutions/common/contactForm";
import GridOfCards from "../../solutions/common/GridOfCards";
import ValueData from "./ValueData";
import Grid from "../../solutions/common/grid";
import ServiceProvide from "./ServiceProvides";
import BigData from "./BigDataPharma";
import OneCardCoursal from "../common/OneCardCoursal";
import OCDataHealth from "./CarouselDataHealth";
import NewBanner from '../../solutions/common/NewBanner';
import BannerData from './BannerData';

const HealtcarePharma = () => {
  return (
    <>
      <Helmet>
        <title>Healthcare and Pharma AI Solutions | Digital Transformation in Biotech | MAQ Software</title>
        <meta name="description" content="Explore our AI solutions for the healthcare and pharmaceutical industries. We provide digital transformation and big data analytics to enhance healthcare services and operations." />
        <meta name="keywords" content="Healthcare AI, Pharma AI Solutions, Biotech Digital Transformation, Big Data in Healthcare, AI for Pharmaceuticals, Healthcare Technology Solutions, MAQ Software, Artificial Intelligence, Machine Learning" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Healthcare and Pharma AI Solutions | Digital Transformation in Biotech" />
        <meta property="og:description" content="Explore our AI solutions for the healthcare and pharmaceutical industries. We provide digital transformation and big data analytics to enhance healthcare services and operations." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NewBanner data={BannerData} />      

      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionStatic
          title={"Biotech Digital Transformation"}
          desc="We will lead a successful digital transformation of your business, so you'll easily meet new challenges and mitigate future risks."
          listItems={BiotechDigitalData}
          titleRatio={"25%"}
          cntWidth={"1200px"}
        />
      </div>

      <OneCardCoursal items={OCDataHealth} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionStatic
          title={"AI and Big Data for Pharma"}
          desc=""
          listItems={BigData}
          listWidth={100}
          titleRatio={"50%"}
          cntWidth={"1000px"}
        />
      </div>

      <div className="container_pharma" style={{padding: "0px 50px"}}>
        <AlternateBanner banners={AreaExpertise} count={0} ContactBtn={true} />
      </div>

      <h2 className="head-block-center">Services We Provide</h2>
      <div className="text-block-center">Artificial intelligence solutions in healthcare on demand.</div>
      <section className="griddd">
        <Grid content={ServiceProvide} />
      </section>

      <section className="gridd">
        <GridOfCards
          content={ValueData}
          items={{
            item: ValueData,
            NoCards: 3,
            title: "Value You Get",
            caption:
              "We offer our experience in Artificial Intelligence for healthcare organizations.",
          }}
        />
      </section>
      <div className="pharmaCarousel">
        {/* <CustomerSuccess items={PharmaCustData} heading="AI in Health and Pharma" CardHeight="500px"/> */}
      </div>
      <ContactForm />
    </>
  );
};

export default HealtcarePharma;
