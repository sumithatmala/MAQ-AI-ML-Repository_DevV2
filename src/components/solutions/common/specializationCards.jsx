import "./css/SpecializationCards.css"

const SpecialContainer = ({SpecialCards}) => {
    return (
        <div className="SpecialContainer">
            <h2>Why Work With Us</h2>
            <p>We make it easy to build awesome text analysis software</p>
            <div className="SpecialCards">
                {/* <ul> */}
                    {SpecialCards.map((item) => {
                        return(
                            <div className="indCard">
                                <img src={process.env.PUBLIC_URL + item.img} alt={item.topic} height={80}></img>
                                <h3>{item.topic}</h3>
                                <p>{item.disc}</p>
                            </div>
                        )
                    })} 
                {/* </ul> */}
            </div>
        </div>
    )
}

export default SpecialContainer;