import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//Product elements
import Container from "../components/layout/Container";
import NotFound from "../components/views/NotFound";
import HomePage from "../components/HomePage/HomePage";
import AboutUs from "../components/views/AboutUs";
import SideBar from "../components/ui-elements/SideBar/SideBar";
import ProductInformation from "../components/product-dashboard/ProductInformation";
import "../css/style.css";
import ScrollToTop from "./ScrollToTop";
import PredictiveAnalytics from "../components/solutions/PredictiveAnalytics/PredictiveAnalytics";
import TextAnalysis from "../components/solutions/textAnalysis/TextAnalysis";
import ComputerVision from "../components/solutions/computerVision/ComputerVision";
import ImageRecognition from "../components/solutions/imageRecognition/ImageRecognition";
import DataCaptureOCR from "../components/solutions/data-capture-OCR/dataCaptureOCR";
import Expertise from "../components/miscellaneous/Expertise/Expertise";
import NaturalLanguageProcessing from "../components/solutions/natural-language-processing/naturalLanguageProcessing";
import LargeLanguageModel from "../components/solutions/large-language-model/LargeLanguageModel";
import ConsumerSentimentAnalysis from "../components/solutions/ConsumerSentimentAnalysis/ConsumerSentimentAnalysis";
import VirtualAssistantTool from "../components/solutions/VirtualAssistantTool/VirtualAssistantTool";
import RecommendationSystems from "../components/solutions/RecommendationSystems/RecommendationSystems";
import Retail from "../components/industries/Retail/Retail";
import Logistics from "../components/industries/Logistics/Logistics";
import AISolutionsEcommerce from "../components/industries/AISolutionsEcommerce/AISolutionsEcommerce";
import Fintech from "../components/industries/Fintech/Fintech";
import Automotive from "../components/industries/Automotive/Automotive";
import GameEntertainment from "../components/industries/GameEntertainment/GameEntertainment";
import MarTech from "../components/industries/MarTech/MarTech";
import SportWellness from "../components/industries/SportWellness/SportWellness";
import HealtcarePharma from "../components/industries/HealthcarePharma/HealthcarePharma";
import ContactUs from "../components/miscellaneous/ContactUs/ContactUs";

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/Expertise" element={<Expertise />} />

          <Route path="/AboutUs" element={<AboutUs />} />

          <Route
            path="/product/:productName"
            element={
              <>
                <SideBar />
                <ProductInformation />
              </>
            }
          />

          <Route path="/solution/TextAnalysis" element={<TextAnalysis />} />
          <Route path="/solution/ComputerVision" element={<ComputerVision />} />
          <Route path="/solution/ImageRecognition" element={<ImageRecognition />} />
          <Route path="/solution/NaturalLanguageProcessing" element={<NaturalLanguageProcessing />} />
          <Route path="/solution/LargeLanguageModel" element={<LargeLanguageModel />} />
          <Route path="/solution/DataCaptureOCR" element={<DataCaptureOCR />} />
          <Route path="/solution/PredictiveAnalytics" element={<PredictiveAnalytics />} />
          <Route path="/solution/VirtualAssistantTool" element={<VirtualAssistantTool />} />
          <Route path="/solution/ConsumerSentimentAnalysis" element={<ConsumerSentimentAnalysis />} />

          <Route path="/Industries/Logistics" element={<Logistics />} />
          <Route path="/Industries/E-commerce" element={<AISolutionsEcommerce />} />
          <Route path="/Industries/Retail" element={<Retail />} />
          <Route path="/Industries/RecommendationSystems" element={<RecommendationSystems />} />
          <Route path="/Industries/Fintech" element={<Fintech />} />
          <Route path="/Industries/MarTech" element={<MarTech />} />
          <Route path="/Industries/Automotive" element={<Automotive />} />
          <Route path="/Industries/GameEntertainment" element={<GameEntertainment />} />
          <Route path="/Industries/Health&Pharma" element={<HealtcarePharma />} />
          <Route path="/Industries/SportWellness" element={<SportWellness />} />
          
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
