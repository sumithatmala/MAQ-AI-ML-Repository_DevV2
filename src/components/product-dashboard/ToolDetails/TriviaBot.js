import React from "react";

import { MdGroups } from "react-icons/md";
import PsychologyIcon from '@mui/icons-material/Psychology';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { GrUserAdmin } from "react-icons/gr";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { MdManageHistory } from "react-icons/md";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import OutputIcon from '@mui/icons-material/Output';
import demoVideo from './demos/SmartSupportFramework.mp4';

const iconSize = {
    height: "3rem",
    width: "3rem"
}

export const TriviaBot = {
    title: "Trivia Bot",
    description: "Trivia Bot transforms the challenge of gathering insights from customers in sales by offering an engaging, gamified learning experience through an interactive trivia generator tool focused on specific topics.",
    BusinessCase: [
        "Addressing sales challenges, Trivia Bot revolutionizes customer engagement through an interactive trivia generator, offering a gamified learning experience that efficiently gathers insights on specific topics, providing sales teams with a novel approach for enhanced interaction and knowledge acquisition.",
    ],
    businessOutcomes: [
        {
            outcome: "Increased Customer Engagement",
            caption: "Gamified experience of Trivia Bot encourages active participation from customers, leading to higher engagement levels.",
            icon: <IntegrationInstructionsIcon style={iconSize} />,
        },
        {
            outcome: "Enhanced Data Collection",
            caption: "By asking relevant questions rather than directly providing answers, Trivia Bot prompts customers to explore and get detailed insights, resulting in more valuable and comprehensive data.",
            icon: <QueryStatsIcon style={iconSize} />,
        },
        {
            outcome: "Efficient Reporting",
            caption: "Trivia Bot generates a scorecard report that captures individual user scores, enabling teams to analyze and identify top contributors or areas that require further attention.",
            icon: <MdManageHistory style={iconSize} />,
        },
        {
            outcome: "Data-Driven Decision-Making",
            caption: "Score card report generated by Trivia Bot offers valuable metrics and insights, empowering business analysts to make data-driven decisions and identify trends or areas of improvement.",
            icon: <LocalLibraryIcon style={iconSize} />,
        },
        {
            outcome: "Motivated Participation",
            caption: "The gamified experience of Trivia Bot motivates customers to participate by offering a fun and rewarding environment, resulting in higher response rates and increased feedback.",
            icon: <ConstructionIcon style={iconSize} />,
        },
        {
            outcome: "Cost Saving",
            caption: "Automation reduces the need for manual labor, resulting in cost savings associated.",
            icon: <SchoolIcon style={iconSize} />,
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
    demo:{
        // this is of smart support framework. have to add trivia bot video here
        link: {demoVideo},
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