import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavigationLinks from '../../layout/NavigationLinks';
import { FiChevronDown } from "react-icons/fi";

const GridDropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} wrapper ${dropdown ? "show" : ""}`}>
            {/* <ul className={`dropdown ${dropdownClass} wrapper ${true ? "show" : ""}`}> */}
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};
const SubMenuItem = ({ label, link, icon }) => {
    return (
        <li className="list-sub-menu">
            {icon ? (icon) : (<></>)}
            <Link className="nav-list__item link__underline" to={link}>
                <span>{label}</span>
            </Link>
        </li>
    );
};
const SubMenu = ({ items }) => {
    return (
        <ul className="static-pos" >
            {items.map((item, index) => (
                <SubMenuItem key={index} label={item.label} link={item.link} icon={item.icon}/>
            ))}
        </ul>
    );
};
const MenuItem = ({ label, link, submenu, defaultMenu }) => {
    const [hovered, setHovered] = useState(label === 'Artificial Intelligence & ML');
    const [isDefaultMenu, setDefaultMenu] = useState(true);

    const onMouseEnter = () => {
        setDefaultMenu(false);
        setHovered(true);
    };
    
    const onMouseLeave = () => {
        setHovered(false);
        setDefaultMenu(true);
    };

    return (
            <>
                <li className="list-layout-menu-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link className="nav-list__item link__underline" to={link}>
                        <span>{label}</span>
                    </Link>
                    {hovered && (submenu && label !== 'Artificial Intelligence & ML'&& <SubMenu items={submenu} />)}
                </li>
                {console.log(defaultMenu.submenu)}
                {isDefaultMenu && label !== 'Artificial Intelligence & ML' && !hovered &&submenu && <SubMenu items={defaultMenu.submenu} />}
            </>
    );
};

const ListDropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    // const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown list-wrapper  ${dropdown ? "show" : ""}`}>
            {/* <ul className={`dropdown ${dropdownClass} list-wrapper ${true ? "show" : ""}`}> */}
            {/* {console.log("aa", submenus)} */}
            {submenus.map((item, index) => (
                <MenuItem key={index} label={item.label} link={item.link} submenu={item.submenu} icom={item.icon} defaultMenu={submenus[0]}/>
            ))}
        </ul>
    );
};

const MenuItems = ({ items, depthLevel }) => {
    //toggle dropdown
    const [dropdown, setDropdown] = useState(false);
    //mouse click outside handle
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                // console.log(event)
                // console.log(ref.current )
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    //mouse hover
    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };
    return (
        <li className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.submenu ? (
                <>
                    {items.icon ? (items.icon) : (<></>)}
                    <button className='nav-list__item' type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                        {items.label}
                        <FiChevronDown style={{marginLeft: "4px"}}/>
                    </button>
                    {/* For other submenus, render the default dropdown */}
                    {items.label === 'Products' && dropdown ? (
                        <ListDropdown
                            submenus={items.submenu}
                            dropdown={dropdown}
                            depthLevel={depthLevel} />
                    ) : (
                        <GridDropdown
                            submenus={items.submenu}
                            dropdown={dropdown}
                            depthLevel={depthLevel} />
                    )}
                </>
            ) : (
                    <>
                        {items.icon ? (items.icon) : (<></>)}
                        <Link to={items.link} className='nav-list__item'>
                            {items.label} 
                        </Link>
                    </>
            )}
        </li>
    );
};

const Navbar = () => {
    const depthLevel = 0;
    return (
        <nav className="desktop-nav">
            <ul className="menus">
                {NavigationLinks.map((menu, index) => {
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;