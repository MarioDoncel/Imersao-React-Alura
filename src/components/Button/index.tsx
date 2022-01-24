import React, { ButtonHTMLAttributes, Component, ReactComponentElement } from 'react';

import { ButtonContainer } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <ButtonContainer>
      {props.children}
    </ButtonContainer>
  )
}

export default Button;