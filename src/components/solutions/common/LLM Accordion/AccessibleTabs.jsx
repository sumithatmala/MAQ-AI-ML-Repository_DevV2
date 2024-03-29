import React, { useState } from "react";
import "./AccessibleTabs.css"; // Import CSS file if necessary
import { HashLink } from "react-router-hash-link";

const Tab = ({ title, content, imageUrl, isAcitive }) => (
  <li className="tab">
    <article className="tab-content">
      <h3>{title}</h3>
      <div className="center_para">
      <p>{content}</p>
      </div>
    </article>
    <div className="tab-image">{imageUrl}</div>
  </li>
);

const Tabs = ({ tabsData, sectionName, subheading, foot, bttn }) => {
  // State to keep track of the active tab index
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div>
        <h2 className="head-block-center">{sectionName}</h2>
        <div className="text-block-center">{subheading} </div>

        <section className="sect">
          <div className="section_div">
            <ul className="indexes">
              {tabsData.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => handleTabClick(index)}
                  // onMouseEnter={() => handleTabClick(index)}
                  className={activeTab === index ? "active active_border" : ""}
                >
                  <img src={tab.icon} style={{width:"20px", marginRight:"2px"}} />{" "}
                  <span className="text_underline">{tab.heading} </span>{" "}
                </li>
              ))}
            </ul>
            {/* <ul className="tabs"> */}
            <div className="ultabs">
              {tabsData.map((tab, index) => (
                <ul
                  key={index}
                  className={`tabs ${activeTab === index ? "active" : ""}`}
                >
                  <Tab
                    key={index}
                    title={tab.title}
                    content={tab.content}
                    imageUrl={tab.image}
                    isAcitive={activeTab === index}
                  />
                </ul>
                // </div>
              ))}
            </div>
            {/* </ul> */}
          </div>
        </section>

        <div className="text-block-center"> {foot} </div>
        {bttn === true && (
          <div className="block__action">
          <HashLink to="#contact" className="btn btn-empty">Request Demo</HashLink>
        </div>
        )}
      </div>
    </>
  );
};

export default Tabs;
