import styled from 'styled-components'

export const Container = styled.span`
  width: 11.8rem;
  max-width: max-content;
  height: 3.2rem;
  padding: 0.4rem 0.8rem;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.DARK_1000};
`
