import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import './App.css';
// Import all page components
import Home from './pages/Home';
import EbookLibrary from './pages/EbookLibrary';
import LearnForex from './pages/LearnForex';
import ASATConcept from './pages/ASATConcept';
import BrokersPropFirms from './pages/BrokersPropFirms';
import Blog from './pages/Blog';
import VIPBlog from './pages/VIPBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// App is the root component of the application
// It renders the Navbar and the main content area with routing
function App() {
  return (
    <Router>
      {/* Site-wide navigation bar */}
      <Navbar />
      {/* Main content area with routes */}
      {/* Add marginTop to prevent content from hiding under the fixed navbar (adjust if navbar height changes) */}
      <main style={{ padding: '2rem', marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebook-library" element={<EbookLibrary />} />
          <Route path="/learn-forex" element={<LearnForex />} />
          <Route path="/asat-concept" element={<ASATConcept />} />
          <Route path="/brokers-prop-firms" element={<BrokersPropFirms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vip-blog" element={<VIPBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
