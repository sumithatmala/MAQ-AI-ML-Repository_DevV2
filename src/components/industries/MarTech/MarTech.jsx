import React from 'react';
import { Helmet } from 'react-helmet';
import OneCardCoursal from '../common/OneCardCoursal';
import OneCardData from './JSONData/Exprtise';
import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateBannerData from './JSONData/AlternateBannerData';
import FlatGridLayout from '../../solutions/common/FlatGridLayout';
import BusinessLevelUpData from './JSONData/BusinessLevelUpData';
import BusinessCases from '../../solutions/common/GridOfCards';
import BusinessCasesData from './JSONData/BusinessCasesData';
import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import CutomerSuccessData from "./JSONData/CustomerSuccessData";
import ContactForm from '../../solutions/common/contactForm';
import NewBanner from '../../solutions/common/NewBanner';
import bannerdata from './bannerdata';

const MarTech = () => {
  return (
    <>
      <Helmet>
        <title>AI-Driven Marketing Technology Solutions | Enhance Your Digital Strategy | MAQ Software</title>
        <meta name="description" content="Leverage our expertise in AI to accelerate digital evolution, reduce advertising costs, and improve customer satisfaction with advanced marketing technology solutions." />
        <meta name="keywords" content="Marketing Technology, AI Solutions, Digital Strategy, Big Data Analytics, Predictive Analytics, Machine Learning, Computer Vision, NLP, Marketing Automation, MAQ Software, Artificial Intelligence, Machine Learning" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI-Driven Marketing Technology Solutions | Enhance Your Digital Strategy" />
        <meta property="og:description" content="Leverage our expertise in AI to accelerate digital evolution, reduce advertising costs, and improve customer satisfaction with advanced marketing technology solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <NewBanner data={bannerdata} />
      {/* <Banner BannerData={BannerData}/> */}
      <section className="WelcomeMsg margin-adjust">
        <h2>Our Strengths</h2>
        <div className='text-block-center'><p style={{fontSize: "16px"}}>Utilize our specialized knowledge to accelerate your digital evolution, minimize advertising expenditures, and elevate customer satisfaction through cutting-edge AI solutions.</p></div>
      </section>
      <div className="InfoVisual">
        <AlternateBanner banners={AlternateBannerData} count={0} ContactBtn={true} />
      </div>
      <OneCardCoursal items={OneCardData} />
      <FlatGridLayout items={BusinessLevelUpData} title={"Our Services"} caption={"Enhance your customer experience with our tailored AI solutions, including big data analytics, predictive analytics, ML, computer vision, and NLP."} />
      <BusinessCases content={BusinessCasesData} items={{ item: BusinessCasesData, NoCards: 3, title: "Have an Upper Hand with Leveraging AI Software Development for Marketing", caption: "We are ready to help you add value to your business with AI software development for reliable marketing solutions. You can give up guesswork with our predictive analytics technology for precise data-driven forecasts and better communication with your clients. Automate business processes to reduce marketing expenses and increase client satisfaction." }} />
      {/* <CustomerSuccess items={CutomerSuccessData} heading="Machine Learning at Marketing" CardHeight="350px"/> */}
      <ContactForm />
    </>
  );
};

export default MarTech;
