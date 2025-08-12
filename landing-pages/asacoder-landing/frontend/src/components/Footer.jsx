import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaTelegram, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/237653180273',
      color: '#25D366'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://t.me/ASACODER',
      color: '#0088cc'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ashuembom-stephen-akembom-b84302260/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Ashuembomstephenakembom',
      color: '#333'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Forex Training',
    'Digital Marketing',
    'ICT Training'
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        <motion.div 
          className="footer-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <div className="footer-logo">
              <h3>ASACODER</h3>
              <p>Professional Web Developer, Forex Trainer & Digital Marketing Expert</p>
            </div>
            <div className="footer-description">
              <p>
                Transforming ideas into digital reality. Specializing in modern web development, 
                forex trading education, and digital marketing strategies to help businesses grow.
              </p>
            </div>
            <div className="footer-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': social.color }}
                  >
                    <social.icon />
                    <span className="social-tooltip">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="footer-service">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+237653180273" className="contact-value">
                    +237 653 180 273
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:contact@asacoder.com" className="contact-value">
                    contact@asacoder.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Cameroon</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <motion.div 
            className="footer-bottom-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
                         <div className="copyright">
               <p>
                 © {new Date().getFullYear()} ASACODER. All rights reserved.
               </p>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          scale: 1.1,
          y: -3,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
