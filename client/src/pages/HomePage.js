// src/pages/HomePage.js
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Consent Management System</h1>

      {/* Your homepage content here */}

      <CookieConsent
        location="bottom"
        buttonText="I Understand"
        cookieName="cmsCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance your browsing experience.{" "}
        <a href="/privacy-policy" style={{ color: "#f5e042" }}>
          Learn more
        </a>
      </CookieConsent>
    </div>
  );
};

export default HomePage;
