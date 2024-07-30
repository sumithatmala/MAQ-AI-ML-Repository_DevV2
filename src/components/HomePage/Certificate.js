import React from "react";
import "./css/CertificateGrid.css";


import ads from "./img/certificates/Group 84.svg";
import aae from "./img/certificates/Group 85.svg";
import ade from "./img/certificates/Group 86.svg";
import asa from "./img/certificates/Group 87.svg";

// Define an array of image URLs
const imageUrls = [
  ads,
  aae,
  ade,
  asa,
];

const CertificateGrid = () => {
  return (
    <div className="certificate-section margin-adjust">
      <div className="">
        <h2 className="head-block-center">Certificates</h2>
      </div>
      <div className="certificate-images">
        <div className="image-grid">
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Certificate ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateGrid;
