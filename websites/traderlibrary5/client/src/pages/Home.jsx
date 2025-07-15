import React from 'react';
import TL5Image from '../assets/TL5.jpeg'; // Import the background image

// ===============================
// Home Page - TraderLibrary5
// ===============================
// This page is divided into 5 main sections:
// 1. Hero/Welcome Section
// 2. Reason Section
// 3. Why We Exist Section
// 4. Explore Our Resources
// 5. Latest Blog Posts
// ===============================

const Home = () => {
  return (
    <div className="home">
      {/* 1. Hero/Welcome Section - full width */}
      <section className="hero-section homepage-card">
        {/* Headline split into two lines for emphasis */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#003049', marginBottom: '1rem', lineHeight: 1.2 }}>
          Welcome to TraderLibrary5<br />
          <span style={{ fontSize: '2rem', fontWeight: 500, color: '#005580', fontStyle: 'italic' }}>Learn. Practice. Grow.</span>
        </h1>
        {/* Short, inviting subtext */}
        <div style={{ maxWidth: 600, margin: '0 auto 2rem auto', textAlign: 'left', color: '#003049', fontSize: '1.05rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '1rem' }}>
            Whether you're a beginner, intermediate, or pro trader, TraderLibrary5 is your go-to platform for mastering Forex trading.
          </p>
          <p style={{ marginBottom: '0.7rem' }}>We provide:</p>
          <ul style={{ marginLeft: '1.2rem', marginBottom: '1rem', color: '#222', fontSize: '1rem' }}>
            <li>Free and premium ebooks</li>
            <li>Embedded video lessons</li>
            <li>Powerful trading tools</li>
            <li>Daily market insights and signals</li>
            <li>Prop firm and broker recommendations</li>
            <li>Strategies to grow your trading skills with confidence</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Everything here is designed to help you learn at your own pace, avoid costly mistakes, and become the trader you aspire to be.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Start Your Trading Journey</button>
          <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Browse Ebooks</button>
        </div>
      </section>

      {/* 2. Reason Section - full width */}
      <section className="reason-section homepage-card">
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          The Reason Behind TraderLibrary5
        </h2>
        {/* Updated content */}
        <p style={{
          maxWidth: 700,
          margin: '0 auto',
          fontSize: '1.1rem',
          color: '#222',
          lineHeight: 1.7,
          textAlign: 'center',
        }}>
          Too many aspiring traders dive into Forex without proper guidance  overwhelmed by conflicting strategies, market noise, and unrealistic promises.<br /><br />
          <strong>TraderLibrary5 was created to be the solution.</strong><br /><br />
          We exist to offer a focused, honest learning space where beginners and growing traders can cut through the confusion, master the basics, and gain true confidence in the markets.<br /><br />
          Our mission is to empower you with clear education, practical tools, and trustworthy insights  so you can build your trading journey with purpose, not pressure.
        </p>
      </section>

      {/* 3. Why We Exist Section - full width */}
      <section className="why-section homepage-card">
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '2rem' }}>
          Why TraderLibrary5 Exists
        </h2>
        {/* 4 Trust-Building Cards */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          margin: '0 auto',
          maxWidth: 900,
        }}>
          {/* Card 1 */}
          <div className="homepage-card" style={{flex: '1 1 250px', minWidth: 220, maxWidth: 280}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 12, fontSize: '1.15rem' }}>
              To Provide Free Trading Education
            </h3>
            <p style={{ color: '#222', fontSize: '1rem', lineHeight: 1.5 }}>
              We simplify Forex through beginner-friendly ebooks, embedded video tutorials, and step-by-step lessons  so anyone can start learning without confusion or cost.
            </p>
          </div>
          {/* Card 2 */}
          <div className="homepage-card" style={{flex: '1 1 250px', minWidth: 220, maxWidth: 280}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 12, fontSize: '1.15rem' }}>
              To Help You Understand the Market
            </h3>
            <p style={{ color: '#222', fontSize: '1rem', lineHeight: 1.5 }}>
              We break down daily market news, trends, and price movements in clear, simple English — no jargon, no fluff  just what you need to trade smarter.
            </p>
          </div>
          {/* Card 3 */}
          <div className="homepage-card" style={{flex: '1 1 250px', minWidth: 220, maxWidth: 280}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 12, fontSize: '1.15rem' }}>
              To Give You the Tools to Grow
            </h3>
            <p style={{ color: '#222', fontSize: '1rem', lineHeight: 1.5 }}>
              From trading calculators to strategy guides, we equip you with the resources to practice, refine, and build your own profitable trading approach.
            </p>
          </div>
          {/* Card 4 */}
          <div className="homepage-card" style={{flex: '1 1 250px', minWidth: 220, maxWidth: 280}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 12, fontSize: '1.15rem' }}>
              To Support Traders at Every Level
            </h3>
            <p style={{ color: '#222', fontSize: '1rem', lineHeight: 1.5 }}>
              Whether you're just starting or already experienced, TraderLibrary5 helps you stay consistent, disciplined, and updated in a fast-moving market.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Explore Our Resources Section - full width */}
      <section className="explore-section homepage-card">
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          Explore TraderLibrary5
        </h2>
        {/* Section Description */}
        <p style={{
          maxWidth: 700,
          margin: '0 auto 2.5rem auto',
          fontSize: '1.1rem',
          color: '#222',
          lineHeight: 1.7,
        }}>
          At TraderLibrary5, we’ve thoughtfully organized everything you need to grow as a confident, skilled trader. Whether you're starting from scratch or refining your strategy, our curated sections are designed to support your journey — at your own pace, on your own terms.
        </p>
        {/* Resource Cards */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          margin: '0 auto',
          maxWidth: 1100,
        }}>
          {/* Ebook Library Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Ebook Library
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Download both free and premium ebooks tailored to all experience levels from beginner fundamentals to advanced trading strategies.
            </p>
          </div>
          {/* Learn Forex Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Learn Forex
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Watch easy-to-understand, practical video lessons embedded directly from YouTube to simplify your learning experience.
            </p>
          </div>
          {/* Trading Tools Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Trading Tools
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Access ready-to-use tools, indicators, and quick-reference cheat sheets to support your daily trading decisions.
            </p>
          </div>
          {/* ASA TCONCEPT Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              ASA TCONCEPT
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Explore our founder’s exclusive trading philosophy built on six precision-based models drawn from the monthly, weekly, and daily market structure.<br />
              Gain insight into the personal strategies designed to deliver clarity, structure, and consistent trading performance.
            </p>
          </div>
          {/* Blog Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Blog
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Stay informed with expert tips, market news, and valuable insights shared regularly by our TraderLibrary5 team.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Latest Blog Posts Section - full width */}
      <section className="latest-blog-section homepage-card" style={{textAlign: 'center'}}>
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem', textAlign: 'center' }}>
          Latest Blog Posts
        </h2>
        {/* Blog Post Cards (replace with dynamic content as needed) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          margin: '0 auto',
          maxWidth: 1100,
          textAlign: 'left',
        }}>
          {/* Blog Post 1 */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              How to Start Trading Forex in 2025
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              A step-by-step guide for beginners. Learn the basics, avoid common mistakes, and start your journey with confidence.
            </p>
            <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Read More</button>
          </div>
          {/* Blog Post 2 */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Top 5 Forex Trading Tools for 2025
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Discover the must-have tools and calculators to make smarter trading decisions.
            </p>
            <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Read More</button>
          </div>
          {/* Blog Post 3 */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              The Psychology of Successful Traders
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Master your mindset and emotions to gain an edge in the markets.
            </p>
            <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 