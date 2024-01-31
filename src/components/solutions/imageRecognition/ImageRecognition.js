import "./ImageRecognition.css"
import RecogImg from "./visuals/imgRec.jpg"
import { process, industrialCards, benefitCards, technologies } from "./visuals/ImageRecList"
import { Link } from "react-router-dom"
import ContactForm from "../common/contactForm"
import phoneImg from "./visuals/hand-holding-mobile-smartphone-touchscreen-technology-business-concept-3d-cartoon-illustration.jpg"
import Grid from "../common/grid"
import Technologies from "../common/technologies"

const ImageRecognition = () => {
    return(
        <>
        <div className="HeaderVisual-ir">
                <h1>Custom Image Recognition and Picture Analysis Software Development</h1>
                <p>We tailor robust custom solutions to serve your business needs. Derive valuable insights from your visual data with the help of proven solutions.</p>
        </div>
        <div className="Container-ir">
            <section className="Info-section">
                {/* <div> */}
                <p>InData Labs has 7+ years of experience in computer vision under the belt. We cooperate with clients across multiple industries and assist them in levelling up their businesses by harnessing the power of Big Data.</p>
                <p>We have gained clients' trust across the globe by creating and delivering top-notch custom solutions for different industries. Our team of <b>machine learning (ML) experts</b> has extensive experience in on-demand computer vision and image recognition software development of any complexity.</p>
                {/* </div> */}
            </section>
            <section className="IntroBanner">
                <div className="IntroBanner-det">
                    <h2>We Develop Custom Image Recognition and Analysis Solutions Focused on Your Business</h2>
                    <p>We can create bespoke solutions that:</p>
                    <ul>
                        <li>Detect, recognize & identify objects from raw images of different quality</li>
                        <li>Have a convolutional neural network algorithm under the hood</li>
                        <li>Amplify security, sentiment analysis, object classification, diagnostics, etc.</li>
                    </ul>
                </div>
                <div>
                    <img src={RecogImg} alt="Image Recognition" width={300}></img>
                </div>
            </section>
            <section className="RoadmapContainer">
                <h2>Your Project Development Roadmap</h2>
                <div>
                    <p>Visual content is a trend in information provision. It makes image identification and recognition and analysis solutions an integral part of many business workflows. Developed for the client's business, they enable process automation and reduce labour costs.</p>
                    <p>Businesses get in touch with InData Labs having different initial queries. We never take a one-size-fits-all approach but foster close cooperation with each client over a best-fit custom solution. Together, we map out development phases based on the available datasets.</p>
                </div>
                <div className="Roadmap">
                    <h2>Describe the roadmap for the project development</h2>
                </div>
            </section>
            <section className="irProcessContainer">
                <div className="irProcess">
                        {process.map((item)=>{
                            return(
                                <div className="ProcessCard">
                                    <img src={process.env.PUBLIC_URL + item.img} alt={item.label} width={200}></img>
                                    <b>{item.label}</b>
                                    <p>{item.disc}</p>
                                </div>
                            )
                        })}
                </div>
            </section>
            <h1>How Can You Use It</h1>
            <section className="UsageContainer">
                <img src={phoneImg} alt="phone app preview" width={375}></img>
                <div className="UsageText">
                    <p>Implementation and integration of custom image recognition and picture analysis solutions empower machines to replicate human vision and the ability to identify objects in day-to-day reality. ML algorithms enable the recognition of objects and people on raw images with quite low error rates.</p>
                    <p>At InData Labs, we train powerful ML algorithms to fuel custom image object recognition software that helps gather, recognize, analyze visual data and present accurate statistics.</p>
                    <p>Custom image recognition software development by InData Labs can give your business the following perks:</p>
                    <ul>
                        <li>Faster and safer visual data processing</li>
                        <li>Optimized business processes</li>
                        <li>Enhanced performance</li>
                        <li>Increased profitability</li>
                        <li>Reduced support costs</li>
                    </ul>
                </div>
            </section>
            <Grid content={industrialCards}/>
            <div className="btn-class"><Link to={"#"} className="Industry-btn"> Request a Free Quote </Link></div>
            <h2>Benefits</h2>
            <Grid content={benefitCards}/>
            <Technologies tech={technologies}/>
            <ContactForm contactMsg={"Are you looking to improve your current image recognition software or require a tailor-made solution developed from the ground up? The team at MAQ Software is ready to deliver exceptional computer vision services and customized solutions to meet your needs."}/>
        </div>
        </>
    )
}

export default ImageRecognition;