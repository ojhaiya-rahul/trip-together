import React from 'react';

export default function Filter({ setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <input 
        name="destination" 
        placeholder="Where to?" 
        className="input-field"
        onChange={handleChange}
      />
      <input 
        name="budget" 
        type="number"
        placeholder="Max Budget ($)" 
        className="input-field"
        onChange={handleChange}
      />
    </div>
  );
}