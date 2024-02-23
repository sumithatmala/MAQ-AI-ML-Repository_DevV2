import { Link } from "react-router-dom";
import "./css/backgroundBanner.css"
// import monitor from "./img/monitor.svg"

const BackgroundBanner = (props) => {
    return(
        <section className="BackBannerContainer bg-voilet-linear-gradient2 text-white w-100 p-md-5 p-4">
            <div className="BackBannerInd" style={{width: props.width}}>
                {/* <img src={monitor} alt="Easy to use" width={350}></img> */}
                <div className="BackBannerDesc" style={{textAlign: props.alignType}}>
                    <h5>{props.items.title}</h5>
                    {props.items.desc.map((para) => {
                        return(<p>{para}</p>)
                    })}
                    {props.items.link?(<button><Link to={props.link}/></button>):(<></>)}
                </div>
                {props.items.img?(props.items.img):(<></>)}
            </div>
        </section>
    )
}

export default BackgroundBanner;