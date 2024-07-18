import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  max-width: 112rem;
  padding: 0 3.2rem;
  gap: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > button {
    width: max-content;
    display: flex;
    align-items: center;

    background: none;
    border: none;

    font-size: 1.6rem;

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: 1024px) {
    margin: 4rem auto;

    > button {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .form-input {
    width: auto;
  }

  .divider1,
  .divider2 {
    gap: 2.4rem;
  }

  .ingredientsList {
    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-bottom: 0.8rem;
    }
  }

  .ingredients {
    width: 100%;
    height: 4.8rem;
    overflow-y: auto;
    padding: 0.8rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    flex-wrap: wrap;
  }

  .description {
    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-bottom: 0.8rem;
    }
  }

  .button-wrapper {
    display: flex;
    gap: 3.2rem;

    button:first-child {
      background: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    flex-wrap: wrap;

    .dish-image {
      flex: 0.5;
    }

    .name {
      flex: 1;
    }

    .category {
      flex: 0.8;
    }

    .ingredientsList {
      width: 100%;
      flex: 1;
    }

    .price {
      flex: 0.3;
    }

    .divider1,
    .divider2 {
      width: 100%;
      flex-direction: row;
    }

    .button-wrapper {
      justify-content: end;
    }
  }
`
