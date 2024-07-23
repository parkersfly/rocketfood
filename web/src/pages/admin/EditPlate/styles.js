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

  margin: 1.1rem 0 5.3rem;

  > button {
    width: max-content;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    position: relative;

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding-bottom: 0.5rem;

    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  h1 {
    font-weight: 500;
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

  .ingredientsList,
  .description {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
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
