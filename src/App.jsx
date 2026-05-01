import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FindPartner from './pages/FindPartner';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/" className="nav-logo">TRIP-TOGETHER</Link>
        <div className="nav-links">
          <Link to="/">🏠 Home</Link>
          <Link to="/find-partner">🔍 Explore</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-partner" element={<FindPartner />} />
      </Routes>

      <footer className="main-footer">
        <p className="footer-text">
          Made with <span className="heart">❤</span> for fellow wanderers. Adventure awaits!
        </p>
      </footer>
    </Router>
  );
}

export default App;