// src/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Features we provide</h2>
      <p>Empower your applications with seamless user authentication. Our APIs handle it all, so you can focus on what matters most.</p>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Secure User Authentication</h3>
          <ul>
            <li>Seamless integration of robust authentication mechanisms via our APIs.</li>
            <li>Eliminates the need for clients to build authentication systems from scratch.</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Fraud Detection Algorithms</h3>
          <ul>
            <li>Seamless integration of robust authentication mechanisms via our APIs.</li>
            <li>Eliminates the need for clients to build authentication systems from scratch.</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Scalability and Reliability</h3>
          <ul>
            <li>Seamless integration of robust authentication mechanisms via our APIs.</li>
            <li>Eliminates the need for clients to build authentication systems from scratch.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;