import React from 'react';
import { Helmet } from 'react-helmet';
import GridOfCards from '../../solutions/common/GridOfCards';
import ContactForm from '../../solutions/common/contactForm';
import './css/retailTool.css';
import GridData from './BusinessCases';
import Grid from '../../solutions/common/grid';
import { Number } from './Number';
import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateData from './alternatedata';
import NewBanner from '../../solutions/common/NewBanner';
import bannerdata from './bannerdata';

const Retail = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions for Retail Industry | Enhance Your Retail Operations | MAQ Software</title>
        <meta name="description" content="Discover how artificial intelligence can transform the retail industry with our AI consulting and implementation services. From optimizing operations to enhancing customer experiences, our solutions are tailored for success." />
        <meta name="keywords" content="Retail AI Solutions, AI Consulting, Retail Optimization, Artificial Intelligence in Retail, AI Implementation, Retail Business Intelligence, Customer Experience Enhancement" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Solutions for Retail Industry | Enhance Your Retail Operations" />
        <meta property="og:description" content="Discover how artificial intelligence can transform the retail industry with our AI consulting and implementation services. From optimizing operations to enhancing customer experiences, our solutions are tailored for success." />
        <meta property="og:type" content="website" />
      </Helmet>

      <NewBanner data={bannerdata} />

      <section className="info-section margin-adjust">
        <div className="info-section-inner" style={{ padding: "0px" }}>
          <h2 className="head-block-center">Our Expertise</h2>
          <div className="text-block-center"><p style={{fontSize: "16px"}}>Artificial intelligence in the retail industry: made easy.</p></div>
        </div>
      </section>

      <section className='altBanner'>
        <AlternateBanner banners={AlternateData} count={2} ContactBtn={true} />
      </section>

      <h2 className='head-block-center'>AI Consulting and Implementation</h2>
      <section className='griddd'>
        <Grid content={Number} />
      </section>

      <GridOfCards items={{ item: GridData, NoCards: 4, title: "Benefits of Artificial Intelligence in Retail Industry" }} />

      {/* <CustomerSuccess items={retailCustData} heading="AI Business Intelligence" CardHeight="420px"/> */}

      <ContactForm />
    </>
  );
};

export default Retail;
