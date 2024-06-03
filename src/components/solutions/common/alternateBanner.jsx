import "./css/AlternateBanner.css";

const AlternateBanner = ({
  banners,
  ContactBtn = false,
  backHighlights = false,
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
                <h2>{item.heading}</h2>
                <p>{item.details}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point, index) => {
                      return <li key={index}>{point}</li>;
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
