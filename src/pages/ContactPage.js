import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" />

      <div className="contact-container" data-aos="fade-up">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>
            <strong>Conference Chair:</strong><br />
            Prof. Krishna Pramanik
          </p>
          <p>
            <strong>Contact Number:</strong><br />
            +91-661-2462283
          </p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:icabtemd2025.info@example.com">icabtemd2025.info@example.com</a>
          </p>
          <p>
            <strong>Address:</strong><br />
            Department of Biotechnology and Medical Engineering,<br />
            National Institute of Technology, Rourkela,<br />
            Odisha, India - 769008
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.739392823244!2d84.89752561495308!3d22.21323398537401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f7a3840683d%3A0x2918d695b6e92e4e!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1670000000000"
            title="NIT Rourkela Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
