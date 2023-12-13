import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

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
          <NavLink to={props.cardData.redirectUrl}>
            <div className="category">
              <span>{props.cardData.cardTitle}</span>
            </div>
          </NavLink>
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
