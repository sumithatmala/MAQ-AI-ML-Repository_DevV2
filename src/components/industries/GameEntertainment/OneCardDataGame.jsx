import anamoly from '../Automotive//icons/anomaly-detection-crash-simulation.jpg';
import pointernet from '../Automotive//icons/pointerNet.jpg';
import selfSupervised from '../Automotive//icons/self-supervised-classification.jpg';
import rlAgent from '../Automotive//icons/rlAgent.jpg';
import simulation from '../Automotive//icons/intelligent-finite-element.jpg';


const OneCardDataGame = [
  {
    title: 'Anomaly Detection in Collision Simulation',
    image: <img src={anamoly} alt="pa_customer_churn_prediction" />,
    description: [
      'Our group of AI engineers applies anomaly detection algorithms to identify undesired behavior in collision simulations. This AI automotive approach assists in anticipating abnormal behavior in simulations for design assessment and certification.',
    ],
  },
  
  {
    title: 'Unsupervised Low-Dimensional Representation',
    image: <img src={pointernet} alt="pa_inventory_management" />,
    description: [
      'We assist manufacturers in data-driven virtual product design. We calculate an unsupervised low-dimensional representation of collision simulations to visualize the collision behavior of different simulations. Utilizing geometric deep learning algorithms, we achieve remarkable visualization accuracy.',
    ],
  },
  {
    title: 'Self-Supervised Classification',
    image: <img src={selfSupervised} alt="pa_price_analysis" />,
    description: [
      'We introduce self-supervised methods that categorize deformation behavior in collision analysis. This model learns from a few training sample simulations to identify abnormal behavior, resulting in a sufficient number of 1-4 simulations per class.',
    ],
  },
  {
    title: 'Geometry Optimization Using RL',
    image: <img src={rlAgent} alt="pa_price_analysis" />,
    description: [
      'Collaborating with us, our clients obtain optimized geometry for improved collision behavior. We parameterize the model under consideration and employ RL to optimize the geometry, leading to increased energy absorption in collision analysis.',
    ],
  },
  {
    title: 'Intelligent Finite Element',
    image: <img src={simulation} alt="pa_price_analysis" />,
    description: [
      'Our team of AI developers constructs a model for real-time structural simulation of a plate under a given load and BCs. The model captures spatiotemporal patterns to predict stress for a simple component under boundary conditions over a set period.',
    ],
  },
];

export default OneCardDataGame;