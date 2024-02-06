import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import GridOfCards from '../../solutions/common/GridOfCards';
import ContactForm from '../../solutions/common/contactForm';
import './css/retailTool.css';
import retailCustData from './retailCust';
import GridData from './BusinessCases';
import Grid from '../../solutions/common/grid';
import { Number } from './Number';

import predictive from './icons/predictive-analytics-side.jpg';
import competitive from './icons/compettiveAdv.webp';


const Retail = () => {
  return (
    <>
      <section className="toolinformations">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>Tailored Sentiment Analysis Solutions for Your Project</span>
              </div>
              <div className="heading_inner">
                <p>
                  Leverage consumer interaction data at scale with our sentiment analysis services.
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

      <section class="info-section"><div class="info-section-inner"><h2 class="head-block-center">Our Expertise</h2><div class="text-block-center"> Artificial intelligence in the retail industry: made easy.</div></div></section>

      <section className="section-text-image __image-right">
        <div className="section-text-image-inner">
          <div className="section-text-image__figure">
            <img src={predictive} alt="ai solutions retail" />
          </div>
          <div className="section-text-image-details">
            <h3 className="section-text-image__title">Boost Profits with AI Predictive Analytics</h3>
            <div className="section-text-image__description">
              <p>Facing inventory challenges? Revolutionize inventory management with <a href="https://indatalabs.com/services/predictive-analytics">predictive analytics solutions</a> in the retail industry. Calculate demand forecasts and optimize goods allocation, purchasing, and restocking across various locations for increased efficiency.</p>
              <p>Analyze historical sales data and trends to enhance planning for seasonal events. Leverage artificial intelligence in retail for advanced data analysis and visualization, ensuring you stay ahead of your competitors in the retail landscape.</p>
            </div>

            <div className="block__action __lc-pos __mt34">
              <a href="#section-contacts" className="btn btn-empty">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-text-image">
        <div className="section-text-image-inner">
          <div className="section-text-image__figure">
            <img src={competitive} alt="nlp to boost" />
          </div>
          <div className="section-text-image-details">
            <h3 className="section-text-image__title">Elevate Your Competitive Edge with NLP</h3>
            <div className="section-text-image__description">
              <p>Discover how your brand is perceived by leveraging Natural Language Processing (NLP). Utilize sentiment analysis solutions to collect and analyze customer reviews from social platforms. Gain valuable insights to address issues and highlight your competitive advantages in the retail market.</p>
              <p>Tailor your marketing strategies to a specific target audience through client segmentation. Utilize data-driven insights into customer needs and provide personalized experiences to capture your target audience's loyalty and boost profits.</p>
            </div>

            <div className="block__action __lc-pos __mt34">
              <a href="#section-contacts" className="btn btn-empty">Let’s Talk</a>
            </div>
          </div>
        </div>
      </section>

      <section className='griddd'>
        <Grid content={Number} />
      </section>

      <GridOfCards items={{ item: GridData, title: "Benefits of Artificial Intelligence in Retail Industry" }} />

      {/* <CustomerSuccess items={retailCustData} /> */}
      <CustomerSuccess items={retailCustData} />

      <ContactForm />
    </>
  );
};

export default Retail;