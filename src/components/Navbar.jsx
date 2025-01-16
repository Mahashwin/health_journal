import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
    
        <div className="nav-icons">
         
          <button 
            onClick={toggleTheme}
            className="icon-button"
            aria-label="Toggle theme"
          >
            {isDarkMode ? 
              <i className="fa fa-sun icon"></i> : 
              <i className="fa fa-moon icon"></i>
            }
          </button>

          
          <button 
            className="icon-button"
            aria-label="Settings"
          >
            <i className="fa fa-cogs icon"></i>
          </button>

          
          <button 
            className="icon-button"
            aria-label="Profile"
          >
            <i className="fa fa-user icon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
