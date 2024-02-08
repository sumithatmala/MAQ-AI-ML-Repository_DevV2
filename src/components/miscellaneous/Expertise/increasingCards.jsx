import "./css/increasingCards.css";
import React, { useState, useEffect } from 'react';

const IncreasingCards = (props) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (number < 80) {
                setNumber(number + 1);
            }
        }, 100);
        console.log(props.items);
        return () => clearTimeout(timer);
    }, [number]);

    return (
        <section className="IncreasingCardCnt">
            <h2>{props.title}</h2>
            <div className="IncreasingcardTitle">
                {props.items.map((item) => {
                    return (
                    <div className="IncreasingCardDesc" style={{boxShadow: ((props.showShadow)?"0px 8px 24px 0px #c8c5dd":(""))}}>
                            <div className="IncreasingNumber"><p>{number}%</p></div>
                            {console.log(item)}
                            <p>{item.details}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default IncreasingCards;


// const Card = () => {


//     return (
//         <div className="card">
//             <h2>Number: {number}</h2>
//         </div>
//     );
// };

// export default Card;