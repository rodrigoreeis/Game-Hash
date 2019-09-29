import React from 'react';
import './styles.css';

import Profile from '../Profile';
import Name from '../Name';
import Description from '../Description';


const About = ({ img, name, description, children }) => {
  return ( 
    <article className="about">
      {children}
    </article>
  );
}
 
export default About;