import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TopicsPage from './pages/TopicsPage';


import CallForPapersPage from './pages/CallForPapersPage';
import RegistrationPage from './pages/RegistrationPage';
import SponsorshipPage from './pages/SponsorshipPage';
import ContactPage from './pages/ContactPage';
import CommitteesPage from './pages/CommitteesPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/call-for-papers" element={<CallForPapersPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
