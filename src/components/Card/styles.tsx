import styled from 'styled-components';

export const CardContainer = styled.div`
  height: clamp(300px,30vh,600px) ;
  width:clamp(400px,60vw,800px) ;
  background-color: ${({ theme }) => theme.colors.neutrals[700]};
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  border-radius: 5px;
  .picture{
    width: 40%;
    background: ${({ theme }) => theme.colors.neutrals[800]};
    border: 1px solid ${({ theme }) => theme.colors.neutrals[999]};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    .img{
      width: 90%;
    }
    img{
      border-radius: 50%;
    }
    p{
      color: #fff;
      background: ${({ theme }) => theme.colors.neutrals[900]};
      padding: 4px 10px;
      border-radius: 100px;
    }
  }
`;
