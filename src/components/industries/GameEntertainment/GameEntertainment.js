import featuresData from "./LeftRightData";
// // import LeftRight from "../common/LeftRightSection";
import "./css/GameEntertainment.css";
import ContactForm from "../../solutions/common/contactForm";

import OneCardCoursal from "../common/OneCardCoursal";
import OneCardDataGame from "./OneCardDataGame";

import WhyChooseSection from "./WhyChosen";
import LeftRight from "../../solutions/common/alternateBanner";
import NewBanner from "../../solutions/common/NewBanner";
import bannerdata from "./bannerdata";
import GridOfCards from "../../solutions/common/GridOfCards";
// import GameDev from "./GameDev"
import GridData from "./GridData";


const GameEntertainment = () => {
  return (
    <>
      <NewBanner data={bannerdata} />
      <div
        className="keyExpertise container_pharma"
        style={{ marginTop: "60px" }}
      >
        <div className="quick-block">
          <div className="head-block-center" style={{ marginBottom: "10px" }}>
            <h2 className="headblock">Key Expertise</h2>
          </div>
          <div className="text-block-center" style={{ marginBottom: "10px" }}>
            We share our expertise for you to make it to the top charts.
          </div>
        </div>
        <LeftRight banners={featuresData} ContactBtn={false} />
      </div>

      <OneCardCoursal items={OneCardDataGame} />

      <WhyChooseSection />
        

        {/* edit from here */}
      <GridOfCards items={{ item: GridData,NoCards:4, title: "Benefits of Artificial Intelligence in Retail Industry" }} />   
      
      {/* <CustomerSuccess
        items={CustData}
        heading="AI Game Solutions"
        CardHeight="470px"
      /> */}
      <ContactForm />
    </>
  );
};

export default GameEntertainment;
