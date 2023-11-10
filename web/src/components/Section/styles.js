import styled from 'styled-components'

export const Container = styled.section`
  > h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    margin-bottom: 24px;
  }

  > div {
    width: 100%;
    gap: 16px;
  }

  @media(min-width: 1024px){
    > h3 {
      font-size: 32px;
    }

    > div {
      gap: 27px;
      overflow: hidden;
      justify-content: center;
    }
  }
`