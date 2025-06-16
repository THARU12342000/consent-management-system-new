import React from 'react';
import { getUserFromToken, removeToken } from '../../utils/auth';

const Navbar = ({ onLogout }) => {
  const user = getUserFromToken();

  const handleLogout = () => {
    removeToken();
    onLogout();
  };

  return (
    <nav>
      <h1>Consent Management</h1>
      {user ? (
        <div>
          <span>Welcome, {user.id}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <span>Please login</span>
      )}
    </nav>
  );
};

export default Navbar;
