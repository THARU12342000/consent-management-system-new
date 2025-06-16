import React, { useState } from 'react';
import ProductList from '../components/products/ProductList';
import AgreementForm from '../components/agreements/AgreementForm';
import OrderSummary from '../components/orders/OrderSummary';

const Dashboard = ({ customer }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <div>
      <h1>Dashboard</h1>
      <ProductList onSelectProduct={setSelectedProduct} />
      {selectedProduct && customer && (
        <AgreementForm
          customerId={customer._id}
          productId={selectedProduct._id}
          onConsentGiven={setConsentGiven}
        />
      )}
      {consentGiven && <OrderSummary />}
    </div>
  );
};

export default Dashboard;
