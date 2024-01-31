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
          Discover the versatility of Large Language Models in various domains.
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
                  {useCase.image&&useCase.image}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-block-center">
          Explore how Large Language Models can revolutionize your operations!
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
    title: 'Medical Diagnosis Assistance',
    content: 'Assist healthcare professionals in diagnosing diseases, interpreting medical reports, and recommending treatment plans based on patient symptoms and medical history.',
    image: <img width="736" height="512" src={chatbots_and_virtual_assistants} alt="Medical Diagnosis Assistance" />,
  },
  {
    title: 'Legal Document Analysis',
    content: 'Analyze legal documents, contracts, and case law to identify relevant information, extract key insights, and provide legal professionals with valuable research support.',
    image: <img width="736" height="512" src={translation_and_language_services} alt="Legal Document Analysis" />,
  },
  {
    title: 'Financial Forecasting',
    content: 'Predict market trends, analyze financial data, and generate accurate forecasts for stock prices, investment opportunities, and economic indicators using advanced machine learning techniques.',
    image: <img width="736" height="512" src={text_analysis} alt="Financial Forecasting" />,
  },
  {
    title: 'Customer Service Automation',
    content: 'Automate customer support processes, respond to inquiries, and resolve issues efficiently using chatbots, virtual assistants, and natural language processing capabilities.',
    image: <img width="736" height="512" src={content_generation} alt="Customer Service Automation" />,
  },
  {
    title: 'Code Generation',
    content: 'Assist software developers in writing code, generating scripts, and automating repetitive programming tasks to improve productivity and accelerate software development cycles.',
    image: <img width="736" height="512" src={translation_and_language_services} alt="Code Generation" />,
  },
  {
    title: 'Environmental Monitoring',
    content: 'Monitor environmental conditions, analyze climate data, and predict natural disasters such as floods, wildfires, and hurricanes to facilitate disaster preparedness and response efforts.',
    image: <img width="736" height="512" src={personalized_recommendations} alt="Environmental Monitoring" />,
  },
  {
    title: 'Personalized Education',
    content: 'Tailor educational content and learning experiences to individual students based on their learning styles, preferences, and academic performance to enhance engagement and improve learning outcomes.',
    image: <img width="736" height="512" src={educational_tools} alt="Personalized Education" />,
  }
];

  

export default UseCases;
