import "./css/increasingCards.css";

const IncreasingCards = (props) => {
    console.log(props.items);
    return(
        <section className="IncreasingCardCnt">
            <h2>{props.title}</h2>
            <div className="IncreasingcardTitle">
                    {props.items.details.map((item) => {
                        return(
                            <div className="IncreasingCardDesc">
                                <div className="IncreasingNumber"><p>99%</p></div>
                                {console.log(item)}
                                <p>{item}</p>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default IncreasingCards;