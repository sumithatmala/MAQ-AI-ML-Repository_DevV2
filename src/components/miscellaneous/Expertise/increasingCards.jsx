import "./css/increasingCards.css";
import React, { useState, useEffect } from 'react';

const IncreasingCards = (props) => {
    const [numbers, setNumbers] = useState([0, 0, 0]);
    const limit = [];
    props.items.map((item, ind) => {
        limit[ind] = item.limit;
        ind++;
    })
    // console.log(limit);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumbers(prevNumbers => {
                return prevNumbers.map((num, index) => (num < limit[index] ? num + 1 : num));
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="IncreasingCardCnt">
            <h2>{props.title}</h2>
            <div className="IncreasingcardTitle">
                {props.items.map((item, count = 0) => {
                    count++;
                    return (
                        <div className="IncreasingCardDesc" style={{ boxShadow: ((props.showShadow) ? "0px 8px 24px 0px #c8c5dd" : ("")) }}>
                            <div className="IncreasingNumber"><p>{numbers[count - 1]}{props.percentageType?('%'):('+')}</p></div>
                            <p>{item.details}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default IncreasingCards;