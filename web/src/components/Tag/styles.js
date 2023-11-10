import styled from 'styled-components'

export const Container = styled.span`
  width: 118px;
  max-width: max-content;
  height: 32px;
  padding: 4px 8px;

  border-radius: 5px;

  background: ${({ theme }) => theme.COLORS.DARK_1000};
`