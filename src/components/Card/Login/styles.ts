import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-weight: bold;
  gap: 28px;
  color: #FFF;
  .text{
    text-align: center;
    h1{
      font-size: 2.4rem;
    }
    h3{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.neutrals[300]};
    }
  }
  .action{
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 100%;
  }
`;
