import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/customers/Register';
import Login from './components/customers/Login';
import ProductList from './components/products/ProductList';
import AgreementForm from './components/agreements/AgreementForm';
import OrderSummary from './components/orders/OrderSummary';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/products" /> : <Navigate to="/register" />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={isAuthenticated ? <ProductList /> : <Navigate to="/register" />}
        />
        <Route
          path="/agreements"
          element={isAuthenticated ? <AgreementForm /> : <Navigate to="/register" />}
        />
        <Route
          path="/orders"
          element={isAuthenticated ? <OrderSummary /> : <Navigate to="/register" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
