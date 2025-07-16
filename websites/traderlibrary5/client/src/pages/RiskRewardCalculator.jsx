import React from 'react';
import './RiskRewardCalculator.css';

const RiskRewardCalculator = () => (
  <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Risk to Reward Calculator</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        This calculator helps you measure the risk-to-reward ratio of a trade based on your entry, stop-loss, and take-profit levels.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          Maintaining a strong risk-to-reward ratio (e.g., 1:2 or higher) is key to long-term profitability. This tool helps you plan trades with a favorable payoff.
        </p>
      </div>
      <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
        <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
          <li>Enter your entry price, stop-loss, and target (take-profit)</li>
          <li>The calculator shows your risk/reward ratio and potential gain/loss</li>
          <li>Adjust levels to ensure you're not risking more than you're aiming to gain</li>
        </ul>
      </div>
    </section>
    <div className="iframe-container">
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