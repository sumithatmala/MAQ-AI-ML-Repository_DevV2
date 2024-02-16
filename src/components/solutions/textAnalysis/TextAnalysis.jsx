import headerImg from "./img/text-analysis.svg"
import "./css/TextAnalysis.css"
import { Link } from "react-router-dom";
import { learnMoreItems, Banners, SpecialCards } from "./JSON/LearnMoreList";
import ContactForm from "../common/contactForm";
import AlternateBanner from "../common/alternateBanner";
import SpecialContainer from "../common/specializationCards";

const TextAnalysis = () => {
    return (
        <>
            <div className="HeaderVisual">
                <h1>AI-driven text analysis software.</h1>
                <h2>We employ cutting-edge natural language processing techniques to maximize the value extracted from your text data.</h2>
                <img src={headerImg} alt="Text analysis banner" className="cropSvg"/>
            </div>
            <div className="InfoVisual">
                <div className="HeaderBox">
                    <h1>Text analysis software customized to meet your specific needs.</h1>
                    <p>We develop tailored text analysis software that extracts meaning from text data, enhancing reporting and analysis speed. Our proprietary natural language processing (NLP) technology accelerates project delivery for our customers. Our NLP solutions are designed to drive customer-centric initiatives such as customer feedback analysis, customer support automation, information access, and semantic search.</p>
                </div>
                <div className="LearnMoreList">
                    <ul>
                        {learnMoreItems.map((item, index) => {
                            // console.log(item.label);
                            return (
                                <div className="LearnMoreCard">
                                    <div>
                                        <img src={process.env.PUBLIC_URL + item.img} alt={index} width={40}></img>
                                        <p>{item.disc}</p>
                                        <Link to={item.link}>Learn More</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <AlternateBanner banners={Banners} count={0} ContactBtn={true}/>
                <SpecialContainer SpecialCards={SpecialCards}/>
                <ContactForm contactMsg={"Let's talk about your text analysis project."}/>
            </div>
        </>
    )
}

export default TextAnalysis;