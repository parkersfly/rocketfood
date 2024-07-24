import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;
  border: none;

  outline: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1.4rem;
  font-size: 1.6rem;

  resize: none;

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.WHITE};
  }

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
