import React from 'react';
import './styles.css';

import Input from '../Input';
import Label from '../Label';

const CheckBox = ({ id= "", value = "", content = ""}) => {
  return ( 
    <>
      <Input id={id} value={value} type="checkbox" content={content}/>
      <Label htmlFor={id} content={content} />
    </>
  );
}
 
export default CheckBox;