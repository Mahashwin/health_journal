import React, { useState } from 'react';
import './Navbar.css';
import profileLogo from './logo.png'; // Assuming your profile logo is named logo.png

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add your theme switching logic here
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Main navigation links */}
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/symptom-tracker" className="nav-link">Symptom Tracker</a>
          <a href="/patient-details" className="nav-link">Patient Details</a>
          <a href="/login" className="nav-link">Login</a>
          <a href="/signup" className="nav-link">Signup</a>
          <a href="/dashboard" className="nav-link">Dashboard</a>
        </div>

        {/* Right side icons */}
        <div className="nav-icons">
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            className="icon-button"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Settings */}
          <button 
            className="icon-button"
            aria-label="Settings"
          >
            ⚙️
          </button>

          {/* Profile */}
          <img 
            src={profileLogo} 
            alt="Profile" 
            className="profile-icon" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
