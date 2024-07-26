// import barcode from "../img/barcode.svg"
// import imageScan from "../img/imageScan.svg"
// import featureScan from "../img/featureScan.svg"

import charreg from "../img/icons8-character-100 1.svg"
import barcode from "../img/icons8-image-100 1.svg"
import imageScan from "../img/icons8-rfid-signal-100 1.svg"
import featureScan from "../img/icons8-qr-code-100 1.svg"


const ServiceData = [
    {
      iconSrc: <img src={charreg} alt="Character Recognition" width={70} />
    ,
      altText: "Character Recognition",
      title: "Character Recognition",
      description: "Automated identification, data capture and character recognition of text in embedded images, image files, etc."
    },
    {
      iconSrc: <img src={imageScan}  alt="img1"  width={70}/>,
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