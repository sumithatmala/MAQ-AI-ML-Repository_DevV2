import "./css/NaturalLanguageProcessing.css"
import AlternateBanner from "../common/alternateBanner";
import { bannerData, technologies, customerSuccessData, FAQsData } from "./JSONData/NLPData";
import { Link } from "react-router-dom";
import Technologies from "../common/technologies"
// import SpecialContainer from "../common/specializationCards";
import ContactForm from "../common/contactForm";
import FAQs from '../../product-dashboard/FAQs';
import CustomerSuccess from "../common/CustomerSuccess";


const NaturalLanguageProcessing = () => {
    return (
        <>
            <div className="HeaderVisual-nlp">
                    <h1>NLP Services and Custom Solutions</h1>
                    <p>Enable Your Business to Better Understand Human Language with NLP Services</p>
            </div>
            <div className="Container-nlp">
                <section className="WelcomeMsg">
                    <h2>What We Offer</h2>
                    <p>We're Pioneers in NLP Software Service Development. Whatever Your Business Problem is, We're Part of the Solution.</p>
                </section>
                <AlternateBanner banners={bannerData} count={0} ContactBtn={false}/>
                <section className="LearnMoreSection">
                    <p>Lets have a talk on our NLP services</p>
                    <Link to={"#"} className="TalkToUs" >Talk To Us</Link>
                </section>
                <section className="WorkProcess">
                    <h3>How We Work</h3>
                    <div className="ExplainProcess"></div>
                </section>
                <Technologies tech = {technologies}/>
            </div>
            <CustomerSuccess items={customerSuccessData}/>
            <FAQs FAQs = {FAQsData}/>
            <ContactForm/>
        </>
    )
}

export default NaturalLanguageProcessing;