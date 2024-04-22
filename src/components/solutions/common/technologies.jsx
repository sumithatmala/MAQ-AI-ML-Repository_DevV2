import React from 'react';
import './css/Technologies.css';

const Technologies = ({ tech }) => {
    return (
        <section className="technologies margin-adjust">
            <h3>Technologies</h3>
            <p>We use the best technologies available on the market, and we are continually expanding our tech stack.</p>
            <div className="imageContainer">
                {tech.map((item, key) => (
                    <img key={key} src={item.src} alt={item.alt} />
                ))}
            </div>
        </section>
    );
};

export default Technologies;
