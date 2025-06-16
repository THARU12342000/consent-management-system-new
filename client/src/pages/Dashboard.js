import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to Consent Management System</h1>
      <nav>
        <ul>
          <li><Link to="/products">View Products</Link></li>
          <li><Link to="/agreements">Manage Agreements</Link></li>
          <li><Link to="/orders">View Orders</Link></li>
        </ul>
      </nav>
    </div>
  );
}
