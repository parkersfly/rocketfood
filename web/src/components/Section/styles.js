import styled from 'styled-components'
import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const CarouselSectionContainer = styled.section`
  max-width: 100%;
  gap: 2.4rem;

  > h3 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${RESIZE_WINDOW.MD}) {
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
