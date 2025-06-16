// File: client/src/components/agreements/AgreementForm.js
import React, { useState } from 'react';
import api from '../../api/api';

const AgreementForm = () => {
  const [agreement, setAgreement] = useState('');

  const submitAgreement = async () => {
    await api.post('/agreements', { agreement });
    alert('Agreement submitted');
  };

  return (
    <div>
      <h2>Agreement Form</h2>
      <textarea onChange={e => setAgreement(e.target.value)} />
      <button onClick={submitAgreement}>Submit</button>
    </div>
  );
};

export default AgreementForm;
