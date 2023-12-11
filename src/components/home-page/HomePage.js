import React from "react";
import Sdata from "./Sdata.js";
import Card from "./Card.js";
import Banner from "./Banner.js";

export default function HomePage() {
  return (
    <>
      <Banner></Banner>
      <div className="flex-container" style={{ display: "flex" }}>
        {Sdata().map((val, ind) => {
          return <Card key={ind} cardData={val} />;
        })}
      </div>
    </>
  );
}
