import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="welcome-text">Welcome to Your App</h1>
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;