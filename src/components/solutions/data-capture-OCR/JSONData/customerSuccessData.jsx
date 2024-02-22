import travelT from "../img/travelTicket.jpg"
import reciept from "../img/reciept.jpg"
import brandV from "../img/brandVerif.jpg"

const customerSuccessData = [
    {
        title: "An OCR solution and API for secure IR brand verification.",
        image: <img src={brandV} alt="Verification made easy" />,
        description: [
            "A country-based startup specializing in technologies for the security printing industry sought MAQ Softwares' machine learning consulting services and expertise in data management and AI software development. In response, the MAQ Software team delivered a Proof of Concept (PoC) to assess the capabilities of Computer Vision (OCR) tools in combating counterfeits for brands in the market."
        ],
    },
    {
        title: "An OCR-based solution for extracting data from receipts.",
        image: <img src={reciept} alt="Reciept analysis using OCR" />,
        description: [
            "The Client supplied the MAQ Software team with a mobile application designed for storing digital receipts. The challenge was to enhance this app by implementing machine learning. Our data scientists used optical character recognition technology to train an algorithm for extracting key data from raw images, enhancing image quality through classical computer vision methods."
        ],
    },
    {
        title: "Utilizing image analysis to improve ticket processing software.",
        image: <img src={travelT} alt="Ticket analysis using OCR" />,
        description: [
            "MAQ Software offered consulting services for a machine learning and computer vision (OCR) solution. The Client tasked us with creating a solution for automated digitization of travel cheques, which necessitates a substantial dataset."
        ],
    },
];

export default customerSuccessData;