import React from 'react';
import './MarginCalculator.css';

function SASharesMarginCalculator() {
  return (
    <iframe
      src="https://sashares.co.za/widgets/margin-calculator-widget?color=grey"
      style={{ border: 'none', width: '100%', height: '630px' }}
      frameBorder="0"
      scrolling="no"
      title="SAShares Margin Calculator"
    />
  );
}

const MarginCalculator = () => (
  <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Margin Calculator</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        The Margin Calculator helps you determine the required margin for your forex trades based on your account size, leverage, and position size.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          Understanding margin requirements is crucial for risk management. It helps you avoid margin calls and ensures you have sufficient funds for your trading positions.
        </p>
      </div>
      <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
        <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
          <li>Enter your account balance and leverage ratio</li>
          <li>Specify your position size in lots</li>
          <li>Calculate the required margin and available free margin</li>
        </ul>
      </div>
    </section>
    {/* SAShares Margin Calculator Widget - Start */}
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
        overflow: 'hidden'
      }}
    >
      <SASharesMarginCalculator />
    </div>
    {/* SAShares Margin Calculator Widget - End */}
  </div>
);

export default MarginCalculator; 