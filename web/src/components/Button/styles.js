import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  max-width: 40rem;
  height: 5.6rem;
  padding: 1.2rem 3.2rem;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.5rem;
  border: none;

  > svg {
    margin-right: 0.8rem;
  }
`
