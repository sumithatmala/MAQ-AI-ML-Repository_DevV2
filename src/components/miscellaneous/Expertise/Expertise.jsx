import "./css/expertise.css"
//data
import increasingCardData from "./JSON/increasingCardsData"
import whyWorkWithUsData from "./JSON/whyWorkWithUsData";
import serviceGridData from "./JSON/serviceGridData";

//components
import ExpertiseBanner from "./expertiseBanner";
import IncreasingCards from "./increasingCards";
import ServiceGrid from "./serviceGrid";
import ContactForm from "../../solutions/common/contactForm"

const Expertise = () => {
    return(
        <>
            <ExpertiseBanner/>
            <IncreasingCards items={increasingCardData} title={"Why Should You Choose AI At Your Service"}/>
            <IncreasingCards items={whyWorkWithUsData} title={"Why You Should Choose Us"}/>
            <ServiceGrid items = {serviceGridData} title={"How We Can Help You"} desc={"We welcome opportunities to work alongside different teams over projects of any complexity. By working together, we will develop new systems, solutions, and products to separate you from your competition."}/>
            <ContactForm contactMsg = {"Let's Talk About Your Project."}/>
        </>
    )
}

export default Expertise;