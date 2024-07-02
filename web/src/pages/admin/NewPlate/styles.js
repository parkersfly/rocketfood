import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const Content = styled.div`
  padding: 1rem 3.2rem 5.3rem;

  > button {
    display: flex;
    align-items: center;

    font-size: 1.6rem;

    background: none;
    border: none;

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: 1368px) {
    padding: 4rem 12.4rem;

    > button {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 2.4rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .divider1,
  .divider2 {
    gap: 2.4rem;
  }

  .price {
    .priceInput {
      height: 4.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 1.2rem 1.4rem;
      border-radius: 0.5rem;
      gap: 0.5rem;

      input {
        background: none;
        border: none;
        outline: none;

        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }
  }

  > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .ingredientsList {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    p {
      margin-bottom: 0.8rem;
    }
  }

  .ingredients {
    width: 100%;
    max-height: 10rem;
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

  @media (min-width: 1368px) {
    flex-direction: column;
    flex-wrap: wrap;

    .ingredientsList {
      width: 100%;
    }

    .divider1,
    .divider2 {
      width: 100%;
      flex-direction: row;
    }

    .saveButton {
      display: flex;
      justify-content: end;

      > button {
        width: max-content;
      }
    }
  }
`
