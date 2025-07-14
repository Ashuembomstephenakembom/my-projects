import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Navbar component provides the main site navigation bar
// It includes the site logo, navigation links, and authentication links
const Navbar = () => {
  return (
    // Main navigation wrapper
    <nav className="navbar">
      <div className="navbar-container">
        {/* Site logo/title on the left, links to home */}
        <Link to="/" className="navbar-logo">TraderLibrary5</Link>

        {/* Navigation links in the center */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ebook-library">Ebook Library</Link></li>
          <li><Link to="/learn-forex">Learn Forex</Link></li>
          <li><Link to="/asat-concept">ASA TCONCEPT</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/brokers-prop-firms">Brokers & Prop Firms</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/vip-blog">VIP Blog</Link></li>
        </ul>

        {/* Authentication links on the right */}
        <div className="navbar-auth">
          <Link to="/register">SignUp</Link> | <Link to="/login">SignIn</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 