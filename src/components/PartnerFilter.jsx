import React, { useState } from 'react';

export default function PartnerFilter({ onFilterChange }) {
  return (
    <div className="filter-container">
      <div className="filter-grid">
        <div className="filter-item">
          <label className="data-label">Where to?</label>
          <input 
            type="text" 
            placeholder="Search Destination..." 
            className="filter-input"
          />
        </div>
        <div className="filter-item">
          <label className="data-label">Max Budget</label>
          <input 
            type="number" 
            placeholder="$" 
            className="filter-input" 
          />
        </div>
        <div className="filter-item">
          <label className="data-label">Travel Style</label>
          <select className="filter-input">
            <option>All Styles</option>
            <option>Backpacker</option>
            <option>Luxury</option>
            <option>Solo Traveler</option>
          </select>
        </div>
      </div>
    </div>
  );
}