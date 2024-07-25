import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
// import AppContext from "../../../AppContex";
import './css/ContactButton.css'

const ContactButton = () => {
  // const {basename} = useContext(AppContext);
  return (
    <>
      <div className="contact-bt">
        <div className="contact-block">
          {/* <div className="text-block-center">Need a consultation?</div> */}
          <div className="block__action contact-action">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactButton;
