import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import LearnForexSubNavbar from './LearnForexSubNavbar';
import ToolsSubNavbar from './ToolsSubNavbar';

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
  const [showSubNavbar, setShowSubNavbar] = useState('');

  // Toggle menu open/close
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  // Close menu when a link is clicked (for better UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar" onMouseLeave={() => setShowSubNavbar('')}>
      <div className={`navbar-container${menuOpen ? ' menu-open' : ''}`}>
        {/* Group logo and nav links on the left */}
        <div className="navbar-left" style={{display: 'flex', alignItems: 'center'}}>
          {/* Brand/logo left-aligned */}
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>TraderLibrary5</Link>
          {/* Navigation links */}
          <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
            <li><NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined} end>HOME</NavLink></li>
            <li><NavLink to="/ebook-library" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined}>EBOOK LIBRARY</NavLink></li>
            <li
              onMouseEnter={() => setShowSubNavbar('learn-forex')}
              style={{ position: 'relative' }}
            >
              <NavLink to="/learn-forex" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined}>LEARN FOREX</NavLink>
            </li>
            <li><NavLink to="/asat-concept" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined}>ASA TCONCEPT</NavLink></li>
            {/* Tools link navigates to the Tools Home page */}
            <li
              onMouseEnter={() => setShowSubNavbar('tools')}
              style={{ position: 'relative' }}
            >
              <Link to="#" onClick={e => e.preventDefault()}>TOOLS</Link>
            </li>
            <li><NavLink to="/brokers-prop-firms" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined}>BROKERS & PROP FIRMS</NavLink></li>
            <li><NavLink to="/blog" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined}>BLOG</NavLink></li>
            <li><NavLink to="/vip-blog" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'nav-active' : undefined}>VIP BLOG</NavLink></li>
            {/* Mobile-only auth links as last nav item */}
            {menuOpen && typeof window !== 'undefined' && window.innerWidth <= 700 && (
              <li className="navbar-mobile-auth" style={{width: '100%', padding: '0.7rem 0 0.5rem 0', background: '#02283a', borderTop: '1.5px solid #2a4a6a', display: 'flex', justifyContent: 'space-between', gap: '0.7rem'}}>
                <NavLink to="/register" onClick={handleLinkClick} style={{flex: 1, textAlign: 'center', background: '#1a3550', borderRadius: '8px', padding: '0.5rem 0', border: '1px solid #2a4a6a', color: '#fff', fontSize: '1.05rem', fontWeight: 400}}>SignUp</NavLink>
                <NavLink to="/login" onClick={handleLinkClick} style={{flex: 1, textAlign: 'center', background: '#1a3550', borderRadius: '8px', padding: '0.5rem 0', border: '1px solid #2a4a6a', color: '#fff', fontSize: '1.05rem', fontWeight: 400}}>SignIn</NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* Desktop auth links (hidden on mobile) */}
        <div className="navbar-auth">
          <NavLink to="/register" onClick={handleLinkClick} style={{marginRight: '0.3rem'}}>SignUp</NavLink>
          <span style={{color: '#fff', opacity: 0.5, fontWeight: 400, fontSize: '1.1em', margin: '0 0.3rem'}}>|</span>
          <NavLink to="/login" onClick={handleLinkClick}>SignIn</NavLink>
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
        {showSubNavbar === 'learn-forex' && <LearnForexSubNavbar />}
        {showSubNavbar === 'tools' && <ToolsSubNavbar />}
      </div>
    </nav>
  );
};

export default Navbar; 