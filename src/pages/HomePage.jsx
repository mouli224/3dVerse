import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Interactive 3D Playground</h1>
          <p>Bring your ideas to life with our intuitive 3D modeling tool. Create, view, and interact with 3D models in a seamless experience.</p>
          <button onClick={() => navigate('/three')} className="cta-button">
            Get Started
          </button>
        </div>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <FontAwesomeIcon icon={faCubes} size="3x" />
          <h3>Generate 3D Models</h3>
          <p>Use natural language to generate a variety of 3D shapes and models instantly.</p>
        </div>
        <div className="feature-card">
          <FontAwesomeIcon icon={faVrCardboard} size="3x" />
          <h3>Virtual Reality</h3>
          <p>Immerse yourself in a virtual environment and interact with your models like never before.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
