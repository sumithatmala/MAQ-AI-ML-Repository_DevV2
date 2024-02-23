import React, { useState } from 'react';
import LinkSubItems from './LinkSubItems';
const MenuLinks = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const linkStyle = {
    color: 'black',
  };

  return (
    <ul className="navbar-nav ml-auto">
      {props.menuLink.map((link, index) => (
        <li
          key={index}
          className={`nav-item${activeDropdown === index ? ' show' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            className="nav-link dropdown-toggle link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href={`/${link.name}`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={activeDropdown === index ? 'true' : 'false'}
          >
            {link.name} <i className="fa fa-caret-down"></i>
          </a>
          <div
            className={`dropdown-menu p-4${activeDropdown === index ? ' show' : ''}`}
            aria-labelledby="dropdown04"
          >
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <LinkSubItems subLinks={link.subLinks} />
            </div>
          </div>
        </li>
      ))}
      <li className="nav-item"><a href="/AboutUs" className="nav-link" style={linkStyle}>About Us</a></li>
    </ul>
  );
};

export default MenuLinks;
