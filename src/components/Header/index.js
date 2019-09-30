import React from 'react';
import LogoMine from '../../objects/LogoMine'
import AboutLink from '../../objects/AboutLink'
import Menu from '../../objects/Menu'
import './styles.css';

const Header = ({ onClick }) => (
  <header className="header">
    <LogoMine />
    <AboutLink onClick={onClick} />
    <Menu onClick={onClick} />
  </header>
)

export default Header;