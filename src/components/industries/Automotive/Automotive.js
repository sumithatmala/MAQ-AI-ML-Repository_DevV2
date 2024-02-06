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

const Automotive = () => {
    return (
        <>
            <section className="automotivetool">
                <div className="container">
                    <div className="grids">
                        <div className="top">
                            <div className="heading">
                                <span>Incorporating Artificial Intelligence in Automotive Manufacturing</span>
                            </div>
                            <div className="heading_inner">
                                <p>
                                    We assist manufacturers in integrating artificial intelligence into the automotive industry for intelligent and cost-effective vehicle production.
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
                <div class="info-section-inner"></div>
            </section>

            <OurExpertise />

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
                <FlatGridLayout items={BenefitsData} title="Benefits for Your Business" />
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
