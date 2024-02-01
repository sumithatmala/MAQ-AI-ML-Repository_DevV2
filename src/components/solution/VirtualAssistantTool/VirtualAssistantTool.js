import "./css/virtualtool.css";
import FAQ from "./FAQ";
import ContactForm from "./contactForm";
import "./css/contactform.css";
import IndustriesList from "./IndustryItem";
import KeyFeaturesSection from "./KeyFeaturesSection";

const VirtualAssistantTool = () => {
  return (
    <>
      <section className="toolinformation">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>Advanced AI-powered Support</span>
              </div>
              <div className="heading_inner">
                <p>
                  Revolutionize query resolution, elevate customer satisfaction,
                  and empower human agents for more impactful tasks with your
                  intelligent virtual assistant tool.
                </p>
              </div>
              <div className="images">
                <div className="imageone"></div>
                <div className="imagetwo"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="video">
        <h2 className="aurora">
          Meet Aurora Borea, our chatbot for intelligent customer support
        </h2>
        <iframe
          style={{ display: "block", margin: "0 auto 100px", maxWidth: "100%" }}
          width="800"
          height="450"
          src="https://www.youtube.com/embed/LM6yn09axSc?si=BAXVPXV3aYjitC2V"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      

      <KeyFeaturesSection />


      <section className="section-industries">
        <div className="industries__inner" style={{marginTop:"10px",marginBottom:"0px"}}>
          <h2 className="head-block-center">Advantages of Virtual Assistant</h2>
        </div>

        <div class="text-block-center" style={{marginTop:"-10px", marginBottom:"20px"}}>
          Virtual assistant software development allows you to delegate non-core
          tasks to a chatbot and concentrate on growing your business.
        </div>
      </section>
        <IndustriesList />
      <section className="section-industries">
        <div className="text-block-center" style={{marginTop:"50px"}}>
      <span className="gap">Ready to learn more about chatbot development?</span>
    </div>

        <div className="block__action"> <a href="#section-contacts" class="btn btn-empty">Contact us</a></div>
        <FAQ />
        <ContactForm />
      </section>
    </>
  );
};

export default VirtualAssistantTool;
