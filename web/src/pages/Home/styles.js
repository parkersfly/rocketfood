import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.div`
  width: 100%;

  padding-left: 2.4rem;

  > main {
    width: 100%;
    gap: 2.4rem;

    section:first-child {
      margin-top: 6.2rem;
    }

    section:last-child {
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.MD}) {
    padding-left: 0;

    > main {
      align-items: center;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    > main {
      section:last-child {
        margin-bottom: 4.8rem;
      }
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  max-width: 112rem;
  height: 12rem;

  border-radius: 0.3rem;

  margin: 4.4rem auto 0;

  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 50rem;
    position: relative;
    margin: 0 1.6rem 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: end;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    .webImage {
      display: none;
    }

    .mobileImage {
      margin: -3rem 0 0 -3rem;
      position: absolute;
      left: -0.2rem;
      bottom: 0;
      opacity: 0.5;
    }

    .bannerTitle {
      text-align: center;
      padding: 3rem;
      position: absolute;
      z-index: 5;
    }

    h1 {
      font-size: 1.8rem;
      line-height: 125%;
      font-weight: 600;
    }

    p {
      font-size: 1.2rem;
      max-width: 27rem;
      font-family: 'Poppins', sans-serif;
      margin-top: 0.3rem;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.XS}) {
    > div {
      .bannerTitle {
        width: 58%;
        padding: 0;
        text-align: start;
      }

      .mobileImage {
        opacity: 1;
        left: 0;
      }

      h1 {
        line-height: 140%;
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    > div {
      .webImage {
        opacity: 1;
      }

      .bannerTitle {
        width: 50%;

        h1 {
          font-size: 3.2rem;
        }
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.MD}) {
    height: 26rem;
    padding: 0 8rem;

    .webImage {
      width: 50rem;
      max-width: 112rem;
      display: block !important;
      position: absolute;
      bottom: -10px;
      left: -80px;
      opacity: 0.7;
    }

    .mobileImage {
      display: none;
    }

    > div {
      width: 100%;
      max-width: 100%;
      margin: 0;

      h1 {
        font-size: 2.8rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.XL}) {
    margin-top: 16.4rem;
    padding: 0;

    .webImage {
      width: max-content;
      opacity: 1;
      margin-top: -12.4rem;
      margin-left: -9.55rem;
    }

    .mobileImage {
      display: none;
    }

    > div {
      padding-right: 1rem;

      h1 {
        font-size: 4rem;
        font-weight: 500;
        margin: 0;
      }

      p {
        font-family: Roboto;
        font-size: 1.6rem;
      }
    }
  }
`
