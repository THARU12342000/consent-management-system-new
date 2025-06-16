// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Consent Management Dashboard</h2>

      <div className="dashboard-links">
        <Link to="/agreements">📝 Manage Agreements</Link>
        <Link to="/products">📦 View Products</Link>
        <Link to="/orders">🧾 Order Summary</Link>
      </div>
    </div>
  );
};

export default Dashboard;
