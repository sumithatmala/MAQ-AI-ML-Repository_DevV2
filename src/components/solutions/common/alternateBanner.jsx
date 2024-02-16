import {Link} from "react-router-dom"
import "./css/AlternateBanner.css"
import { HashLink } from "react-router-hash-link"

const AlternateBanner = ({banners,ContactBtn}) => {
    return (
        <>
            {banners.map((item,count) => {
                // console.log(item.points);
                return (
                    <div className={'BannerVisual' + (count%2 ? 'Rgt' : 'Lft')}>
                        <div className="ImgContainer"> 
                            {item.img} 
                        </div>
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
                            {ContactBtn?(<HashLink  to="./#contactform" className="btn btn-empty" style={{width: "fit-content"}}> Contact Us </HashLink>):(<></>)}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default AlternateBanner;