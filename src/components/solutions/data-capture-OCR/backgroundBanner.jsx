import "./css/background.css"
import monitor from "./img/monitor.svg"

const BackgroundBanner = () => {
    return(
        <section className="BannerContainer margin-adjust">
            <div className="BannerInd">
                <img src={monitor} alt="Easy to use" width={350}></img>
                <div className="BannerDesc">
                    <h5>How You Can Use It</h5>
                    <p>Organizations in modern competitive industries face numerous challenges. Failing to improve processes over time can hinder both short- and long-term growth. Today, most business leaders must continuously seek the most effective ways to adopt technologies for workflow automation.</p>
                    <p>MAQ Software employs Google's Tesseract OCR, Abbyy FlexiCapture, and Textract to provide real-time data capture, efficient processing of raw static images, and the categorization and storage of data in a single database.</p>
                </div>
            </div>
        </section>
    )
}

export default BackgroundBanner;