import nlp1 from "../img/nlp-1.svg"
import nlp2 from "../img/nlp-2.svg"
import nlp3 from "../img/nlp-3.svg"
import icon1 from "../img/special-icon-1.svg"
import icon2 from "../img/special-icon-2.svg"
import icon3 from "../img/special-icon-3.svg"
import icon4 from "../img/special-icon-4.svg"

export const learnMoreItems = [
    {label: "ChatGPT", disc: "Power your product with ChatGPT technology", img: "/icons/framework.svg", link: ""},
    {label: "NLP-AI", disc: "NLP API for social media analytics", img: "/icons/ML.svg", link: ""},
    {label: "NLP Models", disc: "Custom NLP models for customer feedback analysis", img: "/icons/nlp.svg", link: ""},
]

export const Banners = [
    {
        heading: "Tailored NLP models designed specifically for customer feedback analysis.", 
        details: "Customer feedback analysis software powered by custom models that surpass simple domain adaptation, ideal for companies with customers and prospects who use unique language styles.", 
        points: ["Sentiment analysis","Topic detection","Sentiment scored topic extraction","Semantic ontology development"],
        img: <img src= {nlp1} alt= "Custom NLP" width={250}></img>,
    },
    {
        heading: "Power your product with NLP technology", 
        details: "Enhance your products' customer engagement and satisfaction rates through the capabilities of Natural Language Processing.", 
        points: ["Speech recognition","Information extraction (from topic classification to entity extraction)","Semantic search","Text categorization"],
        img: <img src= {nlp2} alt= "NLP technology" width={250}></img>,

    },
    {
        heading: "An NLP API tailored for social media analytics.",
        details: "A user-friendly Natural Language Processing API for analyzing text data from social media, providing detailed audience insights, including demographic information and more.", 
        points: ["Gender","Age","Location","Interests","Language", "etc."],
        img: <img src= {nlp3} alt= "AI" width={250}></img>,
    },
]

export const SpecialCards = [
    {
        topic: "Customizable solutions",
        disc: "We excel in delivering tailored solutions that precisely match customers' needs and data characteristics.",
        img: <img src= {icon1} alt= "Custom NLP" height={70}></img>,
    },
    {
        topic: "State of the art models",
        disc: "We constantly seek innovative methods to enhance our predictions and achieve optimal outcomes.",
        img: <img src= {icon2} alt= "Custom NLP" height={70}></img>,
    },
    {
        topic: "Scalable results",
        disc: "Our solutions are designed to scale alongside your business, continually enhancing your capabilities.",
        img: <img src= {icon3} alt= "Custom NLP" height={70}></img>,
    },
    {
        topic: "Highly professional team",
        disc: "We are committed to achieving excellence in all our endeavors for our clients.",
        img: <img src= {icon4} alt= "Custom NLP" height={70}></img>,
    },
]