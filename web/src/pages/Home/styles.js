import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding-left: 2.4rem;

  > main {
    width: 100%;

    section {
      margin-top: 6.2rem;
    }
  }

  .main-content {
    padding-left: 2.4rem;
  }

  .inner {
    gap: 2.7rem;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  @media (min-width: 600px) {
    .main-content {
      padding: 0 5rem;
    }
  }

  @media (min-width: 1368px) {
    .content {
      > main {
        max-width: 112rem;
        margin: 0 auto;
      }
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  max-width: 112rem;
  height: 12rem;

  border-radius: 0.3rem;

  margin-top: 4.4rem;

  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    position: relative;
    margin: 0 1.6rem 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: end;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding-right: 0.8rem;

    .webImage {
      display: none;
    }

    .mobileImage {
      margin: -3rem 0 0 -3rem;
      position: absolute;
      left: 0;
      top: 0;
    }

    .bannerTitle {
      width: 57%;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      font-style: normal;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    height: 26rem;
    margin-top: 16.4rem;

    .webImage {
      display: block !important;
      margin-top: -12.4rem;
      margin-left: -9.55rem;
    }

    .mobileImage {
      display: none;
    }

    > div {
      padding-right: 1rem;

      h2 {
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
export const Section = styled.section`
  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin: 6.2rem 0 2.4rem 0;
  }

  > div {
    width: 100%;
    gap: 1.6rem;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 3.2rem;
    }

    > div {
      gap: 2.7rem;
      overflow: hidden;
      justify-content: center;
    }
  }
`
