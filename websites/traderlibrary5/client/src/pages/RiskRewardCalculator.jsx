import React from 'react';
import './RiskRewardCalculator.css';

// ===============================
// Risk to Reward Calculator Tool Page
// ===============================
// This page provides a risk to reward calculator for Forex traders.
// It includes a heading, a short explanation, and an embedded iframe.
// ===============================
const RiskRewardCalculator = () => (
  <div className="page-container">
    <h1 className="tool-heading">Risk to Reward Calculator</h1>
    <p className="tool-description">
      Evaluate your trade setups by comparing potential profit to potential loss. Use this tool to make smarter trading decisions and improve your risk management.
    </p>
    <div className="tool-iframe-wrapper">
      <iframe
        src="https://www.myfxbook.com/forex-calculators/risk-reward-calculator"
        title="Risk to Reward Calculator"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <div className="iframe-fallback">
        <p>If the calculator doesn't load, <a href="https://www.myfxbook.com/forex-calculators/risk-reward-calculator" target="_blank" rel="noopener noreferrer">click here to open in a new tab</a>.</p>
      </div>
    </div>
  </div>
);

export default RiskRewardCalculator; 