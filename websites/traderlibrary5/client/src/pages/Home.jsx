// ===========================================
// Home.jsx - Main Landing Page Component
// ===========================================
// This is the primary landing page for TraderLibrary5aturing:
// - Hero section with welcome message and key features
// - Mission statement and value proposition
// - Feature highlights and differentiators
// - Roadmap exploration section
// - Daily signal preview
// - Latest blog posts showcase
// - Founder's note
//
// The page uses inline styles for consistent branding and responsive design.
// All content is structured in clear sections with semantic HTML.

import React from 'react';
import TL5Image from '../assets/TL5.jpeg';

const Home = () => {
  // ===============================
  // OLD HOMEPAGE CONTENT (commented out for backup)
  // ===============================
  /*
  <div className="home page-container">
    ... (old homepage JSX goes here, excluding import/export)
  </div>
  */
  // ===============================
  // END OLD HOMEPAGE CONTENT
  // ===============================

  return (
    <div className="home page-container">
      {/* ===========================================
          HERO SECTION – WELCOME & VALUE PROPOSITION
          ===========================================
          This section introduces visitors to TraderLibrary5 with:
          - Compelling headline with brand messaging
          - Key features list for quick understanding
          - Call-to-action buttons for user engagement
      */}
      <section className="hero-section homepage-card" style={{textAlign: 'center'}}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#003049', marginBottom: '1rem', lineHeight: 1.2 }}>
          Welcome to TraderLibrary5<br />
          <span style={{ fontSize: '2rem', fontWeight: 500, color: '#005580', fontStyle: 'italic' }}>Learn. Practice. Grow</span>
          <span style={{ color: '#005580', fontWeight: 400 }}>
            <span style={{fontStyle: 'italic'}}> with clarity.</span>
          </span>
        </h1>
        <div style={{ maxWidth: 600, margin: '0 auto 2rem auto', color: '#003049', fontSize: '1.08rem', lineHeight: 1.7 }}>
          <p>Whether you're a beginner, intermediate, or advanced trader,<br />
          TraderLibrary5 is your trusted roadmap to mastering Forex step by step.</p>
          <ul style={{ margin: '1.2rem 0', textAlign: 'left', display: 'inline-block', color: '#222', fontSize: '1rem', lineHeight: 1.7 }}>
            <li> Free & premium ebooks</li>
            <li> Simple video lessons</li>
            <li> Real trading tools</li>
            <li> Daily 8AM signals</li>
            <li> Broker & prop firm help</li>
            <li> Strategy & mindset training</li>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Start Your Trading Journey</button>
          <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Browse the Library</button>
        </div>
      </section>

      {/* ===========================================
          SECTION 1 WHY TRADERLIBRARY5EXISTS
          ===========================================
          This section explains the problem we solve and our mission:
          - Addresses common pain points in forex education
          - Presents our solution and approach
          - Defines our mission statement
      */}
      <section className="reason-section homepage-card" style={{textAlign: 'center'}}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          Why TraderLibrary5 Exists
        </h2>
        <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.1rem', color: '#222', lineHeight: 1.7 }}>
          Too many traders dive into Forex with excitement only to feel overwhelmed by conflicting strategies, confusing content, and empty promises.<br /><br />
          TraderLibrary5 was built to change that.<br /><br />
          We’re here to provide a focused, step-by-step path that cuts through the noise and helps you grow with real tools, simple education, and consistent guidance.
        </p>
        <div style={{ fontWeight: 'bold', color: '#003049', margin: '2rem 0 0.5rem 0', fontSize: '1.15rem' }}>Our Mission</div>
        <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.08rem', color: '#222', lineHeight: 1.7 }}>
          To help traders learn with clarity, grow with confidence, and succeed with structure no hype, no confusion, just purpose-driven progress.
        </p>
      </section>

      {/* ===========================================
          SECTION2– WHAT MAKES US DIFFERENT
          ===========================================
          This section highlights our unique value propositions:
          - Four key differentiators in card layout
          - Each card explains a specific benefit
          - Responsive grid layout for mobile/desktop
      */}
      <section className="why-section homepage-card" style={{textAlign: 'center'}}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '2rem' }}>
          Why TraderLibrary5 Stands Out
        </h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', margin: '0 auto', maxWidth: 900
        }}>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Free Trading Education</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              No more information overload. We give you simple ebooks and videos that teach real concepts without hype designed for beginners who want clarity and results.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Clear Market Breakdown</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Our daily 8AM updates explain what’s happening in the market in plain English so you can trade with confidence, not confusion.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Practical Tools</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              We only offer tools you’ll actually use like trading calculators, cheat sheets, and indicators that simplify your decisions, not complicate them.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Support at Every Level</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Wherever you are starting out, growing, or aiming for funding,TraderLibrary5 gives you structure, consistency, and guidance at every stage of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================
          SECTION 3– EXPLORE THE ROADMAP
          ===========================================
          This section showcases all main features/sections:
          - Six feature cards in responsive grid
          - Each card describes a specific section of the platform
          - Encourages exploration of different content areas
      */}
      <section className="explore-section homepage-card" style={{textAlign: 'center'}}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          Explore TraderLibrary5  One Step at a Time
        </h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', margin: '0 auto', maxWidth: 1100
        }}>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Ebook Library</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Access a growing collection of ebooks covering Forex basics, risk management, strategy building, and trader psychology tailored to help you grow smarter.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Learn Forex</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Skip the fluff and dive into clear, visual lessons. These embedded YouTube videos walk you through everything from beginner setups to real market structure.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Trading Tools</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Whether it’s calculating your lot size or checking pip values, our tools are designed to give you instant clarity in your trades no extra downloads needed.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>ASA TCONCEPT</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Explore the founder’s personal strategy, built on 6 precision based models that interpret the market using monthly, weekly, and daily structure.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Blog</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Stay sharp with posts that go beyond surface-level tips. We cover practical strategies, mindset training, and insights that help you grow sustainably.
            </p>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 240}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>VIP Blog</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5 }}>
              Serious about trading? Our VIP section gives you daily fundamental signals, in-depth technical outlooks, and advanced analysis on Gold, EURUSD, Oil, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================
          SECTION 4 – TODAY'S SIGNAL
          ===========================================
          This section promotes the daily signal feature:
          - Highlights the 8AM update schedule
          - Lists the main currency pairs covered
          - Includes call-to-action button
      */}
      <section className="homepage-card" style={{textAlign: 'center'}}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem' }}>
          Today’s Signal  Updated Every 8AM
        </h2>
        <p style={{ maxWidth: 700, margin: '0 auto 2rem auto', fontSize: '1.1rem', color: '#222', lineHeight: 1.7 }}>
          Fundamental signals on Gold, EURUSD, GBPUSD, and US Oil<br />
          posted fresh each morning to guide your day.
        </p>
        <button className="modern-btn" style={{background: '#02283a', color: '#ffc700', marginTop: '-1rem'}}>View Today’s Signal</button>
      </section>

      {/* ===========================================
          SECTION 5 – LATEST BLOG POSTS
          ===========================================
          This section showcases recent blog content:
          - Three featured blog posts in card layout
          - Each card has title, excerpt, and read more button
          - Demonstrates the quality and variety of content
      */}
      <section className="latest-blog-section homepage-card" style={{textAlign: 'center'}}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003049', marginBottom: '1.5rem', textAlign: 'center' }}>
          Latest From Our Blog
        </h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', margin: '0 auto', maxWidth: 1100, textAlign: 'left'
        }}>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>How to Start Trading Forex in 2025</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              A clear, step-by-step guide to help beginners avoid common mistakes and start trading with structure, not stress.
            </p>
            <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Read More</button>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Top 5 Trading Tools Every Trader Needs</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Cut through the clutter with this list of essential tools that actually improve your decision-making and save time.
            </p>
            <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Read More</button>
          </div>
          <div className="homepage-card" style={{flex: '1 1 220px', minWidth: 200, maxWidth: 340}}>
            <h3 style={{ color: '#003049', fontWeight: 'bold', marginBottom: 10, fontSize: '1.1rem' }}>Psychology of Successful Traders</h3>
            <p style={{ color: '#333', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: 10 }}>
              Discover how mindset, emotional control, and discipline make the difference between winning and losing in the long run.
            </p>
            <button className="modern-btn" style={{background: '#02283a', color: '#ffc700'}}>Read More</button>
          </div>
        </div>
      </section>

      {/* ===========================================
          FOUNDER'S NOTE
          ===========================================
          This section adds a personal touch with:
          - Quote from the founder (ASA TCONCEPT)
          - Personal connection to the platform's mission
          - Styled as a highlighted blockquote
      */}
      <section className="homepage-card" style={{textAlign: 'center', marginTop: '2.5rem', background: '#f5f7fa'}}>
        <h3 style={{ fontWeight: 'bold', color: '#003049', fontSize: '1.15rem', marginBottom: 10 }}>FOUNDER'S NOTE</h3>
        <blockquote style={{ fontStyle: 'italic', color: '#222', maxWidth: 700, margin: '0 auto 1.2rem auto', lineHeight: 1.7 }}>
          "I built TraderLibrary5 to make trading clearer, simpler, and more guided<br />
          because I was tired of all the noise. If that’s you too, welcome."
        </blockquote>
        <div style={{ fontWeight: 'bold', color: '#005580', fontSize: '1.1rem' }}>ASA TCONCEPT</div>
      </section>
    </div>
  );
};

export default Home; 