import headerImg from "./visuals/text-analysis.svg"
import "./TextAnalysis.css"
const TextAnalysis = () => {
    return (
        <>
            <div className="Headervisual">
                <h1>AI-powered text analysis software</h1>
                <h2>We use state-of-the-art natural language processing techniques to extract more value from your text data</h2>
                <img src={headerImg} className="cropSvg"/>
            </div>
        </>
    )
}

export default TextAnalysis;