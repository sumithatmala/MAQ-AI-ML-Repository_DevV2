import { Menu, MenuItem, useProSidebar, Sidebar } from "react-pro-sidebar";
// import { NavLink} from "react-router-dom";
// import TryRoundedIcon from "@mui/icons-material/TryRounded";
// import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
// import InfoRoundedIcon from "@mui/icons-material/InfoRounded"

//icons
import { HashLink } from "react-router-hash-link";
import videoPlayer from "./icons/videoplayer.png";
import details from "./icons/details.png";
import tryIt from "./icons/tryit.png";
import contacts from "./icons/contacts.png";
import {
  AiOutlineUser,
  AiOutlineInfoCircle,
  AiOutlineLaptop,
  AiFillPlaySquare,
} from "react-icons/ai";
// import { AiOutlineInfoCircle } from "react-icons/ai";

import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  // const [opac, setOpac] = useState("1");
  const { collapseSidebar, collapsed } = useProSidebar();

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
          // top: "10%",
          // height: "40vh",
          opacity: 1,
          width: "0vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "blue"
        }}
      >
        <Sidebar
          defaultCollapsed
          style={{
            // height: "50vh",
            // backgroundColor: "rgba(32,89,118,0.3)",
          }}
          breakPoint="sm"
          transitionDuration={450}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Menu
            style={{
              background: "transparent",
              // top: "50%",
              height: "45vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "normal",
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

            {/* <MenuItem
              icon={<MenuRoundedIcon style={{ fontSize: "3rem" }} />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center", opacity: "1" }}>
              
            </MenuItem> */}
            <div>
              {/* <HashLink
                to={"./#prodinfo"}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#302758",
                  fontSize: "20px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              > */}
              <div>
                <MenuItem
                  style={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#302758",
                    fontSize: "20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                  // icon={<img src={details} height={"150%"} alt='details'/>}
                  component={<HashLink to={"./#prodinfo"} />}
                  icon={<AiOutlineInfoCircle fontSize={"200%"} />}
                >
                  Details
                </MenuItem>
              </div>
              {/* </HashLink> */}
            </div>

            <div>
              {/* <HashLink
                to={"./#demo"}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#302758",
                  fontSize: "20px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              > */}
              <div>
                <MenuItem
                  style={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#302758",
                    fontSize: "20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                  // icon={<img src={videoPlayer} height={"150%"} alt='videoPlayer'/>}>
                  component={<HashLink to={"./#demo"} />}
                  icon={<AiFillPlaySquare fontSize={"200%"} />}
                >
                  Demo
                </MenuItem>
              </div>
              {/* </HashLink> */}
            </div>
            <div>
              {/* <HashLink
                to={"./#tryit"}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#302758",
                  fontSize: "20px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              > */}
              <div>
                <MenuItem
                  style={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#302758",
                    fontSize: "20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                  component={<HashLink to={"./#tryit"} />}
                  // icon={<img src={tryIt} height={"150%"} alt='tryIt'/>}>
                  icon={<AiOutlineLaptop fontSize={"200%"} />}
                >
                  Try It!
                </MenuItem>
              </div>
              {/* </HashLink> */}
            </div>
            <div>
              {/* <HashLink
                to={"./#contact"}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#302758",
                  fontSize: "20px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              > */}
              <div>
                <MenuItem
                  style={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#302758",
                    fontSize: "20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                  component={<HashLink to={"./#contact"} />}
                  // icon={<img src={contacts} height={"150%"}  alt='contacts'/>}
                  icon={<AiOutlineUser fontSize={"200%"} />}
                >
                  Contact
                </MenuItem>
              </div>
              {/* </HashLink> */}
            </div>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
