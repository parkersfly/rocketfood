import styled from 'styled-components'
import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    width: 100%;
    max-width: 60rem;
    height: 7.7rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    gap: 1.2rem;
    padding: 1.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        object-fit: cover;
      }

      p {
        font-size: 1.5rem;
        font-weight: 700;

        color: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }

    > p {
      font-family: DM Sans;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  @media (min-width: ${RESIZE_WINDOW.XS}) {
    > div {
      flex-direction: row;
      gap: 1.8rem;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    > div {
      max-width: 90rem;

      > div {
        gap: 1rem;

        img {
          width: 3rem;
          height: 3rem;
        }

        p {
          font-size: 2.4rem;
          font-weight: 800;
        }
      }

      > p {
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.XL}) {
    > div {
      max-width: 112rem;
    }
  }
`
