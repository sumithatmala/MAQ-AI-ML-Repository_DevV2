import globe from '../large-language-model/img/icon-accordion-language.svg';
import star from '../large-language-model/img/icon-accordion-star.svg';
import text from '../large-language-model/img/icon-accordion-text.svg';
import education from '../large-language-model/img/icon-accordion-education.svg';
import writing from '../large-language-model/img/icon-accordion-writing.svg';
import chat from '../large-language-model/img/icon-accordion-chat.svg';
import mobile from '../large-language-model/img/icon-accordion-mobile.svg';

import chatbots_and_virtual_assistants  from '../large-language-model/img/ai-medical-diagnosis.webp'
import translation_and_language_services  from '../large-language-model/img/Legal Document Analysis.webp'
import text_analysis  from '../large-language-model/img/Financial Forecasting.webp'
import content_generation  from '../large-language-model/img/Customer Service Automation.jpg'
import personalized_recommendations  from '../large-language-model/img/Environmental Monitoring.jpg'
import educational_tools   from '../large-language-model/img/Personalized Education.webp'
import codegen from '../large-language-model/img/Code Generation.webp';


const AccessibleTabsData = [
    
    {
      heading: "Medical Diagnosis Assistance",
      title: "Medical Diagnosis Assistance",
      content: 'Assist healthcare professionals in diagnosing diseases, interpreting medical reports, and recommending treatment plans based on patient symptoms and medical history.',
      imageUrl: 'https://picsum.photos/id/345/1000/600',
      icon: mobile,
      image:<img width="736" height="512" src={chatbots_and_virtual_assistants}  alt="Medical Diagnosis Assistance" />
    },
    {
      heading: "Legal Document Analysis",
      title: "Legal Document Analysis",
      content: 'Analyze legal documents, contracts, and case law to identify relevant information, extract key insights, and provide legal professionals with valuable research support.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
      icon:chat,
      image:<img width="736" height="512" src={translation_and_language_services} alt="Legal Document Analysis" />,
    },
    {
      heading: "Financial Forecasting",
      title: "Financial Forecasting",
      content: 'Predict market trends, analyze financial data, and generate accurate forecasts for stock prices, investment opportunities, and economic indicators using advanced machine learning techniques.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
      icon:globe,
      image:<img width="736" height="512" src={text_analysis} alt="Financial Forecasting" />,
    },
    {
      heading: "Customer Service Automation",
      title: "Customer Service Automation",
      content: 'Automate customer support processes, respond to inquiries, and resolve issues efficiently using chatbots, virtual assistants, and natural language processing capabilities.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
      icon:star,
      image:<img width="736" height="512" src={content_generation}  alt="Customer Service Automation" />,
    },
    {
      heading: "Code Generation",
      title: "Code Generation",
      content: 'Assist software developers in writing code, generating scripts, and automating repetitive programming tasks to improve productivity and accelerate software development cycles.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
      icon:text,
      image:<img width="736" height="512" src={codegen} alt="Code Generation" />,
    },
    {
      heading: "Environmental Monitoring",
      title: "Environmental Monitoring",
      content: 'Monitor environmental conditions, analyze climate data, and predict natural disasters such as floods, wildfires, and hurricanes to facilitate disaster preparedness and response efforts.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
      icon:education,
      image:<img width="736" height="512" src={personalized_recommendations} alt="Environmental Monitoring" />,
    },
    {
      heading: "Personalized Education",
      title: "Personalized Education",
      content: 'Tailor educational content and learning experiences to individual students based on their learning styles, preferences, and academic performance to enhance engagement and improve learning outcomes.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
      icon:writing,
      image:<img width="736" height="512" src={educational_tools} alt="Personalized Education" />,
    },
  ]

  export default AccessibleTabsData;

  