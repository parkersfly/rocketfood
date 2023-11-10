import styled from 'styled-components'

export const Container = styled.div`
  width: 118px;
  max-width: max-content;
  
  height: 32px;

  background: ${({ isNew, theme }) => !isNew ? theme.COLORS.LIGHT_600 : "transparent" };
  border: ${({ isNew, theme }) => !isNew ? "none" : `1px dashed ${theme.COLORS.LIGHT_500}`};

  padding: 10px 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > input {
    width: 100%;
    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    background: none;
    border: none;
  }

  > svg {
    margin-left: 8px;
  }
`