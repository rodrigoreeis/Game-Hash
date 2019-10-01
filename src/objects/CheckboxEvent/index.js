import React from 'react';
import './styles.css';

import InputEvent from '../InputEvent';
import LabelEvent from '../LabelEvent';

const CheckBoxEvent = ({ id= "", value = "", content = ""}) => {
  return ( 
    <>
      <InputEvent id={id} value={value} type="checkbox" content={content}/>
      <LabelEvent htmlFor={id} content={content} />
    </>
  );
}
 
export default CheckBoxEvent;