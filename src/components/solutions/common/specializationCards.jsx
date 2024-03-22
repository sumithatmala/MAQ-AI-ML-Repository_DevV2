import "./css/SpecializationCards.css"

const SpecialContainer = ({SpecialCards}) => {
    return (
        <div className="SpecialContainer">
            <h2>Why Work With Us</h2>
            <p>We make it easy to build awesome text analysis software</p>
            <div className="SpecialCards">
                {/* <ul> */}
                    {SpecialCards.map((item, index) => {
                        return(
                            <div className="indCard" key={index}>
                                {item.img}
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