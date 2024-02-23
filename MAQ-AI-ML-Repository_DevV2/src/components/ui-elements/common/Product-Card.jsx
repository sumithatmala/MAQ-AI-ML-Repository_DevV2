import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = (props) => {
    return (
        <div className="specialization-card" >
            <div className="specialization-card-body">
                <h1 className="specialization-card-title">{props.title}</h1>
                <p className="specialization-card-text">{props.description}</p>
                <Link to={props.link}>
                    {/* <button className='learnBtn'> Read more </button> */}
                    <button className="button-17 learnBtn">Read More</button>
                </Link>
            </div>
        </div>
    );
};


export default ProductCard;
