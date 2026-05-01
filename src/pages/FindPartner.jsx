import React, { useState } from 'react';
import { travelPartners } from '../data/dummyData';

export default function FindPartner() {
 
  const [place, setPlace] = useState('');
  const [budget, setBudget] = useState('');

  
  const filteredPartners = travelPartners.filter(user => {
    const matchPlace = user.destination.toLowerCase().includes(place.toLowerCase());
    const matchBudget = budget === '' || user.budget <= parseInt(budget);
    return matchPlace && matchBudget;
  });

  const handleConnect = (contactUrl) => {
    window.open(contactUrl, '_blank');
  };

  return (
    <div className="explorer-wrapper">
      <h2 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px' }}>
        Find Your Perfect Partner
      </h2>

      {/* --- FILTER SECTION --- */}
      <div className="filter-container">
        <div className="filter-grid">
          <div className="filter-item">
            <label className="data-label">Where to go?</label>
            <input 
              type="text" 
              placeholder="e.g. Bali, Paris..." 
              className="filter-input"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className="filter-item">
            <label className="data-label">Max Budget ($)</label>
            <input 
              type="number" 
              placeholder="Enter amount" 
              className="filter-input"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* --- RESULTS GRID --- */}
      <div className="card-grid">
        {filteredPartners.length > 0 ? (
          filteredPartners.map(user => (
            <div className="user-card" key={user.id}>
              <h3 className="user-name">{user.name}</h3>
              
              <div className="card-details-layout">
                <div className="detail-group">
                  <p className="data-label">Destination</p>
                  <p className="data-value">📍 {user.destination}</p>
                </div>
                
                <div className="detail-group">
                  <p className="data-label">Budget</p>
                  <p className="data-value">💰 ${user.budget}</p>
                </div>

                <div className="detail-group">
                  <p className="data-label">Date</p>
                  <p className="data-value">📅 {user.date}</p>
                </div>

                <div className="detail-group">
                  <p className="data-label">Interest</p>
                  <p className="data-value">✨ {user.interest}</p>
                </div>
              </div>
              
              <button 
                className="connect-btn" 
                onClick={() => handleConnect(user.contact)}
              >
                Connect Now
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--text-dim)' }}>
            No partners found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}