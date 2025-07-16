import React from 'react';
import './MarginCalculator.css';

const MarginCalculator = () => (
  <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Margin Calculator</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        The Margin Calculator tells you how much margin (collateral) is required to open a position based on leverage, lot size, and the instrument traded.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          Understanding margin requirements helps you avoid over-leveraging and margin calls. It's crucial when trading with brokers that offer high leverage.
        </p>
      </div>
      <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
        <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
          <li>Choose the currency pair and your account currency</li>
          <li>Enter lot size and leverage (e.g., 1:100)</li>
          <li>The tool shows required margin in your base currency</li>
        </ul>
      </div>
    </section>
    <div className="iframe-container">
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