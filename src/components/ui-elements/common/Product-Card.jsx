import React from 'react';


const ProductCard = (props) => {
    return (
        <div>
            {/* card showing details of a product with a heading, description on left aligned and Try it now button button at the right corner   */}
            <div className="card" style={{width:'100%', padding:'25px', margin:'20px 0px'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <button href="#" className="btn py-2" style={{
                        position: 'absolute',
                        right: '20px',
                        bottom: '20px',
                        backgroundColor: "#BA141A",
                        color: "#fff",
                        borderRadius: "50px",
                        width: "143px",
                        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.04)",
                        fontWeight: "bold",
                        fontSize: "16px",
                    }} onClick={
                        // redirecting to the /productdetails page
                        () => {
                            window.location.href = "/productdetails"
                        }
                    } target="_blank" rel="noreferrer"
                    >Try it now</button>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;
