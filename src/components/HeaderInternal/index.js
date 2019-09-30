import React from 'react';
import './styles.css';

import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';
import LogoMine from '../../objects/LogoMine';

const HeaderInternal = () => {
  return (  
    <header className="header-internal">
      <LogoMine light />
      <AboutLink className="-light" />
      <IconClose />
    </header>
  );
}
 
export default HeaderInternal; 