import CustomerSuccess from '../../solutions/common/CustomerSuccess';
import GridOfCards from '../../solutions/common/GridOfCards';
import ContactForm from '../../solutions/common/contactForm';
import './css/retailTool.css';
import retailCustData from './retailCust';
import GridData from './BusinessCases';
import Grid from '../../solutions/common/grid';
import { Number } from './Number';


const Retail = () =>{
    return(
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
          <img src="https://indatalabs.com/wp-content/uploads/2021/03/ai-pa-to-increase-profit.jpg" alt="ai solutions retail" />
        </div>
        <div className="section-text-image-details">
          <h3 className="section-text-image__title">AI Predictive Analytics to Increase Profit</h3>
          <div className="section-text-image__description">
            <p>Inventory struggles? Transform inventory management with <a href="https://indatalabs.com/services/predictive-analytics">predictive analytics solutions</a> in the retail industry. Calculate demand forecasts and sales for efficient goods allocation, purchasing and restocking in various locations.</p>
            <p>Analyze historical sales data and trends for better seasonal events planning. Use artificial intelligence in retail for data analysis and visualisation for staying ahead of your retail competitors.</p>
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
          <img src="https://indatalabs.com/wp-content/uploads/2021/03/nlp-to-boost.jpg" alt="nlp to boost" />
        </div>
        <div className="section-text-image-details">
          <h3 className="section-text-image__title">NLP to Boost Your Competitive Advantage</h3>
          <div className="section-text-image__description">
            <p>Find out how your clients see your brand with Natural Language Processing (NLP). Collect and analyze customer reviews from socials with <a href="https://indatalabs.com/services/consumer-sentiment-analysis">sentiment analysis</a> solutions. Get insights to address the problems and emphasize your competitive advantages on the retail market.</p>
            <p>Cater your marketing efforts to the specific target audience with client segmentation. Get data-driven insights on customer needs to solve for them. Win your target audiences’ hearts by providing them with personalized experiences, and get more profits.</p>
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

      <GridOfCards items={{item: GridData, title: "Benefits of Artificial Intelligence in Retail Industry"}}/>

      {/* <CustomerSuccess items={retailCustData} /> */}
      <CustomerSuccess items={retailCustData} />

      <ContactForm />
        </>
    );
};

export default Retail;