import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FindPartner from './pages/FindPartner';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        {/* --- NAVIGATION --- */}
        <nav className="nav">
          <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
            <span className="logo-text">TripTogether</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
          </div>
        </nav>

        {/* --- DYNAMIC CONTENT --- */}
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<FindPartner />} />
          </Routes>
        </main>

        {/* --- FOOTER --- */}
        <footer className="main-footer">
          <div className="footer-content">
            <p className="footer-text">© 2026 TripTogether. All rights reserved.</p>
            <div className="footer-links" style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <a href="#privacy" className="footer-text" style={{ fontSize: '0.8rem', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#terms" className="footer-text" style={{ fontSize: '0.8rem', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#contact" className="footer-text" style={{ fontSize: '0.8rem', textDecoration: 'none' }}>Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;