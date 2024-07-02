import styled from 'styled-components'

export const Container = styled.section`
  > h3 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 2.4rem;
  }

  > div {
    width: 100%;
    gap: 1.6rem;
  }

  @media (min-width: 1024px) {
    > h3 {
      font-size: 3.2rem;
    }

    > div {
      gap: 2.7rem;
      overflow: hidden;
      justify-content: center;
    }
  }
`
