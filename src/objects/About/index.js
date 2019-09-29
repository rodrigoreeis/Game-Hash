import React from 'react';
import './styles.css';

import Profile from '../Profile';
import Name from '../Name';
import Description from '../Description';


const About = ({ img, name, description }) => {
  return ( 
    <article className="about">
      <Profile img={img}/>
      <Name name={name} />
      <Description description={description} />
    </article>
  );
}
 
export default About;