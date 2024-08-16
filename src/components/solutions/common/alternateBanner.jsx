import "./css/AlternateBanner.css";

const AlternateBanner = ({
  banners,
  ContactBtn = false,
  backHighlights = false,
  fontWgt = 500
}) => {
  return (
    <>
      <div className="">
        {banners.map((item, count) => {
          // console.log(item.points);
          return (
            <div
              key={count}
              className={
                "margin-adjust BannerVisual" + (count % 2 ? "Rgt" : "Lft")
              }
              style={{marginBottom:"3rem"}}
            >
              <div className="ImgContainer">
                {item.img}
                {backHighlights && <div className="_backimg"></div>}
              </div>
              <div className="BannerDetails">
                <h2 className="title-size">{item.heading}</h2>
                <p className="content-size" style={{fontWeight: fontWgt}}>{item.details}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point, index) => {
                      return <li key={index} className="content-size">{point}</li>;
                    })}
                  </ul>
                )}
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AlternateBanner;
