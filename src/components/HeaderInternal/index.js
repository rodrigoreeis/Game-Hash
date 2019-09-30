import React from 'react';
import './styles.css';

import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';
import LogoMine from '../../objects/LogoMine';

const HeaderInternal = ({ onClick }) => {
  return (  
    <header className="header-internal">
      <LogoMine light />
      <AboutLink className="-light" onClick={onClick} />
      <IconClose onClick={onClick} />
    </header>
  );
}
 
export default HeaderInternal; 