import React from 'react';
import './css/CertificateGrid.css'
import app from './img/certificates/app.png'
import automation from './img/certificates/automation.png'
import copilot from './img/certificates/copilot.png'
import dashboard from './img/certificates/dashboard.png'
import fabric from './img/certificates/fabric.png'
import power from './img/certificates/power.png'
// Define an array of image URLs
const imageUrls = [
  app,
  automation,
  copilot,
  dashboard,
  power,
  fabric,
 
  // Add more image URLs as needed
];

const CertificateGrid = () => {
  return (
    <div className="">
        <div className='certificate-section'>
            <div className=''>
                <h2 className='head-block-center'>Certificates</h2>
            </div>
            <div className='certificate-images'>
                <div className="image-grid">
                {imageUrls.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Certificate ${index}`} />
                ))}
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default CertificateGrid;
