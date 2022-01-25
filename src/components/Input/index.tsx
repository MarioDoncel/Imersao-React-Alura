import React, { InputHTMLAttributes, MutableRefObject } from 'react';

import { InputContainer } from './styles';


const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <InputContainer name={props.name} type={props.type} onChange={props.onChange} />
  )
}

export default Input;