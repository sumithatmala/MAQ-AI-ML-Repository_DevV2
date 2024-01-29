import headerImg from "./visuals/text-analysis.svg"
import "./TextAnalysis.css"
import { Link } from "react-router-dom";
import { learnMoreItems, Banners, SpecialCards } from "./visuals/LearnMoreList";

const ContactForm = () => {
    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const CompName = document.querySelector("compName");
    const Email = document.querySelector("email");
    const msg = document.querySelector("message");

    return (
        <div className="FormBox">
            <section className="Contact">
                <h2>Get started with InData Labs today.</h2>
                <p>Let's talk about your text analysis project</p>
                <form action="#">
                    <div className="input-box">
                        <div className="input-field field">
                            <input type="text" placeholder="Name*" id="name" className="item" autoComplete="off"></input>
                            <div className="error-txt">Full Name can't be blank</div>
                        </div>
                        <div className="input-field field">    
                            <input type="text" placeholder="Company Name*" id="compName" className="item" autoComplete="off"></input>
                            <div className="error-txt">Company Name can't be blank</div>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field field">
                            <input type="text" placeholder="Email Adress*" id="email" className="item" autoComplete="off"></input>
                            <div className="error-txt">Email Adress can't be blank</div>
                        </div>
                        
                        <div className="input-field field"> 
                            <input type="text" placeholder="Phone" id="Phone" className="item" autoComplete="off"></input>
                            <div className="error-txt">Error message</div>
                        </div>
                    </div>
                    <div className="textarea-field field">
                        <textarea name="" id="message" cols={30} rows={7} placeholder="Your Message" className="item" autoComplete="off"></textarea>
                        <div className="error-txt">Error message</div>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}

const SpecialContainer = ({SpecialCards}) => {
    return (
        <div className="SpecialContainer">
            <h2>Why Work With Us</h2>
            <p>We make it easy to build awesome text analysis software</p>
            <div className="SpecialCards">
                {/* <ul> */}
                    {SpecialCards.map((item) => {
                        return(
                            <div className="indCard">
                                <img src={process.env.PUBLIC_URL + item.img} alt={item.topic} height={80}></img>
                                <h3>{item.topic}</h3>
                                <p>{item.disc}</p>
                            </div>
                        )
                    })} 
                {/* </ul> */}
            </div>
        </div>
    )
}

const Banner = ({banners}) => {
    return (
        <>
            {banners.map((item,count) => {
                // console.log(item.heading);
                return (
                    <div className={'BannerVisual' + (count%2 ? 'Rgt' : 'Lft')}>
                        <img src= {process.env.PUBLIC_URL + item.img} alt= {item.heading} width={355}></img>
                        <div className="BannerDetails">
                            <h2>{item.heading}</h2>
                            <p>{item.details}</p>
                            <ul>
                                {item.points.map((point) => {
                                    return <li>{point}</li>
                                })}
                            </ul>
                            <button className="ContactBtn"><Link to={'/ContactUs'}> Contact Us </Link></button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const TextAnalysis = () => {
    let count=0;
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
                <Banner banners = {Banners} count={count}/>
                <SpecialContainer SpecialCards={SpecialCards}/>
                <ContactForm/>
            </div>
        </>
    )
}

export default TextAnalysis;