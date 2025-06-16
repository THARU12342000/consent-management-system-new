import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      }
    };
    fetchProducts();
  }, []);

  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ${p.price.toFixed(2)} <br />
            {p.description} <br />
            <button onClick={() => onSelectProduct(p)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
