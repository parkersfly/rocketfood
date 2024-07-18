import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  /* max-width: 40rem; */

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 1.4rem;

    margin-top: 0.8rem;

    border-radius: 0.8rem;

    background: ${({ theme }) => theme.COLORS.DARK_900};

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-right: 1.4rem;
    }

    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    input[type='file'] {
      display: none;
    }
  }
`
