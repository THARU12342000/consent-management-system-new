
// File: client/src/components/orders/OrderSummary.js
import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await api.get('/orders');
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>Order #{order._id}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;