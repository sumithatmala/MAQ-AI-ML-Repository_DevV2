import React from "react";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import OutputIcon from '@mui/icons-material/Output';
import demoVideo from './DemoVideo/TriviaBot.mp4';

import MarketManage from '../images/Trivia Bot/icons8-marketing-100 1@2x.svg'
import DataAnalyst from '../images/Trivia Bot/icons8-networking-manager-100 1@2x.svg'
import CustExpSp from '../images/Trivia Bot/icons8-ability-to-handle-surprises-100 1@2x.svg'
import ProdManage from '../images/Trivia Bot/icons8-admin-100 2@2x.svg'

import CostSaving from '../images/Trivia Bot/icons8-money-box-100 1@2x.svg'
import IncreasedCustEngage  from '../images/Trivia Bot/icons8-user-groups-100 1@2x.svg';
import EnhancedDataCollection from '../images/Trivia Bot/icons8-positive-dynamic-100 1@2x.svg'
import EfficientReport from '../images/Trivia Bot/icons8-presentation-100 1@2x.svg'
import DecisionMaking from '../images/Trivia Bot/icons8-problem-solving-skills-100 (1) 1@2x.svg'
import MotivatedPart from '../images/Trivia Bot/icons8-volunteering-100 1@2x.svg'

import bannerImg from '../images/Trivia Bot/Trivia Bot.png'

const iconSizeBO = {
    height: "5rem",
    width: "5rem",
    color: "#dc848d",
    // border: "solid #dc848d 3px",
    // margin: "0px 10px",
    // padding: "30px 50px",
    // borderRadius: "10px",
    // boxShadow: "0px 8px 16px 0px red"
  }

export const TriviaBot = {
    title: "Trivia Bot",
    content: "Trivia Bot transforms the challenge of gathering insights from customers in sales by offering an engaging, gamified learning experience through an interactive trivia generator tool focused on specific topics.",
    img:bannerImg,
    BusinessCase: [
        "Addressing sales challenges, Trivia Bot revolutionizes customer engagement through an interactive trivia generator, offering a gamified learning experience that efficiently gathers insights on specific topics, providing sales teams with a novel approach for enhanced interaction and knowledge acquisition.",
    ],
    targetUsers: [
        {
            title: "Marketing Manager",
            description: "Seeking innovative ways to engage customers and gather insights for sales strategies.",
            iconSrc: <img src={MarketManage} width="70px"  alt="img1"   />
        },
        {
            title: "Data Analyst",
            description: "Utilizing customer engagement data collected by Trivia Bot to derive actionable insights.",
            iconSrc:<img src={DataAnalyst} width="70px"  alt="img1"   />
        },
        {
            title: "Customer Experience Specialist",
            description: "Focusing on enhancing customer interaction and satisfaction through engaging experiences.",
            iconSrc: <img src={CustExpSp} width="70px"  alt="img1"   />
        },
        {
            title: "Product Manager",
            description: "Monitoring user engagement metrics and using insights to optimize the Trivia Bot experience.",
            iconSrc: <img src={ProdManage} width="70px"  alt="img1"  />
        },
    ],
    businessOutcomes: [
        {
            title: "Increased Customer Engagement",
            description: ["Gamified experience of Trivia Bot encourages active participation from customers, leading to higher engagement levels."],
            image: <img  alt="img1" src={IncreasedCustEngage} width="100px" style={iconSizeBO} />
        },
        {
            title: "Enhanced Data Collection",
            description: ["By asking relevant questions rather than directly providing answers, Trivia Bot prompts customers to explore and get detailed insights, resulting in more valuable and comprehensive data."],
            image: <img  alt="img1" src={EnhancedDataCollection} width="100px" style={iconSizeBO} />
        },
        {
            title: "Efficient Reporting",
            description: ["Trivia Bot generates a scorecard report that captures individual user scores, enabling teams to analyze and identify top contributors or areas that require further attention."],
            image: <img  alt="img1" src={EfficientReport} width="100px" style={iconSizeBO} />
        },
        {
            title: "Data-Driven Decision-Making",
            description: ["The Trivia Bot's scorecard report provides valuable metrics and insights, enabling business analysts to make data-driven decisions and identify trends."],
            image: <img  alt="img1" src={DecisionMaking} width="100px" style={iconSizeBO} />
        },
        {
            title: "Motivated Participation",
            description: ["The gamified experience of Trivia Bot motivates customers to participate by offering a fun and rewarding environment, resulting in higher response rates and increased feedback."],
            image: <img  alt="img1" src={MotivatedPart} width="100px" style={iconSizeBO} />
        },
        {
            title: "Cost Saving",
            description: ["Automation reduces the need for manual labor, resulting in cost savings, and improves efficiency by streamlining processes."],
            image: <img  alt="img1" src={CostSaving} width="100px" style={iconSizeBO} />
        },
    ],
    solutionHighlights: [
        "Leveraging OpenAI to engage users by not directly providing the answer but asking the right questions to continue exploration.",
        "Extracting Score for each user and generating scorecard report.",
    ],
    summary: [
        {
            title: "Business Case",
            icon: <PsychologyAltIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Addressing sales challenges through an interactive trivia generator",
                "Offering a gamified learning experience for customer engagement",
                "Efficiently gathering insights on specific topics for enhanced interaction and knowledge acquisition",
            ],
        },
        {
            title: "Outcomes",
            icon: <SpeedIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Increased customer engagement through a gamified experience",
                "Enhanced data collection with valuable and comprehensive insights",
                "Efficient reporting with a scorecard capturing individual user scores",
                "Data-driven decision-making with valuable metrics and insights",
                "Motivated participation leading to higher response rates and increased feedback",
                "Cost savings through automation and reduced manual labor",
            ],
        },
        {
            title: "Solution Highlights",
            icon: <OutputIcon style={{ height: "16rem", width: "16rem" }} />,
            details: [
                "Leveraging OpenAI for engaging users through interactive exploration",
                "Asking the right questions to encourage continued exploration",
                "Extracting scores for each user and generating a scorecard report",
            ],
        },
    ],
    // demoimg: [
    //     { link: <TriviaBotImg key="1" /> },
    //     // Add more links as needed
    //   ],
      
    
    demo: {
        link: { demoVideo },
    },
    tryit: {
        link: ""
    },
    FAQs : [
        {
          question: "What is the purpose of the Trivia Bot?",
          answer: "The Trivia Bot aims to transform the challenge of gathering insights from customers in sales by offering an engaging, gamified learning experience through an interactive trivia generator tool focused on specific topics."
        },
        {
          question: "How does Trivia Bot address sales challenges?",
          answer: "Trivia Bot revolutionizes customer engagement by providing an interactive trivia generator. It offers a gamified learning experience, efficiently gathering insights on specific topics and providing sales teams with a novel approach for enhanced interaction and knowledge acquisition."
        },
        {
          question: "What are the key business outcomes of implementing Trivia Bot?",
          answer: "The key outcomes include increased customer engagement, enhanced data collection through relevant questions, efficient reporting with a scorecard capturing individual user scores, data-driven decision-making with valuable metrics and insights, motivated participation leading to higher response rates, and cost savings through automation and reduced manual labor."
        },
        {
          question: "What are the highlights of Trivia Bot's solution?",
          answer: "The solution highlights include leveraging OpenAI to engage users by asking the right questions for interactive exploration, not directly providing answers. It also involves extracting scores for each user and generating a scorecard report."
        },
        {
          question: "How does Trivia Bot encourage customer participation?",
          answer: "Trivia Bot offers a gamified experience that motivates customers to participate by providing a fun and rewarding environment. This leads to higher response rates and increased feedback."
        },
        {
          question: "Is there a demo available for Trivia Bot?",
          answer: "Yes, you can watch the demo video by following this link: [Demo Video](demoVideo)."
        }
      ]
         
};

export default TriviaBot;