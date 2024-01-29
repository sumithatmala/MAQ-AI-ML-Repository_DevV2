import React, { useEffect } from "react";
import Banner from "./Banner";
import Benfits from "./Benfits";
import UseCases from "./UseCases";
import Industries from "./Industries";
import "./css/Industries.css";
import "./css/LargeLanguageModel.css"
import Expertise from "./Expertise";
import ArticleBanner from "./ArticleBanner";

const LargeLanguageModel = () => {
  return (
    <div>
      <div>
        <Banner />
        <Benfits />
        <UseCases />
        <Industries />
        <div class="quick-block">
          <h2 class="head-block-center w-800">
            Our Expertise in Large Language Model Development
          </h2>
          <div class="text-block-center">
            We provide a broad spectrum of LLM Large Language Model services
            that meet your needs at scale.
          </div>
        </div>
        <Expertise />
        <ArticleBanner />
      </div>
    </div>
  );
};

export default LargeLanguageModel;
