import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsHome.css';

// ===============================
// Tools Home Page (Dashboard)
// ===============================
// Lists all Forex tools as cards with name, description, and a Go to Tool button
// ===============================
const tools = [
  {
    name: 'Economic Calendar',
    icon: '📅',
    path: '/tools/economic-calendar',
    description: 'Stay updated on key economic events and news that impact the Forex market. Plan your trades around major announcements.'
  },
  {
    name: 'Pip Calculator',
    icon: '🧮',
    path: '/tools/pip-calculator',
    description: 'Calculate the value of a pip for any currency pair. Essential for risk management and position sizing.'
  },
  {
    name: 'Position Size Calculator',
    icon: '📏',
    path: '/tools/position-size-calculator',
    description: 'Determine the optimal lot size for your trades based on account size, risk, and stop loss.'
  },
  {
    name: 'Risk to Reward Calculator',
    icon: '⚖️',
    path: '/tools/risk-reward-calculator',
    description: 'Evaluate your trade setups by comparing potential profit to potential loss. Make smarter trading decisions.'
  },
  {
    name: 'Margin Calculator',
    icon: '💰',
    path: '/tools/margin-calculator',
    description: 'Find out how much margin you need to open a trade with your chosen leverage and position size.'
  },
  {
    name: 'Currency Strength Meter',
    icon: '💹',
    path: '/tools/currency-strength-meter',
    description: 'See which currencies are strong or weak in real time. Identify the best pairs to trade.'
  }
];

const ToolsHome = () => (
  <div className="page-container">
    <div className="tools-home-container">
      <h1 className="tools-home-title">Forex Tools</h1>
      <p className="tools-home-intro">
        Welcome to the TraderLibrary5 Forex Tools section. Here you'll find powerful calculators, live charts, and indicators to help you trade smarter and manage risk effectively.
      </p>
      <div className="tools-list">
        {tools.map((tool) => (
          <div className="tool-card" key={tool.name}>
            <div className="tool-icon">{tool.icon}</div>
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-desc">{tool.description}</p>
            <Link to={tool.path} className="tool-link">Go to Tool</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ToolsHome; 