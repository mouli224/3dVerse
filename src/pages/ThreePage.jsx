import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeCanvas from '../components/Three/ThreeCanvas';
import PromptInput from '../components/UI/PromptInput';
import './ThreePage.css';

function ThreePage() {
  const [modelName, setModelName] = useState('cube');
  const navigate = useNavigate();

  const handlePromptSubmit = (prompt) => {
    const newModelName = prompt.toLowerCase().trim();
    setModelName(newModelName);
  };

  return (
    <div className="three-page-container">
      <div className="home-button-container">
        <button onClick={() => navigate('/')} className="home-button">
          Home
        </button>
      </div>
      <ThreeCanvas modelName={modelName} />
      <div className="prompt-overlay">
        <PromptInput onSubmit={handlePromptSubmit} />
      </div>
    </div>
  );
}

export default ThreePage;
