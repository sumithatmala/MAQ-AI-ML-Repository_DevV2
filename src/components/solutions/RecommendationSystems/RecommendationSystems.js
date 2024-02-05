import ContactForm from "../common/contactForm";
import Benefits from "./Benefits";
import BiSlider from "./BiSlider";
import DevlopSolutions from "./DevlopSolutions";
import "./css/RecommendationSystems.css";
import CustomerSuccess from "../common/CustomerSuccess";

const RecommendationSystems = () => {
  return (
    <>
      <section className="toolinformations_recommend">
        <div className="container">
          <div className="grids">
            <div className="top">
              <div className="heading">
                <span>Tailored Recommendation Solutions</span>
              </div>
              <div className="heading_inner">
                <p>
                Unlock unparalleled business success by incorporating our cutting-edge recommendation systems.
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

      <section className="section-text-image __image-right __type-center __type-content-change">
  <div className="section-text-image-inner">
    <div className="section-text-image__figure"></div>
    <div className="section-text-image-details">
      <h2 className="section-text-image__title">Understanding Recommendation Systems</h2>
      <div className="section-text-image__description">
        <p>Recommendation systems enable businesses to deliver tailored suggestions and enhance the customer experience. High-quality recommendations boost customer interaction and influence customer lifetime value.</p>
        <p>InData Labs develops solutions customized and adapted based on each company’s performance metrics.</p>
      </div>
    </div>
  </div>
</section>

<section class="info-section">
  <div class="info-section-inner">
    <h2 class="info-section__title">The Significance of Personalization</h2>
    <div class="info-section__description">
      <p>
        Customer engagement poses increasing challenges for both online and brick-and-mortar businesses. Empowered by their social networks and devices, consumers in the digital era are progressively shaping the shopping process and specifying WHAT they desire and WHERE and WHEN they want it.
      </p>
    </div>
  </div>
</section>


      <DevlopSolutions />

      <Benefits />

        <section className="recommend">

      <CustomerSuccess items={BiSlider} slidesToShow = {2}/>
      </section>

      <ContactForm />
    </>
  );
};

export default RecommendationSystems;
