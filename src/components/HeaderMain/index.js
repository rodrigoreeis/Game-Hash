import React from 'react';
import LogoMine from '../../objects/LogoMine'
import AboutLink from '../../objects/AboutLink'
import MenuHamburger from '../../objects/MenuHamburger'
import './styles.css';

const Header = ({ onClick }) => (
  <header className="header-main">
    <LogoMine />
    <AboutLink onClick={onClick} />
    <MenuHamburger onClick={onClick} />
  </header>
)

export default Header;