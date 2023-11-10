import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  max-width: 400px;
  height: 56px;
  padding: 12px 32px;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 5px;
  border: none;

  > svg {
    margin-right: 8px;
  }
`