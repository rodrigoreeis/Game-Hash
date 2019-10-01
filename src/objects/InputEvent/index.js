import React from 'react';

const InputEvent = ({ id = "", value = "", type = "text"}) => (
  <>
    <input className="input-event" id={id} type={type} value={value}/>
  </>
);

export default InputEvent;