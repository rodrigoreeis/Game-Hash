import React from 'react';
import './styles.css';

const MenuHamburger = ({ onClick }) => (
  <a href="#" 
    className="menu-hamburger"
    onClick={onClick}
  >
    <span className="center">Menu</span>
  </a>
)
export default MenuHamburger;