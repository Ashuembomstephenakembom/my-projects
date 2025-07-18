import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearnForexSubNavbar.css';

const links = [
  { to: '/how-to-trade', label: 'HOW TO TRADE' },
  { to: '/technical-analysis', label: 'TECHNICAL ANALYSIS' },
  { to: '/fundamental-analysis', label: 'FUNDAMENTAL ANALYSIS' },
  { to: '/sentimental-analysis', label: 'SENTIMENTAL ANALYSIS' },
  { to: '/beginner-course', label: 'BEGINNER COURSE' },
  { to: '/intermediate-course', label: 'INTERMEDIATE COURSE' },
  { to: '/advanced-course', label: 'ADVANCED COURSE' },
];

export default function LearnForexSubNavbar() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="learn-forex-subnavbar">
      <div className="learn-forex-subnavbar-inner">
        {links.map((link, idx) => (
          <div
            key={link.to}
            className={`subnav-link-wrapper${hovered === idx ? ' hovered' : ''}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={link.to}>{link.label}</Link>
            {hovered === idx && <div className="subnav-arrow" />}
          </div>
        ))}
      </div>
    </div>
  );
} 