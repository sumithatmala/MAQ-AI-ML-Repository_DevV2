import React, { useState } from "react";
// import Sdata from "./Sdata.js";
import Card from "./Card.js";
import Banner from "./Banner.js";
import Homedata from "./HomeData.js";
// import { Home } from "@mui/icons-material";
import "./HomePage.css";
import Classification from "./Classification/Classification.js";
export default function HomePage() {
  const specializations = Homedata();
  const [selected, setSelected] = useState(specializations[1]);
  console.log(specializations);

  const displaySelected = () => {
    switch (selected.title) {
      case "In-House Tools":
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
      case "Classification":
        return (
          <Classification />
        );
      case "Clustering":
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
    </>
  );
}
