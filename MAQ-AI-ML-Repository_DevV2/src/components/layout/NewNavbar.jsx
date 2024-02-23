import NavigationLinks from './NavigationLinks';
import { useState, useEffect, useRef } from 'react';
// import './NewNavbar.css';
import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
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
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                        {items.icon ? (
                            <img src={process.env.PUBLIC_URL + items.icon} alt={items.alt} height={20} />
                        ) : (<></>)}
                        {items.label}{' '}
                        {/* {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />} */}
                    </button>
                    <Dropdown
                        submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel} />
                </>
            ) : (
                <Link to={items.link}>{items.label}</Link>
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