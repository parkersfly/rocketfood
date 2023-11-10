import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;
  border: none;
 
  outline: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 14px;
  font-size: 16px;

  resize: none;

  &::placeholder{
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`