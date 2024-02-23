import React from "react";
import './css/Insights.css'

const StatisticItem = ({ text, source }) => (
  <li className="vs-statistics__item">
    <div className="vs-statistics__item_inner">
      <div className="vs-statistics__item_text">{text}</div>
      <div className="vs-statistics__item_note">{source}</div>
    </div>
  </li>
);

const Insights = () => {
    const statistics = [
        {
          text: "Predictive analytics adoption in the retail industry is expected to increase by 150% over the next five years.",
          source: "Gartner"
        },
        {
          text: "By 2025, the use of predictive analytics in marketing will lead to a 20% increase in sales productivity.",
          source: "IDC"
        },
        {
          text: "Predictive maintenance solutions can reduce machinery downtime by up to 50%.",
          source: "McKinsey & Company"
        }
    ];
    

  return (
    <section className="vs-statistics __content-auto">
      <div className="vs-statistics__inner">
        <h2 className="vs-statistics__title">Predictive Analytics Insights</h2>
        <ul className="vs-statistics__list __vs">
          {statistics.map((statistic, index) => (
            <StatisticItem key={index} text={statistic.text} source={statistic.source} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Insights;
