// ===========================================
// ToolsHome.jsx - Tools Dashboard Page
// ===========================================
// This page lists all available Forex trading tools in TraderLibrary5.
// Each tool is displayed as a card with:
//   - Name and icon
//   - Short description
//   - Link to the dedicated tool page
//
// The tools array can be easily extended to add more tools in the future.
// The layout is responsive and styled via ToolsHome.css.
//
// Usage: Displayed at /tools route. Provides navigation to all calculators and indicators.

import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsHome.css';

// ===============================
// Tools Data Array
// ===============================
// Each object represents a tool with its name, icon, route path, and description.
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

// ===============================
// ToolsHome Component
// ===============================
// Renders the dashboard with all tool cards and navigation links.
const ToolsHome = () => (
  <div className="page-container">
    <div className="tools-home-container">
      {/* Page Title and Intro */}
      <h1 className="tools-home-title">Forex Tools</h1>
      <p className="tools-home-intro">
        Welcome to the TraderLibrary5 Forex Tools section. Here you'll find powerful calculators, live charts, and indicators to help you trade smarter and manage risk effectively.
      </p>
      {/* Tools List Section */}
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