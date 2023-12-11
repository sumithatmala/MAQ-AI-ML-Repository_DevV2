import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div
      style={{
        height: "auto",
        width: "450px",
        padding: "20px",
      }}>
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <img
            src={props.cardData.imgsrc}
            alt="Product"
            className="img-responsive"
          />
        </div>
        <div className="wsk-cp-text">
          <div className="category">
            <span>{props.cardData.cardTitle}</span>
          </div>
          <div className="title-product">
            <h3>{props.cardData.descriptionTitle}</h3>
          </div>
          <div className="description-prod">
            <p>{props.cardData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
