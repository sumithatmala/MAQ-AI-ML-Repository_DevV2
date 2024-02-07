import React from 'react';

const WhyChooseSection = () => {
  const servicesData = [
    {
      iconSrc: 'https://indatalabs.com/wp-content/uploads/2021/04/icon-consulting-3.svg',
      altText: 'consulting',
      title: 'Consulting',
      description: 'Need a recommender system to increase in-app purchases? Or want to implement ChatGPT into your gaming business? Talk to our AI experts to see how we can help.',
    },
    {
      iconSrc: 'https://indatalabs.com/wp-content/uploads/2021/04/icon-ai-white-alt.svg',
      altText: 'AI Game Solutions',
      title: 'Artificial Intelligence in Game Development',
      description: 'Planning to utilize AI in the gaming industry? Let us apply our expertise for your game to make it onto the top charts and bring insane profits.',
    },
    {
      iconSrc: 'https://indatalabs.com/wp-content/uploads/2021/04/icon-phones-alt.svg',
      altText: 'AI Game',
      title: 'Mobile Gaming Analytics',
      description: 'Use Machine Learning models for smart player analysis. Extract insights from gameplay data for player behavior prediction.',
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-section-inner">
        <h2 className="head-block-center">Our Services for Your Needs</h2>
        <div className="text-block-center">Make use of artificial intelligence in games to pull ahead of your competitors.</div>
        <ul className="whychoose-section-list">
          {servicesData.map((service, index) => (
            <li key={index} className="whychoose-section-list__list-item">
              <div className="whychoose-section-list__item">
                <img src={service.iconSrc} className="whychoose-section-list__icon" alt={service.altText} />
                <div className="whychoose-section-list__text">
                  <div className="whychoose-section-list__title">{service.title}</div>
                  <div className="whychoose-section-list__description">{service.description}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-block-center">Planning to use AI in game development?</div>
        <div className="block__action">
          <a href="#section-contacts" className="btn btn-empty">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
