import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: #FFF;
  padding: 0.9rem 0;   
  border-radius :4px ;
  &:hover{
    background-color: ${({ theme }) => theme.colors.primary[300]};
  }
`;
