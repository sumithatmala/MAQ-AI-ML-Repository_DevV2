import React, { useState } from "react";
import "./style2.css";
import CompanyLogo from "../ui-elements/CompanyLogo";
import NavigationLinks from "./NavigationLinks";

const NavBar2 = () => {
  const [isNavActive, setNavActive] = useState(false);

  const handleMenuClick = () => {
    setNavActive(!isNavActive);
  };

  const navClass = isNavActive ? "active nav1" : "nav1";

  const SubMenu = ({ items, hasSubmenu }) => {
    const hasSubmenuClass = hasSubmenu ? "sub-menu" : "sub-menu2";
    return (
      <ul className={hasSubmenuClass}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="menu-item">
              <span> {item.label} </span>
              {item.submenu && (
                <i
                  className={`fas fa-caret-down ${navClass}`}
                  aria-hidden="true"
                ></i>
              )}
              {item.submenu && (
                <i
                  className={`fas fa-caret-up ${navClass}`}
                  aria-hidden="true"
                ></i>
              )}
            </a>
            {item.submenu && (
              <SubMenu items={item.submenu} hasSubmenu={true} />
            )}
          </li>
        ))}
      </ul>
    );
  };

  const MenuItem = ({ label, link, submenu }) => {
    return (
      <li>
        <a href={link} className="menu-item">
          <span> {label} </span>
          {submenu && (
            <i
              className={`fas fa-caret-down ${navClass}`}
              aria-hidden="true"
            ></i>
          )}
          {submenu && (
            <i
              className={`fas fa-caret-up ${navClass}`}
              aria-hidden="true"
            ></i>
          )}
        </a>
        {submenu && <SubMenu items={submenu} hasSubmenu={true} />}
      </li>
    );
  };

  const NavList = ({ menuItems }) => {
    return (
      <ul className="nav-list">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </ul>
    );
  };

  return (
    <header>
      <div>
        <nav className={`${navClass} fixed-top`}>
          <div className="menu-icons" onClick={handleMenuClick}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <CompanyLogo />
          <NavList menuItems={NavigationLinks} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar2;
