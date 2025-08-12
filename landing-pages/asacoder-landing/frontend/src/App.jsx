// Main App component for ASACODER landing page
// This component will contain all the sections of the landing page
import React from 'react'
import './App.css'
import './components/MobileAnimations.css'

// Import all the components (we'll create these next)
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ConnectionStatus from './components/ConnectionStatus'

function App() {
  return (
    <div className="App">
      {/* Navigation bar - fixed at the top */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        {/* Hero section - first thing visitors see */}
        <Hero />
        
        {/* About section - personal information and background */}
        <About />
        
        {/* Services section - what you offer */}
        <Services />
        
        {/* Process section - how you work */}
        <Process />
        
              {/* Contact section - contact form and information */}
      <Contact />
      
      {/* Footer section */}
      <Footer />
      </main>
      
      {/* Connection Status (only in development) */}
      <ConnectionStatus />
    </div>
  )
}

export default App
