import barcode from "../img/barcode.svg"
import imageScan from "../img/imageScan.svg"
import featureScan from "../img/featureScan.svg"
const ServiceData = [
    {
      iconSrc: <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="10" width="50" height="60" fill="none" stroke="#db838d" stroke-width="5" />
      <text x="30" y="60" font-family="Arial" font-size="60" fill="#db838d">H</text>
    </svg>
    ,
      altText: "Character Recognition",
      title: "Character Recognition",
      description: "Automated identification, data capture and character recognition of text in embedded images, image files, etc."
    },
    {
      iconSrc: <img src={imageScan} alt="Raw image" width={70}/>,
      altText: "Raw Image Recognition",
      title: "Character Recognition on Raw Images",
      description: "Data extraction from low-quality images with poor illumination, containing poorly printed characters, and more."
    },
    {
      iconSrc: <img src={featureScan} alt="Feature Analysis" width={80}/>,
      altText: "Feature Detection",
      title: "Feature Detection",
      description: "Recognition of separate elements of each character, such as lines, strokes, angles, etc."
    },
    {
      iconSrc: <img src={barcode} alt="Barcode Scan" width={80}/>,
      altText: "Barcode Recognition",
      title: "Optical Barcode Recognition",
      description: "Recognition of a product and its features by scanning a barcode."
    },
  ];
  export default ServiceData;