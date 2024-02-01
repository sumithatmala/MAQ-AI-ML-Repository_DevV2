import headerImg from "./visuals/text-analysis.svg"
import "./TextAnalysis.css"
import { Link } from "react-router-dom";
import { learnMoreItems, Banners, SpecialCards } from "./visuals/LearnMoreList";
import ContactForm from "../common/contactForm";
import AlternateBanner from "../common/alternateBanner";
import SpecialContainer from "../common/specializationCards";

const TextAnalysis = () => {
    return (
        <>
            <div className="HeaderVisual">
                <h1>AI-powered text analysis software</h1>
                <h2>We use state-of-the-art natural language processing techniques to extract more value from your text data</h2>
                <img src={headerImg} alt="Text analysis banner" className="cropSvg"/>
            </div>
            <div className="InfoVisual">
                <div className="HeaderBox">
                    <h1>Text analysis software built with your unique requirements in mind</h1>
                    <p>We build custom text analysis software that helps you extract meaning from text data and speed up reporting and analysis. We use our proprietary natural language processing technology to accelerate project delivery for our customers. Our NLP solutions were designed to propel your customer-centric initiatives such as customer feedback analysis, customer support automation, information access, semantic search.</p>
                </div>
                <div className="LearnMoreList">
                    <ul>
                        {learnMoreItems.map((item, index) => {
                            // console.log(item.label);
                            return (
                                <div className="LearnMoreCard">
                                    <div>
                                        <img src={process.env.PUBLIC_URL + item.img} alt={index} width={25}></img>
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