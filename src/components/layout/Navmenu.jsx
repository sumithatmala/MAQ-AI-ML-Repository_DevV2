import React from "react";
import CompanyLogo from "../ui-elements/CompanyLogo";
import NavigationLinks from "./NavigationLinks";
import MenuLinks from "../ui-elements/MenuLinks/MenuLinks";
import "../../css/style.css";

const NavMenu = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  ftco-navbar-light"
        id="ftco-navbar">
        <div className="container">
          <CompanyLogo />
          <div className="col-md-4">
            {/* <div className="d-flex form-inputs">
              <input
                className="form-control"
                type="text"
                placeholder="Search any product..."
              />
              <i className="bx bx-search"></i>
            </div> */}
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
          </button> */}
          <div className="collapse navbar-collapse" id="ftco-nav"></div>
          <MenuLinks menuLink={NavigationLinks} />
        </div>
      </nav>
    </>
  );
};
export default NavMenu;
