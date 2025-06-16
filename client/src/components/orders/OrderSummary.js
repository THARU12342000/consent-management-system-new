// File: client/src/components/orders/OrderSummary.js
import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {orders.map(o => <li key={o._id}>{o.details}</li>)}
      </ul>
    </div>
  );
};

export default OrderSummary;
