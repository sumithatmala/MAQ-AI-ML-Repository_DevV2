import React from 'react';
import './css/companies.css'
import amazon from './img/companies/amazon.png'
import devon from './img/companies/devon.png'
import microsoft from './img/companies/microsoft.png'
import tmobile from './img/companies/tmobile.png'
// Define an array of image URLs
const imageUrls = [
  microsoft,
  amazon,
  devon,
  tmobile,
 
  // Add more image URLs as needed
];

const TrustedCompanies = () => {
  return (
    <>
        <div className='companies-section'>
            <div className='companies-head'>
                <h2>Trusted Companies</h2>
            </div>
            <div className='companies-images'>
                <div className="companies-image-grid">
                {imageUrls.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index}`} />
                ))}
                </div>
            </div>
            
        </div>
    </>
  );
};

export default TrustedCompanies;
