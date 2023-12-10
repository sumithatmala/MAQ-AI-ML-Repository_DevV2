import React from "react";
import Sdata from "../Sdata.js";
import Card from "./Card.js";

export default function HomePage() {
  return (
    <>
      <div className="flex-container" style={{ display: "flex" }}>
        {Sdata().map((val, ind) => {
          return <Card key={ind} cardData={val} />;
        })}
      </div>
    </>
  );
}
