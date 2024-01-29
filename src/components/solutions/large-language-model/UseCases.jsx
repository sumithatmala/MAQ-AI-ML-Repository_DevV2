import React, { useState } from "react";
import './css/UseCases.css'
import chatbots_and_virtual_assistants  from './img/chatbots_and_virtual_assistants.webp'
import content_generation  from './img/content_generation.webp'
import translation_and_language_services  from './img/translation_and_language_services.webp'
import personalized_recommendations  from './img/personalized_recommendations.webp'
import text_analysis  from './img/text_analysis.webp'
import educational_tools   from './img/educational_tools.webp'
import script_writing   from './img/script_writing.webp'
const UseCases = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-accordion image-accordion">
        
      <div className="section-accordion-inner">
        <h2 className="head-block-center">Large Language Models Use Cases</h2>
        <div className="text-block-center">
          Gain a competitive advantage in the market by being AI-first.
        </div>
        <div className="section-accordion-wrapper">
          <ul className="section-accordion-titles-list">
            {useCases.map((useCase, index) => (
              <li key={index} className={`section-accordion-titles-list__list-item ${index === activeIndex ? '__is-active' : ''}`} onClick={() => handleItemClick(index)}>
                <div className={`section-accordion-titles-list__item ${index === activeIndex ? '__is-active' : ''}`}>
                  <span className="text__dashed">{useCase.title}</span>
                </div>
                <div className="section-accordion-titles-list__mobile-text">{useCase.content}</div>
              </li>
            ))}
          </ul>
          <ul className="section-accordion-texts-list">
            {useCases.map((useCase, index) => (
              <li key={index} className={`section-accordion-texts-list__list-item ${index === activeIndex ? '__is-active' : ''}`}>
                <div className="section-accordion-texts-list__item">
                  {/* <img width="736" height="512" src={img} className="attachment-full size-full" alt={useCase.image} decoding="async" fetchpriority="high" srcSet={useCase.srcSet} sizes={useCase.sizes}/> */}
                  {useCase.image}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-block-center">
          Enhance your business with top-notch technology!
        </div>
        <div className="block__action">
          <a href="large-language-model.html#section-contacts" className="btn btn-empty">Request Demo</a>
        </div>
      </div>
    </section>
  );
};

const useCases = [
    {
      title: 'Chatbots and Virtual Assistants',
      content: 'Move from generic bot interactions to personalized messaging, automate upselling, and create edgy, digital avatar experiences that guide your customers through the purchase.',
      image: <img width="736" height="512" src={chatbots_and_virtual_assistants} alt="Chatbots and Virtual Assistants" />,
    },
    {
      title: 'Content Generation',
      content: 'Offset the tedium of content creation, generate product descriptions in seconds, and craft coherent and complex text with a human touch for your marketing and sales initiatives.',
      image: <img width="736" height="512" src={content_generation} alt="Content Generation" />,
    },
    {
      title: 'Translation and Language Services',
      content: 'Expand your business reach to multiple geographies, translate and analyze large volumes of business documents, and operate in a global arena with confidence.',
      image: <img width="736" height="512" src={translation_and_language_services} alt="Translation and Language Services" />,
    },
    {
      title: 'Personalized Recommendations',
      content: 'Increase sales and customer loyalty by creating a tailored shopping experience that meets the customer\'s individual needs and iterates on customer data.',
      image: <img width="736" height="512" src={personalized_recommendations} alt="Personalized Recommendations" />,
    },
    {
      title: 'Text Analysis',
      content: 'Create fluent summaries, analyze large volumes of text data, identify hidden patterns and trends, and hit on business insights that could be useful for decision-making.',
      image: <img width="736" height="512" src={text_analysis} alt="Text Analysis" />,
    },
    {
      title: 'Educational Tools',
      content: 'Pave the way for interactive and engaging learning, automate the creation of learning materials, and analyze data on student performance at scale.',
      image: <img width="736" height="512" src={educational_tools} alt="Educational Tools" />,
    },
    {
      title: 'Script Writing',
      content: 'Use LLMs as a creative writing partner, generate starting points for creative concepts and new scripts, and iterate ideas with unmatched speed.',
      image: <img width="736" height="512" src={script_writing} alt="Script Writing" />,
    }
  ];
  

export default UseCases;
