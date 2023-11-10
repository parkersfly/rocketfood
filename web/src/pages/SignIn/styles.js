import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 158px 56px 0;
  
  > div:first-child{
    margin-bottom: 73px;
  }
  
  @media(min-width: 1368px){
    flex-direction: row !important;
    padding: 0px 100px;
    justify-content: space-around;
  }
`

export const Form = styled.form`
  width: 100%;
  gap: 32px;

  > h1 {
    display: none;
  }

  @media(min-width: 1368px){
    width: 476px;
    height: max-content;
    border-radius: 16px;
    padding: 64px;
    background: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
      display: block;
    }
  }
`