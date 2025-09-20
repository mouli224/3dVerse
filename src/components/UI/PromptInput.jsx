import React, { useState } from 'react';
import './PromptInput.css';

const PromptInput = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(prompt);
    }
    setPrompt('');
  };

  return (
    <div className="prompt-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt (e.g., cube, sphere)"
          className="prompt-input"
        />
        <button type="submit" className="prompt-button">Send</button>
      </form>
    </div>
  );
};

export default PromptInput;
