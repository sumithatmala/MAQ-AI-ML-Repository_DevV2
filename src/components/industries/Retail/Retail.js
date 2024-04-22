import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import GridOfCards from '../../solutions/common/GridOfCards';
import ContactForm from '../../solutions/common/contactForm';
import './css/retailTool.css';
import retailCustData from './retailCust';
import GridData from './BusinessCases';
import Grid from '../../solutions/common/grid';
import { Number } from './Number';

import AlternateBanner from '../../solutions/common/alternateBanner';
import AlternateData from './alternatedata';
import NewBanner from '../../solutions/common/NewBanner'
import bannerdata from './bannerdata'


const Retail = () => {
  return (
    <>
      <NewBanner data = {bannerdata} />

      <section className="info-section margin-adjust"><div className="info-section-inner" style={{padding:"0px"}}><h2 className="head-block-center">Our Expertise</h2><div className="text-block-center"> Artificial intelligence in the retail industry: made easy.</div></div></section>

      

      {/* <AlternateBanner banners={AreaExpertise} count={0} ContactBtn={true} /> */}
      <section className='altBanner'>
      <AlternateBanner banners={AlternateData} count={2} ContactBtn={true} />
      </section>

        <h2 className='head-block-center'>AI Consulting and Implementation</h2>
      <section className='griddd'>
        <Grid content={Number} />
      </section>

      <GridOfCards items={{ item: GridData,NoCards:4, title: "Benefits of Artificial Intelligence in Retail Industry" }} />

      {/* <CustomerSuccess items={retailCustData} /> */}
      <CustomerSuccess items={retailCustData}  heading="Customer Success" CardHeight="420px"/>

      <ContactForm />
    </>
  );
};

export default Retail;