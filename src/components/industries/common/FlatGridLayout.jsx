import React from "react";
import './css/FlatGridLayout.css'

const FlatGridLayout = ({items, title, caption}) => {
  return (
    <section className="trinityContainer trinity _v2">
      <div className="trinityInner trinity__inner">
        <h2 className="centeredTitle head-block-center">{title?title: "Industries"}</h2>
        {caption && <div className='text-block-center'>{caption}</div>}
        <ul className="trinityList trinity__list">
          {items.map((industry, index) => (
            <li key={index} className="trinityItem trinity__item trinityItemWidth30 __w-30">
              <div className="trinityItemFigure trinity__item_figure">
                {industry.figure}
              </div>
              <h3 className="trinityItemTitle trinity__item_title">
                {industry.title}
              </h3>
              <div className="trinityItemDescription trinity__item_descr">
                <p>{industry.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FlatGridLayout;
