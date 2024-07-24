import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div:has(input:focus),
  > div:has(input[type='file']:focus) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 1.4rem;

    border-radius: 0.8rem;

    background: ${({ primary, theme }) =>
      primary ? theme.COLORS.DARK_900 : theme.COLORS.DARK_800};

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-right: 1.4rem;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      box-shadow: none !important;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    input[type='file'] {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }
`
