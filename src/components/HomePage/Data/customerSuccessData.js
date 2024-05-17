// import chat from '../img/chat.jpg'
// import program from '../img/program.png'
// import marketing from '../img/marketing.png'
import Forecast from '../img/CS002-main.jpg'
import Arizona from '../img/Arizona Chatbot case-study-main.jpg'
import emotion from '../img/emotion analyzer case-study-main.jpg'
import customer from '../img/customer returns case-study-main.jpg'
const customerSuccessData = [
    {
        title: "Accurately Forecast Customer Sales with Machine Learning (ML)",
        image: <img src={Forecast} alt="chat" style={{Width:"110%"}} />,
        description: ["We built a supervised machine learning model to forecast the impact of sales deals on our client's revenue."],
        link: "https://blog.maqsoftware.com/2021/12/machine-learning-sales-forecast.html",
    },
    {
        title: "Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot",
        image: <img src={Arizona} alt="program" style={{Width:"110%"}}  />,
        description: ["Arizona empowers benefits with Microsoft Azure Cognitive Services."],
        link: "https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html",
    },
    {
        title: "AI Video Analysis Evaluates Real-Time Emotions From Facial Expressions",
        image: <img src={emotion} alt="Feature Analysis" width={140} />,
        description: ["We improved audience feedback by tracking emotions in real time."],
        link: "https://blog.maqsoftware.com/2018/07/case-study-ai-video-analysis-evaluates.html",
    },
    {
        title: "Retailer Reduces Costs by Automating Customer Feedback",
        image: <img src={customer} alt="Barcode Scan" width={"140%"} />,
        description: ["We reduced the number of customer returns using machine learning."],
        link: "https://blog.maqsoftware.com/2018/07/case-study-retailer-reduces-costs-by.html",
    },
];
export default customerSuccessData;