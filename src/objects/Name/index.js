import React from 'react';
import './styles.css';

const Name = ({ name }) => {
  return ( 
    <h3 className="name">{ name }</h3>
  );
}
 
export default Name;