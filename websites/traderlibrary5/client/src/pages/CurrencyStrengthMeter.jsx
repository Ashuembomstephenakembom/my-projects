import React from 'react';
import './CurrencyStrengthMeter.css';

// ===============================
// Currency Strength Meter Tool Page
// ===============================
// This page provides a link to an external currency strength meter for Forex traders.
// It includes a heading, a short explanation, and a button to open the tool in a new tab.
// ===============================
const CurrencyStrengthMeter = () => (
  <div className="page-container">
    <h1 className="tool-heading">Currency Strength Meter</h1>
    <p className="tool-description">
      See which currencies are strong or weak in real time. Use this tool to identify the best pairs to trade by pairing strong currencies against weak ones.
    </p>
    <div className="external-tool-wrapper">
      <p className="external-tool-note">
        The Currency Strength Meter is an external tool. Click the button below to open it in a new tab.
      </p>
      <a
        href="https://www.currencystrengthmeter.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="external-tool-button"
      >
        Open Currency Strength Meter
      </a>
    </div>
  </div>
);

export default CurrencyStrengthMeter; 