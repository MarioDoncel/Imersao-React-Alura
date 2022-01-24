import styled from 'styled-components';

export const InputContainer = styled.input`
  background-color: ${({ theme }) => theme.colors.neutrals[800]};
  border: 1px solid ${({ theme }) => theme.colors.neutrals[999]};
  padding: 0.9rem ;
  color: #fff;
  border-radius: 4px;
`;
