import React from "react";
import './css/GridOfCards.css'
import { HashLink } from "react-router-hash-link";

const CaseItem = ({ iconSrc, altText, title, description, sizeOfCard }) => (

  <li className="predict-use-cases-list__list-item2" style={{ width: `${sizeOfCard}%`, }}>
    <div className="predict-use-cases-list__item border-shadow">
      {iconSrc?(<div className="predict-use-cases-list__icon">
        {iconSrc}
      </div>):(<></>)}
      <h3 className="predict-use-cases-list__title subheading-size">{title}</h3>
      <div className="predict-use-cases-list__text content-size">{description}</div>
    </div>
  </li>
);



const GridOfCards = (props) => {
  const { items } = props;
  // console.log(items)
  const sizeOfCard = String(100 / items.NoCards);
  return (
    <section className="main-cases margin-adjust" >
      {items.title && <h2 className="head-block-center">{items.title}</h2>}
      {items.caption && <div className='text-block-center'>{items.caption}</div>}
      <div className="predict-use-cases __type-predict">
        <div className="predict-use-cases__outer">
          <div className="predict-use-cases__inner">
            <div className="predict-use-cases-list-wrapper __type-predict">
              <ul className="predict-use-cases-list">
                {items.item.map((caseItem, index) => (
                  <CaseItem key={index} sizeOfCard={sizeOfCard} {...caseItem} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default GridOfCards;