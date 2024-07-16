import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.div`
  width: 100%;
  padding: 0 5.6rem;
`

export const Content = styled.div`
  width: 100%;
  font-family: 'Poppins', sans-serif;

  padding: 2rem 0;
  margin: 1.6rem 0 3.3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.6rem;

  .buttonWeb {
    display: none !important;
  }

  > div {
    display: flex;
    align-items: center;

    > button {
      background: none;
      border: none;

      font-size: 2.4rem;
      font-weight: 500;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      display: flex;
      align-items: center;

      font-family: 'Poppins', sans-serif;
    }
  }

  > main {
    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    max-width: 112rem;
    margin: 2.4rem auto 0;
    padding: 0;
    gap: 4.2rem;

    > div {
      button {
        font-weight: 700;
      }
    }

    .buttonMobile {
      display: none !important;
    }

    .buttonWeb {
      display: flex !important;
    }

    > main {
      flex-direction: row;
      gap: 4.8rem;

      img {
        min-width: 39rem;
        height: 39rem;
        object-fit: cover;
      }
    }

    .tagsWrapper {
      justify-content: start !important;
      gap: 1.2rem !important;
    }
  }
`

export const DisheDetails = styled.div`
  width: 100%;
  margin-top: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h3 {
      font-size: 2.7rem;
      font-weight: 500;
    }

    .tagsWrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2.4rem;

      > li {
        list-style: none;
      }
    }

    button {
      height: 3.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.9rem;
      font-weight: 500;

      svg {
        width: 2.2rem;
        height: 2.2rem;
        margin-right: 0.5rem;
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    text-align: start;

    > div:first-child {
      h3 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
        font-weight: 300;
      }
    }
  }
`
