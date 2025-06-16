// File: client/src/components/agreements/AgreementForm.js
import React, { useState } from 'react';
import api from '../../api/api';

const AgreementForm = () => {
  const [agreementText, setAgreementText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/agreements', { text: agreementText });
      alert('Agreement submitted');
    } catch (error) {
      console.error('Error submitting agreement:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={agreementText} onChange={(e) => setAgreementText(e.target.value)} />
      <button type="submit">Submit Agreement</button>
    </form>
  );
};

export default AgreementForm;
