import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
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
import Tools from './pages/Tools';
import PipCalculator from './pages/PipCalculator';
import ToolsHome from './pages/ToolsHome';
import EconomicCalendar from './pages/EconomicCalendar';
import PositionSizeCalculator from './pages/PositionSizeCalculator';
import RiskRewardCalculator from './pages/RiskRewardCalculator';
import MarginCalculator from './pages/MarginCalculator';
import CurrencyStrengthMeter from './pages/CurrencyStrengthMeter';
import Info from './pages/Info';
import ScrollToHash from './components/ScrollToHash';
import ScrollToTop from './components/ScrollToTop';

// App is the root component of the application
// It uses a flex column layout for a sticky footer
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <div className="app-root"> {/* Flex column parent for sticky footer */}
        <Navbar />
        <main className="main-content"> {/* Main content grows to fill space */}
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
            <Route path="/tools/pip-calculator" element={<PipCalculator />} />
            <Route path="/tools" element={<ToolsHome />} />
            <Route path="/tools/economic-calendar" element={<EconomicCalendar />} />
            <Route path="/tools/position-size-calculator" element={<PositionSizeCalculator />} />
            <Route path="/tools/risk-reward-calculator" element={<RiskRewardCalculator />} />
            <Route path="/tools/margin-calculator" element={<MarginCalculator />} />
            <Route path="/tools/currency-strength-meter" element={<CurrencyStrengthMeter />} />
            {/* Add more routes as needed */}
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
