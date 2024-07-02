import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 600px;

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
`
