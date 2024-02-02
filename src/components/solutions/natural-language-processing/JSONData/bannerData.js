import GPTImg from "../img/chatgpt.jpg";
import analysis from "../img/analysis.jpg";
import context from "../img/context-aware.jpg";
import customer from "../img/customer.jpg";
import dataCollection from "../img/dataCollection.jpg";
import sentiment from "../img/sentiment.jpg";

const bannerData = [
    {
        heading: "ChatGPT Implementation", 
        details: "Emerge new business capabilities with custom ChatGPT-based solutions that use masses of data and machine learning algorithms to serve your business needs. Implementing ChatGPT, you can automate data management, improve customer service, reduce costs and save time. Enable fast and accurate data search, extraction and analysis with ChatGPT. Allow for more automated and efficient business processes and future-proof your business with the latest technology. Get more done in less time with ChatGPT.",
        points:"",
        img: <img src= {GPTImg} alt= "ChatGPT"></img>,
    },
    {
        heading: "Customer Feedback Analysis",
        details: "Overwhelmed with masses of data? Can't translate it into meaningful insights about your business' strengths and weaknesses? Make use of bespoke NLP models for customer feedback analysis. By integrating them into your app or infrastructure, you enable automated data collection and analysis of unstructured data. Detect and extract topics, analyze sentiments, and then alter your business plan. Use the uncovered insights to make sure your products or services line with the customer's expectations and solves their business problems." ,
        points:"",
        img: <img src= {customer} alt= "cutomer"></img>,
    },
    {
        heading: "Sentiment Analysis", 
        details: "Tried different marketing strategies but not getting the profit you want? Switch to a data-based strategy for more brand insights. Custom sentiment analysis software allows you to mine socials, review platforms, and other important sources. Automatically interpreting hidden meanings behind tons of texts you'll easily detect your audience's moods and benefit from it. Use sentiment analysis to glean insights about your brand health and ongoing marketing campaigns for a stronger brand.",
        points:"",
        img: <img src= {sentiment} alt= "Sentiment Analysis"></img>,
    },
    {
        heading: "Data Collection and Analysis, Categorization and Clasterization", 
        details: "With us data collection and analysis custom solutions, you save the trouble of collecting and extracting value from data manually. If you still process and label customer reviews manually, it's time you automated it. Smart data analysis, automated review categorization, customer base clustering, saved time, and error elimination - are the benefits you'll get. Soothe the burden of working with customer reviews and save time for more intelligent tasks.",
        points:"",
        img: <img src= {dataCollection} alt= "Data Collection"></img>,
    },
    {
        heading: "Context-Aware Search, Summarization", 
        details: "Whether it's a web or a mobile app, make content search easy and relevant for your customers with language processing as a service. We build custom intelligent content search and filtering solutions that will allow your clients to get only up-to-date and theme-related content. Create customer loyalty by offering them user-friendly solutions and saving their time.",
        points:"",
        img: <img src= {context} alt= "Context Awareness"></img>,
    },
    {
        heading: "Audience Analysis", 
        details: "Looking for ways to get to know your audience better and see eye to eye with them? Use NLP-based audience analysis solutions to earn who your target audience is - their age, gender, location, nationality, language, and interests. Monitor your social media brand awareness and reputation. Work on your brand's weaknesses to get it on top of your industry.",
        points:"",
        img: <img src= {analysis} alt= "Audience Analysis"></img>,
    },
];

export default bannerData;