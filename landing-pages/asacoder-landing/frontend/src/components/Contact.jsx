// Contact component for ASACODER landing page
// This section includes a contact form and contact information
import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp, FaLinkedin, FaTelegram } from 'react-icons/fa'
import axios from 'axios'
import './Contact.css'

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send form data to backend
      const backendUrl = window.location.hostname === '1fd2e51e55f7.ngrok-free.app' 
        ? 'https://1fd2e51e55f7.ngrok-free.app:5000' 
        : 'http://localhost:5000';
      
      const response = await axios.post(`${backendUrl}/api/contact/submit`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 second timeout
      })
      
      if (response.data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      if (error.code === 'ECONNREFUSED') {
        setSubmitStatus('error')
        console.log('Backend server is not running. Please start the backend server.')
      } else {
        setSubmitStatus('error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Contact information - Updated to match ASACODER's contact methods
  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+237 653 180 273',
      link: 'https://wa.me/237653180273',
      color: '#25D366'
    },
                    {
                  icon: <FaEnvelope />,
                  title: 'Email',
                  value: 'stephen@asaofficial.org',
                  link: 'mailto:stephen@asaofficial.org',
                  color: '#EA4335'
                },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'ashuembom-stephen-akembom',
      link: 'https://www.linkedin.com/in/ashuembom-stephen-akembom-b84302260/',
      color: '#0077B5'
    },
    {
      icon: <FaTelegram />,
      title: 'Telegram',
      value: '@ASACODER',
      link: 'https://t.me/ASACODER',
      color: '#0088CC'
    }
  ]

  return (
    <section id="contact" className="contact bg-light">
      <div className="section-container">
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to bring your idea to life or improve your skills? Reach out and let's make it happen.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact form */}
          <div className="contact-form-section">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit status messages */}
              {submitStatus === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out through any of these channels. I'm always excited to hear about 
              new projects and opportunities to collaborate.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Animated location map */}
            <div className="location-map">
              <h4>Service Region</h4>
              <div className="map-container">
                <div className="map-placeholder">
                  <FaMapMarkerAlt className="map-icon" />
                  <p>Remote Services Available Worldwide</p>
                  <div className="service-regions">
                    <span className="region-tag">Web Development</span>
                    <span className="region-tag">Forex Training</span>
                    <span className="region-tag">Digital Marketing</span>
                    <span className="region-tag">ICT Training</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="contact-additional">
              <h4>Response Time</h4>
              <p>I typically respond within 24 hours during business days.</p>
              
              <h4>Project Consultation</h4>
              <p>Free initial consultation to discuss your project requirements and timeline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
