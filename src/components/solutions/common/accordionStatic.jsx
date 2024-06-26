import { useEffect, useState } from "react";
import "./css/accordianStatic.css";
import Accordion from "../../industries/HealthcarePharma/CustomAccordion/AccordionReact";

const Description = (props) => {
  return (
    <div className="AccordionDesc">
      {props.desc.para.map((para, index) => {
        return <p key={index}> {para} </p>;
      })}
      {props.desc.points.map((points, index) => {
        return <li key={index}> {points} </li>;
      })}
    </div>
  );
};

const AccordionStatic = (props) => {
  const [selected, setSelected] = useState(props.listItems[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 930);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 930);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs once on mount

  return (
    <section className="AccordianContiner margin-adjust" style={{ maxWidth: props.cntWidth, paddingBottom: "2%" }}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="AccordionTitle">
        {isMobile ? (
          <Accordion listItems={props.listItems} />
        ) : (
          <div className="AccordionList" style={{ width: props.titleRatio }}>
            {props.listItems.map((item, index) => (
              <div
                key={index}
                className={
                  "AccordionListItem" +
                  (selected.list === item.list ? "_selected" : "")
                }
                onClick={() => {
                  setSelected(item);
                }}
              >
                <button> {item.list} </button>
              </div>
            ))}
          </div>
        )}
        <Description desc={selected.desc} />
      </div>
    </section>
  );
};

export default AccordionStatic;
