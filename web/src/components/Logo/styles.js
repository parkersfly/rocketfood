import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: max-content;

  > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.1rem;
  }

  > div {
    gap: 0.8rem;

    > strong {
      font-size: 2.2rem;
    }

    > span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media (min-width: 1280px) {
    align-items: start;

    > div {
      gap: 0;
      align-items: end;
      flex-direction: column;
    }
  }
`
