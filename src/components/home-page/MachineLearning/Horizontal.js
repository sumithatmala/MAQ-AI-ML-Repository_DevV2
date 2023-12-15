import React from "react";
import { Tab, TabList } from "@fluentui/react-components";

export const Horizontal = () => {

 return (
 <div style={{
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "50px",
  paddingRight: "20px",
  paddingBottom: "50px",
  paddingLeft: "20px",
  rowGap: "20px",
 }}>
 <TabList defaultSelectedValue="tab2">
 <Tab value="tab1" style={{ paddingRight: "20px" }}>First Tab</Tab>
 <Tab value="tab2" style={{ paddingRight: "20px" }}>Second Tab</Tab>
 <Tab value="tab3" style={{ paddingRight: "20px" }}>Third Tab</Tab>
 <Tab value="tab4" style={{ paddingRight: "20px" }}>Fourth Tab</Tab>
 </TabList>
 </div>
 );
};
