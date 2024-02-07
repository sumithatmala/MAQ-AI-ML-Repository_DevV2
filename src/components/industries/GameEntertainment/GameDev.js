import './css/GameDev.css';

const GameDev = () => {
  const listItemData = [
    {
        iconSrc: 'https://indatalabs.com/wp-content/uploads/2019/10/personalization.svg',
        altText: 'innovative approach',
        title: 'In-Game Personalization',
        text: 'Analytic tools for game parameters tuning catered to the player.',
      },
      {
        iconSrc: 'https://indatalabs.com/wp-content/uploads/2021/05/icon-lightning.svg',
        altText: 'AI Game Solution',
        title: 'Game Experience Booster',
        text: 'Gaming technology solutions for game enjoyment and achievement.',
      },
      {
        iconSrc: 'https://indatalabs.com/wp-content/uploads/2021/05/icon-phones-alt.svg',
        altText: 'AI Game Solutions app',
        title: 'AI for Mobile App Development',
        text: 'Utilize AI for better gameplay experience, app performance, and efficiency.',
      },
      {
        iconSrc: 'https://indatalabs.com/wp-content/uploads/2019/10/real-time.svg',
        altText: 'flexible cooperation models',
        title: 'Player Churn Prediction',
        text: 'ML models to identify player churn and increase the player’s lifetime.',
      },
      {
        iconSrc: 'https://indatalabs.com/wp-content/uploads/2021/05/icon-cube.svg',
        altText: 'AI Game Apps',
        title: 'Immersive Experiences with AR',
        text: 'Real first-person experience and more immersive game possibilities.',
      },
  ];

  return (
    <section className="blue-tile-section icon-left icon-up big-cont">
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
        <div className="text-block-center">
          Need to develop an AI game solution?
        </div>
        <div className="block__action">
          <a href="#section-contacts" className="btn btn-empty">
            Get an Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameDev;
