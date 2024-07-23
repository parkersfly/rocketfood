import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${({ theme }) => theme.COLORS.DARK_400};

  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &[data-menu-is-open='true'] {
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
      'header'
      'content'
      'footer';

    transform: translateX(0);
  }

  > header {
    grid-area: header;

    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    p {
      font-size: 2.1rem;
    }
  }

  .options {
    margin-top: 3.6rem;
  }

  > main {
    padding: 3.6rem 2.8rem;

    div:first-child {
      position: relative;

      > ul:has(input:focus) {
        background: red;
      }

      > ul {
        width: 100%;
        max-height: 28rem;
        overflow-y: scroll;
        list-style: none;
        position: absolute;
        z-index: 2;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.WHITE};

        li {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          border-radius: 0 0 0.5rem 0.5rem;

          > button {
            width: 100%;
          }

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

    .optionBox {
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      > button {
        height: 3.4rem;
      }

      p,
      a {
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }

  > footer {
    position: fixed;
    bottom: 0;
  }
`
