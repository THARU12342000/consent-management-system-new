
// File: client/src/components/customers/Register.js
import React, { useState } from 'react';
import api from '../../api/api';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    await api.post('/customers/register', formData);
    alert('Registered successfully');
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
