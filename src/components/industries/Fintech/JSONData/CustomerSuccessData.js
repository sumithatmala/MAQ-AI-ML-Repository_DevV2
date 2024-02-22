import face_anti_spoofing from "../img/face-anti-spoofing.jpg"
import retrieve_data_from_receipts from "../img/retrieve-data-from-receipts.jpg"
import data_capture_sw_and_ml from "../img/data-capture-sw-and-ml.jpg"
import big_data_processing from "../img/big-data-processing.jpg"

const CustomerSuccessData = [
  {
    title: "Applying Deep Learning for Face Anti-Spoofing",
    image: <img src={face_anti_spoofing} alt="face_anti_spoofing" />,
    description: [
      <b>Security measures improved by 89%.</b>,
      "The client works in the E-commerce sector. They were looking for a face recognition solution for spoofing attacks prevention.",
      "We’ve developed a solid DL-based model that detects digital/printed images and video fraud attempts.",
    ],
  },
  
  {
    title: "OCR-Based Solution to Retrieve Data from Receipts",
    image: <img src={retrieve_data_from_receipts} alt="retrieve_data_from_receipts" />,
    description: [
      <b>Back-office workflow enhanced by 42%.</b>,
      "The client needed a finance OCR & AI solution for data capture and extraction.",
      "By leveraging AR technology in our E-commerce solution, we provided a captivating shopping experience, driving engagement and sales growth.",
    ],
  },
  {
    title: "Elevating Grocery Shopping with Intelligent Visual Search",
    image: <img src={data_capture_sw_and_ml} alt="data_capture_sw_and_ml" />,
    description: [
      <b>Enhanced customer satisfaction through innovative search capabilities.</b>,
      "A major European grocery chain sought to enhance their mobile app with visual search functionality.",
      "MAQ Software's OCR solution automated semi-structured receipt data extraction, enhancing performance.",
    ],
  },
  {
    title: "User consulted on invoice data capture and ML implementation.",
    image: <img src={big_data_processing} alt="big_data_processing" />,
    description: [
      <b>Document work automation.</b>,
      "The client sought an ML vendor for a custom tax return and invoice recognition solution.",
      "MAQ Software developed a data extraction solution.",
      "It automated document-based tasks, reducing employees' workload.",
    ],
  },
];

export default CustomerSuccessData;
