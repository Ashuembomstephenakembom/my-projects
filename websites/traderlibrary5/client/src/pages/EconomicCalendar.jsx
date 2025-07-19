import React from 'react';
import './EconomicCalendar.css';

const EconomicCalendar = () => (
  <div className="page-container" style={{ marginTop: '0px', paddingTop: '80px' }}>
    <h1 className="tool-heading">Economic Calendar</h1>
    <section className="tool-section">
      <p className="tool-intro" style={{ fontSize: '1.13rem', color: '#222', marginBottom: '1.2rem', textAlign: 'center' }}>
        The Economic Calendar shows upcoming global financial events, data releases, and central bank announcements that can move the Forex market.
      </p>
      <div className="tool-block" style={{ marginBottom: '1.2rem', background: '#f8f9fa', borderRadius: 8, padding: '1rem 1.2rem' }}>
        <strong style={{ color: '#003049', fontSize: '1.08rem' }}>Why it matters:</strong>
        <p style={{ margin: '0.5rem 0 0 0', color: '#444', fontSize: '1rem' }}>
          Major economic events like interest rate decisions, inflation reports, and employment data can cause sharp movements in currency pairs. This calendar helps traders stay ahead of market volatility and plan trades based on real-time events.
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
    {/* myfxbook.com Economic Calendar Widget - Start */}
    <div className="iframe-container" style={{ width: '100%', minHeight: 600, margin: '0 auto', maxWidth: 900 }}>
      <iframe
        src="https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=0,1,2,3&symbols=AUD,CAD,CHF,CNY,EUR,GBP,JPY,NZD,USD"
        style={{ border: 0, width: '100%', height: 600, borderRadius: 8, overflow: 'auto' }}
        title="Economic Calendar"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
      ></iframe>
      <div style={{ marginTop: 10 }}>
        <div
          style={{
            width: 'fit-content',
            margin: 'auto',
            fontFamily: 'roboto, sans-serif',
            fontSize: 13,
            color: '#666666',
          }}
        >
          <a
            href="https://www.myfxbook.com/forex-economic-calendar?utm_source=widget13&utm_medium=link&utm_campaign=copyright"
            title="Economic Calendar"
            className="myfxbookLink"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#666666', fontWeight: 'bold' }}
          >
            Economic Calendar
          </a>{' '}
          by Myfxbook.com
        </div>
      </div>
    </div>
    {/* myfxbook.com Economic Calendar Widget - End */}
  </div>
);

export default EconomicCalendar; 