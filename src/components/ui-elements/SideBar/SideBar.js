import { Menu, MenuItem, useProSidebar, Sidebar } from "react-pro-sidebar";
// import { NavLink} from "react-router-dom";
// import TryRoundedIcon from "@mui/icons-material/TryRounded";
// import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
// import InfoRoundedIcon from "@mui/icons-material/InfoRounded"

//icons
import { HashLink } from 'react-router-hash-link';
import videoPlayer from './icons/videoplayer.png'
import details from './icons/details.png'
import tryIt from './icons/tryit.png'
import contacts from './icons/contacts.png'
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
// import { AiOutlineInfoCircle } from "react-icons/ai";


import { React, useState } from "react";

export default function SideBar() {
  // const [opac, setOpac] = useState("1");
  const {
    collapseSidebar,
    collapsed,
  } = useProSidebar();

  const handleOnMouseEnter = () => {
    if (collapsed) {
      // setOpac("1");
      collapseSidebar();
    }
  };
  const handleOnMouseLeave = () => {
    if (!collapsed) {
      // setOpac("0.9");
      collapseSidebar();
    }
  };
  return (
    <>
      <div
        id="app"
        className="fixed-top"
        style={{
          height: "100vh",
          opacity: 1,
          width: "0vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          
        }}>
        <Sidebar
          defaultCollapsed
          style={{
            height: "50vh",
            // backgroundColor: "rgba(32,89,118,0.3)",
          }}
          breakPoint="sm"
          transitionDuration={600}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}>
          <Menu
            style={{
              background: "transparent",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "normal",
            }}>
            {/* <MenuItem
              icon={<MenuRoundedIcon style={{ fontSize: "3rem" }} />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center", opacity: "1" }}>
              
            </MenuItem> */}

            <HashLink
              to={"./#prodinfo"}
              style={{
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                color: "#302758",
                fontSize: "20px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}>
              <MenuItem
                style={{ marginBottom: "15px" }}
                
                // icon={<img src={details} height={"150%"} alt='details'/>}
                icon={<AiOutlineInfoCircle fontSize={"200%"}/>}
                >
                Details
              </MenuItem>
            </HashLink>

            <HashLink
              to={"./#demo"}
              style={{
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                color: "#302758",
                fontSize: "20px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}>
              <MenuItem
                style={{ marginBottom: "15px" }}
                icon={<img src={videoPlayer} height={"150%"} alt='videoPlayer'/>}>
                Demo
              </MenuItem>
            </HashLink>

            <HashLink
              to={"./#tryit"}
              style={{
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                color: "#302758",
                fontSize: "20px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}>
              <MenuItem
                style={{ marginBottom: "15px" }}
                icon={<img src={tryIt} height={"150%"} alt='tryIt'/>}>
                Try It!
              </MenuItem>
            </HashLink>
            <HashLink
              to={"./#contact"}
              style={{
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                color: "#302758",
                fontSize: "20px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}>
              <MenuItem
                style={{ marginBottom: "15px" }}
                // icon={<img src={contacts} height={"150%"}  alt='contacts'/>}
                icon={<AiOutlineUser fontSize={"200%"}/> }
              >
                Contact
              </MenuItem>
            </HashLink>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
