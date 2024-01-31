const Technologies = ({tech}) => {
    return(
        <section className="technologies">
            <h3>Technologies</h3>
            <p>We use the best technologies available on the market, and we are continually expanding our tech stack.</p>
            <ul>
            {tech.map((item)=>{
                return(
                    <li>
                        <img src={process.env.PUBLIC_URL + item.img} alt={item.alt}></img>
                    </li>
                )
            })}
            </ul>
        </section>
    )
}

export default Technologies;