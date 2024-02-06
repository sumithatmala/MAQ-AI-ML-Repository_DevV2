import "./css/DataCaptureOCR.css"

//Data
import BannerData from "./JSONData/bannerData"
import ServiceData from "./JSONData/buisnessCasesData"
import AccordionData from "./JSONData/AccordianData"
import customerSuccessData from "./JSONData/customerSuccessData"
import roadMapData from "./JSONData/roadMapData"
import benefitsData from "./JSONData/BenefitsData"
import LogisticsBenefits from "./JSONData/LogisticsOCRData"

//Components
import Banner from "../common/Banner"
import Services from '../common/GridOfCards'
import AccordionStatic from "./accordionStatic"
import ContactForm from "../common/contactForm"
import CustomerSuccess from "../common/CustomerSuccess"
import RoadMap from "../common/RoadMap"
import BenefitCards from "./benefitsCards"
import BackgroundBanner from "./backgroundBanner"
// import UsageBenefits from "./UsageBenefits"
import CartonImg from "./img/"

const DataCaptureOCR = () => {
    return(
        <>
            <Banner BannerData={BannerData}/>
            <section className="SectionDesc">
                <div className="CenterDesc">
                <h2>Powerful solutions for gaining deep insights into data and automating business processes.</h2>
                <p>The amount of data handled by businesses is rapidly increasing each day. Services like data capture, retrieval, and extraction are now essential components of organizational workflows. They are crucial for efficiently managing vast amounts of information stored in various formats and locations.</p>
                <p>MAQ Software is a leading provider of automated data capture solutions, empowering data-driven businesses with efficient tools. We specialize in OCR, data capture, and extraction services to help you manage your data and automate business processes.</p>
                </div>
            </section>
            <Services items={{item: ServiceData, title: "Data Capture Services We Offer"}}/>
            <RoadMap items={roadMapData} title="How Our Data Capture and Extraction Services Work"/>
            <BackgroundBanner/>
            <BenefitCards cardsData = {benefitsData}/>
            <section className="LogisticsContainer">
            <div className="LogisticsTitle">
                <h5>Powerful solutions for gaining deep insights into data and automating business processes.</h5>
                    <p>Optical character recognition (OCR) systems are designed to digitize paper documents, enabling automated data search, retrieval, and processing with minimal human involvement. These systems can significantly optimize business workflows that involve numerous manual tasks. Companies of all sizes can leverage OCR technology to meet consumer demands for expedited and secure goods shipment at reduced delivery costs.</p>
                    <p>OCR scanning services offer significant benefits to representatives in the logistics industry, including:</p>
                <ul>
                    <li>Reduces input errors by over 90%.</li>
                    <li>Enables remote data capture via mobile devices.</li>
                    <li>Automates manual input and streamlines paper-based workflows.</li>
                    <li>Cuts data capture costs and time by more than 90%.</li>
                    <li>Automates the transfer of captured data.</li>
                    <li>Provides efficient automated invoice processing.</li>
                    <li>Facilitates invoice and receipt processing.</li>
                    <li>Makes package registration, tracking, and delivery time-efficient, leading to reduced overall delivery costs.</li>
                    <li>Offers web data extraction services if needed.</li>
                </ul>
            </div>
            <div className="LogisticsImg">
                <img src={Cartonimg} alt="Logistics and Transportation"></img>
            </div>
        </section>
            <div style={{display: "flex", justifyContent: "center"}}>
                <AccordionStatic title={"Other Industries"} desc = "As a data extraction company, we provide optical character recognition services and help companies across multiple industries optimize their business processes with the help of our automated data capture software." listItems = {AccordionData}/>
            </div>
            <CustomerSuccess items ={customerSuccessData} heading="Customer Success"/>
            <ContactForm contactMsg={"Want to start getting value from your data? Let's discuss how we can help you."}/>
        </>
    )
}

export default DataCaptureOCR;