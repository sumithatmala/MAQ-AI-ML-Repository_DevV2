// import chat from '../img/chat.jpg'
// import program from '../img/program.png'
// import marketing from '../img/marketing.png'
import nlp from '../img/nlp.jpg'

import chat from '../img/Rectangle 37.svg'
import program from '../img/Rectangle 38.svg'
import marketing from '../img/Rectangle 39.svg'
const customerSuccessData = [
    {
        title: "Accurately Forecast Customer Sales with Machine Learning (ML)",
        image: <img src={chat} alt="chat" width={140} />,
        description: ["We built a supervised machine learning model to forecast the impact of sales deals on our client's revenue."],
        link: "https://blog.maqsoftware.com/2021/12/machine-learning-sales-forecast.html",
    },
    {
        title: "Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot",
        image: <img src={program} alt="program" width={140} />,
        description: ["Arizona empowers benefits with Microsoft Azure Cognitive Services."],
        link: "https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html",
    },
    {
        title: "AI Video Analysis Evaluates Real-Time Emotions From Facial Expressions",
        image: <img src={marketing} alt="Feature Analysis" width={140} />,
        description: ["We improved audience feedback by tracking emotions in real time."],
        link: "https://blog.maqsoftware.com/2018/07/case-study-ai-video-analysis-evaluates.html",
    },
    {
        title: "Retailer Reduces Costs by Automating Customer Feedback",
        image: <img src={nlp} alt="Barcode Scan" width={140} />,
        description: ["We reduced the number of customer returns using machine learning."],
        link: "https://blog.maqsoftware.com/2018/07/case-study-retailer-reduces-costs-by.html",
    },
];
export default customerSuccessData;