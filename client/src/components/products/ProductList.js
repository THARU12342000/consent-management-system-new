// File: client/src/components/products/ProductList.js
import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => <li key={p._id}>{p.name}</li>)}
      </ul>
    </div>
  );
};

export default ProductList;
