import {Link} from "react-router-dom"

const Banner = ({banners}) => {
    return (
        <>
            {banners.map((item,count) => {
                // console.log(item.heading);
                return (
                    <div className={'BannerVisual' + (count%2 ? 'Rgt' : 'Lft')}>
                        <img src= {process.env.PUBLIC_URL + item.img} alt= {item.heading} width={355}></img>
                        <div className="BannerDetails">
                            <h2>{item.heading}</h2>
                            <p>{item.details}</p>
                            <ul>
                                {item.points.map((point) => {
                                    return <li>{point}</li>
                                })}
                            </ul>
                            <button className="ContactBtn"><Link to={'#'}> Contact Us </Link></button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Banner;