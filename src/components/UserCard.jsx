import React from 'react';

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>
      <div className="user-info">
        <p><strong>Destination:</strong> {user.destination}</p>
        <p><strong>Budget:</strong> ${user.budget}</p>
        <p className="user-date">📅 {user.date}</p>
      </div>
      <button className="connect-btn">Connect</button>
    </div>
  );
}