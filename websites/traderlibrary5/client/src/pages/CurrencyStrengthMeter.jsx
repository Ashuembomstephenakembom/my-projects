import React from 'react';
import './CurrencyStrengthMeter.css';

const CurrencyStrengthMeter = () => (
  <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Currency Strength Meter</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        This tool visually displays which currencies are currently strong or weak relative to others.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          A currency strength meter helps you identify which pairs have momentum. For example, if EUR is strong and USD is weak, you might consider buying EUR/USD.
        </p>
      </div>
      <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
        <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
          <li>View the relative strength of major currencies in real time</li>
          <li>Pair a strong currency against a weak one for trend-based strategies</li>
          <li>Use it as a confirmation tool with your technical or fundamental analysis</li>
        </ul>
      </div>
    </section>
    <div className="external-tool-wrapper" style={{textAlign: 'center'}}>
      <a
        href="https://www.currencystrengthmeter.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="external-tool-button"
        style={{display: 'inline-block', margin: '1.2rem auto', background: '#ffc700', color: '#02283a', fontWeight: 600, padding: '0.7rem 2rem', borderRadius: 8, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.07)'}}
      >
        Open Currency Strength Meter
      </a>
    </div>
  </div>
);

export default CurrencyStrengthMeter; 