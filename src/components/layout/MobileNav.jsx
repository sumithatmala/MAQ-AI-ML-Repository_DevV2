import React, { useEffect, useRef, useState } from "react";
import NavigationLinks from "./NavigationLinks";
// import './NewNavbar.css';
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
// import menuIcon from "../ui-elements/list.svg"

const MobileDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

let closeDropdown;

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={(e) => toggleDropdown(e)}>
      {items.link && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            <Link to={items.link} >
              {items.label}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.link && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            {items.label}{" "}
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.link} onClick={closeDropdown}>{items.label}</Link>
      )}
    </li>
  );
};


const MobileNav = () => {
    const depthLevel = 0;
    const [showMenu, setShowMenu] = useState(false);
    
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (showMenu && ref.current && !ref.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handler);
        // document.addEventListener("touchstart", handler);
        setHamburgerToggle(showMenu);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [showMenu]);

    return (
        <nav className="mobile-nav"style={{marginRight: "30px"}}>
            <Hamburger toggled={hamburgerToggle} onToggle={toggled => {
                if (toggled) {
                  setShowMenu(toggled);
                } else {
                  setShowMenu(false);
                  closeDropdown(toggled);
                }
            }} />
            {/* <button
                className="mobile-nav__menu-button"
                type="button"
                onClick={() => setShowMenu((prev) => !prev)}>
                Menu
            </button> */}
            {showMenu && (
                <ul className="menus" ref={ref}>
                    {NavigationLinks.map((menu, index) => {
                        return (
                            <MobileMenuItems
                              items={menu}
                              key={index}
                              depthLevel={depthLevel}
                              showMenu={showMenu}
                              setShowMenu={setShowMenu}
                            />
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default MobileNav;