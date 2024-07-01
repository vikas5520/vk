// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Secauth</h2>
          <p>Follow us on</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-icon.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>User Authentication</li>
            <li>Fraud Protection</li>
            <li>User Management</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Terms and Conditions</li>
            <li>Technical Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Terms and Conditions</li>
            <li>Technical Support</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;