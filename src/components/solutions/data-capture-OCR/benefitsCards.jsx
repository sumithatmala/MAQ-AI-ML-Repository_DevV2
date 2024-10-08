import "./css/benefitCards.css"

const BenefitCards = (props) => {
    return (
        <section style={{ textAlign: "center", margin: "2rem 20px" }} className="margin-adjust">
            <h4>Benefits</h4>
            <div className="BenefitCardsContainer">
                <div className="Benefitcards">
                    {props.cardsData.map((cards, index) => {
                        return (
                            <div className="BenefitcardInd" key={index}>
                                {cards.img}
                                <div className="BenefitcardDesc">
                                    <h5>{cards.title}</h5>
                                    <p>{cards.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default BenefitCards;