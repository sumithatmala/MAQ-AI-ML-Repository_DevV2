import featuresData from "./LeftRightData";
// import LeftRight from "../common/LeftRightSection";
import "./css/GameEntertainment.css";
import ContactForm from "../../solutions/common/contactForm";
import CustomerSuccess from "../../solutions/common/CustomerSuccess";
import CustData from "./CustData";
import OneCardCoursal from "../common/OneCardCoursal";
import OneCardDataGame from "./OneCardDataGame";
import GameDev from "./GameDev";
import WhyChooseSection from "./WhyChosen";

const GameEntertainment = () => {
  return (
    <>
      <section className="automotivetool">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>
                AI-Powered Game Solutions
                </span>
              </div>
              <div className="heading_inner">
                <p>
                Elevating Your Game Development Business to Success.
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

      <div className="keyExpertise" style={{ marginTop: "60px" }}>
        {/* <LeftRight
          items={featuresData}
          title={"Key Expertise"}
          subtitle={
            "We share our expertise for you to make it to the top charts."
          }
        /> */}
      </div>

      <OneCardCoursal items={OneCardDataGame} />

      <WhyChooseSection />

      <GameDev />

      <CustomerSuccess items={CustData} heading="Customer Success" CardHeight="55rem"/>
      <ContactForm />
    </>
  );
};

export default GameEntertainment;
