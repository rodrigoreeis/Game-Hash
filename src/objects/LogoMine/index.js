import React from 'react';
import CollabCode from '../../img/logo.png';
import CollabCodeLight from '../../img/logo-light.png';

const LogoMine = ({ light = false }) => (
  <img className="logo-mine" 
    src={light ? CollabCodeLight : CollabCode} 
    alt="logo da CollabCode" 
  />
)

export default LogoMine;