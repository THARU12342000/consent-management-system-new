import React, { useState, useEffect } from 'react';
import api from '../../api/api';

const AgreementForm = ({ customerId, productId, onConsentGiven }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAgreement = async () => {
      try {
        const { data } = await api.get(`/agreements/customer/${customerId}`);
        const agreement = data.find(a => a.productId === productId);
        setConsentGiven(agreement?.consentGiven || false);
      } catch {
        setError('Failed to load consent');
      } finally {
        setLoading(false);
      }
    };
    if (customerId && productId) fetchAgreement();
  }, [customerId, productId]);

  const handleConsentChange = async (e) => {
    const consent = e.target.checked;
    setConsentGiven(consent);
    try {
      await api.post('/agreements', {
        customerId,
        productId,
        consentGiven: consent,
        termsVersion: '1.0',
      });
      onConsentGiven(consent);
    } catch {
      setError('Failed to update consent');
    }
  };

  if (loading) return <p>Loading consent status...</p>;

  return (
    <div>
      <h3>Consent Agreement</h3>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <label>
        <input type="checkbox" checked={consentGiven} onChange={handleConsentChange} />
        I give my consent to use my data for this product.
      </label>
    </div>
  );
};

export default AgreementForm;
