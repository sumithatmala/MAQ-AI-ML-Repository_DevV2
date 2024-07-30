import React from 'react';
import { Helmet } from 'react-helmet';
import "./css/NaturalLanguageProcessing.css";
import { Link } from "react-router-dom";

//component
import AlternateBanner from "../common/alternateBanner";
import Technologies from "../common/technologies";
import ContactForm from "../common/contactForm";
import FAQs from '../../product-dashboard/FAQs';
// import RoadMap from "../common/RoadMap"
import bannerData from "./JSONData/bannerData";
import technologiesData from "./JSONData/technologiesData";
import FAQsData from "./JSONData/FaqData";
import industriesData from "./JSONData/IndustriesData";
import NewBanner from "../common/NewBanner";
import NewBanData from "./JSONData/NewBanData";

const NaturalLanguageProcessing = () => {
    return (
        <section>
            <Helmet>
                <title>Natural Language Processing Services | NLP Solutions | MAQ Software</title>
                <meta name="description" content="Discover MAQ Software's advanced NLP services and custom solutions. Leverage our expertise to better understand and utilize human language for your business needs." />
                <meta name="keywords" content="Natural Language Processing, NLP Services, Custom NLP Solutions, MAQ Software, Human Language Understanding, NLP Development" />
            </Helmet>
            <NewBanner data={NewBanData} />
            {/* <div className="HeaderVisual-nlp">
                    <h1>NLP Services and Custom Solutions</h1>
                    <p>Enable Your Business to Better Understand Human Language with NLP Services</p>
            </div> */}
            <div className="Container-nlp">
                <section className="WelcomeMsg">
                    <h2>What We Offer</h2>
                    <p>We're Pioneers in NLP Software Service Development. Whatever Your Business Problem is, We're Part of the Solution.</p>
                </section>
                <AlternateBanner banners={bannerData} count={0} ContactBtn={false}/>
                {/* <section className="WorkProcess">
                    <h3>How We Work</h3>
                    <div className="ExplainProcess"></div>
                    <RoadMap items={roadMapData} title="How we work"/>
                </section> */}
                <section className="TargetIndustries margin-adjust">
                    <h4 className="heading-size">Industries</h4>
                    <div className="IndustryItems">
                        {industriesData.map((item, index) => {
                            return(
                                <div className="IndustryInditem" key={index}>
                                    {item.icon}
                                    <Link to={item.link}><h5 className="title-size">{item.name}</h5></Link>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <Technologies tech = {technologiesData}/>
            </div>
            {/* <CustomerSuccess items ={customerSuccessData} heading="Empowering Industries with NLP" CardHeight="430px"/> */}
            <FAQs FAQs = {FAQsData}/>
            {/* <CustomerSuccess items={blogData} heading="More Insights" CardHeight="230px"/> */}
            <ContactForm/>
        </section>
    )
}

export default NaturalLanguageProcessing;
