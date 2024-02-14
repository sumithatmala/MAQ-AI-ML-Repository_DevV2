import Pose_Estimation from "../img/Pose-Estimation.png";
import AI_Powered_Sports from "../img/AI-Powered-Sports.png";
import AI_fanengagement from "../img/AI-fanengagement.webp";

const bannerData = [
    {
        heading: "Transform Performance & Safety: Unleash the Power of Real-Time AI Pose Estimation", 
        details: "Imagine personalized real-time feedback guiding your physical therapy, fitness journey, and even ensuring event safety. This future is now, empowered by AI-driven pose estimation. Accelerate recovery in therapy, personalize workouts that adapt to your needs, and enhance event security with proactive threat detection and crowd analysis. All made possible with our cutting-edge solutions. Explore the possibilities and unlock a world of personalized performance, data-driven insights, and enhanced safety - your journey begins today.",
        points:[
            "Personalized experience: Tailored solutions for diverse needs and goals.",
            "Real-time feedback: Immediate insights for performance improvement and injury prevention.",
            "Data-driven insights: Actionable analytics for enhanced decision-making.",
            "Increased engagement: Gamified experiences and personalized support boost motivation.",
            "Improved outcomes: Achieve optimal results in physical therapy, fitness, and safety."
        ],
        img: <img src= {Pose_Estimation} height="550px" width = "400px" alt= "ChatGPT"></img>,
    },
    {
        heading: "AI-Powered Sports Performance Analysis", 
        details: "Elevate your team's performance using cutting-edge predictive analytics tailored for sports. Harness AI to delve into player performance, skill assessment, and injury prediction, optimizing training regimes for peak results. Moreover, leverage data mining to forecast ticket sales, ensuring optimal pricing strategies and maximizing stadium occupancy for enhanced revenue generation.",
        img: <img src= {AI_Powered_Sports} height="550px" width = "400px" alt= "ChatGPT"></img>,
    },
    {
        heading: "AI-Driven Fan Engagement Analysis", 
        details: "Harness the power of NLP to understand fan sentiment on social media platforms effortlessly. Segment your audience by demographics and interests to elevate fan engagement strategies. Gain valuable insights into competitor performance and stay ahead in the game with AI-powered sports solutions.",
        img: <img src= {AI_fanengagement} height="550px" width = "400px" alt= "ChatGPT"></img>,
    },
];

export default bannerData;