import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  max-width: 40rem;
  height: 5.6rem;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.5rem;
  border: none;

  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  > svg {
    margin-right: 0.8rem;
  }
`
