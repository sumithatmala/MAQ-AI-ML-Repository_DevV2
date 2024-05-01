import "./CSS/ImageRecognition.css";
import { HashLink } from "react-router-hash-link";
import RecogImg from "./img/Rectangle 58.png";
import phoneImg from "./img/hand-holding-mobile.jpg";

//components
import ProjectDevRoadmap from "./ProjectDevRoadmap";
import Grid from "../common/grid";
import CustomerSuccess from "../common/CustomerSuccess";
import ContactForm from "../common/contactForm";
import Technologies from "../common/technologies";
// import RoadMap from "../common/RoadMap";

//data
import { process, industrialCards, benefitCards, technologies, customerSuccessData } from "./JSON/ImageRecList";
import { roadmapLeft, roadmapRight } from "./JSON/ProjectDevRoadmapData";
import NewBanner from "../common/NewBanner";
import IRbannerData from "./Banerdata";
// import {roadMapDataNew,roadMapDataExisting} from "./JSON/roadMapData";


const ImageRecognition = () => {
    return (
        <>
            <NewBanner data={IRbannerData} />
            {/* <div className="HeaderVisual-ir">
                <h1>Custom Image Recognition and Picture Analysis Software Development</h1>
                <p>We tailor robust custom solutions to serve your business needs. Derive valuable insights from your visual data with the help of proven solutions.</p>
            </div> */}
            <div className="Container-ir">
                <section className="Info-section margin-adjust">
                    <p>We cooperate with clients across multiple industries and assist them in levelling up their businesses by harnessing the power of Big Data.</p>
                    <p>We have gained clients' trust across the globe by creating and delivering top-notch custom solutions for different industries. Our team of <b>machine learning (ML) experts</b> has extensive experience in on-demand computer vision and image recognition software development of any complexity.</p>
                </section>
                <section className="IntroBanner" style={{margin:"0px"}}>
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
                        <img src={RecogImg} alt="ImageRecognition" width={400}></img>
                    </div>
                </section>
                <ProjectDevRoadmap leftData={roadmapLeft} rightData={roadmapRight}/>
                <section className="irProcessContainer margin-adjust">
                    <div className="irProcess">
                        {process.map((item, index) => {
                            return (
                                <div className="ProcessCard" key={index}>
                                    {item.img}
                                    <b>{item.topic}</b>
                                    <p>{item.disc}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <h1>How Can You Use It</h1>
                <section className="UsageContainer margin-adjust">
                    <img src={phoneImg} alt="phone app preview" width={375}></img>
                    <div className="UsageText">
                        <p>Custom image recognition and picture analysis solutions implementation and integration enable machines to replicate human vision, allowing them to identify objects and people in everyday reality. Machine learning algorithms contribute to recognizing objects and individuals in raw images with minimal error rates.</p>
                        <p>MAQ Software specializes in training robust machine learning algorithms to power custom image object recognition software. This software aids in collecting, recognizing, analyzing visual data, and presenting accurate statistics.</p>
                        <p>Developing custom image recognition software with MAQ Software can provide your business with the following benefits:</p>
                        <ul>
                            <li>Enhanced performance</li>
                            <li>Reduced support costs</li>
                            <li>Optimized business processes</li>
                            <li>Faster and safer visual data processing</li>
                            <li>Increased profitability</li>
                        </ul>
                    </div>
                </section>
                <div className="Industryheading margin-adjust">
                    <h3>Industries</h3>
                    <p>Our team of machine learning experts has gained global trust by delivering customized solutions for a wide range of industries. We specialize in on-demand computer vision and image recognition software development, tailoring solutions to meet industry-specific needs. Our clients come from diverse sectors, including logistics, retail, media & entertainment, healthcare, and more.</p>
                </div>
                <Grid content={industrialCards} />
                <div className="block__action">
                <div className="btn-class"><HashLink to={"./#contact"} className="btn btn-empty"> Request a Free Quote </HashLink></div>
                </div>
                <h2>Benefits</h2>
                <Grid content={benefitCards} />
                <Technologies tech={technologies} />
            </div>
            <CustomerSuccess items={customerSuccessData} heading="Image Recognition and Solutions" CardHeight="315px" />
            <ContactForm contactMsg={"Are you looking to improve your current image recognition software or require a tailor-made solution developed from the ground up? The team at MAQ Software is ready to deliver exceptional computer vision services and customized solutions to meet your needs."} />
        </>
    )
}

export default ImageRecognition;