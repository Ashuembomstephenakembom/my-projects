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
          <span style={{ fontSize: '2rem', fontWeight: 500, color: '#005580' }}>Learn. Practice. Grow.</span>
        </h1>
        {/* Short, inviting subtext */}
        <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: '2rem', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          For every trader—beginner or pro. Free ebooks, simple lessons, and daily insights to help you grow.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <button className="modern-btn">Start Learning</button>
          <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Explore Our EbookLibrary</button>
        </div>
      </section>

      {/* 2. Reason Section - full width */}
      <section className="reason-section homepage-card">
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          The Reason Behind TraderLibrary5
        </h2>
        {/* Centered or left-aligned paragraph for clarity */}
        <p style={{
          maxWidth: 700,
          margin: '0 auto',
          fontSize: '1.1rem',
          color: '#222',
          lineHeight: 1.7,
          textAlign: 'center',
        }}>
          Many aspiring traders jump into Forex without proper guidance overwhelmed by noise, confused by strategies, or misled by hype.<br /><br />
          <strong>TraderLibrary5 was created to change that.</strong><br /><br />
          Our goal is to provide a calm, honest space where beginners and growing traders can learn at their pace, gain clarity, and build real confidence in the markets.
        </p>
      </section>

      {/* 3. Why We Exist Section - full width */}
      <section className="why-section homepage-card">
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c97a00', marginBottom: '2rem' }}>
          Why TraderLibrary5 Exists
        </h2>
        {/* 3 Trust-Building Cards */}
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
            <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.5 }}>
              Forex made easy through ebooks, videos, and simple lessons.
            </p>
          </div>
          {/* Card 2 */}
          <div className="homepage-card" style={{flex: '1 1 250px', minWidth: 220, maxWidth: 280}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 12, fontSize: '1.15rem' }}>
              To Help You Understand the Market
            </h3>
            <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.5 }}>
              Daily insights in plain Englis no jargon.
            </p>
          </div>
          {/* Card 3 */}
          <div className="homepage-card" style={{flex: '1 1 250px', minWidth: 220, maxWidth: 280}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 12, fontSize: '1.15rem' }}>
              To Give You the Tools to Grow
            </h3>
            <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.5 }}>
              Everything you need to build your own trading style.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Explore Our Resources Section - full width */}
      <section className="explore-section homepage-card">
        {/* Section Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          Explore Our Resources
        </h2>
        {/* Section Description */}
        <p style={{
          maxWidth: 700,
          margin: '0 auto 2.5rem auto',
          fontSize: '1.1rem',
          color: '#222',
          lineHeight: 1.7,
        }}>
          At TraderLibrary5, we’ve organized everything you need to grow as a trader. Whether you're starting from zero or looking to sharpen your strategy, explore our hand-picked sections to guide your journey all at your own pace.
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
              Download free and paid ebooks covering all levels of Forex trading.
            </p>
          </div>
          {/* Learn Forex Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Learn Forex
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Watch simple, practical video lessons embedded from YouTube.
            </p>
          </div>
          {/* Trading Tools Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Trading Tools
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Access tools, indicators, and cheat sheets you can use today.
            </p>
          </div>
          {/* ASA TCONCEPT Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              ASA TCONCEPT
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Explore our founder’s unique trading approach and concepts.
            </p>
          </div>
          {/* Blog Card */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Blog
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Read the latest posts, tips, and market news from our team.
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
            <button className="modern-btn">Read More</button>
          </div>
          {/* Blog Post 2 */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              Top 5 Forex Trading Tools for 2025
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Discover the must-have tools and calculators to make smarter trading decisions.
            </p>
            <button className="modern-btn">Read More</button>
          </div>
          {/* Blog Post 3 */}
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>
              The Psychology of Successful Traders
            </h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Master your mindset and emotions to gain an edge in the markets.
            </p>
            <button className="modern-btn">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 