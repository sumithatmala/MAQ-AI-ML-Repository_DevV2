import React, { useState } from "react";
import Card from "./Card.js";
import Banner from "./Banner.js";
import SpecializationsData from "./SpecializationsData.js";
import "./HomePage.css";
import SpecializationsPannel from "./SpecializationsPannel/SpecializationsPannel.js";
import * as CategoryToolsData from './SpecializationsPannel/CategoryToolsData/index.js'

const filterByName = (idx, name) => {
  const FileName = name.replace(/\s/g, '') + 'Data';
  return CategoryToolsData.allExports[idx][FileName];
};
export default function HomePage() {

  const [selected, setSelected] = useState(SpecializationsData[0]);

  return (
    <>
      <Banner />
      <div className="parent-middle-sections" style={{paddingTop:"2px"}}>
      {/* Left list of specializations */}
      <div className="container middle-section">
        <div className="specializations">
          {
            SpecializationsData.map((specialization, index) => {
              return(
                <Card
                  key={index}
                  cardTitle={specialization.title}
                  cardCaption={specialization.caption}
                  imageURL={specialization.imageURL}
                  onClick={() => (setSelected(specialization))}
                  isSelected={selected.title === specialization.title}
                />
              )
            })
          }
        </div>
        {/* Right list according to the left list selection */}
        <div className="specialization-details">
          <SpecializationsPannel items={{ title: selected.title, description: selected.description, filteredData: filterByName(selected.index, selected.title) }}/>
        </div>
      </div>
      </div>
    </>
  );
}
