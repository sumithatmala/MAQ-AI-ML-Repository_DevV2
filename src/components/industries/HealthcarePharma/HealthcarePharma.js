import AccordionStatic from "../../solutions/common/accordionStatic";
import AlternateBanner from "../common/AlternateBanner";
import BiotechDigitalData from "./AccorData";
import AreaExpertise from "./AreaExpertise";
import "./css/HealthcarePharma.css";
// import data from '../AISolutionsEcommerce/JSONData/AlternateBannerData';
import ContactForm from "../../solutions/common/contactForm";
import CustomerSuccess from "../../solutions/common/CustomerSuccess";
import PharmaCustData from "./PharmaCustData";
import GridOfCards from "../common/GridOfCards";
import ValueData from "./ValueData";
import Grid from "../common/grid";
import ServiceProvide from "./ServiceProvides";
import BigData from "./BigDataPharma";
import OneCardCoursal from "../common/OneCardCoursal";
import OCDataHealth from "./CarouselDataHealth";
const HealtcarePharma = () => {
  return (
    <>
      <section className="healthcare">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>
                  Incorporating Artificial Intelligence in Automotive
                  Manufacturing
                </span>
              </div>
              <div className="heading_inner">
                <p>
                  We assist manufacturers in integrating artificial intelligence
                  into the automotive industry for intelligent and
                  cost-effective vehicle production.
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionStatic
          title={"Biotech Digital Transformation"}
          desc="We will lead a successful digital transformation of your business, so you’ll easily meet new challenges and mitigate future risks."
          listItems={BiotechDigitalData}
        />
      </div>

      <OneCardCoursal items={OCDataHealth} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionStatic
          title={"AI and Big Data for Pharma"}
          desc=""
          listItems={BigData}
        />
      </div>

      <div className="container_pharma">
        <AlternateBanner banners={AreaExpertise} count={0} ContactBtn={true} />
      </div>

      <h2 class="head-block-center">Services We Provide</h2>
      <div class="text-block-center">Artificial intelligence solutions in healthcare on demand.</div>
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

      <CustomerSuccess items={PharmaCustData} heading="Customer Success" />
      <ContactForm />
    </>
  );
};

export default HealtcarePharma;
