import React, { ChangeEvent, FormEvent, HTMLAttributes, useRef } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { useRouter } from 'next/router'

import { LoginContainer } from './styles';

interface ILogin extends HTMLAttributes<HTMLDivElement> {
  onInputChange: (e: ChangeEvent) => void
}


const Login: React.FC<ILogin> = ({ onInputChange }) => {
  const router = useRouter()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = form.nameInput.value
    router.push('/chat')
  }
  return (
    <LoginContainer>
      <div className="text">
        <h1>Boas vindas de volta!</h1>
        <h3>Aluracard - Alura Matrix</h3>
      </div>
      <form name='login' className="action" onSubmit={(e) => handleSubmit(e)}>
        <Input name='nameInput' type={'text'} onChange={onInputChange} />
        <Button >Entrar</Button>
      </form>
    </LoginContainer>
  );
}

export default Login;