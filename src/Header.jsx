// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Revolutionize user authentication effortlessly with our secure APIs.</h1>
        <p>Say goodbye to authentication headaches! Protect your platform with advanced fraud detection algorithms.</p>
        <button className="pricing-button">View Pricing</button>
      </div>
    </header>
  );
};

export default Header;