import React from "react";
import IntegrationSteps from './img/Integration-steps.svg'
const Integration = () => {
  return (
    <div className="moving-arrow">
      <h2 className="head-block-center w-800">
        Integrating Large Language Learning Models, Effortlessly
      </h2>
      <div className="text-block-center">
      Our developers seamlessly integrate conversational AI into your existing infrastructure, ensuring a smooth transition and minimal disruption to your operations.
      </div>
      <div className="moving-arrow-inner">
        <div 
        className="moving-arrow-block video-block"
            Style="align-items: center;display: flex;"
        >
          <div
            id="anim-65b615d870938"
            className="wpbdmv-animation align-center renderer-svg playing"
            Style="max-width: 100%; margin-right: auto; margin-left: auto;"
          >
            <img src={IntegrationSteps} alt="Integration Steps" style={{maxWidth:"100%"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
