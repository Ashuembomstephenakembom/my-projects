import React from 'react';
import './MarginCalculator.css';

// ===============================
// Margin Calculator Tool Page
// ===============================
// This page provides a margin calculator for Forex traders.
// It includes a heading, a short explanation, and an embedded iframe.
// ===============================
const MarginCalculator = () => (
  <div className="page-container">
    <h1 className="tool-heading">Margin Calculator</h1>
    <p className="tool-description">
      Find out how much margin you need to open a trade with your chosen leverage and position size. This tool helps you manage your capital efficiently and avoid margin calls.
    </p>
    <div className="tool-iframe-wrapper">
      <iframe
        src="https://www.myfxbook.com/forex-calculators/margin-calculator"
        title="Margin Calculator"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <div className="iframe-fallback">
        <p>If the calculator doesn't load, <a href="https://www.myfxbook.com/forex-calculators/margin-calculator" target="_blank" rel="noopener noreferrer">click here to open in a new tab</a>.</p>
      </div>
    </div>
  </div>
);

export default MarginCalculator; 