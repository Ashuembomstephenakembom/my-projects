import React from 'react';
import './PositionSizeCalculator.css';

// ===============================
// Position Size Calculator Tool Page
// ===============================
// This page provides a position size calculator for Forex traders.
// It includes a heading, a short explanation, and an embedded iframe.
// ===============================
const PositionSizeCalculator = () => (
  <div className="page-container">
    <h1 className="tool-heading">Position Size Calculator</h1>
    <p className="tool-description">
      Determine the optimal lot size for your trades based on your account size, risk percentage, and stop loss. Proper position sizing is essential for risk management and long-term trading success.
    </p>
    <div className="tool-iframe-wrapper">
      <iframe
        src="https://www.myfxbook.com/forex-calculators/position-size"
        title="Position Size Calculator"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <div className="iframe-fallback">
        <p>If the calculator doesn't load, <a href="https://www.myfxbook.com/forex-calculators/position-size" target="_blank" rel="noopener noreferrer">click here to open in a new tab</a>.</p>
      </div>
    </div>
  </div>
);

export default PositionSizeCalculator; 