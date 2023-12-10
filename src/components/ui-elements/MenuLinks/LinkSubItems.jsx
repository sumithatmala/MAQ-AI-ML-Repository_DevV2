import React from 'react';
import { Link } from 'react-router-dom';
// import img from './artificial-intelligence.png'
// import ImageComponent from '../../layout/ImageComponent';

const LinkSubItems = (props) => {
  const { subLinks } = props;
  console.log(subLinks[0].icon)
  return (
    <>
      {subLinks.map((subLink) => (
        <div key={subLink.name} className="col-md-2 d-none d-md-block">
          <Link to={subLink.link} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            <div className="w-0 p-3 row img-container">
                  {subLink.icon}
            </div>
            <div className="text d-flex justify-content-center align-items-center">
              <h3
                className="m-0"
                style={{
                  fontSize: '14px',
                  transition: 'color 0.3s ease-in-out', // Added transition effect
                }}
              >
                {subLink.name}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default LinkSubItems;
