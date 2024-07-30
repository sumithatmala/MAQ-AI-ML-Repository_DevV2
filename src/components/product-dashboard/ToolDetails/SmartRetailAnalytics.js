// import demoVideo from "./DemoVideo/TestCaseRecommender.mp4";
import QualityAssuranceEngineer from '../images/Test Case Recommender/icons8-approval-100 1.svg'
import ProjectManagers from '../images/Test Case Recommender/icons8-manager-100 (2) 3.svg'
import DevOpsTeamsLeads from '../images/Test Case Recommender/icons8-leader-100 1.svg'
import BusinessAnalysts from '../images/Test Case Recommender/icons8-admin-100 4.svg'

import ImprovedTestCoverage from '../images/Test Case Recommender/icons8-test-100 1.svg'
import StandardizationandConsistency from '../images/Test Case Recommender/icons8-neutral-trading-100 1.svg'
import EnhancedQuality from '../images/Test Case Recommender/icons8-quality-100 1.svg'
import FasterTimetoMarket from '../images/Test Case Recommender/icons8-market-100 1.svg'
import EnhancedCollaborationandVisibility from '../images/Test Case Recommender/icons8-user-groups-100 2.svg'
import CostSavings from '../images/Test Case Recommender/icons8-money-box-100 2.svg'
import bannerImg from '../images/Smart Retail Analytics/IrBanImg.svg'



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
export const TestCaseRecommender = {
  title: "Smart Retail Analytics",
  content:
    " A cutting-edge solution leveraging deep learning to identify PepsiCo drinks on shelves within warehouse or retail environments. It provides real-time detection, enabling precise inventory management and data-driven insights for optimized product placement and operational efficiency.",
  img: bannerImg,
  BusinessCase: [
    "PepsiCo ShelfScan Pro optimizes inventory management and boosts revenue by utilizing YOLOv5 for accurate product detection and Power BI for comprehensive analytics and competitor analysis. This tool reduces empty shelf space, enhances product placement, and provides actionable insights for data-driven decision-making. It seamlessly integrates with Power Apps and Function App, addressing deployment challenges and improving operational efficiency.",
  ],
  targetUsers: [
    {
      title: "Sales Managers",
      description:
        "Optimize product placement and reduce empty shelf space to drive higher sales.",
      iconSrc: <img alt="img1" src={QualityAssuranceEngineer} width="70px"  />
    },
    {
      title: "Marketing Teams",
      description:
        "Leverage competitor analysis and shelf utilization reports to craft strategic marketing campaigns.",
      iconSrc: <img alt="img1" src={ProjectManagers} width="70px" />
    },
    {
      title: "Supply Chain Analysts",
      description:
        "Ensure efficient inventory management, reducing stockouts and excess inventory.",
      iconSrc: <img  alt="img1" src={DevOpsTeamsLeads} width="70px" />
    },
    {
      title: "Retail Store Managers",
      description:
        "Monitor and manage shelf space in real-time to improve product availability and display.",
      iconSrc: <img  alt="img1" src={BusinessAnalysts} width="70px"/>
    },
  ],
  businessOutcomes: [
    {
      title: "Increased Sales Revenue",
      description:
        ["By optimizing product placement and minimizing empty shelf spaces, the tool helps increase sales and overall revenue."],
      image: <img  alt="img1"  src={ImprovedTestCoverage} width="100px" style={iconSizeBO} />
    },
    {
      title: "Enhanced Inventory Efficiency",
      description:
        ["Advanced analytics and real-time monitoring ensure efficient inventory management, reducing stockouts and excess inventory."],
      image: <img  alt="img1" src={StandardizationandConsistency} width="100px" style={iconSizeBO} />
    },
    {
      title: "Improved Competitive Positioning",
      description:
        ["Detailed competitor analysis enables better market positioning, helping PepsiCo stay ahead of competitors."],
      image: <img  alt="img1" src={EnhancedQuality} width="100px" style={iconSizeBO} />
    },
    {
      title: "Operational Cost Reduction",
      description:
        ["Streamlined inventory monitoring and management reduce the time and effort required for manual checks, lowering operational costs."],
      image: <img  alt="img1" src={FasterTimetoMarket} width="100px" style={iconSizeBO} />
    },
    {
      title: "Competitive Advantage",
      description:
        ["By leveraging the Shelf Detection Bot to optimize inventory management and product placement, businesses can gain a competitive edge in the market by offering a superior shopping experience."],
      image: <img  alt="img1" src={EnhancedCollaborationandVisibility} width="100px" style={iconSizeBO} />
    },
    {
      title: "Data-Driven Decision Making",
      description:
        ["Comprehensive reports and analytics provide actionable insights, supporting strategic planning and informed decision-making."],
      image: <img  alt="img1" src={CostSavings} width="100px" style={iconSizeBO} />
    },
  ],
  solutionHighlights: [
    "YOLOV5 ensures precise identification of PepsiCo beverage products (bottles and cans), enabling reliable inventory tracking and analysis.",
    "The Power BI dashboard provides dynamic visualizations and KPI tracking, offering immediate access to crucial metrics for informed decision-making.",
    "Leveraging detected data, revenue optimization strategies are developed, including shelf optimization and product placement adjustments, aimed at increasing revenue for the Super Mart.",
    "By showcasing expertise in Traditional AI and Computer Vision skills through the object detection framework, the Super Mart establishes itself as an innovative leader in the retail industry, attracting both stakeholders and potential customers.",
  ],
  summary: [
    {
      title: "Challenges",
      details: [
        "YOLOV5 implementation enables accurate detection of PepsiCo beverage products in Super Mart settings.",
        "Revenue optimization strategies are developed based on detected data, enhancing revenue generation for the Super Mart.",
        "Showcase of expertise in Traditional AI and Computer Vision skills positions the Super Mart as an innovative leader, attracting stakeholders and potential customers.",
        "Revenue-boosting strategies, informed by detected data, drive targeted interventions such as shelf optimization and promotional campaigns.",
      ],
    },
    {
      title: "Building Solution",
      details: [
        <div><b>Deep Learning Model Development:</b> Invest in developing a robust deep learning model (e.g., YOLOv5, Faster R-CNN) tailored for detecting PepsiCo drinks on shelves within warehouse or retail environments. This involves training the model on annotated image datasets to accurately identify product placements.       </div>,
        <div><b>Data Collection and Annotation:</b> Gather a diverse dataset of images depicting PepsiCo drink shelves under various conditions (e.g., different lighting, angles, shelf layouts). Annotate these images to provide ground truth labels for training the deep learning model effectively.</div>,
        <div><b>Real-time Detection Pipeline:</b> Implement a real-time detection pipeline that continuously processes incoming images from cameras installed in the warehouse or retail mart. This pipeline should efficiently analyze each image, detect PepsiCo drinks, and extract relevant metadata for further analysis.</div>,
      ],
    },
    {
      title: "Outcomes",
      details: [
        <div><b>Enhanced Inventory Management:</b> By accurately identifying PepsiCo drinks on shelves in real-time, the bot enables more precise inventory tracking and management. This leads to reduced stockouts, minimized overstocking, and optimized shelf replenishment cycles.</div>,
        <div><b>Improved Product Placement:</b> Insights derived from the bot's analysis help optimize product placement strategies within the warehouse or retail environment. </div>,
        <div><b>Data-driven Decision Making: </b> The analytics and reports generated by the bot empower stakeholders to make data-driven decisions regarding inventory optimization, marketing strategies, and shelf layout designs.</div>,
        <div><b>Operational Efficiency: </b> Automation of shelf detection and analysis tasks streamlines operational workflows and reduces manual effort. </div>,],
    },
  ],
  demo: {
    link: "",
  },
  tryit: {
    link: "",
  },

  FAQs: [
    {
      question: "What is the purpose of this tool?",
      answer: "This tool aims to optimize inventory management for PepsiCo products by accurately detecting whitespace on shelves using image processing techniques."
    },
    {
      question: "How does the tool work?",
      answer: "Users upload images of PepsiCo inventory shelves through the Power Apps interface. The uploaded images are processed using the YOLOv5 object detection model to identify PepsiCo products and whitespace. The detected data is then analyzed and visualized using Power BI to provide insights into inventory placement and competitor analysis."
    },
    {
      question: "What are the main components of the solution?",
      answer: "The solution comprises Power Apps for the front-end interface, YOLOv5 for object detection, Power BI for reporting and analytics, and Function App for backend processing."
    },
    {
      question: "How accurate is the object detection process?",
      answer: "The accuracy of object detection depends on various factors such as image quality, lighting conditions, and shelf arrangements. The YOLOv5 model is customized and fine-tuned to accurately detect PepsiCo beverages and whitespace on shelves."
    },
    {
      question: "Can the tool handle large volumes of images?",
      answer: "Yes, the solution is designed to be scalable, utilizing Function App for efficient backend processing. Users can upload multiple images simultaneously, and the system can process them in parallel to handle large volumes of data."
    }
  ]
};

export default TestCaseRecommender;
