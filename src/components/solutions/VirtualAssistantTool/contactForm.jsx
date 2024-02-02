const ContactForm = () => {
    //variables to be used at teh time of get request or mail stpl
    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const CompName = document.querySelector("compName");
    const email = document.querySelector("email");
    const msg = document.querySelector("message");

    function checkInpts() {
        const items = document.querySelectorAll(".item");

        for(const item of items) {
            if(item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            item.addEventListener("keyup", ()=> {
                if(item.value != "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            })
        }

    }

    function checkEmail() {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");
        } else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
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
                <h2>Get started with InData Labs today.</h2>
                <p>Let's talk about your text analysis project</p>
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
                </form>
            </section>
        </div>
    )
}

export default ContactForm;