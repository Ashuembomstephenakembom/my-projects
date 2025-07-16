import React from 'react';
import './EconomicCalendar.css';

// ===============================
// Economic Calendar Tool Page
// ===============================
// This page provides a real-time economic calendar for Forex traders.
// It includes a heading, a short explanation, and an embedded iframe.
// ===============================
const EconomicCalendar = () => (
  <div className="page-container">
    <h1 className="tool-heading">Economic Calendar</h1>
    <p className="tool-description">
      Stay updated on key economic events and news that impact the Forex market. Plan your trades around major announcements and avoid surprises.
    </p>
    <div className="tool-iframe-wrapper">
      <iframe
        src="https://www.myfxbook.com/forex-economic-calendar"
        title="Economic Calendar"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <div className="iframe-fallback">
        <p>If the calendar doesn't load, <a href="https://www.myfxbook.com/forex-economic-calendar" target="_blank" rel="noopener noreferrer">click here to open in a new tab</a>.</p>
      </div>
    </div>
  </div>
);

export default EconomicCalendar; 