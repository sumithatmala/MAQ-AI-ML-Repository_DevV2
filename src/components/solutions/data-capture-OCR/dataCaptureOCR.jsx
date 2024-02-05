import "./css/DataCaptureOCR.css"

//Datas
import BannerData from "./JSONData/bannerData"
import ServiceData from "./JSONData/buisnessCasesData"
import AccordionData from "./JSONData/AccordianData"
import customerSuccessData from "./JSONData/customerSuccessData"

//Components
import Banner from "../common/Banner"
import Services from '../common/GridOfCards'
import AccordionStatic from "./accordionStatic"
import ContactForm from "../common/contactForm"
import CustomerSuccess from "../common/CustomerSuccess"

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
            <div style={{display: "flex", justifyContent: "center"}}>
                <AccordionStatic title={"Other Industries"} desc = "As a data extraction company, we provide optical character recognition services and help companies across multiple industries optimize their business processes with the help of our automated data capture software." listItems = {AccordionData}/>
            </div>
            <CustomerSuccess items ={customerSuccessData} heading="Customer Success"/>
            <ContactForm contactMsg={"Want to start getting value from your data? Let's discuss how we can help you."}/>
        </>
    )
}

export default DataCaptureOCR;