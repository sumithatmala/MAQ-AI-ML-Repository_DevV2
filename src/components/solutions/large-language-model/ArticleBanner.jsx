import React from "react";
import './css/ArticleBanner.css'
import articleBG from './img/chatgpt-integration-banner-bg.webp'
const ArticleBanner = () => {
  return (
    <div class="article-banner">
      <div
        class="article-banner-with-button __without-icons __w-head bg-img"
        // Style={`background-image: url($({articleBG}));`}
      >
        <div class="article-banner-with-button__head">
          Ready to start your LLM project?
        </div>
        <div class="article-banner-with-button__text" Style="max-width:620px;">
          Turn your business idea into a full-fledged solution and ensure high
          ROIs from language modeling projects.
        </div>
        <p>
          <a
            class="article-banner-with-button__link red-btn red-btn-empty"
            href="#"
          >
            Consult an expert
          </a>
        </p>
      </div>
    </div>
  );
};

export default ArticleBanner;
