import "./css/DataCaptureOCR.css"

//Data
// import BannerData from "./JSONData/bannerData"
import ServiceData from "./JSONData/buisnessCasesData"
import AccordionData from "./JSONData/AccordianData"
import customerSuccessData from "./JSONData/customerSuccessData"
// import roadMapData from "./JSONData/roadMapData"
import benefitsData from "./JSONData/BenefitsData"
import LogisticsBenefits from "./JSONData/LogisticsBenefits"
import RoadMapNewData from "./JSONData/RoadMapNewData"


//Components
// import Banner from "../common/Banner"
import Services from '../common/GridOfCards'
import AccordionStatic from "../common/accordionStatic"
import ContactForm from "../common/contactForm"
import CustomerSuccess from "../common/CustomerSuccess"
// import RoadMap from "../common/RoadMap"
import BenefitCards from "./benefitsCards"
import BackgroundBanner from "./backgroundBanner"
import UsageBenefits from "./UsageBenefits"
import RoadMapNew from "../common/RoadMapNew"
import NewBanner from "../common/NewBanner"
import NewBann from "./NewBannerdata"

const DataCaptureOCR = () => {
    return (
        <>
            <NewBanner data={NewBann} />
            {/* <ContactButton /> */}
            {/* <Banner BannerData={BannerData} /> */}
            <section className="SectionDesc margin-adjust">
                <div className="CenterDesc">
                    <h2>Powerful solutions for gaining deep insights into data and automating business processes.</h2>
                    <p>The amount of data handled by businesses is rapidly increasing each day. Services like data capture, retrieval, and extraction are now essential components of organizational workflows. They are crucial for efficiently managing vast amounts of information stored in various formats and locations.</p>
                    <p>MAQ Software is a leading provider of automated data capture solutions, empowering data-driven businesses with efficient tools. We specialize in OCR, data capture, and extraction services to help you manage your data and automate business processes.</p>
                </div>
            </section>
            <Services items={{ item: ServiceData, NoCards: 4, title: "Data Capture Services We Offer" }} />
            {/* <RoadMap items={roadMapData} title="How Our Data Capture and Extraction Services Work" /> */}
            <RoadMapNew heading={"How Our Data Extraction Service Works"} desc={""} items={RoadMapNewData} />
            <BackgroundBanner />
            <BenefitCards cardsData={benefitsData} />
            <UsageBenefits items={LogisticsBenefits} title="OCR and Data Capture for Logistics & Transportation" />
            <div style={{ display: "flex", justifyContent: "center" }} className="margin-adjust">
                <AccordionStatic title={"Other Industries"} desc="As a data extraction company, we provide optical character recognition services and help companies across multiple industries optimize their business processes with the help of our automated data capture software." listItems={AccordionData} titleRatio={"50%"} cntWidth={"896px"} />
            </div>
            {/* <CustomerSuccess items={customerSuccessData} heading="Computer Vision and Image Processing" CardHeight="390px" /> */}
            <ContactForm contactMsg={"Want to start getting value from your data? Let's discuss how we can help you."} />
        </>
    )
}

export default DataCaptureOCR;