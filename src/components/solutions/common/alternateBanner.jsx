import "./css/AlternateBanner.css";
import { HashLink } from "react-router-hash-link";

const AlternateBanner = ({
  banners,
  ContactBtn = false,
  backHighlights = false,
}) => {
  return (
    <>
      <div className="margin-adjust">
        {banners.map((item, count) => {
          // console.log(item.points);
          return (
            <div
              key={count}
              className={
                "margin-adjust BannerVisual" + (count % 2 ? "Rgt" : "Lft")
              }
            >
              <div className="ImgContainer">
                {item.img}
                {backHighlights && <div className="_backimg"></div>}
              </div>
              <div className="BannerDetails">
                <h2>{item.heading}</h2>
                <p>{item.details}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point, index) => {
                      return <li key={index}>{point}</li>;
                    })}
                  </ul>
                )}
                <div className="block__action">
                  {ContactBtn ? (
                    <HashLink
                      to="./#contact"
                      className="btn btn-empty"
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      Contact Us{" "}
                    </HashLink>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AlternateBanner;
