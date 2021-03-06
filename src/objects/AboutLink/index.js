import React from 'react';
import './styles.css';

const AboutLink = ({ className = '', onClick }) => (
  <a href="#" 
    className={`about-link ${className}`}
    onClick={onClick}
    >
      Sobre
  </a>
)

export default AboutLink;
