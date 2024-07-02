import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  grid-area: content;
  padding: 2.4rem 5.6rem;

  .buttonWeb {
    display: none !important;
  }

  > button {
    background: none;
    border: none;

    font-size: 2.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;

    margin-bottom: 1.6rem;
  }

  > main {
    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .info {
    margin-top: 1.6rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    h3 {
      font-size: 2.7rem;
      font-weight: 500;
      margin-bottom: 2.4rem;
    }

    .tagsWrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2.4rem;

      margin-top: 2.4rem;

      > li {
        list-style: none;
      }
    }

    .qntdAndPrice {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      margin-top: 4.8rem;

      .count {
        gap: 1.6rem;
        button {
          background: none;
          border: none;
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
  }

  @media (min-width: 1368px) {
    padding: 2.4rem 12.3rem;

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

    .info {
      text-align: start;

      h3 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
      }
    }

    .tagsWrapper {
      justify-content: start !important;
      gap: 1.2rem !important;
    }

    .qntdAndPrice {
      justify-content: start;

      > button {
        width: max-content;
        padding: 1.2rem 2.4rem;
        font-size: 1.4rem !important;
      }
    }
  }
`
