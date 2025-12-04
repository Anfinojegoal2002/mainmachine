import React from 'react';
import vectorImg from '../assets/vector.png';

const NavigationBar = () => {
  return (
    <div className="navbar-content">
      
      {/* Brand / Logo */}
      <div className="navbar-brand">
        <div className='star'>
          <img src={vectorImg} alt="Star Logo" />
        </div>
        Positivus
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li className="nav-item"><a href="#">About us</a></li>
        <li className="nav-item"><a href="#">Services</a></li>
        <li className="nav-item"><a href="#">Use Cases</a></li>
        <li className="nav-item"><a href="#">Pricing</a></li>
        <li className="nav-item"><a href="#">Blog</a></li>
      </ul>

      {/* CTA Button */}
      <div className="navbar-cta-wrapper">
        <button 
          onClick={() => console.log('CTA clicked')}
          className="navbar-cta-button"
        >
          Request a quote
        </button>
      </div>
      
    </div>
  );
};

export default NavigationBar;
