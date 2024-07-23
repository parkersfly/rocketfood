import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../../styles/resizeWindow'

export const Container = styled.div``

export const Content = styled.div`
  width: 100%;
  padding: 0 3.2rem;
  max-width: 60rem;
  gap: 2.4rem;
  margin: 4rem auto;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

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
    max-width: 112rem;

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

  .divider1,
  .divider2 {
    gap: 2.4rem;
  }

  > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
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

  @media (min-width: ${RESIZE_WINDOW.LG}) {
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

    .saveButton {
      display: flex;
      justify-content: end;

      > button {
        width: max-content;
      }
    }
  }
`
