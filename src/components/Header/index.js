import React from 'react';
import LogoMine from '../../objects/LogoMine'
import AboutLink from '../../objects/AboutLink'
import Menu from '../../objects/Menu'
import './styles.css';

const Header = () => (
  <header className="header">
    <LogoMine />
    <AboutLink />
    <Menu />
  </header>
)

export default Header;