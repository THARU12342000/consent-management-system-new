import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await api.get('/orders');
        setOrders(data);
      } catch {
        setError('Failed to load orders');
      }
    };
    fetchOrders();
  }, []);

  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <div>
      <h2>Your Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o._id}>
            Product ID: {o.productId} <br />
            Status: {o.orderStatus} <br />
            Address: {o.address} <br />
            Ordered on: {new Date(o.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
