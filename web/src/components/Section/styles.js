import styled from 'styled-components'

export const CarouselSectionContainer = styled.section`
  gap: 2.4rem;

  > h3 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
