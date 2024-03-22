import "./css/expertise.css"

//data
import increasingCardData from "./JSON/increasingCardsData"
import whyWorkWithUsData from "./JSON/whyWorkWithUsData";
import serviceGridData from "./JSON/serviceGridData";
import customerSuccessData from "./JSON/customerSuccessData";
import { backBannerData_1,backBannerData_2 } from "./JSON/backbannerData";
import blogData from "./JSON/blogData";
import showcaseBannerIndustriesData from "./JSON/showcaseBannerIndustriesData";
import showcaseBannerSolutionsData from "./JSON/showcaseBannerSolutionsData";

//components
import ExpertiseBanner from "./expertiseBanner";
import IncreasingCards from "./increasingCards";
import ServiceGrid from "./serviceGrid";
import ContactForm from "../../solutions/common/contactForm"
import CustomerSuccess from "../../solutions/common/CustomerSuccess"
import BackgroundBanner from "./backgroundBanner";
import ShowcaseBanner from "./showcaseBanner";
import NewBanner from "../../solutions/common/NewBanner";
import bannerData from "./bannerData";

const Expertise = () => {
    return(
        <>
            <NewBanner data={bannerData} />
            {/* <ExpertiseBanner/> */}
            <IncreasingCards items={increasingCardData} title={"Why Should You Choose AI At Your Service"} showShadow={true} percentageType={true}/>
            <ServiceGrid items = {serviceGridData} title={"How We Can Help You"} desc={"We welcome opportunities to work alongside different teams over projects of any complexity. By working together, we will develop new systems, solutions, and products to separate you from your competition."}/>
            <CustomerSuccess heading={"Our Customer Success Stories"} items={customerSuccessData} CardHeight="280px"/>
            <BackgroundBanner items={backBannerData_1} alignType={"center"} width={"800px"}/>
            <IncreasingCards items={whyWorkWithUsData} title={"Why You Should Choose Us"} showShadow={false} percentageType={false}/>
            <BackgroundBanner items={backBannerData_2} alignType={"start"} width={"1000px"}/>
            <div className="container mid-section" style={{maxWidth: "1140px"}}>
                <ShowcaseBanner item1={showcaseBannerIndustriesData} item2={showcaseBannerSolutionsData}/>
            </div>
            <CustomerSuccess heading={"Our Blogs"} items={blogData} CardHeight="260px"/>
            <ContactForm contactMsg = {"Let's Talk About Your Project."}/>
        </>
    )
}

export default Expertise;