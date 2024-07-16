import styled from 'styled-components'
import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;

  overflow: hidden;

  position: relative;

  .splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .splide--nav {
    margin-top: 1rem;
  }

  .splide__arrow,
  .splide__pagination {
    display: none;
    background: none;
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    max-width: 90rem;

    &::before {
      content: '';
      z-index: 2;
      width: 27.7rem;
      height: 100%;
      position: absolute;
      display: flex;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 1) 27%,
        rgba(0, 10, 15, 0.27494747899159666) 100%
      );
    }

    &::after {
      content: '';
      z-index: 2;
      width: 22.3rem;
      height: 100%;
      position: absolute;
      display: block;
      right: 0;
      top: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.27494747899159666) 27%,
        rgba(0, 10, 15, 1) 100%
      );
    }
  }

  @media (min-width: ${RESIZE_WINDOW.XL}) {
    max-width: 112rem;

    .splide__arrow {
      display: block;
      z-index: 3;
    }

    .splide__arrow svg {
      fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      width: 4rem;
      height: 4rem;
    }

    .splide__arrow--prev svg {
      transform: scaleX(1);
    }
  }
`
