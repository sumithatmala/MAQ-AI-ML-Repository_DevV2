import './css/GameDev.css';
import person from './icons/icons8-handball-100 (1) 1.svg';
import light from './icons/icons8-ps-controller-100 1.svg';
import phone from './icons/icons8-mobile-app-100 1.svg';
import clock from './icons/icons8-pass-fail-100 1.svg';
import cube from './icons/icons8-htc-vive-headset-100 1.svg';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const GameDev = () => {
  const listItemData = [
    {
      iconSrc: person,
      altText: 'innovative approach',
      title: 'Personalized In-Game Experience',
      text: 'Analytic tools for fine-tuning game parameters tailored to the player.',
  },
  {
      iconSrc: light,
      altText: 'AI Game Solution',
      title: 'Enhanced Game Experience',
      text: 'Gaming technology solutions for heightened enjoyment and achievement in games.',
  },
  {
      iconSrc: phone,
      altText: 'AI Game Solutions app',
      title: 'AI Integration in Mobile App Development',
      text: 'Leverage AI for an improved gameplay experience, enhanced app performance, and increased efficiency.',
  },
  {
      iconSrc: clock,
      altText: 'flexible cooperation models',
      title: 'Player Retention Prediction',
      text: 'ML models to detect player churn and extend the player’s lifetime.',
  },
  {
      iconSrc: cube,
      altText: 'AI Game Apps',
      title: 'Immersive Experiences with AR',
      text: 'Real first-person experiences and more immersive possibilities in gaming.',
  },
  ];

  useEffect(() => {
    // Calculate and set the maximum content height
    const cards = document.querySelectorAll('.blue-tile-section-list__item');
    let maxContentHeight = 0;

    cards.forEach(card => {
      const contentHeight = card.offsetHeight; // Use offsetHeight to get the actual rendered height
      maxContentHeight = Math.max(maxContentHeight, contentHeight);
    });

    // Set the height for all cards
    cards.forEach(card => {
      card.style.height = maxContentHeight + 'px';
    });
  }, []); 

  return (
    <section className="blue-tile-section icon-left icon-up big-cont margin-adjust">
      <div className="blue-tile-section__inner">
        <h2 className="head-block-center">
          Enhance Your Gamedev Business with AI Technology
        </h2>
        <div className="text-block-center">
          A few examples of how you can use Artificial Intelligence in games.
        </div>
        <ul className="blue-tile-section-list">
          {listItemData.map((item, index) => (
            <li key={index} className="blue-tile-section-list__item item38">
              <div className="blue-tile-section-list__inner">
                <div className="blue-tile-section-list__icon">
                  <img src={item.iconSrc} alt={item.altText} />
                </div>
                <div className="blue-tile-section-list__content">
                  <h3 className="blue-tile-section-list__title">
                    {item.title}
                  </h3>
                  <div className="blue-tile-section-list__text">
                    {item.text}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="text-block-center">
          Need to develop an AI game solution?
        </div>
        <div className="block__action">
          <HashLink  to="./#contact" className="btn btn-empty">
            Get an Estimate
          </HashLink>
        </div> */}
      </div>
    </section>
  );
};

export default GameDev;
