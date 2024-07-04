import styled from 'styled-components'
import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;

  .wrapper {
    margin: 4rem auto;
  }

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
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    max-width: 90rem;
  }

  @media (min-width: ${RESIZE_WINDOW.XL}) {
    max-width: 112rem;
  }
`
