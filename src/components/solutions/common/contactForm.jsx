import { Link } from "react-router-dom";
import "./css/ContactForm.css";
import Swal from "sweetalert2"

const ContactForm = ({ contactMsg }) => {
    function checkInpts() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            item.addEventListener("keyup", () => {
                if (item.value !== "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            })
        }

    }

    async function handleSubmit(e) {
        const name = document.getElementById("name").value;
        const CompName = document.getElementById("compName").value;
        const email = document.getElementById("email").value;
        const msg = document.getElementById("message").value;
        const phone = document.getElementById("phone").value
        
        // alert("form submitted!");
        checkInpts();
        e.preventDefault();
        
        try{
            const res = await fetch('http://localhost:3001/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    compName: CompName,
                    email: email,
                    phone: phone,
                    msg: msg
                })
            })
            const data = await res.json();
            if (!res.ok) {
                window.location.reload(true);
                throw new Error('Failed to send email');
            } else {
                console.log(data);
                await Swal.fire({
                    title: "Mail Sent!",
                    text: "We have recieved your concern!",
                    icon: "success"
                });
                window.location.reload(true);
            }
        } catch(error) {
                console.error('Error sending email:', error);
            };
        }

    return (
        <section id="contact" className="FormBox">
            <div className="Contact">
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
                            <input type="text" placeholder="Email Address*" id="email" className="item" autoComplete="off"></input>
                            <div className="error-txt"> Email Adress can't be blank </div>
                        </div>

                        <div className="input-field field">
                            <input type="text" placeholder="Phone" id="phone" className="item" autoComplete="off"></input>
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
            </div>
        </section>
    )
}

export default ContactForm;