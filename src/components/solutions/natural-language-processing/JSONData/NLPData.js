import GPTImg from "../img/chatgpt.jpg";
import analysis from "../img/analysis.jpg";
import context from "../img/context-aware.jpg";
import customer from "../img/customer.jpg";
import dataCollection from "../img/dataCollection.jpg";
import sentiment from "../img/sentiment.jpg";
import python from "../img/logo-python.png"
import scikit from "../img/logo-scikit-learn.png"
import tensorflow from "../img/logo-tensorflow.png"
import openAi from "../img/logo-open-ai.svg"
import nltk from "../img/logo-nltk.svg"
import langchain from "../img/logo-langchain.png"
import gpt4 from "../img/logo-gpt-4.svg"
import azure from "../img/logo-azure.svg"
import gamedev from "../img/gamedev.webp"
import cosmetics from "../img/cosmetics.webp"
import customerAnalysis from "../img/customerAnalysis.webp"
import analytics from "../img/analytics.webp"


export const bannerData = [
    {
        heading: "ChatGPT Implementation", 
        details: "Emerge new business capabilities with custom ChatGPT-based solutions that use masses of data and machine learning algorithms to serve your business needs. Implementing ChatGPT, you can automate data management, improve customer service, reduce costs and save time.Enable fast and accurate data search, extraction and analysis with ChatGPT. Allow for more automated and efficient business processes and future-proof your business with the latest technology. Get more done in less time with ChatGPT.",
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
        details: "With InData Labs data collection and analysis custom solutions, you save the trouble of collecting and extracting value from data manually. If you still process and label customer reviews manually, it's time you automated it. Smart data analysis, automated review categorization, customer base clustering, saved time, and error elimination - are the benefits you'll get. Soothe the burden of working with customer reviews and save time for more intelligent tasks.",
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

export const technologies = [
    {img:<img src={python} alt="python"></img>},
    {img:<img src={scikit} alt="scikit-learn"></img>},
    {img:<img src={gpt4} alt="gpt4"></img>},
    {img:<img src={tensorflow} alt="tensorflow"></img>},
    {img:<img src={nltk} alt="nltk"></img>},
    {img:<img src={openAi} alt="openAI"></img>},
    {img:<img src={langchain} alt="langchain"></img>},
    {img:<img src={azure} alt="azure"></img>},
];

export const customerSuccessData = [
    {
      title: "Helping a Leading Game Developer Automate Customer Feedback Analysis",
      image: <img src={gamedev} alt="Game dev customer feedback" />,
      description: [
        "A well-known game developer dedicated considerable resources to gathering and analyzing fan feedback on social media about their game releases. To streamline this process, they enlisted InData Labs to develop an NLP-based tool for automated review collection and analysis.",
      ],
    },
    {
      title: "ML and NLP Models For Marketing & Advertising",
      image: <img src={cosmetics} alt="MML_NLP marketing ad" />,
      description: [
        "The beauty company faced challenges in managing and interpreting large volumes of data and wanted to use machine learning (ML) to automate data collection and gain insights.",
        "This collaboration resulted in the client receiving customized software for efficient data collection and analysis, accurate customer behavior prediction, and comprehensive brand health tracking.",
      ],
    },
    {
      title: "AI Customer Analytics Solution",
      image: <img src={customerAnalysis} alt="AI-Powered customer analytics" />,
      description: [
        "A medium-sized FMCG company based in the US sought a natural language processing service provider to assist with data collection and analysis.",
        "In response, we provided a comprehensive solution with a data analysis pipeline for extracting insights. This software facilitates rapid and precise mining and analysis of email and audio data, effectively meeting the client's needs.",
      ],
    },
    {
      title: "Customer Review Analytics Solution for E-commerce",
      image: <img src={analytics} alt="E-commerce analytics solution" />,
      description: [
        "A major US-based e-commerce platform was in search of a vendor offering natural language processing services. Their goal was to gain insights into their products and services to enhance their marketing campaigns.",
        "This solution enabled the client to use advanced analytics for better decision-making, leading to improved marketing strategies and customer satisfaction.",
      ],
    },
  ];

  export const FAQsData = [
    {
        "question": "What is a good NLP company?",
        "answer": "A good NLP company is a reliable technology company that has established expertise in natural language processing and offers customized solutions according to your business needs.\nTech expertise mary vary:\n    Customer feedback analysis\n    Sentiment analysis\n    Data collection and analysis\n   Categorization and clusterization\n    Context-aware search, summarization\n   Text generation, etc."
    },
    {
        "question": "How can I benefit from using NLP?",
        "answer": "One can facilitate data collection and analysis, glean insights out of data, and use this information to make a better stronger brand. Others can use NLP services to enable smart content search and enhance customer loyalty."
    },
    {
        "question": "How much does NLP cost?",
        "answer": "A project that might require several NLP specialists, can start from $30k and reach $70k and more. The price depends on a myriad of factors like the project complexity, functionality, deadlines, etc."
    },
    {
        "question": "Why do I need to use NLP in my business?",
        "answer": "If your business produces lots of data, NLP can reduce your workload through automated data collection and analysis."
    },
    {
        "question": "What are some examples of Natural Language Processing?",
        "answer": "Here are a few examples of NLP solutions and services:\n    Customer review collection and analysis\n    Sentiment analysis\n    Emotional colouring detection in text/audio data\n    Data collection and insights extraction\n    Text summarization, etc."
    },
  ];