import React from 'react';
import './styles.css';

const AboutUser = ({ children, className = "" }) => {
  return ( 
    <article className={`about-user ${className}`}>
      {children}
    </article>
  );
}
 
export default AboutUser;