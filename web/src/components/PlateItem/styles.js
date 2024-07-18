import styled from 'styled-components'

export const Container = styled.div`
  width: max-content;

  height: 3.2rem;

  background: ${({ isNew, theme }) =>
    !isNew ? theme.COLORS.LIGHT_600 : 'transparent'};
  border: ${({ isNew, theme }) =>
    !isNew ? 'none' : `1px dashed ${theme.COLORS.LIGHT_500}`};

  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > span {
    line-height: 0;
  }

  > input {
    width: 8rem;
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
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0;
  }
`
