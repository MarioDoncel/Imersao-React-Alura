import React, { ChangeEvent, useState } from 'react';
import Login from './Login/Index';
import Image from 'next/image'

import { CardContainer } from './styles';

const Card: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [imgSrc, setImgSrc] = useState<boolean>(false)

  const handleInputChange = (e: ChangeEvent): void => {
    const input = e.target as HTMLInputElement
    if (input.value.length > 2) {
      setImgSrc(true)
      setUsername(input.value)
    } else setImgSrc(false)
  }


  return (
    <CardContainer>
      <Login onInputChange={handleInputChange} />
      <div className="picture">
        <div className="img">
          <Image src={imgSrc ? `https://github.com/${username}.png` : 'https://via.placeholder.com/150'}
            onError={() => setImgSrc(false)}
            width="100%" height="100%" layout="responsive" alt="Profile Photo" />
        </div>
        <p>{username}</p>
      </div>
    </CardContainer>
  )
}

export default Card;