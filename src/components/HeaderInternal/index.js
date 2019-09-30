import React from 'react';

import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';
import LogoMine from '../../objects/LogoMine';

const HeaderInternal = () => {
  return (  
    <header className="header-internal">
      <AboutLink className="-light" />
      <IconClose />
      <LogoMine light />
    </header>
  );
}
 
export default HeaderInternal; 