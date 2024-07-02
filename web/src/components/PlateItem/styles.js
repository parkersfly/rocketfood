import styled from 'styled-components'

export const Container = styled.div`
  width: 11.8rem;
  max-width: max-content;

  height: 3.2rem;

  background: ${({ isNew, theme }) =>
    !isNew ? theme.COLORS.LIGHT_600 : 'transparent'};
  border: ${({ isNew, theme }) =>
    !isNew ? 'none' : `1px dashed ${theme.COLORS.LIGHT_500}`};

  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

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
    margin-left: 0.8rem;
  }
`
