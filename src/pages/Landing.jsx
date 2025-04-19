import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>GreenThumb</h1>
        <p>
          Welcome to GreenThumb, your premier destination for beautiful, healthy houseplants. 
          We carefully select and nurture each plant to ensure they thrive in your home. 
          Our mission is to bring the joy and benefits of nature indoors, making plant 
          parenthood accessible to everyone, from beginners to experienced plant enthusiasts.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
