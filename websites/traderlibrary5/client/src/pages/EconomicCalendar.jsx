import React from 'react';
import './EconomicCalendar.css';

const EconomicCalendar = () => (
  <div className="page-container" style={{ marginTop: '10px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Economic Calendar</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        The Economic Calendar shows upcoming global financial events, data releases, and central bank announcements that can move the Forex market.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          Major economic events—like interest rate decisions, inflation reports, and employment data—can cause sharp movements in currency pairs. This calendar helps traders stay ahead of market volatility and plan trades based on real-time events.
        </p>
      </div>
      <div className="tool-block" style={{ marginBottom: '1.5rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>How to use it:</strong>
        <ul style={{ margin: '0.7rem 0 0 1.2rem', color: '#444', fontSize: '1rem', lineHeight: 1.7 }}>
          <li>Filter events by country, impact level, or currency</li>
          <li>Watch out for high-impact events like NFP, CPI, and FOMC meetings</li>
          <li>Use it to avoid entering trades just before news releases, or to prepare for breakout moves</li>
        </ul>
      </div>
    </section>
    <div className="iframe-container">
      <iframe
        src="https://www.forexfactory.com/calendar/"
        title="Economic Calendar"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <div className="iframe-fallback">
        <p>If the calendar doesn't load, <a href="https://www.forexfactory.com/calendar/" target="_blank" rel="noopener noreferrer">click here to open in a new tab</a>.</p>
      </div>
      <div style={{textAlign: 'center', marginTop: '0.7rem'}}>
        <a href="https://www.forexfactory.com/calendar/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', fontWeight: 500, textDecoration: 'underline'}}>Open Economic Calendar on ForexFactory</a>
      </div>
    </div>
  </div>
);

export default EconomicCalendar; 