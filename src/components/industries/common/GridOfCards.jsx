import React from "react";
import './css/GridOfCards.css'

const CaseItem = ({ iconSrc, altText, title, description, sizeOfCard }) => (
  
  <li className="predict-use-cases-list__list-item2" style={{ width: `${sizeOfCard}%`, }}>
    <div className="predict-use-cases-list__item">
      <div className="predict-use-cases-list__icon">
        {iconSrc}
      </div>
      <h3 className="predict-use-cases-list__title">{title}</h3>
      <div className="predict-use-cases-list__text">{description}</div>
    </div>
  </li>
);

const GridOfCards = (props) => {
  const { items, NoCards } = props;
  const sizeOfCard = String(100/items.NoCards);
  return (
    <section className="main-cases">
      {items.title && <h2 className="head-block-center">{items.title}</h2>}
      {items.caption && <div className='text-block-center'>{items.caption}</div>}
      <div className="predict-use-cases __type-predict">
        <div className="predict-use-cases__outer">
          <div className="predict-use-cases__inner">
            <div className="predict-use-cases-list-wrapper __type-predict">
              <ul className="predict-use-cases-list">
                {items.item.map((caseItem, index) => (
                  <CaseItem key={index} sizeOfCard={sizeOfCard} {...caseItem}/>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-block-center">Need a consultation?</div>
      <div className="block__action">
        <a href="#section-contacts" className="btn btn-empty">Contact us</a>
      </div>
    </section>
  );
};

export default GridOfCards;
