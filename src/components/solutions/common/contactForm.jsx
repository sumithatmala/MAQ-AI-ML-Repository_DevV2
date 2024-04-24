import { Link } from "react-router-dom";
import "./css/ContactForm.css";
import Swal from "sweetalert2";
import { useState } from "react";
import ContactButton from "../../miscellaneous/ContactUsButton/ContactButton";

const ContactForm = ({ contactMsg }) => {
    const [name, setName] = useState("");
    const [compName, setCompName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [phone, setPhone] = useState("");

    const checkInpts = () => {
        const items = document.querySelectorAll(".item");
        let flag = true;

        for (const item of items) {
            if (item.value === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
                flag=false;
            }

            item.addEventListener("keyup", () => {
                if (item.value !== "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            });
        }

        return flag;
    };

    const clearFields = () => {
        setName("");
        setCompName("");
        setEmail("");
        setMsg("");
        setPhone("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(checkInpts()) {
            try {
                const res = await fetch("http://localhost:3001/sendEmail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        compName: compName,
                        email: email,
                        phone: phone,
                        msg: msg,
                    }),
                });
                const data = await res.json();
                if (!data) {
                    // console.log(data);
                    clearFields();
                    throw new Error("Failed to send email");
                } else {
                    // console.log(data);
                    await Swal.fire({
                        title: "Mail Sent!",
                        text: "We have received your concern!",
                        icon: "success",
                    });
                    clearFields();
                }
            } catch (error) {
                await Swal.fire({
                    title: "Please try again!",
                    text: "It seems our server is busy!",
                    icon: "error",
                });
                console.error("Error sending email:", error);
                clearFields();
            }
        }
    };

    return (
        <section  className="FormBox margin-adjust">
            <ContactButton />
            <div className="Contact">
                <div className="Header">
                    <h2>Get in touch with MAQ Software today</h2>
                    <p>{contactMsg}</p>
                </div>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <div className="input-field field">
                            <input
                                type="text"
                                placeholder="Name*"
                                id="name"
                                className="item"
                                autoComplete="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <div className="error-txt">Full Name can't be blank</div>
                        </div>
                        <div className="input-field field">
                            <input
                                type="text"
                                placeholder="Company Name*"
                                id="compName"
                                className="item"
                                autoComplete="off"
                                value={compName}
                                onChange={(e) => setCompName(e.target.value)}
                            />
                            <div className="error-txt">Company Name can't be blank</div>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field field">
                            <input
                                type="text"
                                placeholder="Email Address*"
                                id="email"
                                className="item"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="error-txt">Email Address can't be blank</div>
                        </div>

                        <div className="input-field field">
                            <input
                                type="text"
                                placeholder="Phone"
                                id="phone"
                                className="item"
                                autoComplete="off"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <div className="error-txt">Error message</div>
                        </div>
                    </div>
                    <div className="textarea-field field">
                        <textarea
                            name=""
                            id="message"
                            cols={30}
                            rows={7}
                            placeholder="Your Message"
                            className="item"
                            autoComplete="off"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        />
                        <div className="error-txt">Error message</div>
                    </div>
                    <button id="contact" type="submit">Send Message</button>
                    <div className="disclaimer">
                        <p>
                            By clicking Send Message, you agree to our{" "}
                            <Link to={""}>Terms of Use</Link> and{" "}
                            <Link to={""}>Privacy Policy</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;