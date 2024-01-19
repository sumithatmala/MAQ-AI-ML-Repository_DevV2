import React, { useEffect, useRef, useState } from "react";
import NavigationLinks from "./NavigationLinks";
import './NewNavbar.css';
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
  

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.link && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            <a href={items.link} onClick={closeDropdown}>
              {items.label}
            </a>
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
        <Link href={items.link}>{items.label}</Link>
      )}
    </li>
  );
};


const MobileNav = () => {
    const depthLevel = 0;
    const [showMenu, setShowMenu] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (showMenu && ref.current && !ref.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [showMenu]);

    return (
        <nav className="mobile-nav">
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    setShowMenu(toggled);
                } else {
                    setShowMenu(toggled);
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