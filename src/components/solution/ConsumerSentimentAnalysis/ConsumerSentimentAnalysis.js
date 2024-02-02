import "./css/toolinformation.css";
import IndustriesList from "./IndustriesList";
import './css/ConsumerSentimentAnalysis.css';
import OurServices from "./OurServices";
import AdoptSentiment from "./AdoptSentiment";
import SentimentAnalysis from "./SentimentAnalysis";
import SentimentAnalyticsSection from "./SentimentAnalyticsSection";
import IndustryGrids from "./IndustryGrid";
import SentimentAnalysisCompany from "./SentimentAnalysisCompany";


const ConsumerSentimentAnalysis = () => {
  return (
    <>
      <section className="toolinformation">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>Sentiment Analysis Services For Your Project</span>
              </div>
              <div className="heading_inner">
                <p>
                  Activate consumer interaction data at scale with our sentiment
                  analysis services
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

      <section className="section-industries">
        <div
          className="industries__inner"
          style={{ marginTop: "40px", marginBottom: "0px" }}
        >
          <h2 className="head-block-center">Refine Your Business Strategy with User Sentiment</h2>
        </div>

        <div
          class="text-block-center"
          style={{ marginTop: "0px", marginBottom: "20px" }}
        >
          Sentiment analytics is a cutting-edge NLP-based technology that identifies the underlying emotional tone of consumer sentiment data.
        </div>
      </section>

      <section>
        <div>
      <IndustriesList />
      </div>
      </section>
      

      <section style={{marginTop:"100px"}}>
        <OurServices />
      </section>

      <section>
        <AdoptSentiment />
      </section>

      <section>
        <SentimentAnalysis />
      </section>

      <section>
        <SentimentAnalyticsSection />
      </section>

        <div>
         <IndustryGrids />
        </div>

      <section>
        <SentimentAnalysisCompany />
      </section>

    </>
  );
};

export default ConsumerSentimentAnalysis;
