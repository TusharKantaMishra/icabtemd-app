import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/NITRKL.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMobileMenu = () => setIsOpen(false);



  const handleLinkClick = (path, hash) => {
    closeMobileMenu();
    if (location.pathname !== path || !hash) {
        navigate(path + (hash || ''));
    } else {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="NIT Rourkela Logo" />
      </NavLink>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")} onClick={closeMobileMenu} end>
              Home
            </NavLink>
          </li>
          
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "") } onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/committees" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "") } onClick={closeMobileMenu}>
              Committees
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/topics" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")} onClick={closeMobileMenu} end>
              Topics
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/call-for-papers" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "") } onClick={closeMobileMenu}>
              Call for Papers
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/registration" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "") } onClick={closeMobileMenu}>
              Registration
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/contact" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")} onClick={closeMobileMenu} end>
              Contact
            </NavLink>
          </li>
          
        </ul>
    </nav>
  );
};

export default Navbar;
