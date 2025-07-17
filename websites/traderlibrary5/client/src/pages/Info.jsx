import React from 'react';
import './Info.css'; // Optional: for custom styles if needed

const Info = () => (
  <div className="info-page" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem', marginTop: '10px', paddingTop: '80px' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Welcome to TraderLibrary5</h1>

    {/* About Section */}
    <section id="about" style={{ marginBottom: '2.5rem' }}>
      <h2>About</h2>
      <p>
        TraderLibrary5 was created to solve a common problem: traders overwhelmed by confusing strategies and empty promises. We provide a clear path focused on education, practical tools, and daily market insights. Our mission is to help you grow with confidence and clarity, no hype—just real progress.<br/>
        Join us and discover why thousands of traders trust TraderLibrary5 as their roadmap.
      </p>
    </section>

    {/* Contact Section */}
    <section id="contact" style={{ marginBottom: '2.5rem' }}>
      <h2>Contact</h2>
      <p>
        Need help or have questions? Our team is here to support you at every step of your trading journey. Reach out via email or phone—we’re happy to guide you with quick, friendly responses. Whether you want more info about our courses, tools, or signals, contact us and we’ll get back to you promptly.
      </p>
    </section>

    {/* FAQ Section */}
    <section id="faq" style={{ marginBottom: '2.5rem' }}>
      <h2>FAQ</h2>
      <p>
        Got questions? We’ve got answers. Whether you’re curious about how our VIP signals work, how to subscribe, or where to start as a beginner, our FAQ is designed to give you straightforward answers without confusion. If you don’t find what you need, just reach out—we’re here to help.
      </p>
    </section>

    {/* Subscribe Section */}
    <section id="subscribe" style={{ marginBottom: '2.5rem' }}>
      <h2>Subscribe</h2>
      <p>
        Join our community and never miss a beat. Subscribe to get daily market signals, new trading lessons, exclusive offers, and updates delivered straight to your inbox. Start your journey with clarity and confidence by signing up today.
      </p>
    </section>

    {/* Privacy Policy Section */}
    <section id="privacy-policy" style={{ marginBottom: '2.5rem' }}>
      <h2>Privacy Policy</h2>
      <p>
        Your privacy is our priority. At TraderLibrary5, we handle your personal information with care and transparency. We only collect what’s necessary to improve your experience and keep your data safe. We never share your info without your consent. Read our full privacy policy to learn more about how we protect you.
      </p>
    </section>

    {/* Terms of Service Section */}
    <section id="terms-of-service" style={{ marginBottom: '2.5rem' }}>
      <h2>Terms of Service</h2>
      <p>
        Using TraderLibrary5 means agreeing to our clear, fair terms. These rules help protect you and our community, covering user responsibilities, content ownership, and limitations of liability. We want your experience to be safe, transparent, and professional. Please review our full terms before using the site.
      </p>
    </section>
  </div>
);

export default Info; 