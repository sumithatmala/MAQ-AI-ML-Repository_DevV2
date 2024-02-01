import React, { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import './css/FAQs.css';

const FAQData = [
  {
    id: 1,
    question: "What is VA software?",
    answer: `VA software stands for virtual assistant software developed to assist a set of repetitive or tiresome tasks.
    From saving time on complex initiatives and projects, and improving efficiency, to cutting labor costs, virtual assistant software tools can be of great help.
    Here are the key benefits of having a virtual assistant:
    - Automating business tasks
    - Freeing up your human employees for more complex tasks
    - Reducing operational costs
    - Being available for customer support 24/7
    - Advancing customer service
    - Increasing client loyalty
    - Boosting revenue, etc.`
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
    Conversational AI can be a valuable asset to your business operations, improving your team efficiency and increasing your customer loyalty.

    Here are some modern use cases of conversational AI:

    - A website chatbot – available 24/7 for your clients and generates personalized messages to accommodate the needs of the clients
    - A CRM virtual assistant – simplifies the work with your customer base by solving data entry and transfer issues, scheduling appointments, and managing leads
    - A real estate virtual assistant tool – provides help for real estate agents in keeping the base up-to-date, scheduling calls, and tracking time.
    - Text generation software – enables quick and easy content creation and editing from scratch
    - Voice assistants – voice-activated bots that recognize text and convert it into voice and vice versa
    - ChatGPT tools for optimized design – tools for helping with design tasks such as logo, social media banner, video, flyer creation, etc.

    You can literally develop any AI virtual assistant software catered to your needs. The only thing to be kept in mind is finding the right technology provider and gathering project requirements.
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
