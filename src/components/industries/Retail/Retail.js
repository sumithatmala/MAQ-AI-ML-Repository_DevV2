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


const Retail = () => {
  return (
    <>
      <section className="toolinformations">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>Elevate Your Retail Presence with AI Innovations</span>
              </div>
              <div className="heading_inner">
                <p>
                Surpass Competitors in the Retail Landscape through Advanced AI Solutions.
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

      <section className="info-section"><div className="info-section-inner"><h2 className="head-block-center">Our Expertise</h2><div className="text-block-center"> Artificial intelligence in the retail industry: made easy.</div></div></section>

      

      {/* <AlternateBanner banners={AreaExpertise} count={0} ContactBtn={true} /> */}
      <section className='altBanner'>
      <AlternateBanner banners={AlternateData} count={2} ContactBtn={true} />
      </section>

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