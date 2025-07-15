import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// ===============================
// Navbar Component
// ===============================
// This component provides the main navigation bar for the site.
// It includes the site logo/title, navigation links, and authentication links.
// Now includes a hamburger menu for mobile responsiveness.
// ===============================
const Navbar = () => {
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  // Close menu when a link is clicked (for better UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className={`navbar-container${menuOpen ? ' menu-open' : ''}`}>
        {/* Group logo and nav links on the left */}
        <div className="navbar-left" style={{display: 'flex', alignItems: 'center'}}>
          {/* Brand/logo left-aligned */}
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>TraderLibrary5</Link>
          {/* Navigation links */}
          <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/ebook-library" onClick={handleLinkClick}>Ebook Library</Link></li>
            <li><Link to="/learn-forex" onClick={handleLinkClick}>Learn Forex</Link></li>
            <li><Link to="/asat-concept" onClick={handleLinkClick}>ASA TCONCEPT</Link></li>
            <li><Link to="/tools" onClick={handleLinkClick}>Tools</Link></li>
            <li><Link to="/brokers-prop-firms" onClick={handleLinkClick}>Brokers & Prop Firms</Link></li>
            <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
            <li><Link to="/vip-blog" onClick={handleLinkClick}>VIP Blog</Link></li>
            {/* Mobile-only auth links as last nav item */}
            {menuOpen && typeof window !== 'undefined' && window.innerWidth <= 700 && (
              <li className="navbar-mobile-auth" style={{width: '100%', padding: '0.7rem 0 0.5rem 0', background: '#02283a', borderTop: '1.5px solid #2a4a6a', display: 'flex', justifyContent: 'space-between', gap: '0.7rem'}}>
                <Link to="/register" onClick={handleLinkClick} style={{flex: 1, textAlign: 'center', background: '#1a3550', borderRadius: '8px', padding: '0.5rem 0', border: '1px solid #2a4a6a', color: '#fff', fontSize: '1.05rem', fontWeight: 400}}>SignUp</Link>
                <Link to="/login" onClick={handleLinkClick} style={{flex: 1, textAlign: 'center', background: '#1a3550', borderRadius: '8px', padding: '0.5rem 0', border: '1px solid #2a4a6a', color: '#fff', fontSize: '1.05rem', fontWeight: 400}}>SignIn</Link>
              </li>
            )}
          </ul>
        </div>
        {/* Desktop auth links (hidden on mobile) */}
        <div className="navbar-auth">
          <Link to="/register" onClick={handleLinkClick} style={{marginRight: '1.2rem'}}>SignUp</Link>
          <Link to="/login" onClick={handleLinkClick}>SignIn</Link>
        </div>
        {/* Hamburger menu button (right-aligned on mobile) */}
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 