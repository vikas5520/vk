// src/FAQ.js
import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <h2>FAQs</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>What is secure user authentication?</h3>
          <p>Secure user authentication is the process of verifying the identity of a user before granting access to a system or application. It ensures that only authorized users can access the resources, thereby protecting sensitive data from unauthorized access.</p>
        </div>
        <div className="faq-item">
          <h3>Why is secure user authentication important?</h3>
        </div>
        <div className="faq-item">
          <h3>What authentication methods does your application support?</h3>
        </div>
        <div className="faq-item">
          <h3>How does two-factor authentication (2FA) work?</h3>
        </div>
      </div>
    </section>
  );
};

export default FAQ;