import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 77px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 28px;
  /* grid-area: footer; */

  > div {
    display: flex;
    align-items: center;

    p {
      font-size: 15px;
      font-weight: 700;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      
      margin-left: 6px;
    }
  }

  > p {
    font-family: DM Sans;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media(min-width: 1368px){
    padding: 0 123px;
  }
`