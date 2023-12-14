import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

export default function Card({cardTitle, cardDescription, imageURL, onClick, isSelected, ...props}) {
  // console.log(cardTitle, isSelected);
  return (
    <div 
      className={`card ${isSelected ? "selected" : ""} mt-3 `}
      onClick={onClick}>
      <img src={imageURL} alt="" className="card-img mt-4"/>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
      </div>
    </div>
  );
}
