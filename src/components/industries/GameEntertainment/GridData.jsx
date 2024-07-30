import './css/GameDev.css';
import person from './icons/icons8-handball-100 (1) 1.svg';
import light from './icons/icons8-ps-controller-100 1.svg';
import phone from './icons/icons8-mobile-app-100 1.svg';
import clock from './icons/icons8-pass-fail-100 1.svg';

const newGridData = [
      {
        iconSrc: <img  alt="img1" src={person} width="70px"/>,
        altText: 'innovative approach',
        title: 'Personalized In-Game Experience',
        description: 'Analytic tools for fine-tuning game parameters tailored to the player.',
    },
    {
        iconSrc: <img  alt="img1" src={light} width="70px"/>,
        altText: 'AI Game Solution',
        title: 'Enhanced Game Experience',
        description: 'Gaming technology solutions for heightened enjoyment and achievement in games.',
    },
    {
        iconSrc: <img  alt="img1" src={phone} width="70px"/>,
        altText: 'AI Game Solutions app',
        title: 'AI Integration in Mobile App Development',
        description: 'Leverage AI for an improved gameplay experience, enhanced app performance, and increased efficiency.',
    },
    {
        iconSrc: <img  alt="img1" src={clock} width="70px"/>,
        altText: 'flexible cooperation models',
        title: 'Player Retention Prediction',
        description: 'ML models to detect player churn and extend the player’s lifetime.',
    }

    ];

    export default newGridData;


