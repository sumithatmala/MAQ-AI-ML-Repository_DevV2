import GPTImg from "../img/chatgpt.jpg";
import analysis from "../img/analysis.jpg";
import context from "../img/context-aware.jpg";
import customer from "../img/customer.jpg";
import dataCollection from "../img/dataCollection.jpg";
import sentiment from "../img/sentiment.jpg";

const bannerData = [
    {
        heading: "Sentiment Analysis", 
        details: "If you've tried various marketing strategies but haven't achieved the desired profit, consider transitioning to a data-driven strategy for deeper brand insights. Custom sentiment analysis software enables you to extract valuable information from social media, review platforms, and other critical sources. By automatically deciphering the underlying sentiments within large volumes of text, you can easily discern your audience's moods and capitalize on them. Leverage sentiment analysis to gain insights into your brand's health and ongoing marketing campaigns, ultimately strengthening your brand.",
        points:"",
        img: <img src= {sentiment} alt= "Sentiment Analysis" width={370}></img>,
    },
    {
        heading: "Data Collection and Analysis, Categorization and Clasterization", 
        details: "With our custom data collection and analysis solutions, you can avoid the hassle of manually collecting and extracting value from data. If you're still processing and labeling customer reviews manually, it's time to automate. Enjoy the benefits of smart data analysis, automated review categorization, customer base clustering, time savings, and error reduction. Ease the burden of managing customer reviews and free up time for more strategic tasks.",
        points:"",
        img: <img src= {dataCollection} alt= "Data Collection" width={370}></img>,
    },
    {
        heading: "ChatGPT Implementation", 
        details: "Unlock new business capabilities with custom ChatGPT-based solutions that harness vast amounts of data and machine learning algorithms to meet your business requirements. By implementing ChatGPT, you can automate data management, enhance customer service, reduce costs, and save time. Enable swift and precise data search, extraction, and analysis with ChatGPT. Embrace more automated and efficient business processes and future-proof your business with cutting-edge technology. Accomplish more in less time with ChatGPT.",
        points:"",
        img: <img src= {GPTImg} alt= "ChatGPT" width={370}></img>,
    },
    {
        heading: "Customer Feedback Analysis",
        details: "Struggling to manage vast amounts of data? Unable to derive meaningful insights about your business' strengths and weaknesses? Leverage custom NLP models for customer feedback analysis. By integrating these models into your app or infrastructure, you enable automated collection and analysis of unstructured data. Detect and extract topics, analyze sentiments, and adjust your business strategy accordingly. Utilize the insights to ensure your products or services align with customer expectations and address their business challenges." ,
        points:"",
        img: <img src= {customer} alt= "cutomer" width={370}></img>,
    },
    {
        heading: "Audience Analysis", 
        details: "Seeking ways to better understand your audience and align with their preferences? Utilize NLP-based audience analysis solutions to learn about your target audience - their age, gender, location, nationality, language, and interests. Monitor your social media brand awareness and reputation. Address your brand's weaknesses to position it at the forefront of your industry.",
        points:"",
        img: <img src= {analysis} alt= "Audience Analysis" width={370}></img>,
    },
    {
        heading: "Context-Aware Search, Summarization", 
        details: "Whether it's a web or mobile app, simplify and personalize content search for your customers with our language processing service. We develop custom intelligent content search and filtering solutions to ensure your clients receive only current and theme-relevant content. Enhance customer loyalty by providing user-friendly solutions that save their time.",
        points:"",
        img: <img src= {context} alt= "Context Awareness" width={370}></img>,
    },
];

export default bannerData;