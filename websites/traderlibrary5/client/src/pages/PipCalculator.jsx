import React from 'react';
import './PipCalculator.css';

const PipCalculator = () => (
  <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Pip Calculator</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        The Pip Calculator helps you determine the monetary value of a pip for any currency pair, based on your trade size and account currency.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          Understanding pip value is essential for risk management. It allows you to calculate your potential gain or loss per pip before entering a trade.
        </p>
      </div>
      <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
        <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
          <li>Select the currency pair you’re trading</li>
          <li>Enter your trade size (lots) and account currency</li>
          <li>Get the pip value in your currency per trade size</li>
        </ul>
      </div>
    </section>
    <div className="iframe-container">
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