import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_PRODUCT_SERVICE_URL}/products`);
        setProducts(res.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>{p.name} - ${p.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
