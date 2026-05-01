import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Travel Better,<br/>Together.</h1>
      <p className="hero-subtitle">
        Connect with like-minded adventurers and turn your solo trips 
        into unforgettable shared memories.
      </p>
      <Link to="/find-partner" className="nav-links" style={{marginTop: '30px'}}>
        <span style={{padding: '15px 40px', background: '#818cf8', borderRadius: '50px'}}>
          Start Your Journey
        </span>
      </Link>
    </div>
  );
}