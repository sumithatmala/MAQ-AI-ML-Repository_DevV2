import React from "react";
import {HashRouter as Router, Routes, Route } from "react-router-dom";

//Product elements
import Container from "../components/layout/Container";
import NotFound from "../components/views/NotFound";
import HomePage from "../components/home-page/HomePage";
import AboutUs from "../components/views/AboutUs";
import SideBar from "../components/ui-elements/SideBar/SideBar";
import ProductInformation from "../components/product-dashboard/ProductInformation";
import '../css/style.css'
import ScrollToTop from './ScrollToTop';
import VirtualAssistantTool from "../components/solution/VirtualAssistantTool/VirtualAssistantTool";
import PredictiveAnalytics from "../components/solutions/PredictiveAnalytics/PredictiveAnalytics";
import TextAnalysis from "../components/solutions/textAnalysis/TextAnalysis";
import ComputerVision from "../components/solutions/computerVision/ComputerVision";
import ImageRecognition from "../components/solutions/imageRecognition/ImageRecognition";
import NaturalLanguageProcessing from "../components/solutions/natural-language-processing/naturalLanguageProcessing";
import LargeLanguageModel from "../components/solutions/large-language-model/LargeLanguageModel";
import ConsumerSentimentAnalysis from "../components/solution/ConsumerSentimentAnalysis/ConsumerSentimentAnalysis";

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Container />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<VirtualAssistantTool/> } /> */}
          <Route path="/" element={<ConsumerSentimentAnalysis />} />
          <Route path="/" element={<LargeLanguageModel />} />

          <Route path="/" element={< HomePage/>} />
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
          <Route path="/solution/TextAnalysis" element={<TextAnalysis/>}/>
          <Route path="/solution/ComputerVision" element={<ComputerVision/>}/>
          <Route path="/solution/ImageRecognition" element={<ImageRecognition/>}/>
          <Route path="/solution/NaturalLanguageProcessing" element={<NaturalLanguageProcessing/>}/>
          <Route path="/solution/LargeLanguageModel" element={<LargeLanguageModel/>}/>
          <Route path="/solution/PredictiveAnalytics" element={<PredictiveAnalytics/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
