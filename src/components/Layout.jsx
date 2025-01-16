
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/symptom-tracker" className="nav-link">Symptom Tracker</Link></li>
          <li><Link to="/patient-details" className="nav-link">Patient Details</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/signup" className="nav-link">Signup</Link></li>
          <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
          
          
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
