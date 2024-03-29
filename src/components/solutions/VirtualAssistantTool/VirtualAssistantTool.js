import "./css/virtualtool.css";
import FAQ from "./FAQ";
import GridOfCards from "../common/GridOfCards";
import IndustData from "./IndusterieListData";
import Alternate from "../common/alternateBanner";
import BannerData from "./BannerData";
import ContactForm from "../common/contactForm";
import NewBanner from "../common/NewBanner";
import DataBanner from './BannerDatajson'

const VirtualAssistantTool = () => {
  return (
    <>
    <NewBanner data={DataBanner} />

      <div className="quick-block">
        <div className="head-block-center" style={{ marginBottom: "10px" , marginTop: "20px"}}>
          <h2 className="headblock">
            AI-Powered Virtual Assistant: Key Features
          </h2>
        </div>
        <div className="text-block-center" style={{ marginBottom: "10px" }}>
          Revolutionize customer support and enhance productivity with your
          virtual assistant solution.
        </div>
      </div>

      <div className="container_pharma">
        <Alternate banners={BannerData} ContactBtn={false} />
      </div>


      <GridOfCards
        content={IndustData}
        items={{
          item: IndustData,
          NoCards: 3,
          title: "Advantages of Virtual Assistant",
          caption:
            "Virtual assistant software development allows you to delegate non-core tasks to a chatbot and concentrate on growing your business.",
        }}
      />

      <FAQ />
      <ContactForm />
    </>
  );
};

export default VirtualAssistantTool;
