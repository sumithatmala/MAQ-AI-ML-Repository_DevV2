import React, { useState } from "react";
import "./AccessibleTabs.css"; // Import CSS file if necessary

const Tab = ({ title, content, imageUrl, isAcitive }) => (
  <li className="tab">
    <article className="tab-content">
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
    <div className="tab-image">
      <img src={imageUrl} alt="Tab Image" />
    </div>
  </li>
);

const Tabs = ({ tabsData }) => {
  // State to keep track of the active tab index
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="sect">
      <div className="section_div">
        <ul className="indexes">
          {tabsData.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              onMouseEnter={() =>handleTabClick(index)}
              className={activeTab === index ? "active active_border" : ""}
            ><img src ={tab.icon} /> <span className="text_underline">{tab.heading} </span> </li>
          ))}
        </ul>
        {/* <ul className="tabs"> */}
          {tabsData.map((tab, index) => (
           <ul key={index} className={`tabs ${activeTab === index ? "active" : ""}`}>
            <Tab
            key={index}
              title={tab.title}
              content={tab.content}
              imageUrl={tab.imageUrl}
              isAcitive={activeTab === index}
            />
            </ul>
            // </div>
          ))}
        {/* </ul> */}
      </div>
    </section>
  );
};

export default Tabs;
