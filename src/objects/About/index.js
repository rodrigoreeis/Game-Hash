import React from 'react';
import './styles.css';

const About = ({ img, name, description, children }) => {
  return ( 
    <article className="about">
      {children}
    </article>
  );
}
 
export default About;