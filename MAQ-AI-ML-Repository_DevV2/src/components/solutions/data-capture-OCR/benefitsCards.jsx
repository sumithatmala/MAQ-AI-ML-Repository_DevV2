import "./css/benefitCards.css"

const BenefitCards = (props) => {
    return(
        <section style={{textAlign: "center", margin: "3rem 20px"}}>
            <h4>Benefits</h4>
            <div className="BenefitCardsContainer">
                <div className="Benefitcards">
                    {props.cardsData.map((cards) => {
                        return(
                            <div className="BenefitcardInd">
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