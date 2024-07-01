// src/ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>Need any help or support for anything, We provide 24x7 assistance to our customers.</p>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label>Name *</label>
            <input type="text" placeholder="What's your name?" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="What's your Email?" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder="What's your Contact number?" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Elaborate the difficulty you are facing for which need help." />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;