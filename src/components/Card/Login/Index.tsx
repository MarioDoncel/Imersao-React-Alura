import React, { ChangeEvent, HTMLAttributes } from 'react';
import Button from '../../Button';
import Input from '../../Input';

import { LoginContainer } from './styles';

interface ILogin extends HTMLAttributes<HTMLDivElement> {
  onInputChange: (e: ChangeEvent) => void
}

const Login: React.FC<ILogin> = ({ onInputChange }) => {
  return (
    <LoginContainer>
      <div className="text">
        <h1>Boas vindas de volta!</h1>
        <h3>Aluracard - Alura Matrix</h3>
      </div>
      <div className="action">
        <Input type={'text'} onChange={onInputChange} />
        <Button>Entrar</Button>
      </div>
    </LoginContainer>
  );
}

export default Login;