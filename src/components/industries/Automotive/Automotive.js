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

const Automotive = () => {
  return (
    <>
      <section className="automotivetool">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>
                  Tailored Sentiment Analysis Solutions for Your Project
                </span>
              </div>
              <div className="heading_inner">
                <p>
                  Leverage consumer interaction data at scale with our sentiment
                  analysis services.
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

      <section class="info-section">
        <div class="info-section-inner">
          <h2 class="head-block-center">Our Expertise</h2>
          <div class="text-block-center">
            {" "}
            We provide automotive AI services for car manufacturers that
            leverage 3D computer vision to make data-driven decisions at each
            manufacturing stage.
          </div>
        </div>
      </section>

      <OurExpertise />
    
    <section className="onecard">
      <OneCardCoursal items={OneCardDataAuto}/>
      </section>
      
      <FlatGridLayout  items={BenefitsData} />
    
    <section className="griddd">
      <Grid content={ServiceNum} />
      </section>

      <FAQs FAQs = {FAQsDataAuto} />

      <ContactForm />
    </>
  );
};

export default Automotive;
