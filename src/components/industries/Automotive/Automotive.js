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
import NewBanner from '../../solutions/common/NewBanner'
import bannerdata from './bannerdata'


const Automotive = () => {
  return (
    <>
    <NewBanner data = {bannerdata} />

      <section className="info-section">
        <div className="info-section-inner"></div>
      </section>

      <div className="quick-block">
        <div className="head-block-center" style={{ marginBottom: "10px" }}>
          <h2 className="headblock">Our Expertise</h2>
        </div>
        <div className="text-block-center" style={{ marginBottom: "10px" }}>
          We provide automotive AI services for car manufacturers that leverage
          3D computer vision to make data-driven decisions at each manufacturing
          stage.
        </div>
      </div>

      <div className="container_pharma">
        <Alternate banners={OurExpertise} ContactBtn={false} />
      </div>

      <section className="onecard">
        <OneCardCoursal items={OneCardDataAuto} />
      </section>

      <div style={{ display: "flex", justifyContent: "center" }}>
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
      <section className="griddd">
        <Grid content={ServiceNum} />
      </section>

      <FAQs FAQs={FAQsDataAuto} />

      <ContactForm />
    </>
  );
};

export default Automotive;
