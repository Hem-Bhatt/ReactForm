import React from 'react';

const InputField = props =>
  <div>
    <span> {props.text} </span>
    <input placeholder={props.placeholder}/>
  </div>
export default InputField;
