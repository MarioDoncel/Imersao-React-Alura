import { createGlobalStyle } from 'styled-components'
import Background from '../Assets/Images/Background.jpg'

const GlobalStyle = createGlobalStyle`
:root  {
/* Establishing 'rem' in 10px - To use all font-sizes responsives */
  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  list-style-type: none;
  box-sizing: border-box;
  outline: none;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
} 


body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: url(${Background.src});
  align-items: center;
  justify-content: center;
}
`

export default GlobalStyle