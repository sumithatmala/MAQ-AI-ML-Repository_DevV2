import { Link } from "react-router-dom";
import "./css/ContactForm.css";
import Swal from "sweetalert2";
import { useState } from "react";
import CaptchaTest, {
  doSubmit,
} from "../../miscellaneous/ContactUs/Captcha_test";
import ContactButton from "../../miscellaneous/ContactUsButton/ContactButton";
import { ImSpinner2 } from "react-icons/im";

const ContactForm = ({ contactMsg }) => {
  const [name, setName] = useState("");
  const [compName, setCompName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const checkInpts = () => {
    if (!checkRequiredFields()) return false;
    if (!doSubmit()) {
      alert("Captcha does not match");
      return false;
    }
    return true;
  };


  const validateEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailInput));
  };

  const validatePhone = (e) => {
    const phoneInput = e.target.value;
    setPhone(phoneInput);

    // Regular expression for basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    setIsPhoneValid(phoneRegex.test(phoneInput));
  };

  const checkRequiredFields = () => {
    const items = document.querySelectorAll(".required");
    let flag = true;
    for (const item of items) {
      if (item.value === "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
        flag = false;
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
  }

  const clearFields = () => {
    setName("");
    setCompName("");
    setEmail("");
    setMsg("");
    setPhone("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkInpts()) {
      setIsLoading(true);
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
        if (!data || res.responseCode < 200 || res.responseCode >= 300) {
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
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="FormBox margin-adjust">
      <ContactButton />
      <div className="Contact">
        <div className="Header">
          <h2 className="head-block-center">
            Get in touch with MAQ Software today
          </h2>
          <p>{contactMsg}</p>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="input-field field">
              <input
                type="text"
                placeholder="Name*"
                id="name"
                className="item required"
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
                className="item required"
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
                className="item required"
                autoComplete="off"
                value={email}
                onChange={validateEmail}
              />
              <div className="error-txt">Email Address can't be blank</div>
              {!isEmailValid && (
                <div className="error-txt show">Please enter a valid email address</div>
              )}
            </div>

            <div className="input-field field">
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                className="item"
                autoComplete="off"
                value={phone}
                onChange={validatePhone}
              />
              <div className="error-txt">Please enter a valid phone number</div>
              {!isPhoneValid && (
                <div className="error-txt show">Please enter a valid phone number</div>
              )}
            </div>
          </div>
          <div className="textarea-field field">
            <textarea
              name=""
              id="message"
              cols={30}
              rows={7}
              placeholder="Your Message"
              className="item required"
              autoComplete="off"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <div className="error-txt">Message field cannot be empty</div>
          </div>
          <div>
            <CaptchaTest />
          </div>
          <button id="contact" type="submit">
            {isLoading ? <ImSpinner2 className="spinner" /> : <p>Send Message</p>}
          </button>
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
