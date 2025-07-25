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
              <li><Link to="/how-to-trade">How to Trade</Link></li>
              <li><Link to="/technical-analysis">Technical Analysis</Link></li>
              <li><Link to="/fundamental-analysis">Fundamental Analysis</Link></li>
              <li><Link to="/sentimental-analysis">Sentimental Analysis</Link></li>
              <li><Link to="/beginner-course">Beginner Course</Link></li>
              <li><Link to="/intermediate-course">Intermediate Course</Link></li>
              <li><Link to="/advanced-course">Advanced Course</Link></li>
              <li><Link to="/asat-concept">ASA TCONCEPT</Link></li>
            </ul>
          </div>

          <div className="footer-column company">
            <h3>Company</h3>
            <ul>
              <li><Link to="/info#about">About</Link></li>
              <li><Link to="/info#contact">Contact</Link></li>
              <li><Link to="/info#faq">FAQ</Link></li>
              <li><Link to="/info#subscribe">Subscribe</Link></li>
              <li><Link to="/info#privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/info#terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Forex Tools</h3>
            <ul>
              {/* All tools now link to their own pages with /tools/ prefix */}
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
            <a href="https://whatsapp.com/channel/0029Vb67Gxz9sBI57JpYVk3a" className="social-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        {/*
          Copyright section:
          - Sits at the bottom of the footer
          - You can add more legal info or links here if needed
        */}
        <div className="footer-copyright" style={{ fontSize: '10px', color: '#aaa', marginTop: '0.05rem', padding: '0.05rem 0', lineHeight: '1.1' }}>
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