import React from 'react';

const Home = () => {
  return (
    <>
      {/* HERO SECTION (remains as a centered card) */}
      <div className="stacked-card hero-card">
        <h1>Master Forex Trading. Grow. Profit.</h1>
        <p>Free education, signals & tools</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Free</button>
          <button className="btn btn-vip">Join VIP Signals</button>
        </div>
      </div>

      {/* WELCOME CARD - end-to-end full width */}
      <div className="welcome-card">
        <h2>👋 Welcome to TraderLibrary5</h2>
        <p>Welcome to a new era of forex mastery. Whether you're a beginner or pro, you'll find the tools, strategies, and support to elevate your trading journey.</p>
      </div>

      {/* REASON CARD - end-to-end full width */}
      <div className="reason-card">
        <h2>🎯 Reason We Exist</h2>
        <p>We close the gap between knowledge and real profits with tools, signals, and education.</p>
      </div>

      {/* WHY CHOOSE US CARD - end-to-end full width */}
      <div className="why-card">
        <h2>✅ Why Choose Us</h2>
        <ul>
          <li>Daily analysis & signals</li>
          <li>Trusted brokers & prop firms</li>
          <li>Tools + calculators</li>
          <li>VIP access for serious traders</li>
        </ul>
      </div>

      {/* EXPLORE CARD - end-to-end full width */}
      <div className="explore-card">
        <h2>🔍 Explore Our Top Sections</h2>
        <div className="explore-row">
          <div className="explore-item">📘 Ebook</div>
          <div className="explore-item">🎓 Learn</div>
          <div className="explore-item">📊 Signals</div>
        </div>
        <div className="explore-row">
          <div className="explore-item">🛠 Tools</div>
          <div className="explore-item">💼 Brokers</div>
          <div className="explore-item">🔐 VIP</div>
        </div>
      </div>

      {/* TODAY'S SIGNAL CARD - end-to-end full width */}
      <div className="signal-card">
        <h2>📉 Today's Signal (Preview)</h2>
        <p>Sell XAUUSD - CPI data supports USD</p>
        <button className="btn btn-secondary">View Full Signal Breakdown</button>
      </div>

      {/* JOIN FREE OFFER CARD - end-to-end full width */}
      <div className="join-card">
        <h2>🎁 Join Free & Get Bonus eBook PDF</h2>
        <p>Top 10 Forex Mistakes to Avoid</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button type="submit" className="btn btn-primary">Subscribe Now</button>
        </form>
      </div>

      {/* LATEST BLOG POSTS CARD - end-to-end full width */}
      <div className="blog-card">
        <h2>📰 Latest Blog Posts</h2>
        <ul className="blog-list">
          <li>"US Oil Outlook This Week" <button className="btn-link">Read More</button></li>
          <li>"Beginner Tips to Survive Volatility" <button className="btn-link">Read More</button></li>
          <li>"EURUSD: What's Next After ECB?" <button className="btn-link">Read More</button></li>
        </ul>
      </div>
    </>
  );
};

export default Home; 