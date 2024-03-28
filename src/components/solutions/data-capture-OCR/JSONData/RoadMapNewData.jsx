// import dataIcon from "../img/icon-data.svg"
// import dataReady from "../img/icon-data-ready.svg"
// import dataAnal from "../img/icon-data-analysis.svg"
// import engineerIcon from "../img/icon-engineering.svg"
// import fittingIcon from "../img/icon-fitting.svg"
// import interpretIcon from "../img/icon-Interpretation.svg"
// import dataLoad from "../img/icon-load-data.svg"
// import validationIcon from "../img/icon-validation.svg"
// import visualizationIcon from "../img/icon-visualization.svg"

import dataLoad from "../img/icons8-blockchain-technology-100 1.svg"
import dataAnalysis from "../img/icons8-financial-growth-analysis-100 2.svg"
import visualizationIcon from "../img/icons8-statistics-100 1.svg"
import dataIcon from "../img/icons8-ai-100 2.svg"
import engineerIcon from "../img/icons8-settings-100 1.svg"
import dataReady from "../img/icons8-positive-dynamic-100 2.svg"
import fittingIcon from "../img/icons8-3d-model-100 2.svg"
import validationIcon from "../img/icons8-verified-account-100 1.svg"
import interpretIcon from "../img/icons8-test-100 2.svg"

const RoadMapNewData = [
    { title: "Data Source", desc: "We capture data from different data sources", img: "" },
    { title: "ETL", desc: "We extract, transform and load your data", img: <img src={dataLoad} alt="" /> },
    { title: "Analysis DWH", desc: "We integrate and store your data in a data warehouse", img: <img src={dataAnalysis} alt="" /> },
    { title: "Data Visualization", desc: "We visualize analytical data for your reporting.", img: <img src={visualizationIcon} alt="" /> },
    { title: "AI, ML, DS", desc: "Data is ready for training algorithms", img: <img src={dataIcon} alt="" /> },
    { title: "EDA", desc: "Our team conducts exploratory data analysis", img: <img src={engineerIcon} alt="" /> },
    { title: "FE", desc: "We kickstart the feature engineering process", img: <img src={dataReady} alt="" /> },
    { title: "Model Fitting", desc: "We train an AI model with the best fitting parameters", img: <img src={fittingIcon} alt="" /> },
    { title: "Model Validation", desc: "We validate the model to prove its functionality", img: <img src={validationIcon} alt="" /> },
    { title: "Result Interpretation", desc: "We show you the results with demo", img: <img src={interpretIcon} alt="" /> },
]

export default RoadMapNewData;