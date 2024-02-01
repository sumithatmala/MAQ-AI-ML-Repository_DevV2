import "./css/Technologies.css"

const Technologies = ({tech}) => {
    return(
        <section className="technologies">
            <h3>Technologies</h3>
            <p>We use the best technologies available on the market, and we are continually expanding our tech stack.</p>
            <div className="imageContainer">
            {tech.map((item)=>{return(item.img)})}
            </div>
        </section>
    )
}

export default Technologies;