import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LearnForexSubNavbar.css';

const links = [
  { to: '/tools/position-size-calculator', label: 'POSITION SIZE CALCULATOR' },
  { to: '/tools/pip-calculator', label: 'PIP CALCULATOR' },
  { to: '/tools/margin-calculator', label: 'MARGIN CALCULATOR' },
  { to: '/tools/risk-reward-calculator', label: 'RISK REWARD CALCULATOR' },
  { to: '/tools/economic-calendar', label: 'ECONOMIC CALENDAR' },
  { to: '/tools/currency-strength-meter', label: 'CURRENCY STRENGTH METER' },
];

export default function ToolsSubNavbar() {
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