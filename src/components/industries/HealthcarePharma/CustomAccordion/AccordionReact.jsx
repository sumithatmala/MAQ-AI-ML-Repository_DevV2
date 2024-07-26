import React, {  useEffect } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import '../../../product-dashboard/css/FAQs.css';

export default function Accordion(props) {
  //const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .accordion button:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);


  return (
    <section className="faq-block">
      <div className="faq-block-inner">
        <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
          <MDBAccordion>
            {props.listItems.map((faq, index) => (
              <MDBAccordionItem
                key={index}
                className="FAQ__item custom-accordion-item"
                collapseId={index + 1}
                headerTitle={faq.list}
                // isactive={index === activeAccordion}
                //onSelect={() => setActiveAccordion(index)}
              >
                <div>
                  {faq.desc.para.map((paragraph, paraIndex) => (
                    <p key={paraIndex}>{paragraph}</p>
                  ))}
                  {faq.desc.points.map((points, pointsIndex) => (
                    // <p key={paraIndex}>{paragraph}</p>
                    <li key = {pointsIndex }> { points } </li>
                  ))}
                </div>
              </MDBAccordionItem>
            ))}
          </MDBAccordion>
        </MDBContainer>
      </div>
    </section>
  );
}
