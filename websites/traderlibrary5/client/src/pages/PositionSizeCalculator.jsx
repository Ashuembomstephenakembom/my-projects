import React from 'react';
import './PositionSizeCalculator.css';

const PositionSizeCalculator = () => {
  return (
    <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
      <h1 className="tool-heading">Position Size Calculator</h1>
      <section className="tool-section">
        <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
          This tool calculates the exact number of lots or units you should trade based on your risk percentage, account balance, and stop-loss size.
        </p>
        <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
          <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
          <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
            Proper position sizing protects your capital by ensuring you only risk a consistent percentage of your account per trade. It's one of the most critical parts of professional trading.
          </p>
        </div>
        <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
          <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
          <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
            <li>Enter your account balance and desired risk % (e.g., 1–2%)</li>
            <li>Input your stop-loss in pips</li>
            <li>Get the optimal position size (in lots) to trade safely</li>
          </ul>
        </div>
      </section>
      {/* Myfxbook Position Size Calculator Widget - Start */}
      <div 
        className="iframe-container" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          margin: '0 auto', 
          maxWidth: '1000px',
          width: '100%', 
          padding: '0 20px',
          borderRadius: '8px',
          overflow: 'hidden',
          minHeight: '600px'
        }}
      >
        <iframe
          title="Myfxbook Position Size Calculator"
          src="https://www.myfxbook.com/forex-calculators/position-size"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: 'none', minWidth: 320, borderRadius: 8, background: '#fff' }}
          allowFullScreen
        ></iframe>
      </div>
      {/* Myfxbook Position Size Calculator Widget - End */}
    </div>
  );
};

export default PositionSizeCalculator; 