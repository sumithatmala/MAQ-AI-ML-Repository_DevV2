import React, { useState } from "react";
// import Sdata from "./Sdata.js";
import Card from "./Card.js";
import Banner from "./Banner.js";
import Homedata from "./HomeData.js";
// import { Home } from "@mui/icons-material";
import "./HomePage.css";
import Classification from "./Classification/Classification.js";
import MachineLearning from "./MachineLearning/MachineLearning.js";
import ArtificialIntelligence from "./ArtificialIntelligence/ArtificialIntelligence.js";


export default function HomePage() {
  const specializations = Homedata();
  const [selected, setSelected] = useState(specializations[0]);
  console.log(specializations);

  const displaySelected = () => {
    switch (selected.title) {
      case "Artificial Intelligence":
        return (
          <div className="specialization-details" style={{marginLeft:"0rem"}}>
          {/* //   <div className="specialization-details-title">
          //     {selected.title}
          //   </div>
          //   <div className="specialization-details-description">
          //     {selected.description}
          //   </div>
          //   <div className="specialization-details-image">
          //     <img src={selected.imageURL} alt="" className="specialization-details-image"/>
          //   </div> */}
          <ArtificialIntelligence/>
          </div>
          
        );
      case "Data Science":
        return (
          <Classification />
        );
      case "Machine Learning":
        return (
          <div className="specialization-details" style={{marginLeft:"0rem"}}>
          {/* //   <div className="specialization-details-title">
          //     {selected.title}
          //   </div>
          //   <div className="specialization-details-description">
          //     {selected.description}
          //   </div>
          //   <div className="specialization-details-image">
          //     <img src={selected.imageURL} alt="" className="specialization-details-image"/>
          //   </div> */}
          <MachineLearning/>
          </div>
         
        );
      case "Deep-Learning":
        return (
          <div className="specialization-details">
            <div className="specialization-details-title">
              {selected.title}
            </div>
            <div className="specialization-details-description">
              {selected.description}
            </div>
            <div className="specialization-details-image">
              <img src={selected.imageURL} alt="" className="specialization-details-image"/>
            </div>
          </div>
        );
      case "Forecasting":
        return (
          <div className="specialization-details">
            <div className="specialization-details-title">
              {selected.title}
            </div>
            <div className="specialization-details-description">
              {selected.description}
            </div>
            <div className="specialization-details-image">
              <img src={selected.imageURL} alt="" className="specialization-details-image"/>
            </div>
          </div>
        );
      case "NLP":
        return (
          <div className="specialization-details">
            <div className="specialization-details-title">
              {selected.title}
            </div>
            <div className="specialization-details-description">
              {selected.description}
            </div>
            <div className="specialization-details-image">
              <img src={selected.imageURL} alt="" className="specialization-details-image"/>
            </div>
          </div>
        );
      case "Regression":
        return (
          <div className="specialization-details">
            <div className="specialization-details-title">
              {selected.title}
            </div>
            <div className="specialization-details-description">
              {selected.description}
            </div>
            <div className="specialization-details-image">
              <img src={selected.imageURL} alt="" className="specialization-details-image"/>
            </div>
          </div>
        );
      default:
        return (
          <div className="specialization-details">
            <div className="specialization-details-title">
              {selected.title}
            </div>
            <div className="specialization-details-description">
              {selected.description}
            </div>
            <div className="specialization-details-image">
              <img src={selected.imageURL} alt="" className="specialization-details-image"/>
            </div>
          </div>
        );
    }
  }
  return (
    <>
      <Banner />
      <div className="parent-middle-sections" style={{paddingTop:"2px"}}>
      {/* Left list of specializations */}
      <div className="container middle-section">
        <div className="specializations">
          {
            specializations.map((specialization, index) => {
              return(
                <Card
                  key={index}
                  cardTitle={specialization.title}
                  cardDescription={specialization.description}
                  imageURL={specialization.imageURL}
                  onClick={() => setSelected(specialization)}
                  isSelected={selected.title === specialization.title}
                />
              )
            })
          }
        </div>
        {/* Right list according to the left list selection */}
        {/* switch case for the list based on selected title */}
        <div className="specialization-details">
          {displaySelected()}
        </div>
      </div>
      </div>
    </>
  );
}
