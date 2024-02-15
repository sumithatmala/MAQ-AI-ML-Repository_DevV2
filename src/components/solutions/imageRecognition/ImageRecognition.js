import "./ImageRecognition.css"
import RecogImg from "./visuals/imgRec.jpg"
import { process, industrialCards, benefitCards, technologies, customerSuccessData } from "./visuals/ImageRecList"
import { Link } from "react-router-dom"
import ContactForm from "../common/contactForm"
import phoneImg from "./visuals/hand-holding-mobile.jpg"
import Grid from "../common/grid"
import Technologies from "../common/technologies"
import CustomerSuccess from "../common/CustomerSuccess"
import RoadMap from "../common/RoadMap"
import {roadMapDataNew,roadMapDataExisting} from "./visuals/roadMapData"

const ImageRecognition = () => {
    return(
        <>
        <div className="HeaderVisual-ir">
                <h1>Custom Image Recognition and Picture Analysis Software Development</h1>
                <p>We tailor robust custom solutions to serve your business needs. Derive valuable insights from your visual data with the help of proven solutions.</p>
        </div>
        <div className="Container-ir">
            <section className="Info-section">
                <p>We cooperate with clients across multiple industries and assist them in levelling up their businesses by harnessing the power of Big Data.</p>
                <p>We have gained clients' trust across the globe by creating and delivering top-notch custom solutions for different industries. Our team of <b>machine learning (ML) experts</b> has extensive experience in on-demand computer vision and image recognition software development of any complexity.</p>
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
                {/* <div className="Roadmap">
                    <h2>Describe the roadmap for the project development</h2>
                </div> */}
            </section>
            <div style={{width: "100%", margin: "5rem 20px"}}>
                <RoadMap items={roadMapDataNew} title="New Project from scratch"/>
                <RoadMap items={roadMapDataExisting} title="Existing App enhancement Project"/>
            </div>
            <section className="irProcessContainer">
                <div className="irProcess">
                        {process.map((item)=>{
                            return(
                                <div className="ProcessCard">
                                    {item.img}
                                    <b>{item.topic}</b>
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
                    <p>Custom image recognition and picture analysis solutions implementation and integration enable machines to replicate human vision, allowing them to identify objects and people in everyday reality. Machine learning algorithms contribute to recognizing objects and individuals in raw images with minimal error rates.</p>
                    <p>MAQ Software specializes in training robust machine learning algorithms to power custom image object recognition software. This software aids in collecting, recognizing, analyzing visual data, and presenting accurate statistics.</p>
                    <p>Developing custom image recognition software with InData Labs can provide your business with the following benefits:</p>
                    <ul>
                        <li>Enhanced performance</li>
                        <li>Reduced support costs</li>
                        <li>Optimized business processes</li>
                        <li>Faster and safer visual data processing</li>
                        <li>Increased profitability</li>
                    </ul>
                </div>
            </section>
            <div className="Industryheading">
                <h3>Industries</h3>
                <p>Our team of machine learning experts has gained global trust by delivering customized solutions for a wide range of industries. We specialize in on-demand computer vision and image recognition software development, tailoring solutions to meet industry-specific needs. Our clients come from diverse sectors, including logistics, retail, media & entertainment, healthcare, and more.</p>
            </div>
            <Grid content={industrialCards}/>
            <div className="btn-class"><Link to={"#"} className="btn btn-empty"> Request a Free Quote </Link></div>
            <h2>Benefits</h2>
            <Grid content={benefitCards}/>
            <Technologies tech={technologies}/>
        </div>
        <CustomerSuccess items={customerSuccessData}  heading="Customer Success" CardHeight="35rem"/>
        <ContactForm contactMsg={"Are you looking to improve your current image recognition software or require a tailor-made solution developed from the ground up? The team at MAQ Software is ready to deliver exceptional computer vision services and customized solutions to meet your needs."}/>
        </>
    )
}

export default ImageRecognition;