import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Portofolio Saya</h1>
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          {/* Tambahkan link untuk bagian lainnya */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
