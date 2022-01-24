import React, { ChangeEvent, useState } from 'react';
import Login from './Login/Index';
import Image from 'next/image'

import { CardContainer } from './styles';

const Card: React.FC = () => {
  const [username, setUsername] = useState<string>('')

  const handleInputChange = (e: ChangeEvent): void => {
    const input = e.target as HTMLInputElement
    setUsername(input.value)
  }
  return (
    <CardContainer>
      <Login onInputChange={handleInputChange} />
      <div className="picture">
        <div className="img">
          <Image src="https://avatars.githubusercontent.com/u/60361954?v=4" width="100%" height="100%" layout="responsive" alt="Profile Photo" />
        </div>
        <p>{username}</p>
      </div>
    </CardContainer>
  )
}

export default Card;