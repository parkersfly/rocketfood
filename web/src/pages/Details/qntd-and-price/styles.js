import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../../styles/resizeWindow'

export const QntdAndPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 30rem;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;

    p {
      font-size: 2.3rem;
      font-weight: 700;
    }

    .count {
      font-family: 'Roboto', sans-serif;

      gap: 1.6rem;
    }

    button {
      height: 3.8rem;

      svg {
        width: 2.2rem;
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.XS}) {
    > div {
      flex-direction: row;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    justify-content: start;

    > div {
      gap: 3.3rem;

      button {
        height: 4.8rem;
      }
    }
  }

  @media (min-width: 1368px) {
    justify-content: start;

    > button {
      width: max-content;
      padding: 1.2rem 2.4rem;
      font-size: 1.4rem !important;
    }
  }
`
