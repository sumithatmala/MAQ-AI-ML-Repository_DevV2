import {Link} from "react-router-dom"
import "./css/AlternateBanner.css"

const AlternateBanner = ({banners,ContactBtn}) => {
    return (
        <>
            {banners.map((item,count) => {
                // console.log(item.points);
                return (
                    <div className={'BannerVisual' + (count%2 ? 'Rgt' : 'Lft')}>
                        <div className="ImgContainer"> {item.img} </div>
                        <div className="BannerDetails">
                            <h2>{item.heading}</h2>
                            <p>{item.details}</p>
                            {item.points?(
                                <ul>
                                    {item.points.map((point) => {
                                        return <li>{point}</li>
                                    })}
                                </ul>
                            ):(
                                <></>
                            )}
                            {ContactBtn?(<Link className="ContactBtn" to={'#'}> Contact Us </Link>):(<></>)}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default AlternateBanner;