import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/images/NITRKL.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="NIT Rourkela Logo" />
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/committees">Committees</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/call-for-papers">Call for Papers</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/registration">Sponsorship</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Prof. Krishna Pramanik</p>
          <p>Contact: +91-661-2462283</p>
          <p>Email: <a href="mailto:icabtemd2025@gmail.com">icabtemd2025@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ICABTEMD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
