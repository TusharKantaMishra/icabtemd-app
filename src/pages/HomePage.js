import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nitrGateImg from '../assets/images/nitrourkela gate img.webp';
import researchGroupImg from '../assets/images/research group.jpg';
import '../styles/HomePage.css';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure styles are applied before transition starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <section className={`hero-banner ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>INTERNATIONAL CONFERENCE ON ADVANCED BIOMATERIALS FOR TISSUE ENGINEERING AND MEDICAL DEVICES (ICABTEMD 2025)</h1>
            <p className="sub-title">28–30 November 2025 | NIT Rourkela, Odisha, India</p>
            <div className="organizer-details">
              <p>Organised by</p>
              <p>Center of Excellence in Tissue Engineering, Department of Biotechnology and Medical Engineering</p>
              <p>National Institute of Technology Rourkela, Odisha, India</p>
            </div>
            <a href="/Brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-brochure">Brochure</a>
          </div>
          <div className="hero-image">
            <img src={nitrGateImg} alt="NIT Rourkela Gate" />
          </div>
        </div>
      </section>

      <section className="home-section" data-aos="fade-up">
        <h2>About ICABTEMD 2025</h2>
        <div className="about-content">
          <div className="about-text">
            <p>The International Conference on Advanced Biomaterials for Tissue Engineering and Medical Devices (ICABTEMD 2025) aims to address critical health issues arising from tissue and organ failure due to injury or damage. These challenges significantly impact health and quality of life, making tissue engineering a promising technique for providing integrated solutions. This field, along with regenerative medicine, has garnered substantial interest from both academic and corporate sectors due to its potential to revolutionize healthcare by enabling effective treatments for tissue and organ damage.</p>
            <div className="quick-links">
              <Link to="/call-for-papers" className="btn btn-secondary">Submit Abstract</Link>
              <Link to="/topics" className="btn btn-secondary">View Topics</Link>
            </div>
          </div>
          <div className="about-image">
            <img src={researchGroupImg} alt="Research Group" />
          </div>
        </div>
      </section>

      <section className="home-section" data-aos="fade-up">
        <h2>KEYNOTE ADDRESS/ INVITED LECTURES</h2>
        <p>A series of Keynote speech and Invited lectures will be delivered by eminent Scientists from USA, UK, Japan, Romania, Singapore, and India.</p>
      </section>

      <section className="home-section" data-aos="fade-up">
        <h2>TECHNICAL EXHIBITION</h2>
        <p>Technical exhibitions shall be organized during the conference to highlight the advances made in process technologies, products, instruments, equipments etc. from companies related to this field.</p>
      </section>

      <section className="home-section" data-aos="fade-up">
        <h2>STUDENT SESSION</h2>
        <p>An exclusive discussion session for interaction among students from around the globe to share ideas and current research hot topics.</p>
      </section>

      <section className="home-section participants-section" data-aos="fade-up">
        <h2>PARTICIPANTS</h2>
        <p>Engineers, Medical Professionals, Scientists, Research scholars & students from Academic Institutions, Research Organizations and Industries across the globe.</p>
      </section>
    </div>
  );
};

export default HomePage;
