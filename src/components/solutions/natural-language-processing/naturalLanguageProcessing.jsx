import "./css/NaturalLanguageProcessing.css"
import { Link } from "react-router-dom";

//component
import AlternateBanner from "../common/alternateBanner";
import Technologies from "../common/technologies"
import ContactForm from "../common/contactForm";
import FAQs from '../../product-dashboard/FAQs';
import CustomerSuccess from "../common/CustomerSuccess";
import RoadMap from "../common/RoadMap"

//Data
import customerSuccessData from "./JSONData/customerSuccessData";
import bannerData from "./JSONData/bannerData"
import technologiesData from "./JSONData/technologiesData"
import FAQsData from "./JSONData/FaqData";
import industriesData from "./JSONData/IndustriesData";
import blogData from "./JSONData/blogData";
import roadMapData from "./JSONData/roadMapData";

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
                    <Link to={"#"} className="btn btn-empty" >Talk To Us</Link>
                </section>
                <section className="WorkProcess">
                    {/* <h3>How We Work</h3> */}
                    {/* <div className="ExplainProcess"></div> */}
                    <RoadMap items={roadMapData} title="How we work"/>
                </section>
                <section className="TargetIndustries">
                    <h4>Industries</h4>
                    <div className="IndustryItems">
                        {industriesData.map((item) => {
                            return(
                                <div className="IndustryInditem">
                                    {item.icon}
                                    <h5><Link to={item.link}>{item.name}</Link></h5>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <Technologies tech = {technologiesData}/>
            </div>
            <CustomerSuccess items ={customerSuccessData} heading="Customer Success" CardHeight="50rem"/>
            <FAQs FAQs = {FAQsData}/>
            <CustomerSuccess items={blogData} heading="More Insights"/>
            <ContactForm/>
        </>
    )
}

export default NaturalLanguageProcessing;