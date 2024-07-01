// src/App.js
import React from 'react';
import Header from './Header';
import Features from './Features';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Features />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;