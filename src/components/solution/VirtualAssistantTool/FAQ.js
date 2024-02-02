import React, { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import './css/FAQs.css';

const FAQData = [
  {
    id: 1,
    question: "What is VA software?",
    answer: `Virtual Assistant (VA) software is designed to streamline and automate repetitive tasks, offering various advantages such as time savings, enhanced efficiency, and cost reduction. Key benefits include task automation, enabling human employees to focus on more complex responsibilities, lowering operational costs, providing 24/7 customer support, improving customer service, fostering client loyalty, and boosting revenue.`
  },
  {
    id: 2,
    question: "Which is the best virtual assistant technology?",
    answer: "Generative AI is an acclaimed technology to assist in virtual assistant software development for a good reason. Generative AI combines AI and NLP to understand the context of customer queries, generate a prompt human-like response, and give the customer the most support they need. The technology enables fast and to-the-point text generation, personalized messaging and recommendations, smooth data transfer to the sales team, and more."
  },
  {
    id: 3,
    question: "What is a CRM virtual assistant?",
    answer: "A CRM virtual assistant is an AI virtual assistant that enables smooth work with your customer base including data transfer and improvements, file sharing and document management, scheduling appointments and keeping track of sales calls, lead management, and sending emails and invites. A custom CRM virtual assistant developed to your needs can enhance your work processes and boost income."
  },
  {
    id: 4,
    question: "What is an example of conversational Al?",
    answer: `
    Conversational AI is a valuable asset for business operations, enhancing team efficiency and customer loyalty. Modern use cases include website chatbots for 24/7 personalized client interactions, CRM virtual assistants for simplifying customer data management, real estate virtual assistant tools for agent support, text generation software for content creation, voice assistants for voice-activated interactions, and ChatGPT tools for design tasks. Developing customized AI virtual assistant software requires choosing the right technology provider and gathering project requirements.
  `
  },
  {
    id: 5,
    question: "Can I make my own virtual assistant?",
    answer: "Yes, you can. There are plenty of AI tools like ChatGPT out there these days. The question is will it fulfill your business needs 100% or not? To avoid this, you can analyze your business needs and set goals you’d like to achieve by developing AI software. What is more, it’s essential to find an experienced AI technology provider than doing it yourself or redoing it with the help of a pro. Search for a trusted technology solution provider and go for a consulting session to discuss your project ideas."
  },
  // Add more FAQs as needed
];

const FAQItem = ({ question, answer, id }) => (
  <MDBAccordionItem key={id} className="FAQ__item custom-accordion-item" collapseId={id} headerTitle={question}>
    {answer}
  </MDBAccordionItem>
);

export default function FAQ() {
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
        <h2 className="head-block-center">FAQ</h2>
        <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
          <MDBAccordion>
            {FAQData.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </MDBAccordion>
        </MDBContainer>
      </div>
    </section>
  );
}
