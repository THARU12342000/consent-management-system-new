// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import Login from './components/customers/Login';
import Register from './components/customers/Register';
import ProductList from './components/products/ProductList';
import AgreementForm from './components/agreements/AgreementForm';
import OrderSummary from './components/orders/OrderSummary';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/agreements" element={<AgreementForm />} />
        <Route path="/orders" element={<OrderSummary />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
