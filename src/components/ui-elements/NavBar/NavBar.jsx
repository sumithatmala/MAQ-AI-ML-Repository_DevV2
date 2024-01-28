import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavigationLinks from '../../layout/NavigationLinks';

const GridDropdown = ({ submenus, dropdown, depthLevel }) => {
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} wrapper ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};

const SubMenuItem = ({ label, link }) => (
    <li className="list-sub-menu">
        <Link className="nav-list__item link__underline" to={link}>
            <span>{label}</span>
        </Link>
    </li>
);

const SubMenu = ({ items }) => (
    <ul className="static-pos">
        {items.map((item, index) => (
            <SubMenuItem key={index} label={item.label} link={item.link} />
        ))}
    </ul>
);

const MenuItem = ({ label, link, submenu }) => {
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    return (
        <li className="list-layout-menu-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className="nav-list__item link__underline" to={link}>
                <span>{label}</span>
            </Link>
            {submenu && hovered && <SubMenu items={submenu} />}
        </li>
    );
};

const ListDropdown = ({ submenus, dropdown }) => (
    <ul className={`dropdown list-wrapper ${dropdown ? "show" : ""}`}>
        {submenus.map((item, index) => (
            <MenuItem key={index} label={item.label} link={item.link} submenu={item.submenu} />
        ))}
    </ul>
);

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
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
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => setDropdown(true);
    const onMouseLeave = () => setDropdown(false);

    const closeDropdown = () => dropdown && setDropdown(false);

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
            {items.submenu ? (
                <>
                    <button className='nav-list__item' type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown(prev => !prev)}>
                        {items.icon && <img src={process.env.PUBLIC_URL + items.icon} alt={items.alt} height={20} />}
                        {items.label}
                    </button>
                    {items.label === 'Services' && dropdown ? (
                        <ListDropdown submenus={items.submenu} dropdown={dropdown} />
                    ) : (
                        <GridDropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                    )}
                </>
            ) : (
                <Link to={items.link} className='nav-list__item link__underline'>{items.label} </Link>
            )}
        </li>
    );
};

const Navbar = () => {
    const depthLevel = 0;
    return (
        <nav className="desktop-nav">
            <ul className="menus">
                {NavigationLinks.map((menu, index) => (
                    <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
