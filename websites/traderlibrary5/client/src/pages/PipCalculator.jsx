import React from 'react';
import './PipCalculator.css';

// ===============================
// Pip Calculator Tool Page
// ===============================
// This page provides a pip calculator tool for Forex traders.
// It includes a heading, a short explanation, and an embedded iframe.
// ===============================
const PipCalculator = () => (
  <div className="page-container">
    <h1 className="tool-heading">Pip Calculator</h1>
    <p className="tool-description">
      Calculate the value of a pip for any Forex pair. This tool helps you understand the exact monetary value of price movements, which is essential for risk management and position sizing.
    </p>
    <div className="tool-iframe-wrapper">
      <iframe
        src="https://www.myfxbook.com/forex-calculators/pip-calculator"
        title="Pip Calculator"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <div className="iframe-fallback">
        <p>If the calculator doesn't load, <a href="https://www.myfxbook.com/forex-calculators/pip-calculator" target="_blank" rel="noopener noreferrer">click here to open in a new tab</a>.</p>
      </div>
    </div>
  </div>
);

export default PipCalculator; 