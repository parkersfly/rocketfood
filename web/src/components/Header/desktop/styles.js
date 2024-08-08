import styled from 'styled-components'

export const NavDesktopContainer = styled.div`
  width: 100%;
  max-width: 112rem;
  display: none;
  justify-content: space-between;
  margin: 0 auto;

  .orders,
  .newOrder {
    width: 18.7rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;

    svg {
      margin-right: 1.1rem;
    }

    div {
      margin-left: 0.5rem;
    }
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .linksNavWrapper {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    li {
      list-style: none;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    gap: 2.4rem;
  }
`

export const Search = styled.div`
  width: 39%;
  max-width: 58.6rem;
  position: relative;

  div:has(input:focus) {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    height: 4.8rem;
    padding-left: 0.8rem;

    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
    gap: 1.4rem;

    input {
      width: 100%;
      background: none;
      border: none;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }

  > ul {
    width: 100%;
    max-height: 28rem;
    overflow-y: scroll;
    list-style: none;
    position: absolute;
    z-index: 5;

    li {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0 0 0.5rem 0.5rem;

      button {
        width: 100%;

        a {
          padding: 1rem;
          gap: 1rem;
          z-index: 2;

          img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            border-radius: 50%;
          }
        }
      }
    }
  }
`
