import React from 'react';
import { Link } from 'react-router-dom';

// ===============================
// Footer Component
// ===============================
// This component provides the main footer for the site.
// It includes navigation sections, brand info, social links, and copyright.
// Uses React Router Links for existing pages and regular anchor tags for future pages.
// ===============================
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/*
          Main footer sections (3 columns):
          - Learn Forex: Educational links
          - Forex Tools: Useful calculators and tools
          - Company: Info, contact, and legal links
        */}
        <div className="footer-sections">
          <div className="footer-column">
            <h3>Learn Forex</h3>
            <ul>
              {/* Existing pages - using React Router Links for smooth navigation */}
              <li><Link to="/learn-forex">How to Trade</Link></li>
              {/* Future pages - using regular anchor tags until pages are created */}
              <li><a href="/quizzes">Quizzes</a></li>
              <li><a href="/glossary">Glossary</a></li>
              <li><a href="/beginner-course">Beginner Course</a></li>
              <li><a href="/intermediate-course">Intermediate Course</a></li>
              <li><Link to="/asat-concept">ASA TCONCEPT</Link></li>
            </ul>
          </div>

          <div className="footer-column company">
            <h3>Company</h3>
            <ul>
              {/* Future pages - using regular anchor tags until pages are created */}
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/subscribe">Subscribe</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Forex Tools</h3>
            <ul>
              {/* All tools now link to their own pages */}
              <li><Link to="/tools/economic-calendar">Economic Calendar</Link></li>
              <li><Link to="/tools/pip-calculator">Pip Calculator</Link></li>
              <li><Link to="/tools/position-size-calculator">Position Size Calculator</Link></li>
              <li><Link to="/tools/risk-reward-calculator">Risk to Reward Calculator</Link></li>
              <li><Link to="/tools/margin-calculator">Margin Calculator</Link></li>
              <li><Link to="/tools/currency-strength-meter">Currency Strength Meter</Link></li>
            </ul>
          </div>
        </div>

        {/*
          Brand section:
          - Logo/title and short description
          - Social media links (open in new tab for best UX)
        */}
        <div className="footer-brand">
          <h2>TraderLibrary5</h2>
          <p>
            Your ultimate Forex knowledge hub. We provide comprehensive education, real trading tools, and mentorship for traders at every level.
          </p>
          <div className="social-links">
            {/* Social links open in new tab for user convenience */}
            <a href="https://twitter.com/traderlibrary5" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/company/traderlibrary5" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* <a href="https://youtube.com/traderlibrary5" className="social-link" target="_blank" rel="noopener noreferrer">YouTube</a> */} {/* Removed YouTube */}
            {/* <a href="https://t.me/traderlibrary5" className="social-link" target="_blank" rel="noopener noreferrer">Telegram</a> */} {/* Removed Telegram */}
            {/* TikTok social link */}
            <a href="https://www.tiktok.com/@traderlibrary5" className="social-link" target="_blank" rel="noopener noreferrer">TikTok</a>
            {/* WhatsApp channel link */}
            <a href="https://wa.me/2348012345678" className="social-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        {/*
          Copyright section:
          - Sits at the bottom of the footer
          - You can add more legal info or links here if needed
        */}
        <div className="footer-copyright" style={{ fontSize: '0.85rem', color: '#ccc', marginTop: '0.5rem', padding: '0.5rem 0' }}>
          <p>© 2025 TraderLibrary5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ===============================
// Export the Footer component so it can be used in App.jsx and elsewhere
// ===============================
export default Footer; 