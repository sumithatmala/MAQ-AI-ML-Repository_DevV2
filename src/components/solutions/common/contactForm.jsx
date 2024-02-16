import { Link } from "react-router-dom";
import "./css/ContactForm.css"

const ContactForm = ({contactMsg}) => {
    //variables to be used at teh time of get request or mail stpl
    
    // const form = document.querySelector("form");
    // const name = document.getElementById("name");
    // const CompName = document.querySelector("compName");
    // const email = document.querySelector("email");
    // const msg = document.querySelector("message");

    function checkInpts() {
        const items = document.querySelectorAll(".item");

        for(const item of items) {
            if(item.value === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            item.addEventListener("keyup", ()=> {
                if(item.value !== "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        // alert("form submitted!");
        checkInpts();
    }

    return (
        <div className="FormBox">
            <section className="Contact">
                <div className="Header">
                    <h2>Get in Touch with MAQ Software Today</h2>
                    <p>{contactMsg}</p>
                </div>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <div className="input-field field">
                            <input type="text" placeholder="Name*" id="name" className="item" autoComplete="off"></input>
                            <div className="error-txt"> Full Name can't be blank </div>
                        </div>
                        <div className="input-field field">    
                            <input type="text" placeholder="Company Name*" id="compName" className="item" autoComplete="off"></input>
                            <div className="error-txt"> Company Name can't be blank </div>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field field">
                            <input type="text" placeholder="Email Adress*" id="email" className="item" autoComplete="off"></input>
                            <div className="error-txt"> Email Adress can't be blank </div>
                        </div>
                        
                        <div className="input-field field"> 
                            <input type="text" placeholder="Phone" id="Phone" className="item" autoComplete="off"></input>
                            <div className="error-txt"> Error message </div>
                        </div>
                    </div>
                    <div className="textarea-field field">
                        <textarea name="" id="message" cols={30} rows={7} placeholder="Your Message" className="item" autoComplete="off"></textarea>
                        <div className="error-txt"> Error message </div>
                    </div>
                    <button type="submit"> Send Message </button>
                    <div className="disclaimer">
                        <p>By clicking Send Message, you agree to our <Link to={''}>Terms of Use</Link> and <Link to={''}>Privacy Policy</Link>.</p>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactForm;